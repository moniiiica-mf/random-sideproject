//------------------------------
// 	Class Inheritance
//------------------------------
//STEP: from sample-classes.js
//1. bring Pet class
//2. bring Pet instantiations
//3. bring Pet usage instantiations (place in draw);

//STEP: from sample-classes.js
//1. bring PetHouse class
//2. bring PetHouse instantiations
//3. bring PetHouse usage instantiations (place in draw);

//STEP: class extension

class MagicPet extends Pet {
	constructor(name, sound, power){
		super(name, sound);
		this.power = power;
	}
	
	usePower(){
		print(this.name + " uses " + this.power + "!");
	}
}

let smaug = new MagicPet("Smaug", "Grrrr", "Fire Breath");

//in draw
print(smaug.name);
smaug.speak();
smaug.usePower();

//STEP:
let smaugCave = new PetHouse(smaug, "Cave");

smaugCave.knockOnDoor();

//STEP: overriding
class MagicPet extends Pet {
	//...
	speak(){
		print(this.name + " says " + this.sound + "!");
		print("stay away or I will use " + this.power + "!");
	}
}

function draw() {
	mittens.speak();
	print(" ");
	smaug.speak();
	print(" ");
	mittensHut.knockOnDoor();
	print(" ");
	smaugCave.knockOnDoor();
}


//EXERCISE:
//Make a class MagicHouse that extends PetHouse
//... it's constructor is  MagicHouse(pet, typeOfHouse, power);
//... it has a method activate
let magicHut = new MagicHouse(mittens, "Hut", "Giant Bird Legs");
magicHut.activate() //prints Mittens is protected by Giant Bird Legs!

//EXERCISE: override knockOnDoor
magicHut.knockOnDoor()
//This place is magical...
//Mittens says meow!

//------------------------------
// 	Object Systems
//------------------------------
//STEP: from sample-classes.js
//1. bring Cat class
//2. bring Cat instantiation
//3. bring Cat usage (place in draw);

//STEP: 
class Graphic{
	constructor(centerX=0, centerY=0){
		this.x = 0;
		this.y = 0;
		this.rotation = 0;
		this.scale = 1;
		this.centerX = centerX;
		this.centerY = centerY;	  		
	}
	
	drawContent(){
		circle(0,0,100);
	}

	draw(){
		push();

		translate(this.x, this.y);
		rotate(this.rotation);
		scale(this.scale);
		translate(-this.centerX, -this.centerY);
		this.drawContent();
		pop();      
	}
}

let g1 = new Graphic();

g1.draw();


//STEP: 
class Cat extends Graphic{
	constructor(){
		super(200,200);
	}
	
	drawContent(){
		beginShape();
		vertex(100,100);
		vertex(150,150);
		vertex(250,150);
		vertex(300,100);
		vertex(300,250);
		vertex(200,300);
		vertex(100,250);
		endShape(CLOSE)
	}
}

//EXERCISE: turn drawMonster function into Monster class by extending Drawable
let m1 = new Monster();
m1.draw();

//---

class Monster extends Graphic{
	constructor(){
		super(200,200);
	}
	
	drawContent(){
      let pionts = [
        [150,100],[200,150],[250,100],[250,200],[300,200],[250,250],
        [250,350],[200,250],[150,350],[150,250],[100,200],[150,200]];
      beginShape();
      for(let p of pionts){
        vertex(p[0], p[1])
      }
      endShape(CLOSE)
	}
}



//STEP: bring in  Style from sample-classes.js
let redMonster = new Style(new Monster(), "red");
redMonster.x = 200;
redMonster.y = 200;
let greenMonster = new Style(new Monster(), "green");
greenMonster.x = 250;
greenMonster.y = 200;

redMonster.draw()
greenMonster.draw()

//STEP: 
class Transform extends Graphic {
	constructor(graphic, x=0, y=0, s=1, r=0){
		super();
        this.graphic = graphic;
		this.x = x;
		this.y = y;
		this.scale= s;
		this.rotation = r;
	}
	
	drawContent(){
		this.graphic.draw();
	}
}

let redMonster = new Style(new Monster(), "red");
let bigRedMonster = new Transform(redMonster, 300, 250, 1.5);
let smallRedMonster = new Transform(redMonster, 100, 100, 0.5); 


//STEP: bring in Group from sample-classes.js
let monsters = new Group(
  bigRedMonster,
  smallRedMonster
)


//STEP: bring in Radial from sample-classes.js
setup(){
	createCanvas(400, 400);
	angleMode(DEGREES);	
}

let redMonsterWheel = new Radial(redMonster, 6, 30);


//STEP:
class Animation extends Graphic {
	constructor(graphic, speed){
		super();
        this.graphic = graphic;
        this.speed = speed;
		this.frames = 0;
	}

	animate(){
		this.y = this.frames * this.speed;
	}
  
    drawContent(){
		this.graphic.draw();
    }

	draw(){
		this.animate();
		this.frames += 1;
		//this calls the draw function of Graphic class
		super.draw();
	}
}

let redMonsterAnimation = new Animation(redMonster, 1);
redMonsterAnimation.x = 200;

//STEP: generalize
class Animation extends Graphic {
	//..
	animate(){

	}
	//..
}


class slideY extends Animation{
	constructor(graphic, speed){
		super(graphic, speed);
	}
	
	animate(){
		this.y = this.frames * this.speed;
	}
}

//EXERCISE: create a Class slideX subclass of Animation
let redMonsterAnimation = new slideX(redMonster, 1);
redMonsterAnimation.x = 0;
redMonsterAnimation.y = 100;

//STEP: bring in Spinner from sample-classes.js

let redMonsterAnimation = new Spinner(redMonster, 1);
redMonsterAnimation.x = 200;
redMonsterAnimation.y = 200;

//STEP: bring in WobbleX and WobbleY from sample-classes.js

let redMonsterAnimation = new WobbleX(redMonster, 200, 1)
redMonsterAnimation.x = 200;
redMonsterAnimation.y = 200;

//STEP:
let redMonsterAnimation = new WobbleY (
	new WobbleX(redMonster, 200, 1),
	50,
	2,
);

redMonsterAnimation.x = 200;
redMonsterAnimation.y = 200;

//STEP:
let redMonsterAnimation = new Radial(new WobbleY(redMonster, 25, 0.1), 6);
