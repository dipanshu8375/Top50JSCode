// Explanation of sort Method
// The sort method sorts the array in ascending order by default.
// If we want to sort the array in descending order, we can pass a comparator function as an argument to the sort method.
// The comparator function takes two arguments and returns a negative value if the first argument is less than the second argument, a positive value if the first argument
// is greater than the second argument, and zero if the two arguments are equal.

// 1.
const customObjects = [
    { name: "John", age: 30 },
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 }
];

customObjects.sort((a, b) => {
    return a.age - b.age
});
//console.log(customObjects);

// 2. 
const strings = ["apple", "banana", "orange", "grape"];

strings.sort((a, b) => a.length - b.length);
console.log(strings);

  