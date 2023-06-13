var field = document.getElementById('field');
var ball = document.getElementById('ball');

field.addEventListener('click', function(event) {
    var fieldRect = field.getBoundingClientRect();
    var ballRect = ball.getBoundingClientRect();
    
    var fieldWidth = fieldRect.width;
    var fieldHeight = fieldRect.height;
    
    var ballWidth = ballRect.width;
    var ballHeight = ballRect.height;
    
    var clickX = event.clientX - fieldRect.left;
    var clickY = event.clientY - fieldRect.top;
    
    var targetX = clickX - ballWidth / 2;
    var targetY = clickY - ballHeight / 2;
    
    if (targetX < 0) {
        targetX = 0;
    } else if (targetX + ballWidth > fieldWidth) {
        targetX = fieldWidth - ballWidth;
    }
    
    if (targetY < 0) {
        targetY = 0;
    } else if (targetY + ballHeight > fieldHeight) {
        targetY = fieldHeight - ballHeight;
    }
    
    ball.style.transform = 'translate(' + targetX + 'px, ' + targetY + 'px)';
});