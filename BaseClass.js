class BaseClass{
  constructor(x,y,width,height,angle){
    var options = {
      'restitution': 1.3,
      'friction': 0.8,
      'density': 0.3
    }

    this.body = Bodies.rectangle(x,y,width,height,angle,options);
    this.width = width;
    this.height = height;
    Matter.Body.setAngle(this.body,angle);
    this.image = loadImage("sprites/base.png");
    
    World.add(this.body,world);
  }
  display() {
    pos = this.body.position;
    ang = this.body.angle;

    push();
    translate(pos.x,pos.y);
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
  }


}