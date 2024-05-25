// 1 . Find the sum of elements of an arry.
// Method 1
let myArr = [1,2,3,4,5];
let sum  = 0;
for(let i = 0; i < myArr.length; i++){
    sum = sum + myArr[i]
}
//console.log(sum);

// Method 2
function calculateSum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length ; i++){
        sum = sum + arr[i]
    }
    return sum;
}
//console.log(calculateSum(myArr));

// Method 3; Reduce Method

const calculateSumVal = myArr.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
}, 0)
//console.log(calculateSumVal);

//______________________________________________________________________________________________


// 2. Find the maximum number in an array.
// Method 1
let maxArr = [23, 32, 44, 11, 66, -11];
let maxElem = Math.max(...maxArr);
//console.log(maxElem);

// Method 2
function maxElement(arr){
    let largestElement = -Infinity;
    for(let i = 0; i< arr.length; i++){
        let currentElement = arr[i];
        if(currentElement > largestElement){
            largestElement = currentElement
        }
    }
    return largestElement
};
//console.log(maxElement(maxArr))

// Method 3;
let shortArr = maxArr.sort((a,b)=>{
    return b-a
});
//console.log(shortArr[0]);




//_______________________________________________________________________________________________________________

// 3. Check whether the given string is Palindrom or not.
// Palindrome :  A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward.


// Method 1
let str = "A man, a plan, a canal, Panama"
function palindromeCheck(str){
    const modifyStr = str.toLocaleLowerCase().replace(/[^a-z0-9]/g,"");
    return modifyStr === modifyStr.split("").reverse().join('')
}
//console.log(palindromeCheck(str))

// Method 2.
let originalStr = "apapa"
function isPalindrome(str) {
    let j = str.length - 1;
    for(let i=0; i < str.length/2; i++){
        if(str[i] !== str[j - i]){
            return false;
        } else {
            return true;
        }
    }
}
//console.log(isPalindrome(originalStr));



// ______________________________________________________________________________________________________


// 4. Reverse the given string.

let strForReverse = "This is the demo for reverse string"
// Method 1.
function reverseString(strForReverse){
    let reverseStr = "";
    for(let i = strForReverse.length - 1; i>=0 ; i--){
        reverseStr += strForReverse[i];
    }
    return reverseStr
};
//console.log(reverseString(strForReverse));





// __________________________________________________________________________________________________________

// 5. Write a JavaScript program to convert a string to title case (capitalize the first letter of each word).

let strForUpperCase = "geeks for geeks"
function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
//console.log(titleCase("geeks for geeks"));
//console.log(strForUpperCase.toLowerCase().split(' '));



// _____________________________________________________________________________________________________________

// 6. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.
function fibonacciSequence(numTerms) {
    const sequence = [0, 1]; // Initialize Fibonacci sequence with first two terms
    for (let i = 2; i < numTerms; i++) {
        const nextTerm = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextTerm);
    }
    return sequence;
}
// Example usage:
const numTerms = 10;
const fibSequence = fibonacciSequence(numTerms);
// console.log(`Fibonacci sequence up to ${numTerms} terms:`, fibSequence);




// ___________________________________________________________________________________________________________________

// 7. Find the second largest Element from an array.
let arrForSecondLargest = [10, 8, 3, 33, 55,77, 77];
function secondLargest(arr){
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for(let i = 0; i < arr.length; i++){
        let currentElem = arr[i];
        if (currentElem > largest) {
            secondLargest = largest;
            largest = currentElem;
        } else if (currentElem > secondLargest && currentElem !== largest) {
            secondLargest = currentElem;
        }
    }
    return secondLargest;
}
//console.log(secondLargest(arrForSecondLargest))




// _______________________________________________________________________________________________________

//                                    Advance Problems

// 1. Implement a debounce function in JavaScript that limits the frequency of a function’s execution when it’s called repeatedly within a specified time frame. 
// A debounce function is a higher-order function that limits the rate at which a particular function can be executed. 
// It ensures that the function is invoked only once within a specified period,
//  regardless of how many times the event that triggers the function occurs. 
//  The main idea is to bundle several sequential calls to a function into a single call.

function debounce(func, wait) {
    let timeout;
    return function (...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}
const log = () => console.log('Debounced!');
const debouncedLog = debounce(log, 3000);
debouncedLog();


// ___________________________________________________________________________________________________________________

// 2. Implement a deep clone function in JavaScript that creates a copy of a nested object or array without any reference to the original. 

const numbers = [1, [2], [3, [4]], 5];

// Using JavaScript
console.log(JSON.parse(JSON.stringify(numbers)));