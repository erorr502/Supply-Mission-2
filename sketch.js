var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1,box1Sprite,box2,box2Sprite,box3,box3Sprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(230,192,52);

	box1Sprite=createSprite(400,660, 200,20);
	box1Sprite.shapeColor=color("red");

	box2Sprite=createSprite(500,620, 20,100);
	box2Sprite.shapeColor=color("red")

    box3Sprite=createSprite(300,620, 20,100);
	box3Sprite.shapeColor=color("red")

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	box1 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	 World.add(world, box1);

	box2 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, box2);
	  
    box3 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	 World.add(world, box3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  packageSprite.depth = groundSprite.depth;
  packageSprite.depth = packageSprite.depth+1;

  packageSprite.depth = box1Sprite.depth;
  packageSprite.depth = packageSprite.depth+1;

  packageSprite.depth = box2Sprite.depth;
  packageSprite.depth = packageSprite.depth+1;

  packageSprite.depth = box3Sprite.depth;
  packageSprite.depth = packageSprite.depth+1;

  helicopterSprite.depth = packageSprite.depth;
  helicopterSprite.depth = helicopterSprite.depth+1;
  console.log(packageBody.y);
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false)

    
  }
}



