/*global angular*/
angular.module('pretotypingApp.controllers', []);

pretotypingApp.controller('HomeCtrl', function ($scope, dataApi, $routeParams) {
    'use strict';

    // ------------------------------------------------------------------------------------------------------ //
    // Create a name for the view to show as the title
    // ------------------------------------------------------------------------------------------------------ //
    // $state.reload();

    $scope.viewname = 'Pretotyping';

    // ------------------------------------------------------------------------------------------------------ //
    // Set the stateparams
    // ------------------------------------------------------------------------------------------------------ //
    $scope.id = $routeParams.id;
    $scope.lang = $routeParams.lang;

 
    // ------------------------------------------------------------------------------------------------------ //
    // The API call to get the data from the JSON file
    // ------------------------------------------------------------------------------------------------------ //
    // $scope.item="";
    dataApi.getData().then(function (succ) {
      $scope.items = succ;
      // console.log($scope.items);
    }, function(err) {
      console.log('Error: ', err);
    });

    //get the traduction
    dataApi.getLang().then(function (succ) {
      $scope.langs = succ;
    }, function(err) {
      console.log('Error: ', err);
    });


});


pretotypingApp.controller('LangCtrl', function ($scope, $route, $routeParams) {
    'use strict';

    // ------------------------------------------------------------------------------------------------------ //
    // The view name and the stateParams definition
    // ------------------------------------------------------------------------------------------------------ //
    // $scope.$route = $route;
    // $scope.$location = $location;
    $scope.reloadRoute = function() {
      $state.reload();};
    $scope.$routeParams = $routeParams;
    // console.log($scope.$routeParams);




});


pretotypingApp.controller('ItemCtrl', function ($scope, dataApi, $routeParams) {

  // Create a name for the view to show as the title
    $scope.viewname = 'Items';

    // The routeParams is defined in the Services.js and defined in the scope here.
    $scope.id = $routeParams.id;
    $scope.lang = $routeParams.lang;
    // $scope.SkipValidation = function(value) {
    //   return $sce.trustAsHtml(value);
    // };
    // ------------------------------------------------------------------------------------------------------ //
    // The API call to get the data from the JSON file
    // ------------------------------------------------------------------------------------------------------ //
    dataApi.getData().then(function (succ) {

      $scope.items = succ;

    }, function(err) {
      console.log('Error: ', err);
    });

    //get image
    dataApi.getImg().then(function (succ)
    {

      $scope.images = succ;
      // console.log($scope.images);

    }, function(err) {
      console.log('Error: ', err);
    });
    // console.log('id'+$scope.id);

    //get the traduction
    dataApi.getLang().then(function (succ) {
      $scope.langs = succ;
    }, function(err) {
      console.log('Error: ', err);
    });

});