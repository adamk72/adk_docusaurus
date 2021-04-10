---
title: Slots
---
## Slots



## Scoped Slots
Allows you to pass through HTML/Components, as well as use functions from the child.

Accessing Props:
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