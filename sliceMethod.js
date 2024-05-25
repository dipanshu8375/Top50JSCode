// Explanation of Slice Method
// The slice method is used to extract a portion of a string. It takes two arguments: the starting index and the ending index (exclusive).
// The slice method returns a new string that contains the characters between the starting and ending indices.

const str = 'JavaScript is awesome';

// Extract a substring from index 0 to index 10 (excluding index 10)
const substring1 = str.slice(0, 10);
console.log(substring1); // Output: JavaScript

// Extract a substring from index 11 to the end of the string
const substring2 = str.slice(11);
console.log(substring2); // Output: is awesome

// Negative indices count from the end of the string
const substring3 = str.slice(-7);
console.log(substring3); // Output: awesome

// Extract a substring from index 5 to index 8 (excluding index 8)
const substring4 = str.slice(5, 8);
console.log(substring4); // Output: cri







const arr = [1, 2, 3, 4, 5];

// Extract a subarray from index 0 to index 3 (excluding index 3)
const subarray1 = arr.slice(0, 3);
console.log(subarray1); // Output: [1, 2, 3]

// Extract a subarray from index 2 to the end of the array
const subarray2 = arr.slice(2);
console.log(subarray2); // Output: [3, 4, 5]

// Negative indices count from the end of the array
const subarray3 = arr.slice(-2);
console.log(subarray3); // Output: [4, 5]

// Extract a subarray from index 1 to index 4 (excluding index 4)
const subarray4 = arr.slice(1, 4);
console.log(subarray4); // Output: [2, 3, 4]

