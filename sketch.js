
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ground
var ball1
var box1,box2,box3
function preload()
{
	//dustbinimg=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
//	ground=new Ground(400,680,800,10)
	ground1=new Ground(400,200,300,10)
	ball1=new ball(300,400,20)
	ball2=new ball(350,400,20)
	ball3=new ball(400,400,20)
	ball4=new ball(450,400,20)
	ball5=new ball(500,400,20)
//	box1=new box(600,625,10,100)
	//box2=new box(650,625,10,100)
	//box3=new box(625,670,100,10)
    rope1= new rope(ball1.body,{x:300,y:200})
	rope2= new rope(ball2.body,{x:350,y:200})
	rope3= new rope(ball3.body,{x:400,y:200})
	rope4= new rope(ball4.body,{x:450,y:200})
	rope5= new rope(ball5.body,{x:500,y:200})


}


function draw() {
  rectMode(CENTER);
  background(255);
 // ground.display()
  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()

 // box1.display()
 // box2.display()
  //box3.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  ground1.display()
  //image(dustbinimg,625,600,150,150)
  drawSprites();
 
}
function mouseDragged(){

	Matter.Body.setPosition(ball1.body, {x:mouseX,y:mouseY})
}


