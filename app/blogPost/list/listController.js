'use strict';

angular.module('myApp.blogPost')

.controller('listController', ['$scope', 'Api', '$filter', function($scope, Api, $filter) {

  $scope.blogPosts = [];

  Api.getAll()
      .then(function (result) {
        console.log('result', result);
        $scope.blogPosts = result.data;
      }, function (error) {
        console.log('error', error);
      });


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
    }

}]);