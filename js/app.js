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
