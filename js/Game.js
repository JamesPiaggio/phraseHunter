// Variable for qwertyb buttons
const buttons = document.querySelectorAll('.key');
// Game class constructor
class Game {
    constructor () {
        this.missed = 0;
        this.phrases = [new Phrase('Super Mario Brothers'), new Phrase('Donkey Kong Country'), new Phrase('Earthbound'), new Phrase('Chrono Trigger'), new Phrase('Super Metroid')];
        this.activePhrase = null;
    }
    
    /**
    * Selects random phrase from the phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const randomNum = Math.floor(Math.random() * this.phrases.length);
        const randomPhrase = this.phrases[randomNum];
        return randomPhrase;
    };
    
    /**
    * Begins game by clearing the previous game and selecting a random phrase and displaying it to user
    */
    startGame() {
        this.missed = 0;
        this.activePhrase = this.getRandomPhrase();
        // Removes old phrase
        const phraseUl = document.querySelector('.section ul');
        const phraseLi = document.querySelectorAll('ul li');
        for (let i = 0; i < phraseLi.length; i++) {
            phraseUl.removeChild(phraseLi[i]);
        }
        // Reactivates buttons
        for (let i = 0; i < buttons.length; i++) {
                buttons[i].disabled = false;
                buttons[i].classList.remove('wrong', 'chosen');
        }
        // Resets Hearts/Lives
        for (let i = 0; i < document.getElementsByClassName('tries').length; i++) {
            document.getElementsByClassName('tries')[i].querySelector('img').src = 'images/liveHeart.png';
        }
        // Adds new phrase to display
        this.activePhrase.addPhraseToDisplay();
        document.querySelector('#overlay').style.display = 'none';
    };
    
    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        // If hidden characters equal 0, you win
        if (document.getElementsByClassName('hide').length === 0) {
            return true;
        } else {
            return false;
        }
    };
    
    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        this.missed += 1;
        const lives = document.getElementsByClassName('tries');
        lives[5 - this.missed].querySelector('img').src = 'images/lostHeart.png';
        if (this.missed == 5) {
            this.gameOver(false);
        }
    };
    
    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        const overlay = document.querySelector('#overlay');
        for (let i = 0; i < buttons.length; i++) {
                buttons[i].disabled = true;
        }
        // Displays winning message
        if (gameWon === true) {
            overlay.style.display = 'block';
            overlay.classList.add('win');
            document.querySelector('#overlay h1').innerHTML = 'Great job! You win!';
        // Displays losing message    
        } else {
            document.querySelector('#overlay').style.display = 'block';
            overlay.classList.add('lose');
            document.querySelector('#overlay h1').innerHTML = 'Sorry, you lose! Try again...';
        }
    };
    
    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        button.disabled = true;
        if (this.activePhrase.checkLetter(button.innerHTML)) {
            this.activePhrase.showMatchedLetter(button.innerHTML);
            button.classList.add('chosen');
            this.checkForWin();
            if (this.checkForWin() == true) {
                this.gameOver(true);
            }
        } else {
            button.classList.add('wrong');
            this.removeLife();
        }
    };
}