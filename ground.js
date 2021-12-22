class Ground{
    constructor(){
var options={
    isStatic:true

}
this.ground = Bodies.rectangle(450,490,1000,20,options)
World.add(world,this.ground);
    }
    display(){
        fill("black");
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,1500,20);
    }
}