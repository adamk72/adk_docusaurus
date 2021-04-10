---
title: Interesting Features 
slug: /js
---
Things I didn't know till...later. Or, as is often the case, I forgot.
## Operators
### `??` Nullish Coalescing
Contrast to the or operator (`||`). `||` returns the RH if the LH is _any_ `falsy`, but `??` returns the the RH if the LH is `null` or `undefined`, otherwise the LH.

```javascript
/*  ||: assume 'myNullVar' is undefined or null,
    but you want the zero b/c as the fallback  */
const foo =  myNullVar || 0
// returns null (or undefined, as appropriate)

/*  ??: same assumptions  */
const bar =  myNullVar || ''
// returns an empty string
```
Useful if `0` or `''` values are considered, well, useful. Also, useful with [optional chaining](#-optional-chaining).
### `?.` Optional Chaining
Instead of returning causing an error if a reference returns `nullish`, this returns `undefined` at the first sign of trouble.
```javascript
let nestedProp = obj.doesNotExist?.isValidProp;
// nestedProp === undefined because doesNotExist failed.
```
Works with methods too. Now you don't need to validate everything in the chain ahead of time. Useful with [nullish coalescing](#-nullish-coalescing-operator).
### `in` Keyword
Checks to see if a property is part of an object.
```javascript
const objectToCheck = { thing: 'exists', anotherThing: 'alsoExists' }
console.log('thing' in objectToCheck)
// returns true

console.log('notAThing' in objectToCheck)
// returns false
```
## Other Stuff
### _Tagged_ Template Literals
Still learning, so this is a reminder. Check out this guide to them: [Wes Bos' Tagged Template Literals](https://wesbos.com/tagged-template-literals)

### `function*` Generator 
Creates a function that can be exited (via `yield`) and then later returned to (via `.next()`). Returns a `Generator` object that is an iterable iterator.
```javascript
// infinite loop example
function* genFinite() {
    let index = 0;
    while (true) {
        yield index++;
    }
}

const myGenIsX = genFinite();
console.log(myGenIsX.next().value); // 0
console.log(myGenIsX.next().value); // 1
console.log(myGenIsX.next().value); // 2
// ...
console.log(myGenIsX.return()); // stops the generator
```
There's a lot more to this, so check out [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*).

### `label` for Loops
Useful along with `break` and `continue` inside of nested loops. Not particularly common, and I've only used them in VBA, not Javascript
```javascript
first: for (var i = 0; i < 3; i++) {
  second: for (var j = 0; j < 3; j++) {
    if (i === 1) continue first;
    if (j === 1) break second;
    console.log(`${i} & ${j}`);
  }
}
```

### `.freeze()` for Objects/Arrays
Basically what it sounds like. If you apply `const` to an object, the contents are still mutable. Not so when `.freeze()` is applied.
```javascript
const myFavNum= { prop: 42 };
Object.freeze(myFavNum);

myFavNum.prop = 33;
// Throws an error in strict mode

console.log(myFavNum.prop);
// expected output: 42
```
Useful for functional program techniques where mutability is a no-no.
## More to keep in mind  

### `Map()`
Keeps order of key:value pairs. [MDN][https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map]
### `Set()`
Keeps unique values only. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)




