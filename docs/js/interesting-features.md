---
title: Interesting Features 
slug: /js
---
Things I didn't know till...later.

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

## Console Logs
There's way more to console.log than just
```javascript
console.log("Did my code get this far?", whatIsThisVar)
```
:::note

WIP

:::

## Other Stuff
### _Tagged_ Template Literals
Still learning, so this is a reminder. Check out this guide to them: [Wes Bos' Tagged Template Literals](https://wesbos.com/tagged-template-literals)

