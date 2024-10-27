const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
   let arr = [];
   for (let i = 0; i < expr.length; i += 10) {
    let letter = expr.substring(i, (i + 10));
    let ind = letter.indexOf(1);
    if (ind > 0) {
      letter = letter.substring(ind);
    }
    let word = letter.replaceAll('10', '.');
    let word1 = word.replaceAll('11', '-');
    let word2 = word1.replace('**********', ' ');
    
    arr.push(word2);
   }
   let morz = [];
   for (let el = 0; el < arr.length; el++) {
    if (arr[el] === ' ') {
      morz.push(arr[el]);
    } else {
     let str = MORSE_TABLE[arr[el]];
      morz.push(str);
    }
   }
  let phrase = morz.join('');
  return phrase;// write your solution here
}

module.exports = {
    decode
}