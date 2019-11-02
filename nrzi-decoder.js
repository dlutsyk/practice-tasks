// NRZI кодирование

// const signal1 = '_|¯|____|¯|__|¯¯¯';
// nrzi(signal1); // => '011000110100'

// const signal2 = '|¯|___|¯¯¯¯¯|___|¯|_|¯';
// nrzi(signal2); // => '110010000100111'

// const signal3 = '¯|___|¯¯¯¯¯|___|¯|_|¯';
// nrzi(signal3); // => '010010000100111'

const signal1 = '_|¯|____|¯|__|¯¯¯';
const signal2 = '|¯|___|¯¯¯¯¯|___|¯|_|¯';
const signal3 = '¯|___|¯¯¯¯¯|___|¯|_|¯';
const signal4 = '¯|_______|¯¯|___|¯¯|__|¯|_|¯';

const map = {
  '_': '0',
  '¯': '1',
  '|': '-1'
}

function nrzi(signal) {
  let result = '', laststate = '';

  // init start state
  if (signal[0] === "|") {
    result += '1';
  } else {
    result += '0';
  }

  for (let i=1; i<signal.length-1; i++) {
    let cur = signal[i];
    let next = signal[i+1];
    let prev = signal[i-1];

    if (
      (cur === '¯' && next === '¯' && prev === '¯') ||
      (cur === '¯' && next === '¯' && prev === '|') ||
      (cur === '_' && next === '_' && prev === '_') ||
      (cur === '_' && next === '|' && prev === '_')
    ) {
      result += '0';
    } else if (
      (cur === '|' && next === '_' && prev === '¯') ||
      (cur === '|' && next === '¯' && prev === '_') ||
      (cur === '_' && next === '_' && prev === '¯')
    ) {
      result += '1';
    }
  }

  return result;
}

console.log(nrzi(signal1),'\t011000110100\t', nrzi(signal1) === '011000110100')
console.log(nrzi(signal2),'\t110010000100111\t', nrzi(signal2) === '110010000100111')
console.log(nrzi(signal3),'\t010010000100111\t', nrzi(signal3) === '010010000100111')
console.log(nrzi(signal4),'\t01000000101001010111\t', nrzi(signal4) === '01000000101001010111')
