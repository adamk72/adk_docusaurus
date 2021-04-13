---
title: Debugging Tips 
---
## Console Logs
There's way more to console.log than just
```javascript
console.log("Did my code get this far?", whatIsThisVar)
```
(I'm not kidding, there's a lot! [MDN](https://developer.mozilla.org/en-US/docs/Web/API/console)).

Here are some of the more common ones I should use more often:
### `console.time()`
```javascript
console.time("myTimer")
// do some sloooooooow stuff here.
console.timeEnd("myTimer")
// returns "myTimer: 540.4343 ms" in console.
```
### `console.error()`
### `console.warn()`
Both print out better formatted content in the console.
```javascript
console.error("An Error!")
// returns ❌ An Error!
console.warn("A Warning!")
// returns ⚠️ A Warning!
```
You'll have to use it to see it. 😄
### `console.assert()`
Probably better than `.error` or `.warning` for a lot of test circumstances.
```javascript
const a = 75
console.assert(a === 2, "a is not 2!)
// returns ❌ a is not 2!
```
### `console.table()`
Prints out a table-form of an object in the debugger. If it can. 🤔

### `console.dir()`
Displays an interactive list of properties.

## CSS
### Flex Div height -> 0 (WIP)
The scenario is that in a `flex`, the height of the `div` (or other container) goes to zero.

## Non-JS, but Important
:::caution Package Managers

As with many programs, you can use either Npm or Yarn for package management. If you're having weird issues, makes sure you only have one lock file, either for yarn or npm, but not both.

:::