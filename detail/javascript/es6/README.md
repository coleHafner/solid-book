# ES6

## Let keyword

`var` is the old way of defining variables. It has function scope.

`let` is an es6 way pf defining variable; it has block scope.

```javascript

function() {
  // v1 exists but is undefined
  // v2 doesn't exist

  for(let v2=0; v2<10; ++v2) {
    // v2 is defined
    // v1 is defined
  }

  var v1=0;
  // v1 is defined
  // v2 doesn't exist
}
```
