const usernameInput = document.getElementById('username');

usernameInput.addEventListener('input', function() {
  const enteredValue = this.value;
  const filteredValue = enteredValue.replace(/\d/g, '');

  if (enteredValue !== filteredValue) {
    this.value = filteredValue;
  }
});
