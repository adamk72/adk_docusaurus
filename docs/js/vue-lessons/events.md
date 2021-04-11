---
title: Event Handling
---

For now: https://vuejs.org/v2/guide/events.html


## Prop and Event Fallthrough
:::caution This is incomplete/WIP
:::
```javascript
// Parent:
<myComponent @click="doThatThingYouDo">Do it!</myComponent>

// Child:
<template>
    <button> <slot></slot> </button>
</template>
<script> export default {} </script>
```
Despite there being nothing in the child, effectively, this still works because the passed through event, `@click`, will be added to the _root_ element, like this:


```javascript
// Child, again:
<template>
    <button @click="doThatThingYouDo"> <slot></slot> </button>
</template>
<script> export default {} </script>
```
## Binding All Props
WIP