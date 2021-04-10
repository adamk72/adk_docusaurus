---
title: Expressions 
---
Recall that expressions are not complex functions. They need to evaluate to a value, rather than an action.
```javascript
<div class="foo">
    <p>Will you pay by credit card? {{ payByCredit ? 'yes' : 'no'}} </p>
    <p>Please make me a glass of {{ beverage }}.</p>
    <p>Do you want one or two {{ snack + 's' }}?</p>
</div>
```