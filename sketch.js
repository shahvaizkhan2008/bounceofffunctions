var lr,rr,tr,br



function setup() {
  createCanvas(1300,700);
  lr=createSprite(100, 200, 100, 50);
  lr.shapeColor="red"
  lr.velocityX=5
  rr=createSprite(width-100, 200, 100, 50);
  rr.shapeColor="blue"
  rr.velocityX=-5
  tr=createSprite(width/2, 100, 100, 50);
  tr.shapeColor="green"
  tr.velocityY=5
  br=createSprite(width/2, height-100, 100, 50);
  br.shapeColor="yellow"
  br.velocityY=-5
}

function draw() {
  background(80,80,80); 
  bounceoff (lr,rr) 
  bounceoff (tr,br) 
  drawSprites();
}

function bounceoff(o1,o2){
if(o1.y-o2.y<o1.height/2+o2.height/2
  && o2.y-o1.y<o1.height/2+o2.height/2)
{
o1.velocityY=o1.velocityY*(-1)
o2.velocityY=o2.velocityY*(-1)
}

if(o1.x-o2.x<o1.width/2+o2.width/2
  && o2.x-o1.x<o1.width/2+o2.width/2)
{
o1.velocityX=o1.velocityX*(-1)
o2.velocityX=o2.velocityX*(-1)
}
}