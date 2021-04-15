const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bg;
var Boy_1,Boy_1img;
var Boy_2,Boy_2img;
var snowman,snowmanimg;

function preload(){
 bg = loadImage("Images/Background2.png");
 Boy_1img=loadImage("Images/Boy_1.png");
 Boy_2img=loadImage("Images/Boy_2.png");
 snowmanimg=loadImage("Images/Snow man.png");

}


function setup() {
  createCanvas(1500,1000);

  engine=Engine.create();
  world=engine.world;

  Boy_1=createSprite(200,810);
  Boy_1.addImage("Boy",Boy_1img);
  Boy_1.scale=0.5;

  Boy_2=createSprite(500,810);
  Boy_2.addImage("Boy",Boy_2img);
  Boy_2.scale=0.3;

  snowman=createSprite(1000,810);
  snowman.addImage("Snowman",snowmanimg);
  snowman.scale=0.5;
  
snow=new Snow(10,10,10);
  
  
}

function draw() {
  background(bg);  
     
  Engine.update(engine);

  // if(frameCount % 20 == 0){
    // snow=new Snow(Math.round(random(10,1500)),10,100)
    // snow.body.speed=10;
    // }

    snow.speed=10;

    snow.display();

  

  drawSprites();
}