
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground (500,660,1500,50)
	box1 = new Ground(800,630,300,20)
	box2 = new Ground (950,590,20,100)
	box3 = new Ground (650,590,20,100)
	paperObject=new Paper (10,630,50,50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display()
  box2.display()
  box3.display()
  ground.display()
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === _ARROW) {
	  Matter.bdy.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	   
	 }
   }
   


