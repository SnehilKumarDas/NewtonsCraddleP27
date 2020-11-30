
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Bob1,Bob2,Bob3,Bob4,Bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Bob1 = new Bob(460,500,45);
	Bob2 = new Bob(415,500,45);
	Bob3 = new Bob(370,500,45);
	Bob4 = new Bob(325,500,45);
	Bob5 = new Bob(280,500,45);

	roof = new Roof(375,300)

	rope1 = new Rope(Bob1.Bob,roof.body,100,0);
	rope2 = new Rope(Bob2.Bob,roof.body,40,0); 
	rope3 = new Rope(Bob3.Bob,roof.body,-20,0);
	rope4 = new Rope(Bob4.Bob,roof.body,-60,0); 
	rope5 = new Rope(Bob5.Bob,roof.body,-100,0);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();
  
 
}

function keyPressed(){

if(keyCode === UP_ARROW){

	Matter.Body.applyForce(Bob1.Bob,Bob1.Bob.position,{ x:50,y:-45})
	
}

}



