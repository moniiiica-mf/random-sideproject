//------------------------------
// 	stage1 : nested arrays
//------------------------------

//STEP:
let cars = ["truck","bus","cab"];
let fruit = ["apple","pear","lemon"];

//STEP: put them in an array
let things = [["truck","bus","cab"],["apple","pear","lemon"]];
//how do we access them;

print(things[0]);
print(things[1]);

//STEP: 
print(things[0][0]);
print(things[1][2]);

//EXERCISE: how do we print the first element of the second array "apple"
//EXERCISE: how do we print the second element of the first array "bus"

//STEP: 
for(let i=0; i < 2; i++){
	print(things[i]);
}

//STEP:
for(let i=0; i < 2; i++){
	print(things[i]);
	for(let j=0; j < 3; j++){
		print(things[i][j])
	}
}

//STEP:


let grid = [
	[0,1,0,1],
	[0,1,0,1],
	[1,1,1,0],
	[0,1,0,0],
]

function draw() {
  background(50);
  noStroke();
  fill("orange");
  
  for(let row=0; row < 4; row++){
      for(let col=0; col < 4; col++){
          if(grid[row][col] == 1){
            square(col*100, row*100, 100)
          }
      }
  }
}

//------------------------------
// 	Objects
//------------------------------

//STEP:
noLoop(); //in Setup
let person1 = {
  name:"Sam",
  age: 27
}

print(person1.name);
print(person1.age);

//STEP: with above
person1.age = 37;
print(person1.age);

//EXERCISE: give Sam a weight property of 150 and print out the property with the others.
//EXERCISE: add a new person object called person2. print out her properties
//... her name is Sue
//... her age is 31


//STEP:
let people = [
	{
	  name:"Sam",
	  age: 27
	},
	{
	  name:"Sue",
	  age: 31,
	},
	{
	  name:"Marla",
	  age: 29,		
	}
];

for(let i = 0; i < 3; i++){
	let person = people[i];
	print(person);
}

//STEP: in loop above
print(person.name);
print(person.age);

//STEP: arrays are objects and have a property length

for(let i = 0; i < people.legnth; i++){
	//... same as above
}

//STEP: add to people
{
  name:"Tim",
  age: 43,		
}

//------------------------------------------------
// 	stage : Arrays Adding and removing values 
//------------------------------------------------

//STEP:
let fruit = ["apple","pear"];
print(fruit);
print(fruit.length);

fruit.push("lemon");
print(fruit);
print(fruit.length);

//EXERCISE: add "mango" and "kiwi" to the end of the list

//STEP:
fruit.splice(2,1);

//EXERCISE: remove "pear" from the list

function removeAtIndex(array, index){
	//... deletes the item at that index
}


//------------------------------
// 	stage : Objects + Arrays
//------------------------------
let items = [
	{x:100, y:200},
	{x:50, y:100},
	{x:200, y:300}
];


for(let i = 0; i < items.length  ; i++){
	let item = items[i];
	circle(item.x, item.y, 100);
}


//EXERCISE: Add the property width to the objects and have that effect the radius of the generated circles;

//STEP:
function mousePressed() {
	print(mouseX, mouseY)
}

//STEP:
function mousePressed() {
	items.push({x:mouseX, y:mouseY, width:random(20,80)});
}

//EXERCISE: add a "color" property to out items and render it

//STEP:
//at the end of draw
if(selected){
	fill("orange");
	circle(selected.x, selected.y, selected.width);    
}


function mouseMoved() {
  for(let i = 0; i < items.length; i++){
      let item = items[i];
      if(dist(item.x, item.y, mouseX, mouseY) < item.width/2){
        selected = item;
        return;
      }else{
        selected = null;
      }
  }
}