'use strict';

angular.module('blogList').
    component('blogList', {
        templateUrl: '/templates/blog-list.html',
        controller: function($routeParams, $scope){
            var blogItems = [
                {title: "This Title 1", id: 1, description: "Title 1", publishDate: "10-18-1977"},
                {title: "This Title 2", id: 2, description: "Title 2"},
                {title: "This Title 3", id: 3, description: "Title 3"},
                {title: "This Title 4", id: 4, description: "Title 4"},
            ]

            $scope.items = blogItems;




            $scope.title = 'Hi there'
            $scope.clicks = 0
            $scope.someClickTest = function(){
            console.log("clicked")
            $scope.clicks += 1
            $scope.title = 'Clicked ' + $scope.clicks + ' times'
            }
        }
    });

    // controller('BlogListController', function($scope){
    //     console.log("hello")
    //     $scope.title = 'Hi there'
    //     $scope.clicks = 0
    //     $scope.someClickTest = function(){
    //         console.log("clicked")
    //         $scope.clicks += 1
    //         $scope.title = 'Clicked ' + $scope.clicks + ' times'
    //     }
    // });

    // compontent('blogList');