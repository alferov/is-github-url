'use strict';
var chai = require('chai');
var expect = chai.expect;
var isGithubUrl = require('../index.js');
var options;

var userUrls = [
  'https://github.com/facebook',
  'https://github.com/facebook/'
];

var plainGhURLs = [
  'https://github.com/'
];

var repoUrls = [
  'https://github.com/facebook/react',
  'https://github.com/facebook/react',
  'https://github.com/facebook/_re.act/'
];

var expandedUrls = [
  'https://github.com/facebook/react/tree/0.14-stable',
  'https://github.com/facebook/react/releases/tag/v0.14.0',
  'https://github.com/alferov/awesome-gulp/blob/master/.gitignore#L2',
  'https://github.com/alferov/is-github-url/pulls?q=is%3Apr+is%3Aclosed'
];

var cloningUrls = [
  'git://github.com/facebook/react.git#gh-pages',
  'git@github.com:facebook/react.git',
  // 'git@github.com:facebook/react',
  'https://github.com/facebook/react.git',
  // 'https://github.com/facebook/react',
  'git://github.com:user/some_project.git.git'
];

var invalidUrls = [
  'github.com/',
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
  'git@github.com:facebook/react/facebook.git/',
  'https://github.com/faceb@ok',
  'https://github.com/face_book',
  'https://github.com:alferov/awesome-gulp#gh-pages/',
  'https://github.com/facebook/react/.git'
];

describe('is-github-url', function() {
  describe('with a standart set of options', function() {

    plainGhURLs.forEach(function(url) {
      it('URL' + ' - ' + url + ' should be valid', function() {
        expect(isGithubUrl(url)).to.be.true;
      });
    });

    repoUrls.forEach(function(url) {
      it('URL' + ' - ' + url + ' should be valid', function() {
        expect(isGithubUrl(url)).to.be.true;
      });
    });

    expandedUrls.forEach(function(url) {
      it('URL' + ' - ' + url + ' should be valid', function() {
        expect(isGithubUrl(url)).to.be.true;
      });
    });

    userUrls.forEach(function(url) {
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

    plainGhURLs.forEach(function(url) {
      it('URL' + ' - ' + url + ' should be invalid', function() {
        expect(isGithubUrl(url, options)).to.be.false;
      });
    });

    repoUrls.forEach(function(url) {
      it('URL' + ' - ' + url + ' should be invalid', function() {
        expect(isGithubUrl(url, options)).to.be.false;
      });
    });

    expandedUrls.forEach(function(url) {
      it('URL' + ' - ' + url + ' should be invalid', function() {
        expect(isGithubUrl(url, options)).to.be.false;
      });
    });

    userUrls.forEach(function(url) {
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

  describe('with enabled repository mode', function() {

    before(function() {
      options = { repository: true };
    });

    plainGhURLs.forEach(function(url) {
      it('URL' + ' - ' + url + ' should be invalid', function() {
        expect(isGithubUrl(url, options)).to.be.false;
      });
    });

    repoUrls.forEach(function(url) {
      it('URL' + ' - ' + url + ' should be valid', function() {
        expect(isGithubUrl(url, options)).to.be.true;
      });
    });

    expandedUrls.forEach(function(url) {
      it('URL' + ' - ' + url + ' should be invalid', function() {
        expect(isGithubUrl(url, options)).to.be.false;
      });
    });

    userUrls.forEach(function(url) {
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
