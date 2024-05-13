
// Explanation of reduce method:

// Syntax of Reduce Method: array.reduce(callback, initialValue);
// callback: function that takes 4 arguments: accumulator, currentValue, currentIndex, array
// initialValue: value to be passed to the accumulator (optional) - Initial value can provide default value for accumulator, if not specified accumulator will take first
// element of the array as its initial value.
// accumulator: value returned by the callback.
// currentValue: current element being processed in the array.
// currentIndex: the index of the current element being processed in the array.
// array: the array reduce was called upon.

// Top 5 Use Cases of reduce method:
// 1. Find the sum of elements of an array.
// 2. Find the product of elements of an array.
// 3. Find the minimum value of elements of an array.
// 4. Find the maximum value of elements of an array.
// 5. Find the average of elements of an array.
// 6. Flattening Array.

// 1.
let arr = [7,3,4,5,6];
let sumArray = arr.reduce((accumulator, currentValue, index, arr)=>{
   // console.log(accumulator, currentValue, index, arr) // 2, 3, 1, [2,3,4,5,6]
   return accumulator + currentValue;
},0);
//console.log(sumArray);

// 2.
let productArr = arr.reduce((accumulator, currentValue)=>{
    return accumulator*currentValue
},1);
//console.log(productArr);

// 3.
let minElem = arr.reduce((accumulator, currentValue)=>{
    return (currentValue < accumulator) ? currentValue : accumulator;
}, arr[0]);
//console.log(minElem)

// 4. Array Flatenning
let arr2 = [1, 2, [3,4], [5,6]];
let flatArr = arr2.reduce((accumulator, currentValue)=>{
    return accumulator.concat(currentValue)
}, []);
//console.log(flatArr);


// 5. Average of element of an array;
let myArrForAvg = [1,2,3,4,5]
let sumVal = myArrForAvg.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
},0);
let avgVal = sumVal/ (myArrForAvg.length)
console.log("avg",avgVal)