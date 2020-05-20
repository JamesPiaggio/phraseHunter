let game = {};
document.querySelector('#btn__reset').addEventListener('click', () => {
    game = new Game;
    game.startGame();
});

const keys = document.getElementsByClassName('key');

for (let i = 0; i < keys.length; i++ ) {
    keys[i].addEventListener('click', (e) => {
        game.handleInteraction(event.target);
    });
};

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
