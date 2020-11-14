class Bird extends BaseClass {
  constructor(x,y) {
    super(x,y,width,height);

    this.image = loadImage("sprites/bird.png");
  }
  diplay() {
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;

    super.display()
  }
}