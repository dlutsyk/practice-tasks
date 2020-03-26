/**
www.codewars.com

Create a function that transforms any positive number to a string representing the number in words. The function should work for all numbers between 0 and 999999.

number2words(0)  ==>  "zero"
number2words(1)  ==>  "one"
number2words(9)  ==>  "nine"

*/

const n = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred',
    1000: 'thousand'
};

function numtostring(num) {
    return calc(num);
}

function first(s, i) {
    return i ? s.slice(0, i) : s.slice(0, 1) ;
}
function tail(s, i) {
    return i ? s.slice(i) : s.slice(1);
}

function tenths(s) {
    return [
        n[first(s).concat(0)],
        n[tail(s)]
    ].join('-');
}

function hundredths(s) {
    const fn = first(s);
    const t = parseInt(tail(s));

    return t
        ? [n[fn], n[100], calc(t)].join(' ')
        : [n[fn], n[100]].join(' ')
}

function thousands(s) {
    var fn, t;

    switch (s.length) {
        case 4:
            fn = first(s);
            t = parseInt(tail(s));
            break;
        case 5:
            fn = first(s, 2);
            t = parseInt(tail(s, 2));
            break;
        case 6:
            fn = first(s, 3);
            t = parseInt(tail(s, 3));
    }

    return t
        ? [calc(fn), n[1000], calc(t)].join(' ')
        : [n[fn], n[1000]].join(' ')
}

function calc(num) {
    const s = String(num);

    if (n[num] && num < 100) {return n[num];}

    switch (s.length) {
        case 2:
            return tenths(s);
        case 3:
            return hundredths(s);
        default:
            return thousands(s);
    }
}
