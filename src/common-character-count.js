/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const s1Dub = {};
  const s2Dub = {};
  let commons = 0;

  const findDubs = (str, obj) => {
    for (const el of str) {
      if (obj[el]) {
        obj[el] += 1;
      } else {
        obj[el] = 1;
      }
    }
  };

  findDubs(s1, s1Dub);
  findDubs(s2, s2Dub);

  for (const key in s1Dub) {
    if (s2Dub[key]) {
      commons += s1Dub[key] <= s2Dub[key] ? s1Dub[key] : s2Dub[key];
    }
  }

  return commons;
}

module.exports = {
  getCommonCharacterCount,
};
