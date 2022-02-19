function getFibonacci(N) {
    let lastElement = 0;
    if (N < 1) {
        console.log(-1);
        return;
    }
    let currentElement = 0, nextElement = 1, nextTerm;

    for (let i = 1; i <= N; i++) {
        lastElement = currentElement;
        nextTerm = currentElement + nextElement;
        currentElement = nextElement;
        nextElement = nextTerm;
    }
    console.log(lastElement);
}

console.log(getFibonacci(5));
console.log(getFibonacci(1));

// Edge case, returns -1 , not found
console.log(getFibonacci(0));
