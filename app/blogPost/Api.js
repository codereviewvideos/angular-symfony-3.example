'use strict';

angular.module('myApp.blogPost')

    .factory('Api', [
        '$http',
        function ($http) {

            var ROOT_URL = 'http://api.symfony-3.dev/app_dev.php/posts';

            function getAll() {
                return $http.get(ROOT_URL);
            }

            return {
                getAll: getAll
            }

        }
    ]);