---
title: More on <script>
---
This is a quick look at what can be put between the `<script>` tags. Some elements may be described in greater detail elsewhere; I'll try to link to those places when I can. 
I didn't hit everything. Details here at [Vuejs.org](https://012.vuejs.org/api/options.html). Lifecycle hooks are here at [Lifecycle Hooks](./lifecycle-hooks).
## Data, Assets, and Others 
```javascript
<script>
/* Imports go at the top.
    Components need to be declared in the right section for use in the <template> area.
*/
import from '../ThingToImport'

export default {
    // name: String
    // for use with Vue.Extend
    name: 'SomeNameForComponent',
    components: { ThingToImport },
    // props Array|Object
    props: {
        title: String, // what it is expected to be.
        count: Number,
    },
    // data: Object|Function
    data: function () { // data () {} works too (no colon).
        return {
            thingMsg: 'Things Rule!'
        }
    },
    // methods: Object
    methods: {
        plus: function () { /* do addition */ },
        minus: function () { /* do subtraction */ }
    },
    // computed: Object
    computed: {
        doubleMe: function () { return this.count * 2}
        // can also do get and set; see Vuejs for more.
    },
    // mixins: Array
    mixins: [ myFirstMixin, myLastMixin ],
    // watch: Object
    watch: {
        'count': function (value, oldValue) { /* do stuff! */ }
    },
    // inherit: Boolean::false. Used for sharing scope with children
    inherit: true,
    // events: Object
    events: {
        //WIP
    },
    // filters: object
    filter: {
        concat: function(value, input) { return value + input }
        // use in <template>: {{msg | concat userInput}}
    },
    /*  And still a lot more... */
}
```
:::tip

Don't forget to add `,` after everything and if you're having troubles, make sure you didn't accidentally put an object inside another object (or outside of where you wanted it)

:::

## Setup
### Destructuring 
```javascript
/*  was:
    setup (props, context) {}
*/
setup (props, { attrs, slots, emit }) {
    // You can't destructure the props like normal, so do this:
    const { title } = toRefs(props)
}
```