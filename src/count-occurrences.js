"use strict";

/**
 * Count how many whole occurrences of a string there are in an array.
 * Partial matches are not counted.
 * The count should be case sensitive.
 *
 * @param {string[]} y - array of strings to check
 * @param {string} n - string to count occurrences off
 * @returns {number} how many occurrences of the string are in the array
 */
function numOfOccurences(strArr, targetStr) {
  let occurances = 0;

  for (let str of strArr) {
    if (targetStr === str) {
      occurances++;
    }
  }
  return occurances;
}

console.log(numOfOccurences(["na", "na", "na", "na", "BATMAN"], "na"), 4);
console.log(numOfOccurences(["na", "na", "na", "na", "BATMAN"], "BATMAN"), 1);
console.log(numOfOccurences(["na", "na", "na", "na", "BATMAN"], "batman"), 0);
console.log(numOfOccurences(["na", "na", "na", "na", "BATMAN"], "a"), 0);
