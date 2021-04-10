---
title: List Rendering
---
In &lt;template&gt;:
```javascript
// For any list-like needs; especially common with <li>
<ul>
    <li v-for="item in items" v-bind:key="item.id">
        {{item.content}}
    </li>
</ul>

// also can be used with components:

<CarView v-for="car in cars" v-bind:key="car.id" v-bind:carType="car.type">
    {{car.description}}
</CarView>
```
In &lt;script&gt; (component example only):
```javascript
import CarView from '../component/CarView'
export default {
    components: {CarView}
    data () {
        return {
            cars: [
                {id: '1', type: 'Ford', description: '2014 Ranger, black'}
                {id: '2', type: 'Honda', description: '2009 Fit Sport, purple'}
            ]
        }
    }
}
```

:::info

You can import the list from another data source, such as .js file or, more likely, the Internet through some APIs.

:::

