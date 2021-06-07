---
title: Directives
---
Directives are commands that you attach to a DOM element. Think of it as being able to apply conditional logic and control structures directly into your content.

## `v-on`
```javascript
// Child:
<button v-on:click="() => $emit('mySpecialEvent')">
    Click me!
</button>

// Parent:
<TheChild @mySpecialEvent="doTheThing" />
// script
methods: {
    doTheThing () { /* doing the thing */ }
}

```
`@` is the short cut for `v-on:`
```javascript
<button @click="() => $emit('mySpecialEvent')">
```

## `v-if`/`v-else`
Like you'd expect
```javascript
<TheCoolThing v-if="isThisCool" />
<NotCoolAtAll v-else>

/*  in <scope>; page updates according
    to when a condition changes on a
    given variable. */
data () {
    return { isThisCool: true }
}
```
