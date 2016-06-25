'use strict';

angular.module('myApp.blogPost')

.controller('listController', ['$scope', 'Api', function($scope, Api) {

  $scope.blogPosts = [];

  Api.getAll()
      .then(function (result) {
        console.log('result', result);
        $scope.blogPosts = result.data;
      }, function (error) {
        console.log('error', error);
      })

}]);