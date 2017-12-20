
function divide(x, y) {
    if (y == 0)
        return Error('Cannot divide by zero');
    return x/y;
}

// Block
var res = divide(1, 1);
console.log(res);

// Non block
function doDivide(x, y, callback) {
    callback(null, divide(x,y));
}

doDivide(1, 1, function(error, result) {
    if (error) {
        console.log(error);
    } else {
        var res = result;
    }
});