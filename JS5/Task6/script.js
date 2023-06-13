function showTooltip(event, text) {
    var tooltip = event.target.nextElementSibling;
    tooltip.innerHTML = text;
    var rect = event.target.getBoundingClientRect();
    if (rect.top < tooltip.offsetHeight) {
        tooltip.classList.add('bottom');
    } else {
        tooltip.classList.remove('bottom');
    }
}

function hideTooltip(event) {
    var tooltip = event.target.nextElementSibling;
    tooltip.innerHTML = '';
}