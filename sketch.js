const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;
var engine,engineWorld;
var ground;



function setup() {
  createCanvas(800,400);
engine = Engine.create();
engineWorld = engine.world;

var options = {
  isStatic:true
}
ground = Bodies.rectangle(400,380,800,20,options);
World.add(engineWorld,ground);

box1 = new Box(600,200);
box2 = new Box(600,200);
box3 = new Box(600,200);
box4 = new Box(600,200);
box5 = new Box(600,200);
box6 = new Box(650,200);
box7 = new Box(650,200);
box8 = new Box(650,200);
box9 = new Box(650,200);
box10 = new Box(650,200);
ball = new Ball;
rope = new Rope(ball.body,{x:385,y:50});
}

function draw() {
  background("black");  
Engine.update(engine);
rectMode(CENTER);
rect(ground.position.x,ground.position.y,800,20);

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
ball.display();
rope.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}