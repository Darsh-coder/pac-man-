
var ghost ,ghost2,ghost,ghost4
var ghostimg ,ghostimg2,ghostimg3,ghostimg4
var apple,  strawberry ,cherry, orange
var lolipop,icecream
var appleimg,  strawberryimg ,cherryimg, orangeimg
var lolipopimg,icecreamimg
function setup() {
  createCanvas(800,400);
  ghost2= createSprite(200, 200, 50, 50);
  ghostimg2 = loadImage("g2.png");
  ghost2.addImage("ghost2", ghostimg2)

 ghost= createSprite(50, 200, 50, 50);
 ghostimg = loadImage("ghost 1.png");
 ghost.addImage("ghost1", ghostimg)
 
 ghost4= createSprite(100, 200, 50, 50);
 ghostimg4 = loadImage(" g4.png");
 ghost4.addImage("ghost4", ghostimg4)

 ghost3= createSprite(300, 200, 50, 50);
 ghostimg3 = loadImage(" g3.png");
ghost3.addImage("ghost3", ghostimg3)


apple= createSprite(300, 200, 50, 50);
appleimg = loadImage(" app.png");
apple.addImage("apple", appleimg)

cherry= createSprite(300, 200, 50, 50);
cherryimg = loadImage(" cher.png");
cherry.addImage("cherrypple", cherryimg)

strawberry= createSprite(300, 200, 50, 50);
strawberryimg = loadImage(" strw.png");
strawberry.addImage("strawberry", strawberryimg)

orange= createSprite(300, 200, 50, 50);
orangeimg = loadImage(" or.png");
orange.addImage("orange", orangeimg)


lolipop= createSprite(300, 200, 50, 50);
lolipopimg = loadImage(" loli.png");
lolipop.addImage("lolipop", lolipopimg)

icecream= createSprite(300, 200, 50, 50);
icecreamimg = loadImage(" ice.png");
icecream.addImage("icecream", icecreamimg)


}

function draw() {
  background(255,255,255);  
  
  
  drawSprites();
}
