## Iterators polyfill

This polyfill brings Iterators and Iterables to JavaScript for older browsers.

With ES2015, the [Iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) Symbol is used to make an object *Iterable*. While there are many great things to say about Iterables, you probably already know and love them from `for ... of` expressions.

There is [another polyfill](https://github.com/medikoo/es6-iterator) out there, but it relies heavily on `Object.defineProperty` which doesn't work on non-DOM objects in IE8.

According to the EcmaScript 2015 standard specification, `arguments` are `Iterable`. That would make them usable in `for ... of` expressions. However, since there is no concept of an `Argument` interface in the specification yet, this would only be polyfillable by extending the prototype of `Object`. While that *is* a solution, it doesn't work in IE8. If you use rest parameters, please know that babel transpiles it into an array - so don't worry!

This polyfill adds Iterators for:
- Array
- String
- NodeList

The data types `Map`, `Set` and `TypedArray` all came with the EcmaScript 2015 standard. Great polyfills of those already implement iterables. Thus these are not included in this polyfill.

### Dependencies
- It requires `Symbol` to be defined. Its easily polyfilled.

### Install
Install with
```javascript
npm install iterators-polyfill
```

### Usage
Load it in your code with an import statement:
```javascript
import "iterators-polyfill";
```
Or from a script tag:
```html
<script src="../node_modules/iterators-polyfill/polyfill.min.js"></script>
```

The polyfill will be applied automatically if necessary.
It works outside a global context too.
