//=====================================================================================
var Letter = function(letters) {
    this.current = '_';
    this.letters = letters; 
    this.showLetter = false;    

    this.letterin = function(letter) {
        if (this.letters === letter) {
            this.current = this.letters;
            return true;
        }
            return false;   
    }
    this.letterShow = function() {
        return this.current;    
    }
}


//=====================================================================================
module.exports = Letter;