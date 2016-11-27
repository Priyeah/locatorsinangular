//Add locators Demo
describe('Banking App Login', function () {


    it('Load Home Page using URL', function () {

         browser.driver.manage().window().maximize();
         browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');

    });


    it('Click Customer and Select from the DropDown', function () {
          var e1 = element(by.css('.btn.btn-primary.btn-lg'));
          e1.click();
          element.all(by.repeater('cust in Customers')).then(function (item) {

            item[2].click();

        })
        browser.sleep(2000);




    });


    it('Click Login and Add Balance and Verify', function () {
        element(by.buttonText('Login')).click();



    });


});




