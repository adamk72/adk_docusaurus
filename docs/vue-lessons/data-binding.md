---
title: Data Binding
---
Data Binding a core feature of Vue, allowing for a developer to inject code elements directly into HTML. You bind an attribute to Vue using <em>v-bind:attribute</em> or its shortcut <em>:attribute</em>.
```javascript
// one way to bind is to a variable, in this case, an object:
<div v-bind:class="classObject"></div>
// where in the script section, there is:
data () {
    return {
        classObject: {
            active: true,
            'text-danger': false
        }
    }
}
```
When using the class attribute specifically, you can add both a bound and unbound version:
```javascript
<div
  class="static"                                            // "unbound"
  :class="{ active: isActive, 'text-danger': hasError }"    // "bound"
></div>
// where data is
data () {
    return {
        isActive: true,
        hasError: false
    }
}
// will render in HTML:
<div class="static active"></div>
// if hasError was true it would render:
<div class="static active text-danger"></div>
```
Since the unbound class is applied along with the bound class, this results in a complete class being rendered as expected.

For more information checkout: [Vue's Class and Style Guide](https://vuejs.org/v2/guide/class-and-style.html)