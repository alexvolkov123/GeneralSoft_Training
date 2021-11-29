console.log(myLibrary.isArray([]));
console.log(myLibrary.isDate(new Date));
console.log(myLibrary.isBoolean(true));
console.log(myLibrary.isNumber(123.4));
console.log(myLibrary.isString("welcome"));
console.log(myLibrary.isFunction(()=>{}));
console.log(myLibrary.isUndefined(undefined));
console.log(myLibrary.isNull(null));
console.log(myLibrary.isNaN(NaN));

var obj = {
  a: 1, 
  b: 2, 
  c: {
    c1: 1, 
    c2: 2,
    c3: {
      c4: 4,
    },
  }
}

var obj2 = {
  a: 1, 
  b: 2, 
  c: {
    c1: 1, 
    c2: 2,
    c3: {
      c4: 4,
    },
  }
}


console.log(myLibrary.deepEqual(obj, obj2));

var Sam = new myLibrary.Singleton('Sam', 'Winchester', 'Front-end');
var Din = new myLibrary.Singleton('Din', 'Winchester', 'Back-end');

console.log(Sam === Din);
console.log(Sam);
console.log(Din);

console.log(myLibrary.sum(2,3));
console.log(myLibrary.sum(2,3));
console.log(myLibrary.sum(3,2));
console.log(myLibrary.sum(2,3));
console.log(myLibrary.sum(2,5));
console.log(myLibrary.sum(2,5));