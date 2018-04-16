var prompt = require('prompt'), 
    Game = require('./game.js'),    
    hangmanGame = new Game();   
    userGuess = 10; 

    function gameStart(guesses) { 
        console.log("Guesses left: " + guesses);
        if(hangmanGame.currentWord.comparingWords() === true) {
            console.log('You win!');    
            return
        } else if (guesses <= 0) {
            console.log('Game over!'); 
            return
        }
        console.log(hangmanGame.currentWord.display());

        prompt.get(["theGuess"], function (err, result) {
            if (err) {
                return err;
            }
            if (hangmanGame.currentWord.foundIt(result.theGuess) == false) {
                guesses--;
            }
            gameStart(guesses);

        });

    };
    
    prompt.start(); 
    gameStart(userGuess);   
