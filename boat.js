class Boat {
    constructor (x, y, w, h){
        var prop = {
        restitution: 0.4
        }
        
        this.body=Bodies.rectangle(x,y,w, h, prop)
        World.add(world,this.body);
        this.img=loadImage("assets/boat.png")
        
        this.w = w
        this.h = h
    }
    
    display(){
        push();
        imageMode(CENTER)
        image(this.img, this.body.position.x, this.body.position.y, this.w ,this.h);
        pop();
    }
}