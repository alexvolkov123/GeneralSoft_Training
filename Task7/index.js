class FourSides {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    square() {
        return this.height * this.width;
    }
}

class Square extends FourSides {
    constructor(side) {
        super(side, side);
    }
}

class Rectangle extends FourSides { }

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    square(){
        return Math.PI * this.radius ** 2;
    }
}

function totalSquare(array) {

    let result = 0;
    for(let i = 0; i < array.length; i++) {
        result += array[i].square();
    }
    return result;

}

const square = new Square(5);
const rectangle = new Rectangle(3, 6);
const circle = new Circle(4);
const arrayOfFigures = [square, rectangle, circle];


console.log(totalSquare(arrayOfFigures));





