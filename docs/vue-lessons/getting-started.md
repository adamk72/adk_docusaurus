---
title: Lessons in Vue
slug: /vue-lessons
---

This is my guide to Vue. I've tried to keep it simple so that I can skim through it easily. I hope it serves you well.

## Assumptions

This won't be beginner friendly, per se. I'm creating this site mostly as reference that I'm familiar with and can easily get to where I need to be. Also, beware of errors. I don't necessarily check what I input.

As such, I'll be skipping the basics, like how for loops and other control features work, for instance. I'll also skip the basics of installation, since you can locate that at [Vue's website (v2)](https://vuejs.org/v2/guide/).

Also, I'm going to skip Vue that is instantiated as an object, like this:

```javascript
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
  },
});
```

:::tip

Creating an app this way and mounting to the DOM is one way to apply Vue directly to a high-level .html file (or any .html file, really).

:::

## Structure

The sidebar will contain broad topics. My goal is to create incremental steps, so that as you go through, each section builds simply on the previous. I realize I'm going to have to make some jumps back and forth between topics, and I'll try to do that with links rather than repeating myself.

I hope I learn a lot and I hope you enjoy and learn a lot as well.

## Debugging Issues

I'll put major Vue-specific issues I encounter here. You can find more on Javascript in general at [Debugging Tips](js/debugging-tips.md).

#### Transitions

The `<transition>` Vue tag expects only a single root element for a component. (or at least only one element in the DOM.)

```javascript
<transition>
  <MyBaseElement />
</transition>

// elsewhere in MyBaseElement.vue...
// Transition doesn't know which to pick
<template>
  <div>
    /* some stuff */
  </div>
  <dialog>
    /* some other stuff */
  </dialog>
</template>
```

You can move `<transition>` into the component (with some changes in logic, probably):

```javascript
// in MyBaseElement.vue...
<template>
  <div>/* some stuff */</div>
  <transition>
    <dialog>/* some other stuff */</dialog>
  </transition>
</template>
```
