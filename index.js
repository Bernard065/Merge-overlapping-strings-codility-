function mergeStrings(str1, str2) {
    let mergedString = "";
    const shorterLength = Math.min(str1.length, str2.length);
    for (let i = 1; i <= shorterLength; i++) {
        if (str1.slice(-i) === str2.slice(0, i)) {
            mergedString = str1 + str2.slice(i);
            break;
        }
    }
    if (mergedString === "") {
        mergedString = str1 + str2;
    }
    return mergedString;
}


console.log(mergeStrings("abcde", "cdefgh"));  
console.log(mergeStrings("abaab", "aabab"));  
console.log(mergeStrings("abc", "def"));     
console.log(mergeStrings("abc", "abc")); 
