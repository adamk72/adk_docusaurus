---
title: Lifecycle Hooks
---
Details at [Vuejs.org](https://v3.vuejs.org/api/options-lifecycle-hooks.html)
## General Usage
These are placed essentially at the root of the `<script>` tag, in line with objects like `methods:`, `watch:`, `data()` and so on.
```javascript
<script>
export default {
    name: 'MyCoolComponent',
    beforeCreate() {
        // Do some stuff after initialization and before anything else
        console.log('beforeCreate hook has been called');
    }
}
</script>
```
## List (WIP)
+ beforeCreate
+ created
+ beforeMount
+ mounted
+ beforeUpdate
+ updated
+ beforeDestroy
+ destroyed