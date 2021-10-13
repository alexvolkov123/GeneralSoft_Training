class FourSides {
    constructor() {

    }
    
    square(height, width) {
        return height * width;
    }
}

class Square extends FourSides {
    constructor(side) {
        super();
        this.height = side;
        this.width = side;
    }
    super.square(this.height, this.width)
    
}

class Rectangle extends FourSides {
    constructor(side1, side2) {
        super(side1, side2)
        this.height = side1;
        this.width = side2;
    } 

    square(height, width) {
        return height * width;
    }
}
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    square(radius) {
        return Math.PI * radius ** 2;
    }
}

function totalSquare(array) {

}

const square = new Square(5);
const rectangle = new Rectangle(3, 6);
const circle = new Circle(4);
const arrayOfFigures = [square, rectangle, circle];


console.log(square.square())
// console.log(totalSquare(arrayOfFigures));






