var hoversound = new Audio('../sounds/click.mp3');

var buttons = document.querySelectorAll(".clicksfx");

buttons.forEach(function(button) {
    button.addEventListener('mouseenter', function() {
        hoversound.currentTime = 0.2;

        hoversound.play();
    });
});

