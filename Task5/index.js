console.log(myLibrary.isArray([]));
console.log(myLibrary.isDate(new Date));
console.log(myLibrary.isBoolean(true));
console.log(myLibrary.isNumber(123.4));
console.log(myLibrary.isString("welcome"));
console.log(myLibrary.isFunction(()=>{}));
console.log(myLibrary.isUndefined(undefined));
console.log(myLibrary.isNull(null));
console.log(myLibrary.isNaN(NaN));
console.log(myLibrary.deepEqual(Object, Object));

var Sam = new myLibrary.Developer('Sam', 'Winchester', 'Front-end');
var Din = new myLibrary.Developer('Din', 'Winchester', 'Back-end');

console.log(Sam === Din);
console.log(Sam);
console.log(Din);

console.log(myLibrary.sum(2,3));
console.log(myLibrary.sum(2,3));
console.log(myLibrary.sum(2,3));
console.log(myLibrary.sum(2,5));
console.log(myLibrary.sum(2,5));