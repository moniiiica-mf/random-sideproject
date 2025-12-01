//------------------------------
// 	Object Methods
//------------------------------

//STEP:
noLoop();

let mary = {
	firstName:"Mary",
	lastName:"Baker",
    city:"Chicago"
};

print(mary.firstName + mary.lastName);

//STEP: add space
print(mary.firstName + " " + mary.lastName);

//STEP: add city
print(mary.firstName + " " + mary.lastName + " from " + mary.city);

//STEP: add method
info(){
	print(this);
}

//STEP:
info(){
	print(this.firstName);
}

//STEP:
info(){
	print(this.firstName + " " + this.lastName + " from " + this.city);
}

//EXERCISE: using Mary as a template create a object for Tom Flynn who lives in Portland.


let tom = {
	/* Wat goes here? */
}

let tom = {
  firstName:"Tom",
  lastName:"Flynn",
  city:"Portland",
  info(){
    print(this.firstName + " " + this.lastName + " from " + this.city);
  }
};

//STEP: let's generalize or make a template based on the common pattern

function makePerson(firstName, lastName, city){
	return {
		/* Wat goes here? */
	}
}

let sal = makePerson("Sal", "Greco", "Miami");
sal.info() //prints "Sal Greco from Miami";

//STEP: lets make a new object
let figure = {
	x:100,
	y:200
}

print(figure.x);

//EXERCISE: make an info method in that prints the x and y values like "x:100 y:200"

//EXERCISE: make a function that given an x and y value, makes a new figure object
let fig1 = makeFigure(100, 200);
fig1.info() //prints 

//STEP: 
rectMode(CENTER);
square(200,200, 50);
circle(200,200, 25);

//EXERCISE: turn this into a function "drawFigure" that draws this figure at a given x and y

function drawFigure(x, y){
	/* what goes here */
}

//EXERCISE: how do we add this to our figure object as a method?




//------------------------------
// 	stage : transformations
//------------------------------

//STEP:
//in setup
noLoop();

function draw() {
	background(50);
	stroke(255);
	noFill();	
	square(200,200,50);
}

//STEP:
rectMode(CENTER);

//STEP:
line(0,0,200,200);
square(200,200,50);
square(200,200,200);
square(200,200,400);
circle(0,0,50);

//STEP: 
//move the origin
translate(100,50);

//EXERCISE: set the origin ton the center of the screen;

//STEP:
//remove the translate above!
//rotate about the origin
angleMode(DEGREES);
rotate(30);

//STEP: combine
translate(100,50);
rotate(30);


//STEP:
translate(200,200);
rotate(30);

//STEP:
translate(200,200);
rotate(30);
translate(-200,-200);


//STEP:
translate(100,300);
rotate(30);
translate(-200,-200);


//EXERCISE: rotate 45 deg in the center of the sketch;
//EXERCISE: rotate 60 deg at x:300 and y:100;

//STEP:
translate(200,200);
rotate(30);
scale(0.50);

//STEP:
translate(200,200);
rotate(30);
scale(0.50);
translate(-200,-200);

//EXERCISE:  scale 0.5 at 45deg at x:300 and y:100;

//STEP:
function drawMarker(){
	line(0,0,200,200);
	square(200,200,50);
	square(200,200,200);
	square(200,200,400);
	circle(0,0,50);
}


//STEP:
translate(200,200);
rotate(30);
scale(0.50);
translate(-200,-200);
drawMarker();

translate(100,100);
rotate(30);
scale(0.50);
translate(-200,-200);
drawMarker();
//ooops

//STEP:
push();
pop();

//STEP: add a third;

//EXERCISE: add a fourth at 100, 300

//STEP: turn it into a function
function drawMarker(x,y,r,s){
	push();
	translate(x,y);
	rotate(r);
	scale(s);
	translate(-200,-200);  

	line(0,0,200,200);
	square(200,200,50);
	square(200,200,200);
	square(200,200,400);
	circle(0,0,50);
	pop();
}

//STEP: 
function drawMarker(x,y,r,s){
	push();
	strokeWeight(1/s);
	//...
}

//see examples




//==================
function drawGrid(divisions){
  let cellWidth = width/divisions;
  let cellHeight = height/divisions;
  for(let i=0; i <= divisions; i++){
    line(cellWidth * i,0,cellWidth * i,height);
    line(0,cellHeight * i,width,cellHeight * i);
  }
}