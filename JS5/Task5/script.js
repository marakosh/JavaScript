let bookItems = document.getElementsByClassName('book-item');
        
for (let i = 0; i < bookItems.length; i++) {
    bookItems[i].addEventListener('click', function() {
        if (this.classList.contains('orange-bg')) {
            this.classList.remove('orange-bg');
        } else {
            for (let j = 0; j < bookItems.length; j++) {
                bookItems[j].classList.remove('orange-bg');
            }     
            this.classList.add('orange-bg');
        }
    });
}