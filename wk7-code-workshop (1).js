//------------------------------
// 	Composing Transforms
//------------------------------

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

let Sam = new Person("Sam", "Baker", "Portland");
let tim = new Person("Tim", "Smith", "Denver");


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

