function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(2, 2);
console.log('addTwoNumbersResult:', sum);

function convertHoursToMinutes(hours) {
  var result = hours * 60;
  return result;
}

var minutes = convertHoursToMinutes(2);
console.log('minutes:', minutes);

function getGreeting(name) {
  var result = 'Hello ' + name + '!';
  return result;
}

var greeting = getGreeting('World');
console.log('greeting:', greeting);

function addAndMultiplyby5(num1, num2) {
  var result = (num1 + num2) * 5;
  return result;
}

var sumTimesFive = addAndMultiplyby5(10, 5);
console.log('Add and Multiply by 5:', sumTimesFive);

function multiplyAndDivideBy5(num1, num2) {
  var result = (num1 * num2) / 5;
  return result;
}

var productDividedBy5 = multiplyAndDivideBy5(35, 10);
console.log('Product divided by 5:', productDividedBy5);

function subtractTwoNumbers(num1, num2) {
  var result = (num1 - num2);
  return result;
}

var difference = subtractTwoNumbers(22, 7);
console.log('Subtract two numbers:', difference);

function getCircleCircumference(radius) {
  var result = (2 * Math.PI) * radius;
  return result;
}

var circumference = getCircleCircumference(5);
console.log('circumference:', circumference);

function getFullName(firstName, lastName) {
  var result = firstName + ' ' + lastName;
  return result;
}

var fullName = getFullName('Juan', 'Ramirez');
console.log('full name:', fullName);

function cube(number) {
  var result = number * number * number;
  return result;
}

var cubed = cube(5);
console.log('cubed:', cubed);
