var a = 35857570;
var b = 15736370;
var c = 1053780;

var min;
if ((a <= b) && (a <= c)) {
    min = a;
} else if ((b <= a) && (b <= c)){
    min = b;
} else if ((c <= a) && (c <= b)){
    min = c;
}

var max;
if ((a >= b) && (a >= c)) {
    max = a;
}else if ((b >= a) && (b >= c)){
    max = b;
}else if ((c >= a) && (c >= b)){
    max = c;
}



console.log('the minimum number is', min);
console.log('the maximum number is', max);