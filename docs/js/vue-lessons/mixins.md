---
title: Mixins & Filters
---
## Mixins
Mixins allow for composition between components. 

myMixin.js
```javascript
export default {
    // cannot share components
    data () {
        return {
            someVariable: false;
        }
    },
    methods: {
        showResults: {
            this.someVariable: true;
        }
    }
}
```
MyComponent.vue
```javascript
<script>
import theMixin from '../mixins/myMixin.js'
export default {
    mixins: [ theMixin ]
}
</script>
```

:::info

If the parent component has the same script details, such as data, then the mixin will be merged with it. In the case of conflicts, the parent component wins.

:::

## Filters
```javascript
<template>
    <p>{{ myText | toUppercase }}
</template>

<script>
export default {
    data () {
        return {
            myText: 'capitalize ME!';
        }
    },
    filters: {
        toUppercase(value) {
            return value.toUppercase
        }
    }
}
</script>

```