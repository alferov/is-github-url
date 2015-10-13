'use strict';
var chai = require('chai');
var expect = chai.expect;
var isGithubUrl = require('../index.js');

var validUrls = [
  'https://github.com/facebook/react',
  'git@github.com:facebook/react.git',
  'https://github.com/facebook/react',
  'https://github.com/facebook/react/tree/0.14-stable',
  'https://github.com/facebook/react/releases/tag/v0.14.0',
  'github.com/facebook/react',
  'www.github.com/facebook/react'
];

var invalidUrls = [
  'google.com',
  'https://google.com',
  'https://hello.github.com',
  'unknown://github.com'
];

describe('is-github-url', function() {

  validUrls.forEach(function(url) {
    it('URL' + ' - ' + url + ' should be valid', function () {
      expect(isGithubUrl(url)).to.be.true;
    });
  });

  invalidUrls.forEach(function(url) {
    it('URL' + ' - ' + url + ' should be invalid', function () {
      expect(isGithubUrl(url)).to.be.false;
    });
  });

});
