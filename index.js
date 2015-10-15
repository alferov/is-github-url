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
 *  - `includeGhPages` (Boolean): Add github.io domain to
 * the matching pattern
 *
 * @return {Boolean} Result of operation
 */

module.exports = function isGithubUrl(url, options) {
  options = options || {};
  var strict = options.strict ? '' : '?';

  var pattern = '(?:git|ssh|https?|git@)(?:\\:\\/\\/)?github.com[\\w\\.@:\\/~_-]+(?:\\.git)'
  + strict
  + '(?:\\/?|\\#[\\d\\w\\.\\-_]+?)$';
  var re = new RegExp(pattern);
  return re.test(url);
};
