//------------------------------
// 	Objects with Class
//------------------------------

//Review
let tom = {
  firstName:"Tom",
  lastName:"Flynn",
  city:"Portland",
  info(){
    print(this.firstName + " " + this.lastName + " from " + this.city);
  }
};

function makePerson(firstName, lastName, city){
	return {
      firstName:firstName,
      lastName:lastName,
      city:city,
      info(){
        print(this.firstName + " " + this.lastName + " from " + this.city);
      }
	}
}

let sal = makePerson("Sal", "Greco", "Miami");
let sue = makePerson("Susan", "Dole", "Orlando");

function draw() {
  tom.info();
  sal.info();
  sue.info();
}

//STEP:
class Person {
	constructor(firstName, lastName, city){
		this.firstName = firstName;
		this.lastName = lastName;
		this.city = city;
	}

	info(){
		print(this.firstName + " " + this.lastName + " from " + this.city);
	}
}

let sam = new Person("Sam", "Baker", "Portland");
let tim = new Person("Tim", "Smith", "Denver");

draw(){
  sam.info();
  tim.info();	
}

//EXERCISE:
//... add a person named Sara Potter from Reno
//... add a person named Kim Smith from Mesa
//... print out their info along with Sam and Tim

//EXERCISE:... add a method fullName that just prints the full name of a person
sam.fullName();  //prints "Sam Baker"
tim.fullName();  //prints "Tim Smith"
sara.fullName(); //prints "Sara Potter"
kim.fullName();  //prints "Kim Smith"

//STEP: keep class Person as reference

//EXERCISE: make a class Pet where we give the constructor a pet name and a pet sound
//... the pet has a method makeSound that names the animal with the sound it makes

