var movingRect, fixedRect;

function setup() {
  createCanvas(800,800);
  movingRect=createSprite(500,200,50,50)
  movingRect.shapeColor="green";
  movingRect.debug=true;

  fixedRect=createSprite(100,100,50,50)
  fixedRect.shapeColor="green";
  fixedRect.debug=true;

  gameobject1=createSprite(200,100,50,50)
  gameobject1.shapeColor="green";
  gameobject1.debug=true;

  gameobject2=createSprite(300,100,50,50)
  gameobject2.shapeColor="green";
  gameobject2.debug=true;

  gameobject3=createSprite(400,100,50,50)
  gameobject3.shapeColor="green";
  gameobject3.debug=true;

  gameobject4=createSprite(100,400,50,50)
  gameobject4.shapeColor="green";
  gameobject4.debug=true;
  gameobject4.velocityX=1;
  
  gameobject5=createSprite(700,400,50,50)
  gameobject5.shapeColor="green";
  gameobject5.debug=true;
  gameobject5.velocityX=-1;
}

function draw() {
  background("pink"); 
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  
  console.log(fixedRect.x-movingRect.x);

  if(isTouchingA(movingRect,gameobject1)){
    movingRect.shapeColor="red";
    gameobject1.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    gameobject1.shapeColor="green";
  }


  if(isTouchingA(movingRect,gameobject2)){
    movingRect.shapeColor="red";
    gameobject2.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    gameobject2.shapeColor="green";
  }

  if(isTouchingA(movingRect,gameobject3)){
    movingRect.shapeColor="red";
    gameobject3.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    gameobject3.shapeColor="green";
  
  }


  if(isTouchingA(movingRect,fixedRect)){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }


  bounceOffA(gameobject4,gameobject5);

  drawSprites();
}

































