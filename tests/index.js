//Setting test global variables
const sinon = require('sinon');

global.spy = sinon.spy;
global.stub = sinon.stub;
global.chai = require("chai");
const sinonChai = require("sinon-chai");
chai.use(sinonChai);
global.expect = chai.expect;
global.assert = chai.assert;

const window = document.defaultView;
const cookieLib = require('js-cookie');

const testEnv = {
  HOST: 'http://api.checkout.test',
  cookie: {
    mock(name, val) {
      cookieLib.set(name, val);
    },
    remove(name) {
      cookieLib.remove(name);
    }
  }
};

window.testEnv = testEnv;
global.testEnv = testEnv;
global.document = document;
global.window = window;
global.$ = require('jquery');

global.fixtureUtil = require('../src/test/js/lib/fixture-util');
global.pageObjects = require('../src/test/js/lib/page-objects/page-objects.js');

//todo: Refactor of lang/siteObj so this siteObj global can be removed
global.siteObj = {defaultLocale: "NOT-A-LOCALE"};

global.window.Klarna = {Terms: {Invoice: spy(), Consent: spy()}};


//Searching for test files and export it for webpack
const context = require.context('../src/main/webapp/resources/js/v2/address-fields', true, /.+\.test\.js?$/)
context.keys().forEach(context);
module.exports = context;