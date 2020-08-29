var drop1, drop2, drop3, paperBall, drop1Body, drop2Body, drop3Body, paperBallBody
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	
}

function setup() {
	createCanvas(1200, 800);
    engine = Engine.create();
	world = engine.world;
	
	drop1 = createSprite(615,760,80,10);
	drop1Body = Bodies.rectangle(615,760,100,10,{isStatic:true});
	drop1.shapeColor = "gray";
	World.add(world,drop1Body);
	
	drop2 = createSprite(580,740,10,50);
	drop2Body = Bodies.rectangle(580,740,10,50,{isStatic:true})
	drop2.shapeColor = "gray";
	World.add(world,drop2Body);

	drop3 = createSprite(660,740,10,50);
	drop3Body = Bodies.rectangle(660,740,10,50,{isStatic:true})
	drop3.shapeColor = "gray";
	World.add(world,drop3Body);

	paperBall = createSprite(400,780,80);
    paperBall.shapeColor = "white";
	
	groundSprite=createSprite(600,780,800,20);
	groundSprite.shapeColor="tan";
	
	ground = Bodies.rectangle(width/2, 790, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	paperBallBody = Bodies.circle(400,780,80,{restitution:0.3,isStatic:true})
    World.add(world, paperBallBody);
	
	Engine.run(engine);
  
}


function draw() {
   rectMode(CENTER);
   background(0);
   if(paperBall.isTouching(drop1)||paperBall.isTouching(drop2)||paperBall.isTouching(drop3)||paperBall.isTouching(ground)){
	 Body.setStatic(paperBall,true);
   }
   drawSprites();
}
function keyPressed(){
	if (keyDown(UP_ARROW)){
	    Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x=85,y=-85});
	}
}


