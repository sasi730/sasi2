// Change './index' to 'is-null-or-empty' if you use this code outside of this package
var sasi2 = require('./index');

console.log(sasi2("")); // true
console.log(sasi2(null)); // true
console.log(sasi2(undefined)); // true

console.log(sasi2("Hello World")); // false