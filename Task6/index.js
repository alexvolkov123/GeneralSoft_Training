function MyArray(array) {

    MyArray.prototype = MyArrayProto;

    return {
        first: () => array[0],
        last: () => array[array.length-1],
        skip: index => array.slice(index),
        take: index => array.slice(0,index),
        map: func => array.map(func),
        filter: func => array.filter(func),
    }
}

function MyArrayProto(array) {

    return {
        first: () => array[0],
        last: () => array[array.length-1],
        skip: index => array.slice(index),
        take: index => array.slice(0,index),
        map: func => array.map(func),
        filter: func => array.filter(func),
    }
}

var arr = new MyArray([3, 5, 2, 4, 1]);


console.log(arr.first());
console.log(arr.last());
console.log(arr.skip(2));
console.log(arr.take(2));
console.log(arr.take(4).skip(3));
// console.log(arr.take(4).skip(2).first());
console.log(arr.map(item => {return item * item}));
console.log(arr.filter(item => {return item % 2}));
