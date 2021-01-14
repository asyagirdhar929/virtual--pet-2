class Food {
    constructor(){
    this.foodStock=database.ref('Food')
    this.image=loadImage('Milk.png');
    }
  
   updateFoodStock(){
    
   }
  
   deductFood(){
     
    }
  
    getFoodStock(){
      
    }
  
    display(){
      
      fill (255,255,254);
      textSize (15);
      if (lastFed>=12)
      {
text("Last Feed : "+lastFed%12 + "PM",350,30);
      }else if(lastFed==0){
          text("Last Feed : 12 AM ",350,30);
      }else{
          text("Last Feed : "+lastFed+"AM",350,30);
      }

        var x=80,y=170;
      
      imageMode(CENTER);
   
      
      if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
          if(i%10===0){
            x=80;
            y=y+50;
          }
          image(this.image,x,y,50,50);
          x=x+30;
        }
      }
    }
  }