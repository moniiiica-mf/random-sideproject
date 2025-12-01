//----------------------------------------------
//	A closer look at the P5.js web editor
//----------------------------------------------

//1. open the files tab
//2. examine the HTML / CS / JS files
//3. create images directory

//----------------------------------------------
//	Working with images
//----------------------------------------------
//STEP - download image files
//STEP - upload image files to p5.js project images directory

//STEP - create image variables
let img1;
let img2;
let img3;

//STEP - create preload
function preload() {
  img1 = loadImage('/images/diatom1.png'); // Load your image
  img2 = loadImage('/images/diatom2.png'); // Load your image
  img3 = loadImage('/images/diatom3.png'); // Load your image
}


//STEP - draw the Image
draw(){
	background(220);
	image(img1,0,0)
}

//STEP - size image
draw(){
	background(220);
	image(img1,0,0,100,100)
}

//STEP - position image
draw(){
	background(220);
	image(img1,200,200,100,100)
}

//STEP - add another image
draw(){
	background(220);
	image(img1,200,200,100,100)
	image(img2,100,200,100,100);
}


//STEP - rotate image
setup(){
	angleMode(DEGREES);
}

draw(){
	background(220);
	image(img1,200,200,100,100)
	image(img2,100,200,100,100);
	rotate(45);
	image(img3,0,0,100,100);
}

//STEP - correct for center point
setup(){
	angleMode(DEGREES);
	imageMode(CENTER);
}


draw(){
	background(220);
	image(img1,200,200,100,100)
	image(img2,100,200,100,100);
	rotate(45);
	translate(100, 100); 
	image(img3,0,0,100,100);
}


//STEP - tint
draw(){
	background(220);
	image(img3,200,200,200,200);
}

//STEP 
draw(){
	background(220);
	tint(255,0,0);
	image(img3,200,200,200,200);
}

//STEP 
draw(){
	background(220);
	tint(255,255,255);
	image(img3,200,200,200,200);
}

//STEP 
draw(){
	background(220);
	tint(255,255,255,100);
	image(img3,200,200,200,200);
}

//STEP 
draw(){
	background(220);
	tint(255,100);
	image(img3,200,200,200,200);
}

//STEP 
draw(){
	background(220);
	image(img2,50,50,100,100);
	tint(255,100);
	image(img3,200,200,200,200);
}

//STEP 
draw(){
	background(220);
	image(img2,50,50,100,100);
	push();
	tint(255,100);
	image(img3,200,200,200,200);
	pop();
}

//NOTE - see "Working With images" demo




//------------------------------
// 	Working with Frameworks
//------------------------------
//STEP: upload graphics-framework.js

//STEP: add script tag for graphics-framework.js

//STEP: look inside graphics framework
//1. Graphic base class
//2. PolyGon

//STEP:
let tri = new PolyGon([100,100], [300,100], [200,200])

function draw() {
  background(220);
  tri.draw();
}

//STEP: go to graphics framework start

//STEP: style monster1
monster1.style.fill = "none";
monster1.style.stroke = "red";


//STEP: style monster1
monster1.style.fill = "none";
monster1.style.stroke = "red";

//EXERCISE: style cat1 with green stroke and no fill

//STEP: make a monster class
class Monster extends PolyGon{
  constructor(){
    super(
      [150,100], [200,150], [250,100],
      [250,200], [300,200], [250,250],
      [250,350], [200,250], [150,350],
      [150,250], [100,200], [150,200] 
    );

    this.centerX = 200;
    this.centerY = 200;
  }
}

let monster = new Monster();

//EXERCISE: make a cat class

//STEP: animation
new Animation(new Cat(), 1);

//STEP: make a new animation class
class Bob extends Animation{
	constructor(graphic, speed, amount){
		super(graphic, speed);
		this.amount = amount;
	}

	animate(){
	  this.y = this.originalY + sin(frameCount * this.speed) * this.amount;
	}
}

new Bob(new Monster(), 2, 20);

//STEP: change cat animation
new Sway(new Cat(), 10, 15);

//STEP: group objects
let g1 = new Group(cat1, monster1);

function draw() {
  background(220);
  g1.draw();
}

//STEP: animate group
let g1 = new Spin(new Group(cat1, monster1), 1);

//STEP: center animation
g1.centerX = 200;
g1.centerY = 200;
g1.x = 200;
g1.y = 200;



//STEP: radial
let monster1 = new Radial(new Monster(), 3, 100);

monster1.style.fill = "none";
monster1.style.stroke = "red";
monster1.x = 200;
monster1.y = 200;

function draw() {
  background(50);
  monster1.draw();
}

//STEP: animate radial
let monster1 = new Radial(
  new Bob(new Monster(), 1, 25),
  6,
  100
);

//------------------------------
// 	Fractal Tree
//------------------------------
//STEP
class FractalTree extends Group{
  constructor(branches, angle){
    super();
  }

  drawContent(){
    line(0,0, 0, 100);
    super.drawContent();
  }
}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

let tree = new FractalTree(1, 45);
tree.x = 200;
tree.y = 0;
tree.style.strokeWeight = 10;

function draw() {
	background(50)
	stroke(255)
	noFill();
	tree.draw();
}



//STEP add first branch
class FractalTree extends Group{
  constructor(branches, angle){
    super();
    if(branches > 0){
      let leftBranch = new FractalTree(branches - 1, angle);
      leftBranch.rotation = angle;
      leftBranch.y = 100;
      this.add(leftBranch);
    }
  }

  drawContent(){
    line(0,0, 0, 100);
    super.drawContent();
  }
}

//STEP scale branch
class FractalTree extends Group{
  constructor(branches, angle){
    super();
    if(branches > 0){
		//...
		leftBranch.scale = 0.75;
		this.add(leftBranch);
    }
  }
}

//EXERCISE: add a right branch;
// hint the right branch will be the same except it will rotate in the opposite direction
rightBranch.rotation = -angle;

//STEP
class FractalTree extends Group{
  constructor(branches, angle){
    super();
    if(branches > 0){
        let leftBranch = new FractalTree(branches - 1, angle);
        leftBranch.rotation = angle;
        leftBranch.y = 100;
        leftBranch.scale =  0.75
      
        let rightBranch = new FractalTree(branches - 1, angle);
        rightBranch.y = 100;
        rightBranch.rotation = -angle;
        rightBranch.scale = 0.75;
      
        this.add(leftBranch);
        this.add(rightBranch);
    }
  }

  drawContent(){
    line(0,0, 0, 100);
    super.drawContent();
  }
}

//STEP - animate tree
class FractalTree extends Group{
  constructor(branches, angle){
    super();
    if(branches > 0){
		//...
        this.add(new Sway(leftBranch, 1, 5));
        this.add(new Sway(rightBranch, 1, 5));
    }
  }
}


//STEP - set tree upright
tree.x = 200;
tree.y = 400;
tree.scale = [1,-1]

	
	drawContent(){
		this.graphic.draw();
	}
}