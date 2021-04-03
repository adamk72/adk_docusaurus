---
title: Getting the Basics Down
---
## Basic Structure
Vue has three basic sections, co-located in a single .vue file:

```javascript 
<template>          // Components, HTML, and special Vue code goes here.
                    
</template>

<script>            // Code elements go here.

</script>

<style>             // CSS code goes here.
                    
</style>
```
You do not need to have all three sections; a single section will be enough to make up a Vue component.

### Template Section
Along with standard HTML, you can use other Vue components and Vue directives here. Directives allow for the control of components and html elements.
```javascript {3}
<template>
    <div class="foo">
        <button v-on:click="add(1)">       // <-- 'v-on:' is a directive
            +1
        </button>
    <div>            
</template>
```

### Script Section
This is where the more sophisticated internal logic of the component is handled. There are two objects in this script section, data() and method. Notice that data() is a function (and it has to be), while method is an object name that contains specifically named functions to be executed in the template or DOM.
```javascript {2}
<script>
    data() {                // data _must_ be a function
        return {
            counter: 0,
        };
    },
    methods: {
        add(num) {
        this.counter = this.counter + num;
        }
    }
</script>
```
There are many more objects that can go into the script section.
### CSS Section
If 'scoped' is applied, css will only apply to this component; otherwise it is global; there is a way for children to access scoped styles as well.
```javascript {1}
<style scoped>                  // 'scoped' attribute is very useful
```
```css {1}
    .foo {                      // .foo will only apply to this component
        font-size: 2rem;        //  because this section is scoped
    }
```
```javascript
</style>
```