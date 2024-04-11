// If you have a string like "I am the good boy". How can you generate "I ma eht doog yob"? Please note that the words are in place but reversed.
function reverseInPlace(input) {
    const words = input.split(' ');
    console.log(words);
    const reversedWords = words.map((word) => {

        return word.split('').reverse().join('');
    });
    const result = reversedWords.join(' ');
    return result;
}

console.log(reverseInPlace("I am the good boy"));
