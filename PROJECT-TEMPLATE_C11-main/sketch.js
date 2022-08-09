var sea, seaImg, invisibleSea;
var ship, shipImg, shipAnimation;

function preload(){
 seaImg = loadImage("sea.png");
 shipAnimation = loadAnimation("ship.1.png","ship.2.png","ship.3.png","ship.4.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200,400,40);
  sea.addImage(seaImg);
  sea.scale = 0.5
  sea.velocityX=-2

  ship = createSprite(200,300,40,40);
  ship.addAnimation("ship.1.png","ship.2.png","ship.3.png","ship.4.png");
  ship.scale = 0.15
  ship.velocityX = 2
  
  invisibleSea = createSprite(200,350,400,20);
  invisibleSea.visible = false;
}

function draw() {
  background("blue");
    drawSprites();
  
  ship.collide(invisibleSea);

    if (sea.x < -200){
      sea.x = sea.width/12;
   }

   if (ship.x > 350){
    ship.x = ship.width/10;
 }
}
