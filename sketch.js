
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var btn2;

var angle=60;
var mover,mover1,mover2,mover3;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
   btn2 = createImg('up.png');
  btn2.position(350,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
 
  ground1 = Bodies.rectangle(100,400,650,20,ground_options);
  World.add(world,ground1); 
  
  mover= new ground(100,100,20,20)
  mover1= new ground(150,150,20,20)
  mover2= new ground(200,200,20,20)
  mover3= new ground(250,100,20,20)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  
  mover.show()
  mover1.show()
  mover2.show()
  mover3.show()
 

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground1.position.x,ground1.position.y,650,20);
 
//console.log(ground.position.y);

  
  
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  