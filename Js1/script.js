function yourName()
{
    var name = prompt("Enter your name:");
    alert("Hi, " + name + "!");
};


const year = 2023;
function yourAge()
{
    var myAge = prompt("Enter your year of birth:");
    alert("you are " + (year-myAge) + " years old");
}


function perimeterOfSquare()
{
    var sideLength = prompt("Enter the length of the side of the square:");
    var perimeter = 4 * sideLength;
    alert("Square perimeter: " + perimeter);
}

function areaOfCircle()
{
    var radius = prompt("Enter the radius of the circle:");
    var area = Math.PI * radius * radius;
    alert("Circle area: " + area);
}

function requiredSpeed()
{
    var distance = prompt("Enter the distance between cities in kilometers:");
    var time = prompt("Enter the time you need to get there in hours:");
    var speed = distance / time;
    alert("Required speed: " + speed + " km/h");
}

function usdToEur()
{
    const exchangeRate = 0.92;
    var dollars = prompt("Enter dollar amount:");
    var euros = dollars * exchangeRate;
    alert("Amount in euro: " + euros);
}

function countFiles()
{
    var flashDriveSize = prompt("Enter the size of the flash drive in GB:");
    var fileSize = 820; // размер файла в Мб
    var filesCount = Math.floor((flashDriveSize * 1024) / fileSize);
    alert("The number of files that fit on a flash drive: " + filesCount);
}

function getCountAndChange()
{
    var walletAmount = prompt("Enter the amount of money in the wallet:");
    var chocolatePrice = prompt("Enter the price of one chocolate bar:");
    var chocolateCount = Math.floor(walletAmount / chocolatePrice);
    var change = walletAmount % chocolatePrice;
    alert("You can buy " + chocolateCount + " chocolates. Your change: " + change);    
}

function reverce()
{
    var number = prompt("Enter a three-digit number:");
    var reversedNumber = (number % 10) * 100 + Math.floor((number / 10) % 10) * 10 + Math.floor(number / 100);
    alert("Number back to front: " + reversedNumber);
}

function evenOrOdd()
{
    var number = prompt("Enter an integer:");
    var isEven = (number % 2 === 0);
    var result = isEven ? "Even number" : "The number is odd";
    alert(result); 
}
