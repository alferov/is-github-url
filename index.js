'use strict';

/**
 * isGithubUrl
 * Check if a passed string is a valid GitHub URL
 *
 * @name isGithubUrl
 * @function
 *
 * @param {String} url A string to be validated
 * @param {Object} options An object containing the following fields:
 *  - `strict` (Boolean): Match only URLs ending with .git
 *
 * @return {Boolean} Result of validation
 */

// Switch to strict mode automatically if the following pattern matches passed
// string
var strictRequired = function(string) {
  return /git(@|:)|\.git/.test(string);
};

module.exports = function isGithubUrl(url, options) {
  options = options || {};

  var isStrict = options.strict || strictRequired(url);
  var strictPattern = isStrict
    ? '\/[\\w\\.-]+?\\.git(?:\\/?|\\#[\\d\\w\\.\\-_]+?)$'
    : '\\/[\\w\\.\\#\\/-]+$';

  var pattern = '(?:git|https?|git@)(?:\\:\\/\\/)?github.com[/|:][\\w\\.-]+?'
    + strictPattern;

  var re = new RegExp(pattern);
  return re.test(url);
};
