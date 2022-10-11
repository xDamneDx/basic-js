/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */

function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }

  try {
    const _ = date.getTime();
    const month = date.getMonth();

    if (month < 2 || month === 11) {
      return "winter";
    } else if (month < 5) {
      return "spring";
    } else if (month < 8) {
      return "summer";
    } else {
      return "fall";
    }
  } catch (_) {
    throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason,
};
