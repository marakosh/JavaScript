
var fraction = {
    numerator: 1,
    denominator: 2
  };
  

  function addFractions(fraction1, fraction2) {
    var resultFraction = {};
    resultFraction.numerator = fraction1.numerator * fraction2.denominator + fraction2.numerator * fraction1.denominator;
    resultFraction.denominator = fraction1.denominator * fraction2.denominator;
    return simplifyFraction(resultFraction);
  }
  

  function subtractFractions(fraction1, fraction2) {
    var resultFraction = {};
    resultFraction.numerator = fraction1.numerator * fraction2.denominator - fraction2.numerator * fraction1.denominator;
    resultFraction.denominator = fraction1.denominator * fraction2.denominator;
    return simplifyFraction(resultFraction);
  }
  

  function multiplyFractions(fraction1, fraction2) {
    var resultFraction = {};
    resultFraction.numerator = fraction1.numerator * fraction2.numerator;
    resultFraction.denominator = fraction1.denominator * fraction2.denominator;
    return simplifyFraction(resultFraction);
  }
  

  function divideFractions(fraction1, fraction2) {
    var resultFraction = {};
    resultFraction.numerator = fraction1.numerator * fraction2.denominator;
    resultFraction.denominator = fraction1.denominator * fraction2.numerator;
    return simplifyFraction(resultFraction);
  }
  

  function simplifyFraction(fraction) {
    var gcd = findGCD(fraction.numerator, fraction.denominator);
    fraction.numerator /= gcd;
    fraction.denominator /= gcd;
    return fraction;
  }
  

  function findGCD(num1, num2) {
    if (num2 === 0) {
      return num1;
    } else {
      return findGCD(num2, num1 % num2);
    }
  }
  


  var fraction1 = {
    numerator: 2,
    denominator: 3
  };
  
  var fraction2 = {
    numerator: 3,
    denominator: 4
  };
  
  var sum = addFractions(fraction1, fraction2);
  console.log("Сумма:", sum.numerator + "/" + sum.denominator);
  
  var difference = subtractFractions(fraction1, fraction2);
  console.log("Разность:", difference.numerator + "/" + difference.denominator);
  
  var product = multiplyFractions(fraction1, fraction2);
  console.log("Произведение:", product.numerator + "/" + product.denominator);
  
  var quotient = divideFractions(fraction1, fraction2);
  console.log("Частное:", quotient.numerator + "/" + quotient.denominator);
  
  var simplifiedFraction = simplifyFraction(fraction1);
  console.log("Сокращенная дробь:", simplifiedFraction.numerator + "/" + simplifiedFraction.denominator);
  