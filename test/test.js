'use strict';
var chai = require('chai');
var expect = chai.expect;
var isGithubUrl = require('../index.js');
var options;

var urls = [
  'https://github.com/facebook/react',
  'https://github.com/facebook',
  'https://github.com/facebook/react/tree/0.14-stable',
  'https://github.com/facebook/react/releases/tag/v0.14.0'
];

var cloningUrls = [
  'git://github.com/facebook/react.git#gh-pages',
  'git@github.com:facebook/react.git',
  'https://github.com/facebook/react.git',
  'git://github.com:user/some_project.git.git'
];

var invalidUrls = [
  'github.com/facebook/react',
  'www.github.com/facebook/react',
  'google.com',
  'https://google.com',
  'https://hello.github.com',
  'unknown://github.com',
  'http://facebook.github.io/',
  'git@github.com:facebook/react.git/foo',
  'git@github.com:user/some_project.gitfoo',
  'git://github.com:user/some_project.gitfoo',
  'git://github.com:user/some_project',
  'git@github.com:facebook/react/facebook.git',
  'https://github.com/faceb@ok'
];

describe('is-github-url', function() {
  describe('with a standart set of options', function() {

    urls.forEach(function(url) {
      it('URL' + ' - ' + url + ' should be valid', function() {
        expect(isGithubUrl(url)).to.be.true;
      });
    });

    cloningUrls.forEach(function(url) {
      it('URL' + ' - ' + url + ' should be valid', function() {
        expect(isGithubUrl(url)).to.be.true;
      });
    });

    invalidUrls.forEach(function(url) {
      it('URL' + ' - ' + url + ' should be invalid', function() {
        expect(isGithubUrl(url)).to.be.false;
      });
    });

  });

  describe('with enabled strict mode', function() {

    before(function() {
      options = { strict: true };
    });

    urls.forEach(function(url) {
      it('URL' + ' - ' + url + ' should be invalid', function() {
        expect(isGithubUrl(url, options)).to.be.false;
      });
    });

    cloningUrls.forEach(function(url) {
      it('URL' + ' - ' + url + ' should be valid', function() {
        expect(isGithubUrl(url, options)).to.be.true;
      });
    });

    invalidUrls.forEach(function(url) {
      it('URL' + ' - ' + url + ' should be invalid', function() {
        expect(isGithubUrl(url, options)).to.be.false;
      });
    });

  });
});
