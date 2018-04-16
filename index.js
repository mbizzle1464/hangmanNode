var game = require("./game.js"),
    wordCons = require("./word.js"),
    letterCons = require("./letter.js"),
    inquirer = require("inquirer"),
    randomWord = game.randomWord,
    letterGuessed;
exports.letter;


var myWord = new wordCons.wordCons(game.randomWord);
var maxGuesses = 15;

function takeAGuess() {
    console.log(myWord.toString());
    if (myWord.guessesMade.length >= maxGuesses) {
        console.log('Sorry, you do not have anymore guesses!');
        return; //Game over
    }
    inquirer.prompt([{
        name: 'letter',
        type: 'text',
        message: 'Enter a letter:',
        validate: function (str) {
            var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
            return regEx.test(str);
        }
    }]).then(function (letterInput) { 
        var letter = letterInput.letter;
        myWord.findLetter(letter); 
        if (myWord.isComplete()) {
            console.log('Yes! It was ' + myWord.toString() + '!');
            return; 
        }
        console.log('-------------------\n'); 
        console.log('You have ' + (maxGuesses - myWord.guessesMade.length) + ' guesses left.')
        takeAGuess(); //Recursive call
    }
    );
}

takeAGuess(); //Start Game