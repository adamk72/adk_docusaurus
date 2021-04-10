---
title: Interesting Features 
slug: /js
---
Things I didn't know till...later.

## Operators
### Nullish coalescing operator (??)
Contrast to the or operator (`||`). `||` returns the RH if the LH is _any_ falsy, but `??` returns the the RH if the LH is `null` or `undefined`, otherwise the LH.

```javascript
/*  ||: assume 'myNullVar' is undefined or null,
    but you want the zero b/c as the fallback  */
const foo =  myNullVar || 0
// returns null (or undefined, as appropriate)

/*  ??: same assumptions  */
const bar =  myNullVar || ''
// returns an empty string
```
Useful if `0` or `''` values are considered, well, useful.