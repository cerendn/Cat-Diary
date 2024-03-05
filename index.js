document.addEventListener('DOMContentLoaded', function() {
    var catButton = document.getElementById('catButton');

    // Düğmeye tıklama olayını dinle
    catButton.addEventListener('click', function() {
        // Kedi sesini çal
        var catSound = new Audio('cat_sound.mp3');
        catSound.play();
    });
});

