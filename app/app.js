'use strict';

// Declare app level module which depends on views, and components
angular.module('weatherReportApp', [
  'ngRoute',
  'weatherReportApp.forecast'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  //$locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/forecast'});
}]);
