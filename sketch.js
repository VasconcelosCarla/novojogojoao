var ushala, ushalaRunning;
var pista, pistaImg;
var bomb, bombImg;
var explosion, explosionBlowing;
var bau, bauImg;
var invisibleWall1, invisibleWall2;


function preload(){
ushalaRunning = loadAnimation(
"../assets/ushala1.png",
"../assets/ushala2.png",
"../assets/ushala3.png",
"../assets/ushala4.png",
"../assets/ushala5.png",
"../assets/ushala6.png"
)
pistaImg = loadImage(
"../assets/ground.png"
)
bombImg = loadImage(
"../assets/bomb.png"
)
explosionBlowing = loadAnimation(
"../assets/explosion1.png",
"../assets/explosion2.png",
"../assets/explosion3.png",
"../assets/explosion4.png"
)
bauImg = loadImage(
"../assets/bau.png"
)
}




function setup() {
  createCanvas(400,600);
  pista = createSprite(200,300);
  pista.addImage(pistaImg);
  pista.scale = 2;
  pista.velocityY = 2;


  ushala = createSprite(200, 500);
  ushala.addAnimation("running", ushalaRunning);



  invisibleWall1 = createSprite(20,350,25,1000);
  invisibleWall2 = createSprite(380,350,25,1000);
  invisibleWall1.visible = false;
  invisibleWall2.visible = false;
}

function draw(){
background(225);
console.log(pista.y);
  if(pista.y === 900){
    pista.y = 330;
  }
  if(keyDown("left")){
    ushala.x = ushala.x -10;
  }
  if(keyDown("right")){
    ushala.x = ushala.x +10;
  }
  ushala.bounceOff(invisibleWall1);
  ushala.bounceOff(invisibleWall2);

  spawnBombs();
  spawnBau();
  drawSprites();
}

function spawnBombs(){
  if(frameCount%100 === 0){
    bomb = createSprite(200,0,40,40);
    bomb.velocityY = 2;
    bomb.x = Math.round(random(100,300));
    bomb.lifetime = 410;
    bomb.addImage(bombImg);
    bomb.scale = 0.35
  }
}

function spawnBau(){
  if(frameCount%150 === 0){
    bau = createSprite(200,0,40,40);
    bau.velocityY = 2;
    bau.x = Math.round(random(100,300));
    bau.lifetime = 410;
    bau.addImage(bauImg);
    bau.scale = 0.35
  }
}