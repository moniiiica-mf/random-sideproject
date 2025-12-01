class Style{
	constructor(fill = "inherit", stroke = "inherit", strokeWeight = "inherit"){
		this.fill = fill;
		this.stroke = stroke;
		this.strokeWeight = strokeWeight;		
	}
  
    clear(){
		this.fill = "inherit";
		this.stroke = "inherit";
		this.strokeWeight = "inherit";	      
    }
  
    apply(){
		if(this.fill == "none"){
			noFill();
		}else if(this.fill != "inherit"){
			fill(this.fill);     
		}

		if(this.stroke == "none"){
		noStroke();
		}else if(this.stroke != "inherit"){
		stroke(this.stroke);
		}

		if(this.stroke != "none" && this.strokeWeight != "inherit"){
		strokeWeight(this.strokeWeight);
		}
    }
}

class Graphic{
	constructor(centerX=0, centerY=0){
		this.x = 0;
		this.y = 0;
		this.rotation = 0;
		this.scale = 1;
		this.centerX = centerX;
		this.centerY = centerY;
    	this.style = new Style();
	}

	drawContent(){
		circle(0,0,100);
	}

	draw(){
		push();
		translate(this.x, this.y);
		rotate(this.rotation);

		if(Array.isArray(this.scale)){
			scale(...this.scale);
		}else{
			scale(this.scale);
		}
		translate(-this.centerX, -this.centerY);
    	this.style.apply();
		this.drawContent();
		pop();
	}
}

class Group extends Graphic{
	constructor(...graphicItems){
        super(0,0);
        this.graphicItems = graphicItems;
	}

	add(item){
		this.graphicItems.push(item);
	}

	remove(item){
		this.graphicItems.splice(this.graphicItems.indexOf(item),1);
	}

	drawContent(){
		for(let g of this.graphicItems){    
			g.draw();
		}
	}
}

class PolyGon extends Graphic {
	constructor(...pionts){
		super();
		this.pionts = pionts;
	}

	drawContent(){
		beginShape();
		for(let p of this.pionts){
			vertex(p[0], p[1])
		}
		endShape(CLOSE);
	}	
}

class Radial extends Graphic {
  constructor(graphic, num, offset=0){
    super();
    this.graphic = graphic;
	this.x = graphic.x;
	this.y = graphic.y;
	this.centerX = graphic.x;
	this.centerY = graphic.y;
    this.num = num;
    this.offset = offset;
  }
  
  drawContent(){
    let angle = 360 / this.num;
    for(let i=0; i < this.num; i++){
      push();
      angleMode(DEGREES)
      rotate(i * angle);
      translate(0,this.offset);
      this.graphic.draw();
      pop();
    }
  }
}


class Animation extends Graphic {
	constructor(graphic, speed){
		super();
		this.graphic = graphic;
		this.speed = speed;
        this.x = graphic.x;
        this.y = graphic.y;
        this.centerX = graphic.x;
        this.centerY = graphic.y;
        this.originalX = null;
        this.originalY = null;
		this.originalScale = null;
	}

	animate(){
		this.y = this.originalY + frameCount * this.speed;
	}
 
	drawContent(){
		this.graphic.draw();
	}

	draw(){
      this.originalX = (this.originalX == null) ? this.x : this.originalX;
      this.originalY = (this.originalY == null) ? this.y : this.originalY;
	  this.originalScale = (this.originalScale == null) ? this.scale : this.originalScale;
	  this.animate();
	  super.draw();
	}
}

class Sway extends Animation{
    constructor(graphic, speed, amount){
        super(graphic, speed);
        this.amount = amount;
    }

    animate(){
        this.rotation = this.amount * sin(frameCount * this.speed);
    }
}

class Pulse extends Animation{
	constructor(graphic, speed, amount){
		super(graphic, speed);
		this.amount = amount;
	}

	animate(){
		this.scale = this.originalScale + (sin(frameCount * this.speed) * this.amount);
	}
}

class Bob extends Animation{
	constructor(graphic, speed, amount){
		super(graphic, speed);
		this.amount = amount;
	}

	animate(){
		this.y = this.originalY  + (sin(frameCount * this.speed) * this.amount);
	}
}

class Spin extends Animation{
	constructor(graphic, speed, amount){
		super(graphic, speed);
		this.amount = amount;
	}

	animate(){
		this.rotation += this.speed;
	}
}

