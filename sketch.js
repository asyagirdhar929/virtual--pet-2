//Create variables here
var dog,dog1,happydog1,happydog,database,foodS,foodStock;
var database ,dog2;
var position;
//var form
var feedfood,addfood;
var foodobj;
var Feedtime;
var Lastfeed, foodStockImg, fs;
function preload()
{

  //load images here
  dog1=loadImage("images/dog.png");
  happydog1=loadImage("images/happydog.png");  
}

function setup() {
  createCanvas(500, 500);
  
  database=firebase.database();
  console.log(firebase);

  feedfood= createButton("FEED BELLA FOOD");
feedfood.position(700,95);
feedfood.mousePressed(feedDog);

  addfood=createButton("ADD FOOD");
addfood.position(850,95);
addfood.mousePressed(addFoods);

  foodobj=new Food;
var dog=createSprite(250,300,10,10);
dog.addImage(dog1);
dog.scale=0.1;
 
foodStock=database.ref('Food');
foodStock.on("value",readStock);

}


function draw() {  
background(46,139,87);
Feedtime=database.ref("FeedTime")
Feedtime.on("value",function(data)
{
Lastfeed=data.val();
});
feedDog();
addFoods();
foodobj.display();
  drawSprites();
  //add styles here
  fill("pink");
  textSize(20);
  text("Food Left:"+ foodS,150,100);
  textSize(30);
}

function writeStock()
{
  if (x<=0){
    x=0;
  }else{
x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}

function readStock(data){
  foodS=data.val();
}

function feedDog()
{
  dog.addImage(happyDog);

  foodobj.updateFoodDtock(foodobj.getFoodStock()-1)
database.ref("/").update({
Food:foodobj.getFoodStock(),
Feedtime:hour ()
})

function addFoods(){
  foodS++;
  database.ref("/".update({
    Food:foodS
  }))
}

}