let mittens = new Pet("Mittens", "meow");
let pepper = new Pet("Pepper", "woof"
let bessy = new Pet("Bessy", "moo");

print(mittens.name);  //...prints "Mittens";
print(mittens.spund); //...prints "meow";

//EXERCISE: add method makeSound that names the animal with the sound it makes
mittens.makeSound(); //..."Mittens says meow!";
pepper.makeSound();  //..."Pepper says woof!";
bessy.makeSound();   //..."Bessy says moo!";

class Pet{
	constuctor(name, sound){
		this.name = name;
		this.sound = sound;
	}

	makeSound(){
		print(this.name + " says " + this.sound); 
	}
}

//------------------------------
// 	Object Composition
//------------------------------

//NOTE keep the above

//STEP
class PetHouse{
	constructor(pet, typeOfHouse){
		this.pet = pet;
		this.description = description;
	}
	
	describe(){
		print("this is a " + this.typeOfHouse + " for" + this.pet.name;
	}
}

let mittensHut = new PetHouse(mittens, "hut");
let pepperTower = new PetHouse(mittens, "tower");

//STEP
class PetHouse{
	//...same as above
	knockOnDoor(){
		Print("you knock on the door and...");
		this.pet.makeSound();
	}
}

mittensHut.knockOnDoor();

//EXERCISE: make a class Office that has a an address property and contains a person object
//... it has an info method that return the person's info and the address they work at

let tom = new Person("Tom", "Hardy", "London");
let tomOffice = new Office(tom, "21 Baker Street");

tomOffice.info()
// Tom Hardy from London
// works at 21 Baker Street

//------------------------------
// 	Draw Shapes : with class
//------------------------------

function draw() {
	background(50);
	noFill();
	stroke(255);
	beginShape();
	vertex(100, 100);
	vertex(300, 100);
	vertex(200, 300);
	endShape();
}

//STEP:
function draw() {
	//... same as above
	endShape(CLOSE);
}

//STEP:
function draw() {
	background(50);
	noFill();
	stroke("red");
	//... draw shape
}


//EXERCISE: put this into a Function drawTriangle(color);
drawTriangle("green");

//EXERCISE: make a class Triangle
//... whose constructor takes a color parameter;
//... with a draw function that draws 

let tri = new Triangle("green");

tri.draw();

//STEP
class Transformer {
	constructor(figure, centerX=0, centerY=0){
		this.figure = figure;
		this.x = 0;
		this.y = 0;
		this.rotation = 0;
		this.scale = 1;
		this.centerX = centerX;
		this.centerY = centerY;
	}

	draw(){
		push()
		translate(this.x, this.y);
		rotate(this.rotation);
		scale(this.scale);
		translate(-this.centerX, -this.centerY);
		strokeWeight(1/this.scale)  
		this.figure.draw();
		pop();		
	}
}

let tri = new Triangle("green");
let triTransform = new Transformer(tri, 0, 0);

triTransform.draw();
//STEP

triTransform.x = 100;
triTransform.y = 100;
triTransform.draw();

//STEP
let triTransform = new Transformer(tri, 200, 160);

//STEP
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}

triTransform.x = 100;
triTransform.y = 100;
triTransform.rotation = 45;
triTransform.draw();

//STEP
triTransform.rotation += 1;

//STEP
triTransform.x += 100;
triTransform.rotation += 1;


//------------------------------
// 	Animation
//------------------------------

//STEP
class Slider{
	constructor(drawable, x, y, speed){
		this.transformer = new Transformer(drawable, 0, 0);
        this.transformer.x = x;
        this.transformer.y = y;
		this.speed = speed;
	}
	
	draw(){
		this.transformer.x += this.speed;
		this.transformer.draw();
	}
}

let tri = new Triangle("green");
let triTransform = new Transformer(tri, 200, 160);
let slideTri = new Slider(triTransform, 0, 200, 1);

draw(){
	//...
	slideTri.draw();
}

//STEP
class Spinner{
	constructor(drawable, centerX, centerY, speed){
	  this.transformer = new Transformer(drawable, centerX, centerY);
      this.speed = speed;
	}
	
	draw(){
		this.transformer.rotation += this.speed;
      this.transformer.draw();
	}
}

let tri = new Triangle("green");
let triTransform = new Transformer(tri, 200, 160);
let triSpin = new Spinner(triTransform, 0, 0, 1);
let slideTri = new Slider(triSpin, 0, 200, 1);

//STEP:
let triSpin = new Spinner(triTransform, 0, 100, 1);

//STEP:
class Wobble{
	constructor(drawable, speed){
		this.transformer = new Transformer(drawable, 0, 0);
		this.
		this.speed = speed;
	}
	
	draw(){
		this.transformer.centerY = this.transformer.y + (sin(this.speed * frameCount) * 100);
		this.transformer.draw();
	}
}

let tri = new Triangle("green");
let triTransform = new Transformer(tri, 200, 160);
let triSpin = new Spinner(triTransform, 0, 0, 1);
let slideTri = new Slider(triSpin, 0, 200, 1);
let triWobble = new Wobble(slideTri, 5);


//------------------------------
// 	Animation with sin
//------------------------------

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}

for(let i=0; i <= 12; i++){
	let degrees = i * 30;
	let sinValue = sin(degrees);
	print(degrees + " : " + round(sinValue, 1));
}

//STEP:
for(let i=0; i <= 12; i++){
	let degrees = i * 30;
	let sinValue = sin(degrees) * 100;
	print(degrees + " : " + round(sinValue, 1));
}

//remove no loop from setup
print(round(sin(framecount)));

//STEP:
print(round(sin(frameCount) * 100, 1));































//STEP:
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(50);
  noFill();
  stroke(255);
  line(200,400,200,125);
  circle(200,100, 50);
  circle(200,100, 30);
  circle(200,400, 20);
}


//STEP:
function stem(){
  line(200,400,200,125);
  circle(200,100, 50);
  circle(200,100, 30);
  circle(200,400, 20);
}

//in draw
stem();

//STEP:
function stem(x=0, y=0, r=0, s=1){
  translate(x,y);
  circle(0,0,20);
  rotate(r);
  scale(s);
  line(200,400,200,125);
  circle(200,100, 50);
  circle(200,100, 30);
  circle(200,400, 20);
}

//STEP:
function stem(x=0, y=0, r=0, s=1){
  translate(x,y);
  circle(0,0,20);
  rotate(r);
  scale(s);
  translate(-200,-400);
  line(200,400,200,125);
  circle(200,100, 50);
  circle(200,100, 30);
  circle(200,400, 20);
}


