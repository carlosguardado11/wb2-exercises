var payRate = 12.50;
var hoursWorked = 50;

var overtimeHours = hoursWorked - 40;
var overtimeRate = payRate * 1.5;


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


