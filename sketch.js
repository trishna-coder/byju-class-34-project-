
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function preload()
  {
    bg = loadImage("Background.jpeg")
    hc = loadImage("Helicopter.png")
    pk = loadImage("Package.png")
    bt = loadImage("boat.png")
  }



function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  var packageoption = {
    isStatic:true
  }
  package = Bodies.rectangle(100,50,20,20,packageoption)
World.add(world,package)
  var options = {
    isStatic:true
  }
boat = Bodies.rectangle(00,300,10,10,options)
World.add(world,boat)

  helicopter = Bodies.rectangle(100,20,20,20,options)
  World.add(world,helicopter)
}


function draw() 
{
  background(51);
  image(bg,0,0,400,400)
  Engine.update(engine);
  image(pk, package.position.x+50,package.position.y+30, 30,30)
  image(hc,helicopter.position.x,helicopter.position.y,150,100)
  image(bt,boat.position.x,boat.position.y,100,75)
}
function keyPressed(){
  if(keyCode===LEFT_ARROW)
{
  boat.position.x -=10

}
else if(keyCode===RIGHT_ARROW)
{
  boat.position.x +=10
  
}
 else if(keyCode===DOWN_ARROW)
{
  Matter.Body.setStatic(package,false)
    
}
}

