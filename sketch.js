const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var balls = []
var boats = []

function preload() {
 bgImg=loadImage("assets/background.gif");
 towerImg=loadImage("assets/tower.png");

}
function setup() {

 createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
 var prop = {
   isStatic: true
 }

 tower=Bodies.rectangle(150, 350, 150, 310, prop)
 World.add(world, tower);

 ground=Bodies.rectangle(600, 550, 1300, 15, prop)
 World.add(world, ground);

 cannon=new Cannon(160, 110, 130, 100, 56)
 
 
}

function draw() {
  background(bgImg);
  Engine.update(engine);
  push()
  imageMode(CENTER)
  image(towerImg, tower.position.x, tower.position.y, 150, 310);
  pop();
  
  createBoats()
  
  //rect(x,y,w,h)
  //image(name,x,y,w,h)
  cannon.display(); 
  for(var i = 0; i < balls.length; i++){
    balls[i].display()
  }
}

function keyPressed(){
  if(keyCode===32){
    ball=new Ball(cannon.x, cannon.y, 30);
    balls.push(ball)
  }
}


function keyReleased(){
  if(keyCode===32){
    balls[balls.length - 1].shoot();
  }
}

function createBoats(){
  if(boats.length > 0){
    if(boats[boats.length - 1].body.position.x < 1000){
      boat =new Boat (1200, 530, 150, 150)
      boats.push(boat)
    }
    for(var i = 0; i < boats.length; i++){
      boats[i].display()
      Matter.Body.setVelocity(boats[i].body, {x:-1, y:0})
    }
  } else {
    boat= new Boat (1200, 530, 150, 150)
    boats.push(boat)
  }
}