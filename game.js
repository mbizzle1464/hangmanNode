//Random word is selected and exported
var wordsToGuess = ["Pikachu", "Celebi", "Eevee", "Charizard", "Snorlax",
                    "Mewtwo", "Rayquaza", "Ditto", "Charmander", "Bulbasaur",
                     "Mew", "Gardevoir", "Squirtle", "Lucario", "Kyogre", "Dragonite", 
                    "Jigglypuff", "Gengar", "Gyarados", "Arceus", "Salamence", "Umbreon",
                    "Tyranitar", "Lugia", "Sylveon", "Metagross", "Milotic", "Blaziken", "Raichu", 
                    "Magikarp", "Pichu", "Blastoise", "Espeon", "Aggron", "Lapras", "Flygon", 
                    "Slowpoke", "Aron", "Koffing", "Jynx", "Ralts", "Feebas", "Mawile", "Mudkip",
                    "Dratini", "Giratina", "Greninja", "Sceptile", "Vulpix" ],
    randomIndex = Math.floor(Math.random() * wordsToGuess.length),
    randomWord = wordsToGuess[randomIndex];

module.exports = randomWord;
