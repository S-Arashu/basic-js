const { NotImplementedError } = require("../lib");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
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
  let countDom = {};

  domains.forEach((string) => {
    let domainsArr = string.split(",").map((domain) => domain.trim());

    domainsArr.forEach((dom) => {
      let subdomains = dom.split(".");

      let subdomain = "";
      for (let i = subdomains.length - 1; i >= 0; i--) {
        if (subdomain == "") {
          subdomain = "." + subdomains[i] + subdomain;
        } else {
          subdomain = subdomain + "." + subdomains[i];
        }

        if (countDom[subdomain]) {
          countDom[subdomain]++;
        } else {
          countDom[subdomain] = 1;
        }
      }
    });
  });

  return countDom;
}

module.exports = {
  getDNSStats,
};
