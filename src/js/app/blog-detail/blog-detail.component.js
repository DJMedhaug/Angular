/**
 * Created by danamedhaug on 9/28/16.
 */
'use strict';

angular.module('blogDetail').
    component('blogDetail', {
        templateUrl: '/templates/blog-detail.html',
        controller: function($routeParams, $scope){
            var blogItems = [
                {title: "This is Title 1", id: 1, description: "Title 1 p tag.", publishDate: "10-18-1977"},
                {title: "This is Title 2", id: 2, description: "Title 2 p tag."},
                {title: "This is Title 3", id: 3, description: "Title 3 p tag."},
                {title: "This is Title 4", id: 4, description: "Title 4 p tag."},
            ]


            //console.log($routeParams)
            $scope.title = "Blog " + $routeParams.id
            $scope.notFound = true
            angular.forEach(blogItems, function(post) {
                if(post.id == $routeParams.id){
                    $scope.notFound = false
                    $scope.post = post
                }
                console.log(post)

            })

            if ($scope.notFound){
                console.log("Not Found")
            }
    }
});
