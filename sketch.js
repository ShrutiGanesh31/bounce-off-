var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect=  createSprite(200, 200, 50, 80);
  fixedRect.shapeColor="green";

  movingRect= createSprite(1000,200,80,50);
  movingRect.shapeColor="green";
movingRect.velocityX=-3;
fixedRect.velocityX=3;

}

function draw() {
  background(0,0,0);  


  if(fixedRect.x-movingRect.x<=fixedRect.width/2+movingRect.width/2 &&
    movingRect.x-fixedRect.x<=fixedRect.width/2+movingRect.width/2){
      fixedRect.velocityX=-1*fixedRect.velocityX;
      movingRect.velocityX=-1*movingRect.velocityX;

  }
if(fixedRect.y-movingRect.y<=fixedRect.height/2+movingRect.height/2 &&
  movingRect.y-fixedRect.y<=fixedRect.height/2+movingRect.height/2){
    fixedRect.velocityY=-1*fixedRect.velocityY;
    movingRect.velocityY=-1*movingRect.velocityY;

  }
  
  //console.log(fixedRect.x- movingRect.x);

  drawSprites();
  
}