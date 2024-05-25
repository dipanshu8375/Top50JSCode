// 1. Generate the fibonacci Sequence
function generateFibo(n){
    let sequence = [0,1];
    for(let i =2; i<= n; i++){
        sequence.push(sequence[i-1] + sequence[i-2]);
    }
    return sequence;
}
console.log(generateFibo(10));

// 2. Recursive of Fibonacci Sequence. // I want what is 10th number in fibonacci sequence.
function fibonacciSequence(n){
    if(n <= 1){
        return n;
    }
    return fibonacciSequence(n - 1) + fibonacciSequence(n - 2);
}
console.log(fibonacciSequence(4));