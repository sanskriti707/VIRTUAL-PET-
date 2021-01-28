//Create variables here

var dogImg1,dogImg,foodS,database,fooodStock;


function preload()
{
  dogImg=loadImage("images/dogImg.png");
  dogImg1=loadImage("images/dogImg1.png");
 
}

function setup() {
  
  database=firebase.database();
  createCanvas(800, 700);
  dog=createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;
    
    foodStock=database.ref('Food');
    foodStock.on("value", readStock);
    textSize(20);
  
}


function draw() {  
  background("green");

  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(dogImg1);
  }

  
  drawSprites();

  text("Food remaining:"+foodS,170,200);

  text("Press UP_ARROW to feed milk to the dog",130,100);
 

}


function readStock(data) {
    foodS=data.val();
}

function writeStock(x) {
if(x<0) {
  x=0
}
 else{
   x=x-1;
 }
database.ref('/').update({
  Food:x
})
}

