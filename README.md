# Merge-overlapping-strings-codility-
## Problem
Write a function that merges two strings together. It does so by merging the end of the first string with the start of the second string together when they are an exact match.

"abcde" + "cdefgh" => "abcdefgh"

"abaab" + "aabab" => "abaabab"

"abc" + "def" => "abcdef"

"abc" + "abc" => "abc"

NOTE: The algorithm should always use the longest possible overlap.

"abaabaab" + "aabaabab" would be "abaabaabab" and not "abaabaabaabab"

### Behavior Driven Development
Given two strings "abcde" and "cdefgh"
When the strings are merged
Then the result should be "abcdefgh"

### Pseudo code
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


### Code
This is a JavaScript code and its available in index.js


