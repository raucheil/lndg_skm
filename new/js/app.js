// Ionic App
var pretotypingApp = angular.module('pretotypingApp', ['ngRoute', 'pretotypingApp.controllers', 'pretotypingApp.services','ngSanitize']);

pretotypingApp.config(function ($routeProvider) {

    
    $routeProvider.
    when('/:lang', {
        templateUrl: 'views/home.html',            
        // templateUrl:'views/home.html',
        controller: 'HomeCtrl'
    }).
    when('/:lang/items/:id', {
        templateUrl: 'views/item.html',
        controller: 'ItemCtrl'
    }).
    when('/category', {
        templateUrl: 'views/category.html',
        controller: 'CategoryCtrl'
    }).
    when('/about', {
        templateUrl: 'about.html',
        controller: 'AboutCtrl'
    }).
    when('/', {
        redirectTo: '/it'
      });
    

    // $locationProvider.html5Mode(true);
});
