var fixedRect,movingRect,rect3,rect4;


function setup() {
  createCanvas(400,400);
  fixedRect = createSprite(200, 200, 50, 50);
  fixedRect.shapeColor = "blue";
  fixedRect.debug = true;

  rect3 = createSprite (250,50,50,50);
  rect3.shapeColor = "pink";
  rect3.debug = true;

  rect4 = createSprite(300,300,60,60);
  rect4.shapeColor = "pink";
  rect4.debug = true;

  movingRect = createSprite(150,150,20,200);
  movingRect.shapeColor = "blue";
  movingRect.debug = true;
}

function draw() {
  background("black");  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  
 if(isTouching(rect3,movingRect)) {
   
  movingRect.shapeColor = "blue";
 // fixedRect.shapeColor = "red";
  rect3.shapeColor = "blue";

}
  else {
    movingRect.shapeColor = "pink";
    fixedRect.shapeColor = "red";
    rect3.shapeColor = "yellow"
  }

  drawSprites();
}

function isTouching(object1,object2) {

  if(object2.x-object1.x<object2.width/2+object1.width/2 && 
    object1.x-object2.x<object2.width/2+object1.width/2 &&
    object2.y-object1.y<object1.height/2+object2.height/2&&
    object1.y-object2.y<object1.height/2+object2.height/2) {
    return true;

  } 
  else {
    return false;
     }



}