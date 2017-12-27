
function add(x, y) {
    return x+y;
}

// Block
var res = add(1, 1);
console.log(res);

// Non block
function doAdd(x, y, callback) {
    callback(null, add(x,y));
}

doAdd(1, 1, function(error, result) {
    if (error) {
        console.log(error);
    } else {
        var res = result;
    }
});

module.export.doAdd = doAdd;
module.export.sdf = 34;