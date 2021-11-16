var add = function(a, b) {
    if (arguments.length == 1) {
        return function(b) {
            return a+b;
        }
    }
    else {
        return a+b;
    }
}

console.log(add(4, 6));

console.log(add(4)(6));