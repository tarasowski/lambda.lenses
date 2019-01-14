const curry = (fn) => {
    return function f1(...args) {
        return args.length >= fn.length
            ? fn(...args)
            : (...moreArgs) => f1(...[...args, ...moreArgs])
    }
}


const isNil = curry(function isNil(x) { return x == null; })

function _has(prop, obj) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}

function _isArray(val) {
    return (val != null &&
        val.length >= 0 &&
        Object.prototype.toString.call(val) === '[object Array]');
};

function _isInteger(n) {
    return (n << 0) === n;
};


const assocPathRamda = curry(function (assoc, path, val, obj) {
    if (path.length === 0) {
        return val;
    }
    var idx = path[0];
    if (path.length > 1) {
        var nextObj = (!isNil(obj) && _has(idx, obj)) ? obj[idx] : _isInteger(path[1]) ? [] : {};
        val = assocPathRamda(assoc, Array.prototype.slice.call(path, 1), val, nextObj);
    }
    if (_isInteger(idx) && _isArray(obj)) {
        var arr = [].concat(obj);
        arr[idx] = val;
        return arr;
    } else {
        return assoc(idx, val, obj);
    }
})

module.exports = { assocPathRamda, curry }