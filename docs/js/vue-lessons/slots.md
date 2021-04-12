---
title: Slots
---
## Regular Slots



## Scoped Slots
Allows you to pass through HTML/Components, as well as use functions from the child.

### Accessing Props
```javascript
// Child: ContactList
<slot :contact="contact" >
    // Some default content
</slot>

// Parent
<contact-list>
    <template slot-scope="props"> // Allows us to accept arguments from the child
        <a :href="`/contacts/${props.contact.id}`">
            {{ props.contact.name }}
        </a>
    </template>
</contact-list>

//optionally, you can do it w/o the template tags and destructuring.
<contact-list>
        <a slot-scope="{ contact }" :href="`/contacts/${contact.id}`">
            {{ contact.name }}
        </a>
</contact-list>
```

### Returning a Function
```javascript
// Parent:
/*  Note that processThing is the function
    and it needs to wrap the place you're going
    to use it.  */
// Also, this assumes the default slot (v-slot:default)
<abstractThingToDo v-slot="{ processThing }" >
    <button
        @startThingProcess="processThing"
    />
</abstractThingToDo>

//Child: 
<slot :processThing="processThing"> {{ doTheProcessDance }} />
// or, for a renderless version, in child's <script>
render() {
    return this.$scopedSlots.default({
        processThing: this.doTheProcessDance,
    })
},

```

## Function Props
(not really a slot thing, but parallel thought process)
```javascript
// Parent:
<PowerUp :power-up="(power) => power.activate" />

// Child:
// template
<div class="font-bold">
    {{ powerUp(power) }}
</div>
// default
props: ['powerUp']
data() {
    return { powers: [], }
}
```