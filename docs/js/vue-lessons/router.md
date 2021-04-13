---
title: Router (WIP)
---
:::caution TODO: Fill in the parts that happen _before_ all of this
:::

### Watch $route
Since changing routes does not necessarily call `created`, you can watch $route like this to be informed of a change.
```javascript
export default {
    watch: {
        $route(newRoute) {
            this.doSomethingOnChangeOfRoute
        }
    }
}
```

