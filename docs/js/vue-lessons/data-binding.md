---
title: Data Binding
---
Data Binding a core feature of Vue, allowing for a developer to inject code elements directly into HTML. You bind an attribute to Vue using <em>v-bind:attribute</em> or its shortcut <em>:attribute</em>.

One way to think of data binding is that it "converts" a string into something else; more to the point, it changes the context of what we normally think of as a string to variable that is located in the `<script>` tag section. The variable could be a number, an object, or an actual string (which you can change programmatically).

## Example
```javascript
<div v-bind:template="myTemplate"></div>
<div :value="myNumber"></div> // shortcut version
// where in the script section, there is:
data () {
    return {
        myTemplate: {
            active: true,
            'text-danger': false
        },
        myNumber: 0
    }
}
```
## With Class
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

For more information checkout: [Vue's Class and Style Guide](https://vuejs.org/v2/guide/class-and-style.html).
## More Examples
This type of binding is how `props` are passed.
```javascript
// adds or removes the disabled element base on truthiness
<button :disabled="isButtonDisabled”>
// displays class 'active' based truthiness
<div :class="{ active: isActive }">
// Sets color to whatever 'activeColor' is.
<div :style="{ color: activeColor }">
```
:::tip

Over time, you'll find it becomes more intuitive to simply type the short cut `:` before an attribute in component/HTML tag. Give it time!

:::