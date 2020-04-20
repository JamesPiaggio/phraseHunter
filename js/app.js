let game = {};
document.querySelector('#btn__reset').addEventListener('click', () => {
    game = new Game;
    game.startGame();
});