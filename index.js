'use strict';

/**
 * isGithubUrl
 *
 * @name isGithubUrl
 * @function
 * @return
 */

module.exports = function isGithubUrl(url, options) {
  options = options || {};
  var domain = options.includeGhPages ? '(com|io)' : 'com';
  var pattern = '(?:git|ssh|https?|git@[\\w\\.]+)?(?:\\:\\/\\/)?github.' + domain + '[\\w\\.@:\\/~_-]+(?:\\.git)?$';
  var re = new RegExp(pattern);

  return re.test(url);
};
