//Global variables
var trexani,groundimg,trex,ground 

//intendation - giving tab spaces

//load animation, images and sound
function preload(){
  trexani=loadAnimation('trex1.png','trex3.png','trex4.png')

  groundimg=loadImage('ground2.png')
}

function setup() {
  createCanvas(600,200);

  trex=createSprite(50,170,20,35)
  trex.addAnimation('walking',trexani)
  trex.scale=0.6

  ground=createSprite(300,180,600,20)
  ground.addImage(groundimg)

  ground2=createSprite(300,190,600,20)
  ground2.visible=false
}

function draw() {
  console.log(trex.y) 

  background('lightgray');

  trex.collide(ground2)

  if(keyDown('space')&&trex.y>152){
    trex.velocityY=-6.5
  }

  trex.velocityY=trex.velocityY+0.3

  ground.velocityX=-5
  if(ground.x < 0){
    ground.x = 600  
  }

  drawSprites()
}

