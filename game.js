var Word = require("./word.js");

//Random word is selected and exported
var Game = function() {
    this.secretWords = ["pikachu", "celebi", "eevee", "charizard", "snorlax",
        "mewtwo", "rayquaza", "ditto", "charmander", "bulbasaur",
        "mew", "gardevoir", "squirtle", "lucario", "kyogre", "dragonite",
        "jigglypuff", "gengar", "gyarados", "arceus", "salamence", "umbreon",
        "tyranitar", "lugia", "sylveon", "metagross", "milotic", "blaziken", "raichu",
        "magikarp", "pichu", "blastoise", "espeon", "aggron", "lapras", "flygon",
        "slowpoke", "aron", "koffing", "jynx", "ralts", "feebas", "mawile", "mudkip",
        "dratini", "giratina", "greninja", "sceptile", "vulpix"];
    this.randomWord = this.secretWords[Math.floor(Math.random() * this.secretWords.length)];
    this.currentWord = new Word(this.randomWord);   
};

    var hangMan = new Game();   

module.exports = Game;