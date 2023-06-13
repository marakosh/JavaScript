const openBtn = document.getElementById('openBtn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');

openBtn.addEventListener('click', function() {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});
