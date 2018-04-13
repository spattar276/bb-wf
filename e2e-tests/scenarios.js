'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('Weather Report App', function() {


  it('should automatically redirect to /forecast when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/forecast");
  });


  describe('weather forcasting', function() {

    beforeEach(function() {
      browser.get('index.html#/forecast');
    });


    it('should render forecast when user navigates to /forecast', function() {
      expect(element.all(by.css('.ny-logo a')).first().getText()).
        toMatch(/Weather Forecasting/);
    });

    it('should be able to display list of the cities', function() {
      expect(element.all(by.css('.w-table-container tbody')).first().getText()).toBeDefined();

    });


  });



});
