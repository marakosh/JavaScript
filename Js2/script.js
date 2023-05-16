function compareNumbers() {
    var num1 = prompt("Enter the first number:");
    var num2 = prompt("Enter the second number:");
  
    num1 = Number(num1);
    num2 = Number(num2);
  
    if (num1 < num2) {
      alert("-1");
    } else if (num1 > num2) {
      alert("1");
    } else {
      alert("0");
    }
  }
  

function calculateFactorial() 
{
  var num = prompt("Enter the number:");

  num = Number(num);

  var factorial = 1;

  for (var i = 1; i <= num; i++) {
    factorial *= i;
  }

  alert("The factorial of " + num + " is " + factorial);
}


function combineDigits() 
{
    var digit1 = prompt("Enter the first digit:");
    var digit2 = prompt("Enter the second digit:");
    var digit3 = prompt("Enter the third digit:");
  
    var combinedNumber = Number(String(digit1) + String(digit2) + String(digit3));
  
    alert("Converted number: " + combinedNumber);
}
  

function calculateArea() 
{
    var length = prompt("Enter length:");
    var width = prompt("Enter width:");
  
    length = Number(length);
    width = Number(width);
  
    var area;
  
    if (width === undefined) {
      area = length * length;
    } else {
      area = length * width;
    }
  
    alert("Area: " + area);
}
  

function checkPerfectNumber() 
{
    var num = prompt("Enter the number:");
  
    num = Number(num);
  
    var sum = 0;
  
    for (var i = 1; i < num; i++) {
      if (num % i === 0) {
        sum += i;
      }
    }
  
    var isPerfect = sum === num;
  
    alert("The number " + num + (isPerfect ? " is " : " is not") + " perfect.");
}
  
function displayPerfectNumbersInRange() 
{
    var min = prompt("Enter the minimum value:");
    var max = prompt("Enter the maximum value:");
  
    min = Number(min);
    max = Number(max);
  
    var perfectNumbers = "";
  
    for (var i = min; i <= max; i++) {
      if (checkPerfectNumberHelper(i)) {
        perfectNumbers += i + " ";
      }
    }
  
    if (perfectNumbers === "") {
      alert("There are no perfect numbers in the specified range.");
    } else {
      alert("Perfect numbers in the specified range: " + perfectNumbers);
    }
}
  

function displayTime() {
  var hours = prompt("Enter hours:");
  var minutes = prompt("Enter minutes:");
  var seconds = prompt("Enter seconds:");

  hours = Number(hours);
  minutes = Number(minutes);
  seconds = Number(seconds);

  var formattedHours = hours < 10 ? "0" + hours : hours;
  var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

  alert("Time: " + formattedHours + ":" + formattedMinutes + ":" + formattedSeconds);
}

function convertToSeconds() 
{
  var hours = prompt("Enter hours:");
  var minutes = prompt("Enter minutes:");
  var seconds = prompt("Enter seconds:");

  hours = Number(hours);
  minutes = Number(minutes);
  seconds = Number(seconds);

  var totalSeconds = hours * 3600 + minutes * 60 + seconds;

  alert(totalSeconds);
}


  
function convertToTime() 
{
  var seconds = prompt("Enter seconds:")
  var hours = Math.floor(seconds / 3600);
  var minutes = Math.floor((seconds % 3600) / 60);
  var remainingSeconds = seconds % 60;
  
  var formattedHours = hours < 10 ? "0" + hours : hours;
  var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  var formattedSeconds = remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;
  
  alert(formattedHours + ":" + formattedMinutes + ":" + formattedSeconds);
}


function getTimeDifference(hours1, minutes1, seconds1, hours2, minutes2, seconds2) 
{

  var totalSeconds1 = convertToSeconds(hours1, minutes1, seconds1);
  var totalSeconds2 = convertToSeconds(hours2, minutes2, seconds2);
  
  var differenceInSeconds = Math.abs(totalSeconds1 - totalSeconds2);
  
  return convertToTime(differenceInSeconds);
}
