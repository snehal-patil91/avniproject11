var player,playerImg;

function preload()
{
  playerImg = loadImage("player.jpg");
}

function setup() {
  createCanvas(800,400);
  player = createSprite(200,200,20,20);
  player.addImage("Player",playerImg);

  
}



function draw() {
  background(255,255,255);  

  

  drawSprites();
}