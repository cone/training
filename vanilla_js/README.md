# JS Notes

## Modules

I can export a single function without having to use the `default` keyword if I export the function inside an object:

```javascript
const myfunction = () => { ... };

export { myfunction };
```
