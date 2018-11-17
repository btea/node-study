class Polygon{
    constructor(height, width){
        this.name = 'Polygon';
        this.height = height;
        this.width = width;
    }
    sayName(){
        console.log('Hi, I am a ', this.name + '.');
    }
    sayHistory(){
        console.log('Polygon is derived from the Greek polus (many)' + 'and gonia (angle).')
    }
}

class Square extends Polygon{
    constructor(length){
        super(length, length);
        this.name = 'Square';
    }
    get area(){
        return this.height * this.width;
    }
    set area(value){
        this.area = value;
    }
}
var s = new Square(5);
s.sayName();
console.log('The area of this square is' + s.area);