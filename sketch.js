const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var helicopterImg, helicopterSprite, packageSprite, packageImg, groundSprite;
var packageBody, groundBody;


function preload()
{
	helicopterImg=loadImage("helicopter.png")
	packageImg=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	//create package,helicopter and ground sprites
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageImg);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterImg);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	//create engine and world
	engine = Engine.create();
	world = engine.world;

	//create package and ground bodies
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	//run engine
	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);

  //sprite taking body's positions
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}