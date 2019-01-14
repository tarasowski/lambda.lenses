# lambda.lenses
Kmett style lenses in your face!

* API

```js
module.exports = {
    lensPath,
    lensIndex,
    lensProp,
    set,
    view,
    over
}
```

* Examples ([Source](https://github.com/tarasowski/functional-lenses/blob/master/deck.mdx))

```js
const user = { id: 1, name: 'foo' }

const propName = prop('name')(user)

const assocName = assoc('name')('bar')(user)

const toUpper = str => str.toUpperCase()

const cubed = num => num ** 3

const idLens = lensProp('id')

const viewId = view(idLens, user) // > 1

const setId = set(idLens, 2, user) // > { id: 2, name: "foo" }

const cubedId = over(idLens, cubed, setId) // > { id: 8, name: "foo" }

const nameLense = lensProp('name')

const getName = view(nameLense, user) // > "foo"

const setName = set(nameLense, 'flavio', user) // > { id: 1, name: "flavio" }

const capName = over(nameLense, toUpper, setName) // > { id: 1, name: "FLAVIO" }
```
