var accountValue = 1500;
var interestGain = 2.5
var timeToDouble = 72/interestGain
var valueDoubled = accountValue * 2
console.log("at", interestGain, "interest rate your savings account will be worth ", valueDoubled.toFixed(2), 'in', timeToDouble, 'years' )