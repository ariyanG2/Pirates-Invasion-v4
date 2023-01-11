class Cannon {

  constructor (x, y, w, h, a){
   
   this.x = x
   this.y = y
   this.w = w
   this.h = h
   this.a = a
   
   this.base=loadImage("assets/cannonBase.png");
   this.img=loadImage("assets/canon.png");
   
  }

   display(){
    if(keyIsDown(RIGHT_ARROW) && this.a < 57.3 ){
      this.a = this.a + 0.2
    }

    if(keyIsDown(LEFT_ARROW) && this.a > 55.5 ){
      this.a = this.a - 0.2
    }

    push()
    translate(this.x, this.y);
    rotate(this.a)
    imageMode(CENTER);
    image(this.img, 0, 0, this.w, this.h)
    pop()
    
    image(this.base,50, 20, 220, 200);

   }

}