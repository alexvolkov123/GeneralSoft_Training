function MyArray(array) {
    this.array = array;
}

MyArray.prototype.first = function() {
    let result = this.array[0];
    return result;
}

MyArray.prototype.last = function() {
    return this.array[this.array.length -1];
}

MyArray.prototype.skip = function(index) {
    let resultArray = [];
    for(let i = index ; i < this.array.length ; i++) {
        resultArray[i - index] = this.array[i];
    }
    return new MyArray(resultArray);
}

MyArray.prototype.take = function(index) {
    let resultArray = [];
    for(let i = 0 ; i < index ; i++) {
        resultArray[i] = this.array[i];
    }
    return new MyArray(resultArray);
}

MyArray.prototype.map = function(func) {
    let resultArray = [];
    resultArray = this.array.map(func);
    return resultArray;
}

MyArray.prototype.filter = function(func) {
    let resultArray = [];
    resultArray = this.array.filter(func);
    return resultArray;
}


var arr = new MyArray([3, 5, 2, 4, 1]);


console.log(arr.first());
console.log(arr.last());
console.log(arr.skip(2));
console.log(arr.take(2));
console.log(arr.take(4).skip(3));
console.log(arr.take(4).skip(2).first());
console.log(arr.map(item => {return item * item}));
console.log(arr.filter(item => {return item % 2}));
