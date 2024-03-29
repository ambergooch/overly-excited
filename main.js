// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (theWordArray, character, count) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        if ((i+1) % 3 === 0 && i !== 0) {
            console.log(buildMeUp += sentence[i] + character.repeat(count) + " ");
        }
            /*
            If the current value of `i` divided by 3 has no
            remainder, add an exclamation point to the end of
            the word and then concatenate it to `buildMeUp`.

            Otherwise, just concatenate the word itself.
         */
        // Concatenate the new word onto buildMeUp
        // Print buildMeUp to the console
        else {
            console.log(buildMeUp += sentence[i] + " "); 
        }
    }

}

// Invoke the function and pass in the array
addExcitement(sentence, "*", 4)