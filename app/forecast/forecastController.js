angular.module('weatherReportApp.forecast')
    .controller('forecastCtrl', ['$http', '$scope', 'restService', function ($http, $scope, restService) {

        restService.getCities().then(function (response) {
            $scope.cityList = response.data;
            $scope.cityListCopied = angular.copy( $scope.cityList);

        });

        $scope.callSearchCity = function(){
            $scope.cityList  = $scope.cityListCopied.map(function(city){
                if(city.name  === $scope.searchCityName) {
                   restService.getCityDetails(city.id).then(function(res){
                       for (var j=0; j< res.data.list.length; j++){
                           var timeString = res.data.list[j].dt_txt.split(' ');
                           if(timeString[1] ==="00:00:00" ){
                               city.timeAt00 = res.data.list[j].main.temp;
                           }
                           if(timeString[1] ==="06:00:00" ){
                               city.timeAt06 = res.data.list[j].main.temp;
                           }
                           if(timeString[1] ==="18:00:00" ){
                               city.timeAt18 = res.data.list[j].main.temp;
                           }
                           if(timeString[1] ==="24:00:00" ){
                               city.timeAt24 = res.data.list[j].main.temp;
                           }
                       }

                   });

               }
               return city;

            });
        };



        $scope.getCityDetails =function(){
            $scope.cityList
        }



    }]);