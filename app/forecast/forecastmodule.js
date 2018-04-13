'use strict';

angular.module('weatherReportApp.forecast', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/forecast', {
    templateUrl: 'forecast/forecast.html',
    controller: 'forecastCtrl'
  });
}])

