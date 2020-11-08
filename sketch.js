var bullet,wall
var speed,weight,thickness

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  bullet = createSprite(50,200,50,50);
  bullet.shapeColor = "white";
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = 80,80,80
  thickness = random(22,83);
}

function draw() {
  background("black");  
  bullet.velocityX = speed;
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * bullet.weight * speed * speed/thickness * thickness * thickness;
    if(damage < 10){
      bullet.shapeColor = color("green");
    }
    if(damage > 10){
      bullet.shapeColor = color("red");
    }
  }
  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
   return true;
  }
  return false;
}