(function() {
    'use strict';
    /* jshint mocha: true */
    /* global browser, element, by */
    var chai = require('chai');
    var expect = chai.expect;
    var chaiAsPromised = require('chai-as-promised');
    chai.use(chaiAsPromised);

    var url = 'http://localhost:3000/public/chapter1/protractor/index.html';

    beforeEach(function() {
        browser.get(url);
    });

    describe('hello world app', function() {
        it('should have a title', function() {
            browser.getTitle().then(function(title) {
                expect(title).to.equal('Hello World');
            });
        });
    });

    describe('name fields', function() {
        it('should be filled out and editable', function() {
            var h1 = element.all(by.css('h1')).first();
            var fname = element.all(by.tagName('input')).first();
            var lname = element.all(by.tagName('input')).get(1);
            expect(h1.getText()).to.eventually.equal('Hello Jane Doe!');
            expect(fname.getAttribute('value')).to.eventually.equal('Jane');
            expect(lname.getAttribute('value')).to.eventually.equal('Doe');

            fname.clear().sendKeys('John');
            lname.clear().sendKeys('Smith');

            expect(h1.getText()).to.eventually.equal('Hello John Smith!');
            expect(fname.getAttribute('value')).to.eventually.equal('John');
            expect(lname.getAttribute('value')).to.eventually.equal('Smith');
        });
    });
})();
