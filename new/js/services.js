/*global angular*/
angular.module('pretotypingApp.services', []);

pretotypingApp.factory('dataApi', function dataApi($http, $q, $routeParams) {
    // Use strict for more strict javascript rules
    'use strict';

    // ------------------------------------------------------------------------------------------------------ //
    // Get the data from the JSON file - Located in data/data.json
    // ------------------------------------------------------------------------------------------------------ //

    //get lang route for data
    var lg=$routeParams.lang;
    // console.log('lg'+lg);

    function getData() {
      return ($http.get('data/data_'+lg+'.json').then(handleSuccess, handleError));
    }

    function getImg() {
      return ($http.get('data/img_alt.json').then(handleSuccess, handleError));
    }

    function getLang() {
      return ($http.get('data/lang.json').then(handleSuccess, handleError));
    }

    // ------------------------------------------------------------------------------------------------------ //
    // This function is purely for logging whether the data was succesfully retrieved from the API call.
    // ------------------------------------------------------------------------------------------------------ //
    function handleSuccess(response){
	    return response.data;
	  }

    function handleError(response) {
      if (!angular.isObject(response.data) || !response.data.message) {
        return ($q.reject("An unknown error occured"));
      }
      return ($q.reject(response.data.message));
    }

    // ------------------------------------------------------------------------------------------------------ //
    // routeParams is used to creating a parameter for routing
    // ------------------------------------------------------------------------------------------------------ //
    
    var getRouteParams = function () {
      return $routeParams;
    }

    // Return all the data from the functions.
    return ({
        getData: getData,
        getImg: getImg,
        getLang: getLang,
        getRouteParams: getRouteParams
    });
});
