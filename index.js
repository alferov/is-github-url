'use strict';

/**
 * isGithubUrl
 *
 * @name isGithubUrl
 * @function
 * @return
 */

module.exports = function isGithubUrl(url) {
  var pattern = /(?:git|ssh|https?|git@[\w\.]+)?(?:\:\/\/)?github.com[\w\.@:\/~_-]+(?:\.git)?$/;
  return pattern.test(url);
};
