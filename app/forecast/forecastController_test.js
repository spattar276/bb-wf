describe('weatherReportApp.forecast module', function(){
  beforeEach(module('weatherReportApp.forecast'));
  describe('home controller should be ',function(){

    var forecastCtrl, $scope, restService;

    beforeEach(inject(function(_$controller_, _$rootScope_, _restService_) {
      $scope = _$rootScope_.$new();
      forecastCtrl = _$controller_('forecastCtrl', {
        $scope: $scope
      });
      restService = _restService_;
    }));

    it('forecast controller should be', function(){
      expect(forecastCtrl).toBeDefined();

    });

    it('forecast controller should be', function(){
      expect(forecastCtrl).toBeDefined();

    });
  });
});