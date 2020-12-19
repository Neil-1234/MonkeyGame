
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var ground
var bananaGroup, obstacleGroup
var survivalTime
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(500, 400);
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  bananaGroup = createGroup();

  
}







function draw() {

  background(255);
  
  if(ground.x<0){
  ground.x = ground.width/2;
  }
  
  if(keyDown("space")&& monkey.y >= 100 ){
    monkey.velocityY = -12;
     
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  
  
  var survivalTime = 0;
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score: "+ score, 500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("survival Time: "+ survivalTime, 100,50);
  
  food();
  
  obstacles();


  
  drawSprites();
  
}

function food() {
  if (frameCount % 80 === 0) {
    banana = createSprite(400,350,40,10);
    banana.addImage(bananaImage);
    banana.y = Math.round(random(120,200));
    banana.scale = 0.1;
    
    banana.velocityX = -3;
    banana.lifetime = 200;
    
    FoodGroup.add(banana);
  }
}

function obstacles() {
  if (frameCount % 300 === 0){
    obstacle = createSprite(250,325,10,10);
    obstacle.addImage(obstaceImage);
    obstacle.velocityX = -3;
    obstacle.lifetime = 200;
    obstacle.scale = 0.1 ;
     obstacleGroup.add(obstacle);
  }

}



