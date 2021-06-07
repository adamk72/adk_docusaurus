---
title: Vuex
---
Managing global state.

## The Code
### Setup
```javascript
// in main.js
import { createStore } from 'vuex'

const store = createStore ({
    // for modules, see towards bottom
    modules: {
        myThings: myThingModule
    },
    // All of this can be outsourced to modules.
    state() {
        return { myThing: 0, isFoo: false  }
    },
    // mutations must be synchronous
    // Better to use actions
    mutations: {
        // payload is optional and can be anything.
        changeMyThing(state, payload) { 
            // do stuff to state.myThing.
        }
    },
    getters: {
        // getters is optional and provides access to other getters
        getMyThing(state, getters) {
            return state.myThing * 42
        }
    },
    // Replace mutations; can be asynchronous
    actions: {
        // can use same name
        changeMyThing(context) {
            context.commit('changeMyThing', 37)
            // context.dispatch
            // context.getters
            // context.state (using Getter is better)
        }
    }
})
```

### State and Getters
```javascript
// State, basic mode (not the ideal)
const thing = $store.state.myThing;

// Getters are better
const thing = $store.getters.getMyThing;
```

### Mutations
```javascript
// Mutations; Actions are recommended
$store.commit('changeMyThing', { value: 3});

//optionally 
$store.commit({
    type: 'changeMyThing',
    monster: 10,
    whatever: 'foo'
})
```

### Actions
```javascript
// Actions can be asynchronous
// Same settings as Mutations::commit
$store.dispatch('changeMyThing')
```

### `mapGetters`/`mapActions`
Full of computed properties which point to their respective getters. Useful for saving some effort.

`mapGetters` is applied in the `methods:` section; `mapActions` is applied in the computed section;
```javascript
<template>
    <p>{{ changeMyThing }}</p>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions} from 'vuex'
export default {
    methods: { 
        ...mapGetters(['changeMyThing', 'otherChangeAction'])
        // There's also an object way to rename these, but for a later time.
    }
    computed: {
        ...mapGetters(['changeMyThing'])
    }
}
</script>
```

## Modules
Organize your states better.

```javascript
// Back in main.js, before store creation
// Create an object
const myThingModule = {
    // all of the same things, but specific to your needs.
    // create others for different functionality
} 
```
:::info

Modules create scope, so you won't see the other details if, say, you console log the state of something in a particular module. This means you can't communicate from one module to another, unlike you could have if you put everything in the main store object.

:::

:::tip A workaround for this scoping condition is to use `rootState` and `rootGetters`

:::

### Namespaces
Avoid clashing names between modules
```javascript {2}
const myThingModule = {
    namespaced: true,
    // all the other stuff
} 
``` 
```javascript {3}
//  Your module:
const myThingModule = {
    namespaced: true,
    // all the other stuff
}
```
```javascript {5}
/*  Remember in the store, 'myThings'?
    That's your namespace name.  */
const store = createStore ({
    modules: {
        myThings: myThingModule
    },
    // ...
})
```
```javascript
// and use it like this:
return this.$store.getters['myThings/getMyThing']

// and like this: 
...mapGetters('myThings', ['getMyThings'])

// and for Actions:
$store.dispatch('myThings/changeMyThing')
```
:::info

There's a whole lot more on managing modules for larger/more complex applications, but most of it is just import/exports from various files

:::
