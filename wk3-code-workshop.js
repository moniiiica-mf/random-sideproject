https://p5js.org/
https://p5js.org/reference/
https://editor.p5js.org/damiantgill/sketches/hMlK6oflT
https://editor.p5js.org/damiantgill/sketches/lOOoXZZps
https://editor.p5js.org/damiantgill/sketches/bjvCh6lzz


//-------------------------
// 	stage0 : setup
//-------------------------
createCanvas
background

//-------------------------
// 	stage1 : coordinates
//-------------------------

	strokeWeight(10);
	//x how far from left to the right
	//y how far form top to bottom
	point(100,100);
	//1
	point(200,200);
	//2
	createCanvas(400, 600);
	point(width,height);
	//3
	point(width/2,height/2);
	
//------------------------------
// 	stage 1a : exercise 1
//------------------------------

	point(0,0);
	point(0,height);
	point(width,height);
	point(width,0);
	point(width/2,height/2);
	point(width/2,0);
	point(width/2,height);
	point(width/2 + 20,height/2);
	point(width/2 - 20,height/2);
	point(width/2,height/2 + 20);
	point(width/2,height/2 - 20);
	
	//example 1
	point(0,0);
	point(0,400);
	point(400,400);
	point(400,0);
	point(200,200);
	point(200,0);
	point(200,400);
	point(200 + 20,200);
	point(200 - 20,200);
	point(200,200 + 20);
	point(200,200 - 20);
	
	//example 2
	background(240);
	strokeWeight(10);
	let centerX = width/2;  
	let centerY = height/2;
	point(centerX, centerY);
	point(centerX + 20, centerY);
	point(centerX - 20, centerY);
	point(centerX, centerY + 20);
	point(centerX, centerY - 20);

//------------------------- 
// 	stage2 : primitives
//-------------------------

	//1
	rect(100,100,100,50);
	//2
	rect(300,100,50,200);
	//3
	rect(50,50,100,100);
	//4
	rect(50,50,100,100);
	rect(100,100,100,100);
	//... add more rects
	
//------------------------- 
// 	stage3 : color
//-------------------------

	//1
	//...
	fill(0);
	//2
	fill(127);
	//3
	...
	//R,G,B
	fill(255,0,0);
	//4
	...
	fill(0,0,255);
	//5
	fill(255,0,0);
	rect(50,50,100,100);
	fill(0,0,255);
	rect(100,100,100,100);
	
	//... examples with alpha
	
	//6
	strokeWeight(10);
	...
	
	//6
	strokeWeight(10);
	stroke(100);
	...
	//... examples of different stroke colors
	//... show noStroke
	
	//7
	...
	stroke(100,50,255);
	fill(255,0,0);
	rect(50,50,100,100);
	fill(0,0,255);
	stroke(255,100,0);
	rect(100,100,100,100);
	
//------------------------------
// 	stage4 : other primitives
//------------------------------

	ellipse(50,220,50,100);
	circle(350, 225, 50);
	square(400, 200, 50);
	
	
//------------------------------
// 	exercise2
//------------------------------

	strokeWeight(5);
	stroke(255,255,0);
	fill(255,100,0);
	rect(100,100,200,100);
	strokeWeight(20);
	stroke(100);
	fill(0,200,200);
	circle(100, 200, 50);
	circle(300, 200, 50);
	strokeWeight(0);
	fill(0,255,255,100);
	circle(200, 100, 100);
	



//------------------------------
//	review
//------------------------------

	point(200,200);


//------------------------------
// 	stage5 : variables
//------------------------------

	//A variable is a coding construct that holds a value.
	//In some ways you could say it remembers a value.
	//Some variables might be assigned a value once.
	//Others might be repeatedly updated though out execution. 

	//STEP: a variable that is assigns once.
	circle(height,width, 100);

	//STEP:
	circle(height / 2, width / 2, 100);

	//STEP: with the above two still in place.
	createCanvas(200, 200);

	//STEP: clear above
	//A variable that updates
	circle(mouseX,mouseY, 50);

	//STEP: with the above remove background to show draw over

	//STEP: with the above add background but with alpha to show transparency
	background(255, 255, 255, 125);

	//clear draw code
	//lets create out own
	let x1 = 0;
	circle(x1, 100, 50);

	//STEP: reassign x to see changes
	 let x1 = 100;
	 circle(x1, 100, 50);	

	//STEP: assign to x and reuse
	let x1 = 100;
	circle(x1, 100, 50);

	x1 = 200;
	circle(x1, 100, 50);

	//STEP: rephrase x assignment expression
	x1 = x1 + 100;
	
	//STEP: move x to global above setup
	
	//STEP: reassign x locally
	
	//STEP: animate
	X1 = X1 + 2
	
	//STEP: apply X1 a second circle
	x1 = x1 + 1;
	circle(x1, 100, 50);
	circle(x1, 200, 50);
	
	//STEP: create a new variable initialized to a different value 
	x1 = x1 + 1;
	x2 = x2 + 1;
	circle(x1, 100, 50);
	circle(x2, 200, 50);	
	
	//EXERCISE: given the above code
	//add a third variable X3 and add a thirds circle that starts from X3 = 0;
	//Animate it with 
	X3 = X3 + 1;
	
	//demonstrate that we can do all this with one variable
	//using an expression in the circle functions
	x1 = x1 + 1;
	circle(x1, 100, 50);
	circle(x1 + 100, 200, 50);
	circle(x1 + 200, 200, 50);
	
	//STEP: show variable renaming
	//clear above
	let frank = 0 //in global space
	
	//in draw
	frank = frank + 1;
	circle(frank, 100, 50);	
	
	//EXERCISE: one simple change will turn this from a sideways motion...
	//to a downward motion... what is it?
	
	//STEP: the significance of noLoop();
	//place a call to noLoop() in setup()
	//we see the screen only draws once
	
