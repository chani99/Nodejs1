
var evenDouble = function(num, callback) {
    var timeWait = Math.random();
    if (num % 2 == 0) {
        setTimeout(function() {
            callback(null, num*2, timeWait);
        }, timeWait * 1000)
    } else {
        setTimeout(function() {
            callback(new Error('not even'));
        }, timeWait * 1000)
    }
}

module.exports.evenDouble = evenDouble;
module.exports.sayHello = function() { return 'Hello'};
