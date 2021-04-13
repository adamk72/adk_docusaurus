---
title: Refs (WIP)
---
Retrieve DOM elements when you need them.
```javascript
<input type="text" ref="theText" />

// later in code
setText() {
    this.message = this.$refs.theText.value
    // in this case, '.value' comes from the fact
    // that theText refs an input element.
}
```