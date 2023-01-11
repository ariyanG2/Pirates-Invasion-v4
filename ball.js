class Ball {
    constructor (x, y, r){
        var prop = {
        isStatic: true
        }
        
        this.body=Bodies.circle(x,y,r,prop)
        World.add(world,this.body);
        this.img=loadImage("assets/cannonball.png")
        
        this.r = r
    }
    
    display(){
        push();
        imageMode(CENTER)
        image(this.img, this.body.position.x, this.body.position.y, this.r, this.r);
        pop();
    }
    
    shoot (){
        //angle into position
        var speed = p5.Vector.fromAngle(cannon.a)
        speed.mult(20)
        Matter.Body.setStatic(this.body, false); 
        Matter.Body.setVelocity(this.body, {x:speed.x, y:speed.y})
    }
}