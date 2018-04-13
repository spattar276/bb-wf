angular.module('weatherReportApp.forecast')
    .factory('restService', ['$http', restService]);
    function restService($http) {

       var getCities =  function() {
           return $http({
                method: 'GET',
                url: '/data/city.listmin.json'
            });
       };
       var getCityDetails = function(cityID){
           var url = 'http://samples.openweathermap.org/data/2.5/forecast?id='+cityID+'&appid=7d9d4e9924c51e63759d7674cbd6fd46';
           return $http ({
               method: 'GET',
               url: url
           });

       };

        return{
            getCities: getCities,
            getCityDetails: getCityDetails
        };



    }