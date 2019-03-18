var _ = {
    map: function (array, callback) {
        for (let i = 0; i < array.length; i++) {
            array[i] = callback(array[i])
        }
        return array;
    },
    reduce: function (array, callback, memo) {
        if (!memo)
            memo = array[0];
        temp = 0;
        for (var i = 0; i < array.length; i++) {
            temp = callback(temp, array[i]);
        }
        return temp;
    },
    find: function (array, callback) {
        for (let i = 0; i < array.length; i++) {
            if (callback(array[i])) {
                return array[i];
            }
        }

    },
    filter: function (array, callback) {
        var filter = [];
        for (let i = 0; i < array.length; i++){
            if(callback(array[i]))
                filter.push(array[i]);
            
        }
        return filter;
    },
    reject: function (array, callback) {
        var reject = [];
        for (let i = 0; i < array.length; i++){
            if(!callback[array[i]]){
                reject.push[array[i]];
            }
        }
        return reject;;
    }
}
// you just created a library with 5 methods!

var mapMethod = _.map([1, 2, 3, 4, 5, 6], function (num) { return num * 2; });
console.log(mapMethod);

var findMethod = _.find([1, 2, 3, 4, 5, 6], function (num) { return num === 2; })
console.log(findMethod);

var filterMethod = _.filter([1, 2, 3, 4, 5, 6], function (num) { return num % 2 == 0; });
console.log(filterMethod);

var reduceMethod = _.reduce([1, 2, 3, 4, 5, 6], function (memo, num) {
    return num + memo;
}, 0);
console.log(reduceMethod);