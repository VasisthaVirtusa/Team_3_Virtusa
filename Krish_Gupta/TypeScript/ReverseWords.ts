function reverseWords(sentence: string): string {

    let words = sentence.split(" ");
    let result: string[] = [];

    for (let word of words) {

        let reversedWord = word.split("").reverse().join("");

        result.push(reversedWord);
    }

    return result.join(" ");
}

let sentence = "Hello World Java";

console.log("Original sentence: " + sentence);
console.log("Reversed sentence: " + reverseWords(sentence));