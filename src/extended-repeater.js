/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

//  repeatTimes
//    sets the number of repetitions of the str;
//  separator
//    is a string separating repetitions of the str;
//  addition
//    is an additional string that will be added to each repetition of the str;
//  additionRepeatTimes
//    sets the number of repetitions of the addition;
//  additionSeparator
//    is a string separating repetitions of the addition.

function repeater(
  str,
  {
    repeatTimes = 1,
    separator,
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator,
  }
) {
  addition = String(addition);
  str = String(str);

  let result = "";

  const generateAddition = () => {
    let add = "";

    for (let i = 1; i <= additionRepeatTimes; i += 1) {
      const addSep =
        additionRepeatTimes > 1 && i < additionRepeatTimes
          ? additionSeparator || "|"
          : "";

      add += `${addition}${addSep}`;
    }

    return add;
  };

  if (repeatTimes || addition) {
    for (let i = 1; i <= repeatTimes; i += 1) {
      const add = addition ? generateAddition() : "";
      const sep = i < repeatTimes ? separator || "+" : "";

      result += `${str}${add}${sep}`;
    }
  }

  return result || str;
}

module.exports = {
  repeater,
};
