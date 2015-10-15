'use strict';

/**
 * isGithubUrl
 * Validate whether a passed string is a valid GitHub URL
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

module.exports = function isGithubUrl(url, options) {
  options = options || {};
  // Switch to strict mode automatically if the string contains the following
  // parts:
  var requireStrict = /git(@|:)|\.git/.test(url);
  var strict = options.strict || requireStrict;

  var cloning = strict ? '\\.git(?:\\/?|\\#[\\d\\w\\.\\-_]+?)$' : '';

  var pattern = '(?:git|https?|git@)(?:\\:\\/\\/)?github.com[\\w\\.@:\\/~_-]+'
    + cloning;

  var re = new RegExp(pattern);
  return re.test(url);
};
