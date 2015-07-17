// @author Andrey Bodoev
// @date 17 July 2015
// https://www.reddit.com/r/dailyprogrammer/comments/3aqvjn/20150622_challenge_220_easy_mangling_sentences/

var exports = module.exports = {};

exports.mangleSentence = function mangleSentence(text) {
  var self = this;
  var array = text.split(' ');
  var result = [];

  for (var i = 0; i < array.length; i++) {
    result.push(self.mangleWord(array[i], i));
  }

  return result.join(' ');
}

exports.mangleWord = function mangleWord(str, count) {
  var hasUpperCase = /[A-Z]/.test(str[0]);

  var regex = /\.|\,|\'|-/,
      regexIndex = -1,
      char = '';

  if (regex.test(str)) {
    regexIndex = str.search(regex);
    char = str.charAt(regexIndex);
    str = str.replace(regex, '');
  }

  str = str.toLowerCase().split('').sort().join('');

  if (regexIndex !== -1) {
    // $1 + \' + $2
    var $1 = str.substr(0, regexIndex);
    var $2 = str.substr(regexIndex, str.length);
    str = $1 + char + $2;
  }

  if (hasUpperCase) {
    var replaceChar = str[0].toUpperCase();
    str = str.replace(/(\w)?/i, replaceChar);
  }

  return str;
}
