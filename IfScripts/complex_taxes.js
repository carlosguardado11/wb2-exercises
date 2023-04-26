//weekly income
var payRate = 20;
var hoursWorked = 50;

var overtimeHours = hoursWorked - 40;
var overtimeRate = payRate * 1.5;
var weeklyGross = basePay + overtimePay;
var annualGrossIncome = weeklyGross * 52;


if (hoursWorked <= 40) {
    console.log( 'gross pay is', hoursWorked * payRate);
} else { 
var overtimePay = overtimeHours * overtimeRate;
var basePay = payRate * 40;
console.log('gross pay is', basePay + overtimePay);
}
 console.log('hours worked', hoursWorked);
 console.log('overtime hours', overtimeHours);
 console.log('base rate', payRate);
 console.log('annual gross', annualGrossIncome);

 //taxes
 var filingStatus = 'single';
 var taxRate = 5;
 if (annualGrossIncome <= 11999) {
    console.log('tax rate is', taxRate);
 }