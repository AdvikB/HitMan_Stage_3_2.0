var PC1, PC2, PC3, PC4, PC5, PC6, PCimg, PCstanding;
var NPC1, NPC2, NPC3, enemy, NPCimg;
var BG, BGimg, BG2, BG2img, BG3, BG3img, BG4, BG4img, HitMan;
var Plt1, Plt2, Pl3, Pl4;


function preload() {

  PCimg = loadAnimation("Images/PC1.png", "Images/PC2.png", "Images/PC3.png", "Images/PC4.png", "Images/PC5.png");
  //NPCimg = loadAnimation("Images/NPC1.jpg,Images/NPC2.jpg,Images/NPC3.jpg");
  BG1img = loadImage("Images/BG.jpg");
  BG2img = loadImage("Images/BG2.jpg");
  BG3img = loadImage("Images/BG3.jpg");
  BG4img = loadImage("Images/BG4.jpg");
  NPC1 = loadImage("Images/NPC1.jpg");
  NPC2 = loadImage("Images/NPC2.jpg");
  NPC3 = loadImage("Images/NPC3.jpg");
}

function setup() {
  createCanvas(800, 400);
  HitMan = createSprite(700, 310, 50, 50);
  HitMan.addAnimation("hm", PCimg);
  Plt1 = createSprite(700, 375, 200, 20);
  Plt2 = createSprite(100, 275, 200, 20);
  Plt3 = createSprite(700, 175, 200, 20);
  Plt4 = createSprite(100, 75, 200, 20);
  enemy = createSprite(90,85,20,20);



}

function draw() {
  background(BG1img);

  HitMan.collide(Plt1);
  HitMan.collide(Plt2);
  HitMan.collide(Plt3);
  HitMan.collide(Plt4);

  if (keyWentDown("left")) {
    HitMan.x = HitMan.x -3
    HitMan.mirrorX(HitMan.mirrorX() * -1);
  }
  if (keyWentUp("left")) {
    HitMan.x = HitMan.x -3
    HitMan.mirrorX(HitMan.mirrorX() * -1);
  }
  


  if (keyWentDown("right")) {
    HitMan.x = HitMan.x +3
    HitMan.mirrorX(HitMan.mirrorX() * -1);
  }
  if (keyWentUp("right")) {
    HitMan.x = HitMan.x +3
    HitMan.mirrorX(HitMan.mirrorX() * -1);
  }

  if (keyDown("up")) {
    HitMan.velocityY = - 7;
  }
  HitMan.velocityY = HitMan.velocityY + 0.5;

  drawSprites();
  text(mouseX+","+mouseY,mouseX,mousey)
}

function Enemy(){
   randomNumber(100,400);
}