//STEP:
function stem(x=0, y=0, r=0, s=1){
	push();
	//...same as above...
	pop();
}

//STEP:
stem(200,350,0,1);
for(let i=1; i<=3; i++){
	stem(200,100 + (i * 50), 45, 0.3);
	stem(200,100 + (i * 50), -45, 0.3);
}

//EXERCISE: can you turn this into a function called branch()

//EXERCISE: can you add branch(x, y, r, s) params and transforms
function branch(x=0, y=0, r=0, s=1){
  push()
  translate(x,y);
  rotate(r);
  scale(s);
  translate(-200,-350);
  strokeWeight(1/s)  
  stem(200,350,0,1);
  for(let i=1; i<=3; i++){
    stem(200,100 + (i * 50), 45, 0.3);
    stem(200,100 + (i * 50), -45, 0.3);
  }
  pop();
}


//in draw
branch(200,200,0, 0.5)


//STEP:
for(let i=0; i<6; i++){
	branch(200,200,i * 60, 0.5); 
}

//EXERCISE: can you create a function snowFlake(x, y, r, s);
snowFlake(100,100,0,0.3);
snowFlake(300,100,0,0.5);
snowFlake(190,280,0,1);

//STEP:
snowFlake(100,100,frameCount,0.3);
snowFlake(300,100,frameCount,0.5);
snowFlake(190,300,frameCount,1);

//STEP: Save this file!

//------------------------------
// 	Objects with Class
//------------------------------

//Review
let tom = {
  firstName:"Tom",
  lastName:"Flynn",
  city:"Portland",
  info(){
    print(this.firstName + " " + this.lastName + " from " + this.city);
  }
};

function makePerson(firstName, lastName, city){
	return {
      firstName:firstName,
      lastName:lastName,
      city:city,
      info(){
        print(this.firstName + " " + this.lastName + " from " + this.city);
      }
	}
}

let sal = makePerson("Sal", "Greco", "Miami");
let sue = makePerson("Susan", "Dole", "Orlando");

function draw() {
  tom.info();
  sal.info();
  sue.info();
}

//STEP:
class Person {
	constructor(firstName, lastName, city){
		this.firstName = firstName;
		this.lastName = lastName;
		this.city = city;
	}

	info(){
		print(this.firstName + " " + this.lastName + " from " + this.city);
	}
}


let sam = new Person("Sam", "Baker", "Portland");
let tim = new Person("Tim", "Smith", "Denver");

function draw() {
  sam.info();
  tim.info();
}

//EXERCISE: create a new 




//STEP:
let figure = {
	x:100,
	y:200,
	draw(){
		square(this.x, this.y, 50);
		circle(this.x, this.y, 25);
	}
}

function draw() {
  background(50);
  noFill();
  stroke(255);
  rectMode(CENTER);
  figure.draw();
  figure.x = 300;
  figure.draw();
}

//EXERCISE: can you create a class Figure whose constructor takes an X and Y value
// let fig1 = new Figure(100,100);

//EXERCISE: lets add transforms

//STEP: return to SnowFlake sketch

class SnowFlake{
	constructor(x=0, y=0, r=0, s=1){
		this.x = x;
		this.y = y;
		this.r = r;
		this.s = s;
	}
	
	draw(){
		snowFlake(this.x, this.y, this.r, this.s);
	}
	
}

let sf1 = new SnowFlake(150,200, 0, 0.75);

//STEP: 
let flakes = [];

function draw() {
  background(50);
  noFill();
  stroke(255);
  //notice this loop
  for(let f of flakes){
    f.draw();
  }
}

function mousePressed(){
  flakes.push(new SnowFlake(mouseX, mouseY, 0, random(0.2, 1)))
}

//STEP:
class SnowFlake{
	draw(){
		this.y += 1;
		this.r += 1;
		snowFlake(this.x, this.y, this.r, this.s);
	}	
}


//------------------------------
// 	Object Extension
//------------------------------
class Employee extends Person{
	constructor(firstName, lastName, city, salery){
		super(firstName, lastName, city);
		this.salery = salery;
	}

	fullInfo(){
		this.info();
		print("This person earns " + this.salery + " a year");
	}
}

