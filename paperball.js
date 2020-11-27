class paperball {
    constructor(x,y,width,height){
var options = {
      isStatic:false,
      restitution: 0.3,
      friction:0.5,
      density:1.2,

  }
    
    this.body = Bodies.circle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world.this.body);
    }
     
     display(){
         var pos = this.body.position;
         ellipse(56, 46, 55, 55);
         fill("yellow");
         circle(pos.x,pos.y,this.width,this.height); 
     }
    };

     function keyPressed(){
         if(keyCode === UP_ARROW){
         Matter.Body.applyForce(paperball.body,paper.body.position,{x:85,y:85});
         }
     }



