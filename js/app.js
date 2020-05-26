// Initializes game
let game = {};
document.querySelector('#btn__reset').addEventListener('click', () => {
    game = new Game;
    game.startGame();
});

// Keyboard button variable
const keys = document.getElementsByClassName('key');
// Loop to add 'click' event listener to each 'key' button
for (let i = 0; i < keys.length; i++ ) {
    keys[i].addEventListener('click', (e) => {
        game.handleInteraction(event.target);
    });
};

// Adds 'keyup' event listener to keyboard
document.addEventListener('keyup', (e) => {
    const regex = new RegExp('[a-z]');
    const button = document.querySelectorAll('.key');
        if (regex.test(e.key)) {
            for (let i = 0; i < button.length; i++) {
                if (button[i].innerHTML === e.key && button[i].disabled == false) {
                    game.handleInteraction(button[i]);
                }
            }
        }
    });
