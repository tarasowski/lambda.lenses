const { assocPathRamda, curry } = require('./ramda')


const prop = curry((key, obj) => obj[key])
const assoc = curry((key, val, obj) => ({ ...obj, [key]: val }))
const lens = curry((get, set) => ({ get, set }))
const over = curry((lens, f, obj) => lens.set(f(lens.get(obj)), obj))
const lensProp = key => lens(prop(key), assoc(key))
const lensIndex = index => lens(prop(index), assoc(index))
const view = curry((lens, obj) => lens.get(obj))
const set = curry((lens, f, obj) => lens.set(f(lens.get(obj)), obj))
const path = curry((xs, obj) => xs.reduce((a, c) => a[c], obj))
const assocPath = assocPathRamda(assoc)
const lensPath = xs => lens(path(xs), assocPath(xs))

module.exports = {
    lensPath,
    lensIndex,
    lensProp,
    set,
    view,
    over
}

