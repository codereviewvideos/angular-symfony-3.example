'use strict';

angular.module('myApp.blogPost')

.controller('listController', ['$scope', 'Api', '$filter', function($scope, Api, $filter) {

  $scope.blogPosts = [];
    $scope.totalItems = 1;
    $scope.totalPages = 1;
    $scope.currentPage = 1;
    $scope.itemsPerPage = 10;
    $scope.filter = '';
    $scope.propertyName = null;
    $scope.reverse = false;


    $scope.pageChanged = function () {
        console.log('called page changed', $scope.currentPage);
        getBlogPosts($scope.currentPage, $scope.itemsPerPage, $scope.filter, $scope.propertyName, reversedAsString($scope.reverse));
    };

    $scope.$watch('filter', function(newValue, oldValue) {
        console.log('filter changes', newValue, oldValue); // not used, just for demonstration
        getBlogPosts(1, $scope.itemsPerPage, $scope.filter, $scope.propertyName, reversedAsString($scope.reverse));
    });

    $scope.$watch('itemsPerPage', function(newValue, oldValue) {
        console.log('limit changes', newValue, oldValue); // not used, just for demonstration
        getBlogPosts($scope.currentPage, $scope.itemsPerPage, $scope.filter, $scope.propertyName, reversedAsString($scope.reverse));
    });

    $scope.sortBy = function (propertyName) {
        $scope.propertyName = propertyName;
        $scope.reverse = !$scope.reverse;
        getBlogPosts($scope.currentPage, $scope.itemsPerPage, $scope.filter, $scope.propertyName, reversedAsString($scope.reverse));
    };

    var reversedAsString = function (bool) {
        return bool === true ? 'asc' : 'desc';
    };

    $scope.remove = function (id) {
        Api.remove(id)
            .then(function (result) {
                console.log('result', result);
                $scope.blogPosts = $filter('filter')($scope.blogPosts, function (value, index, array) {
                    return value.id !== id;
                });
                //$scope.blogPosts = result.data;
            }, function (error) {
                console.log('error', error);
            });
    };

    var getBlogPosts = function (page, offset, filter, sortBy, direction) {
        Api.getAll(page, offset, filter, sortBy, direction)
            .then(function (result) {

                console.log('result', result);
                $scope.blogPosts = result.data.items;
                $scope.totalItems = result.data.totalCount;
                $scope.currentPage = result.data.currentPageNumber;

            }, function (error) {
                console.log('error', error);
            });
    };


    getBlogPosts(1, $scope.itemsPerPage, $scope.filter);

}]);