/**
 * 原型链继承
*/
function Parent(name){
    this.name = name;
}
Parent.prototype.sayName = function(){
    console.log('parent name:', this.name);
}
function Child(name){
    this.name = name;
}
Child.prototype = new Parent('father');
Child.prototype.constructor = Child;

Child.prototype.sayName = function(){
    console.log('child name:',this.name);
}
var child = new Child('son');
child.sayName();

// 只要是原型链中出现过的原型，都可以说是该原型链派生的实例的原型。
// 这种方法存在两个缺点：
// 1.子类型无法给超类型传递参数，在面向对象的继承中，我们总希望通过

/**
 * 类式继承
*/
function Parent(name){
    this.name = name;
}
Parent.prototype.sayName = function(){
    console.log('parent name:',this.name);
}
Parent.prototype.doSomthing = function(){
    console.log('parent do something!');
}
function Child(name, parentName){
    Parent.call(this, parentName);
    this.name = name;
}
Child.prototype.sayName = function(){
    console.log('child name:', this.name);
}
var child = new Child('son');
child.sayName();
child.doSomthing();
// 缺点：没有原型，每次创建一个Child实例对象时候都需要执行一遍Parent函数，无法复用一些公用函数

/**
 * 组合式继承（原型链继承和类式继承的组合）
*/

function Parent(name){
    this.name = name;
}
Parent.prototype.sayName = function(){
    console.log('parent name:',this.name);
}
Parent.prototype.doSomthing = function(){
    console.log('parent do something!');
}
function Child(name, parentName){
    Parent.call(this, parentName); // 第二次使用
    this.name = name;
}
Child.prototype = new Parent(); // 第一次使用
Child.prototype.constructor = Child;
Child.prototype.sayName = function(){
    console.log('child name:',this.name);
}
var child = new Child('son');
child.sayName();
child.doSomthing();
// 组合继承是比较常用的一种继承方法，其背后的思路是使用原型链实现对原型属性和方法的继承,
// 而通过借用构造函数来实现对实例属性的继承。
// 这样，既通过在原型上定义方法实现了函数复用，又保证每个实例都有它自己的属性。
// 组合继承是js最常用的继承模式，但组合继承只用过程中会被调用两次：一次是创建子类型的时候，另一次是在子类型构造函数的内部。


/**
 * 寄生组合继承
*/
function Parent(name){
    this.name = name;
}
Parent.prototype.sayName = function(){
    console.log('parent name:',this.name);
}
function Child(name, parentName){
    Parent.call(this, parentName);
    this.name = name;
}
function create(proto){
    function F(){}
    F.prototype = proto;
    return new F();
}
Child.prototype = create(Parent.prototype);
Child.prototype.sayName = function(){
    console.log('child name:', this.name);
}
Child.prototype.constructor = Child;
var parent = new Parent('father');
parent.sayName();

var child = new Child('son','father');
child.sayName();
// 寄生组合式继承方式， 跟组合方式继承的区别在于，他不需要再一次实例中调用两次父类的构造函数，
// 假如说父类的构造器代码很多，还需要调用两次的话对系统肯定有影响，寄生组合式继承的思想在于：
// 用一个F空的构造函数去取代执行了Parent这个构造函数。


/**
 * ES6继承
*/
class Parent{
    constructor(name){
        this.name = name;
    }
    doSomthing(){
        console.log('parent do something!');
    }
    sayName(){
        console.log('parent name:',this.name);
    }
}
class Child extends Parent{
    constructor(name, parentName){
        super(parentName);
        this.name = name;
    }
    sayName(){
        console.log('child name:', this.name);
    }
}
const child = new Child('son', 'father');
child.sayName();            // child name: son
child.doSomething();        // parent do something!

const parent = new Parent('father');
parent.sayName();           // parent name: father