//------------------------------
// 	stage6 : conditionals
//------------------------------

	//conditionals allow us to execute code when a certain condition is met
	
	//STEP: 
	let xpos = 100; //in global scope

	//in draw()
	xpos = xpos + 1;
	circle(xpos, height/2, 50);
	
	
	//STEP: lets change the color half way
	if(xpos > 200){
		fill("orange")
	}
	
	//STEP: lets change the default color
	if(xpos > 200){
		fill("orange");
	}else{
		fill("red");
	}
	
	//EXERCISE: what do we need to change if we want the default color to be blue
	//EXERCISE: what do we need to change if we want the color change to happen after x is 100
	
	//STEP: lets reverse the condition
	if(xpos < 200){
		fill("orange");
	}else{
		fill("red");
	}
	
	//STEP: lets make the conditional more complex
	if(xpos < 200){
		fill("orange");
	}else if (xpos > 300){
		fill("white");
	}else{
		fill("red");
	}
	
	//challenge : what if we want the circle to stop moving after x > 350
	//this would mean that we want xpos = xpos + 1 to execute only when x < 350
	
//------------------------------
// 	stage6 : loops
//------------------------------

	//STEP:
	noLoop();
	...
	print("hello!");
	
	//STEP:
	let n = 0
	do{
		print(n);
		n = n + 1;
	}while(n < 10);
	
	//EXERCISE: how do we change the loop to print out 3...9
	//EXERCISE: how do we change the loop to print out 3...6
	
	//STEP:
	for(let n = 0; n < 5; n = n + 1){
		print(n)
	}
	
	//EXERCISE: how do we change the loop to print out 0...12
	//EXERCISE: how do we change the loop to print out 2...10
	//EXERCISE: how do we change the loop to print out 2...8
	
	//STEP: Back-wards loop
	for(let n = 10; n >= 0; n = n - 1){
		print(n)
	}

	//EXERCISE: how do we change the loop to print out 12...0
	//EXERCISE: how do we change the loop to print out 10...2
	//EXERCISE: how do we change the loop to print out 8...2

	//STEP:
	noStroke(); //put in setup
	
	let n = 0;
	do{
		print(n);
		square(50 * n, 100, 25);
		n = n + 1;
	}while(n < 10);
	
	//EXERCISE: how do we change the loop to create 5 squares
	
	//STEP:
	for(let n = 0; n < 5; n = n + 1){
		print(n);
		square(50 * n, 100, 25);
	}
	
	//STEP:
	for(let n = 0; n < 5; n = n + 1){
		square(50 * n, 100, 5 * n);
	}
	//EXERCISE: why does the first square not show?
	//EXERCISE: what if we want the first square not to be 0?
	
	//STEP:
	for(let n = 1; n <= 5; n = n + 1){
		square(50 * n, 50 * n, 5 * n);
	}
	
	//STEP:
	for(let n = 0; n < 5; n = n + 1){
		square(50 * n, 50 * n, 5 + (5 * n));
	}
	
	//STEP:
	for(let n = 1; n < 4; n = n + 1){
		fill(50 * n);
		square(50 * n, 50 * n, 5 * n);
	}
	
	//STEP:
	//remove noStroke();
	//add noFill()

    stroke(255)
	for(let n = 0; n < 5; n = n + 1){
		circle(200, 200, 20 * n);
	}
	
	//STEP:
	for(let n = 0; n < 7; n = n + 1){
		stroke(50 * n);
		circle(200, 200, 20 * n);
	}
	
	//EXERCISE: make a row of 6 circles 
	
	
	//EXAMPLE
	for(let n = 0; n < 5; n = n + 1){
		strokeWeight(2)
		stroke(50 * n);
		circle(200, 200, 40 * n);
	}
  
	for(let n = 0; n < 5; n = n + 1){
		strokeWeight(10)
		stroke(255);
		point(200, 200 + (20 * n))
	}
  
	for(let n = 0; n < 4; n = n + 1){
      strokeWeight(n);
	  stroke(255);
	  ellipse(200, 200, 300, 100 * n);
	}
	
	
	