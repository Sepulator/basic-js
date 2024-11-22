const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array<string>} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  domains.forEach((domain) => {
    const words = domain.split('.');
    let dns = '';
    words.reverse().forEach((word) => {
      dns = dns + '.' + word;
      if (!result[dns]) {
        result[dns] = 1;
      } else {
        result[dns] += 1;
      }
    });
  });

  return result;
}

module.exports = {
  getDNSStats
};
