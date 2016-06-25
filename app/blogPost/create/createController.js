'use strict';

angular.module('myApp.blogPost')

    .controller('createController', ['$scope', 'Api', '$window', function($scope, Api, $window) {

        $scope.blogPost = {};

        $scope.create = function (blogPost) {

            Api.post(blogPost)
                .then(function (result) {
                    console.log('result', result);
                    $window.location.href = '#!list';
                }, function (error) {
                    console.log('error', error);
                })
        };
    }]);