var car,wall;

var speed, weight;

function setup() {
  createCanvas(1600,400);
  speed=random(29,80);
  weight=random(430, 1200);
  
  car=createSprite(20, 200, 50, 50);
 car.velocityX=speed;
car.shapeColor = "white";

wall=createSprite(1500,200,50, heigth/2);
wall.shapeColor = (80,80,80);
}

function draw() {
  background(255,255,255);
  
  isTouching();
  car=createSprite(20, 200, 50, 50);
 car.velocityX=speed;
car.shapeColor = "white";

wall=createSprite(1500,200,50, heigth/2);
wall.shapeColor = (80,80,80);

  drawSprites();
}

function isTouching(){
  if(isTouching()){
    car.isToucing(wall)
    shapeColor = "red";
  }
  else{
    car.shapeColor = "white";
  }
}