let paragraph: string = "java is easy and java is powerful";
let words: string[] = paragraph.toLowerCase().split(" ");
let wordCount: Map<string, number> = new Map();
for (let word of words) {
    if (wordCount.has(word)) {
        wordCount.set(word, wordCount.get(word)! + 1);
    } else {
        wordCount.set(word, 1);
    }
}
console.log("Word Frequencies:");
wordCount.forEach((count, word) => {
    console.log(word + " : " + count);
});