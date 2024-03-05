document.addEventListener('DOMContentLoaded', function() {
    let catButton = document.querySelector('.cat');
    catButton.addEventListener('click', function() {
        let catSound = new Audio('mjau3-82957.mp3');
        catSound.play();
    });
});


