function changeColor() {
    var redLight = document.getElementById('red');
    var yellowLight = document.getElementById('yellow');
    var greenLight = document.getElementById('green');
    
    if (redLight.style.backgroundColor === 'red') {
        redLight.style.backgroundColor = 'black';
        yellowLight.style.backgroundColor = 'yellow';
    } else if (yellowLight.style.backgroundColor === 'yellow') {
        yellowLight.style.backgroundColor = 'black';
        greenLight.style.backgroundColor = 'green';
    } else if (greenLight.style.backgroundColor === 'green') {
        greenLight.style.backgroundColor = 'black';
        redLight.style.backgroundColor = 'red';
    } else {
        redLight.style.backgroundColor = 'red';
    }
}