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

function isPalindrome(str) {
    
}
console.log(isPalindrome(str))


