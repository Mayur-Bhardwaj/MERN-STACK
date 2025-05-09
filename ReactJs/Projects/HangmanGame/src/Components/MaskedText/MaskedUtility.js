//This is the helper function of Masked Text
/*
* { The word which is given as input and is expected to be guessed } originalWord
* { Letters which are guessed by the user already } guessedLetter
*
* Ex:- originalWord: HUMBLE
* guessedLetter: {'H', 'M', 'E'}

* return --> H_M_ _E
*/
export function getMaskedString(originalWord, guessedLetter){
    guessedLetter = guessedLetter.map(letter => letter.toUpperCase()); //['h', 'M', 'e'] --> ['H', 'M', 'E']

    const guessedLetterSet = new Set(guessedLetter); //Like we are doing traversing with array but using this we can increase the speed of searching.

//We also used the array and used the method find to traverse. 

   const result = originalWord.toUpperCase().split("").map(char =>{   //Ex: x="abc";   x.toUpperCase() ----> 'ABC';   x.toUpperCase.Split("");    Output ----> (3) ['A', 'B', 'C']
    if(guessedLetterSet.has(char)){  //If guessedLetter is guess
        return char;
    } else{
        return "_";
    }
        
    });     //['H', '_', 'M', '_', '_', 'E']

    return result.join('');  //"H_M_ _E"    //they will convert the array into normal string
}