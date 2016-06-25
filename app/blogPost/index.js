'use strict';

angular.module('myApp.blogPost', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {

        $routeProvider
            .when('/list', {
                templateUrl: 'blogPost/list/list.html',
                controller: 'listController'
            })
            .when('/create', {
                templateUrl: 'blogPost/create/create.html',
                controller: 'createController'
            })
            .when('/update/:id', {
                templateUrl: 'blogPost/update/update.html',
                controller: 'updateController'
            })
        ;

    }]);