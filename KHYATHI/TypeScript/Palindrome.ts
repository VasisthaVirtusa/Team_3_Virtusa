function isPalindrome(str: string): boolean {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}
let text: string = "madam";
if (isPalindrome(text)) {
    console.log(text + " is a palindrome");
} else {
    console.log(text + " is not a palindrome");
}