
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftWall, rightWall;





function preload()
{
	
}

function setup() {
	createCanvas(700, 300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0.1,
		density:1.2 
	}

	ball = Bodies.circle(90, 90, 20, ball_options);
	World.add(world, ball);

	var plane_options={
		isStatic: true
	}

	plane = Bodies.rectangle(350, 295, 700, 20, plane_options);
	World.add(world, plane)
	leftWall = Bodies.rectangle(450, 270, 10, 40, plane_options);
	World.add(world, leftWall);
	rightWall = Bodies.rectangle(570, 270, 10, 40, plane_options);
	World.add(world, rightWall);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  
	rect(leftWall.position.x, leftWall.position.y, 10, 40);
	rect(rightWall.position.x, rightWall.position.y, 10, 40);
	rect(plane.position.x, plane.position.y, 700, 20)

	ellipse(ball.position.x, ball.position.y, 20);

	keyPressed();

  drawSprites();
 
}


function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {
			x: 12,
			y: -13
		  });	}
}





