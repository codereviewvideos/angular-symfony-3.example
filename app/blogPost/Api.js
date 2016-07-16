'use strict';

angular.module('myApp.blogPost')

    .factory('Api', [
        '$http',
        function ($http) {

            var ROOT_URL = 'http://api.symfony-3.dev/app_dev.php/posts';

            function get(id) {
                return $http.get(ROOT_URL + '/' + id);
            }

            function getAll(page, offset, filter, sort, direction) {
                return $http({
                    url: ROOT_URL,
                    method: 'GET',
                    params: {
                        page: page || 1,
                        limit: offset || 10,
                        filter: filter || '',
                        sort: sort || '',
                        direction: direction || ''
                    }
                });
            }

            function post(blogPost) {
                return $http.post(ROOT_URL, blogPost);
            }

            function put(id, data) {
                return $http.put(ROOT_URL + '/' + id, data);
            }

            function remove(id) {
                return $http.delete(ROOT_URL + '/' + id);
            }

            return {
                get: get,
                getAll: getAll,
                post: post,
                put: put,
                remove: remove
            }

        }
    ]);