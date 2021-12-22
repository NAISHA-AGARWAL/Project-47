const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint;
var ground;
var engine, world;
var c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15;
var stand;
var slingShot, ballImg;
var score=0;
function preload(){
  ballImg= loadImage("download.png");
}
function setup() {
  createCanvas(1200,500);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create(); 
  world = engine.world; 
  Engine.run(engine);
  ground=new Ground();
  // level 1
  c1=new Can(600,275,50,50);
  c2=new Can(630,275,50,50);
  c3=new Can(660,275,50,50); 
  c4=new Can(690,275,50,50); 
  c5=new Can(720,275,50,50); 
  c6=new Can(750,275,50,50); 
  c7=new Can(780,235,50,50); 
  c8=new Can(630,235,50,50); 
  c9=new Can(660,235,50,50); 
  c10=new Can(690,235,50,50); 
  c11=new Can(720,195,50,50); 
  c12=new Can(750,195,50,50); 
  c13=new Can(690,195,50,50); 
  c14=new Can(720,195,50,50); 
  c15=new Can(690,155,50,50);
  stand=new Stand(700,300,400,10);
  ball= Bodies.circle(50,200,20);
  World.add(world,ball);
  slingShot=new SlingShot(this.ball,{x:185,y:155})
}

function draw() {
  background("yellow");
  ground.display();
  c1.display();
  c2.display();
  c3.display();
  c4.display();
  c5.display();
  c6.display();
  c7.display();
  c8.display();
  c9.display();
  c10.display();
  c11.display();
  c12.display();
  c13.display();
  c14.display();
  c15.display();
  stand.display();
  imageMode(CENTER);
  image(ballImg,ball.position.x,ball.position.y,40,40);
  slingShot.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode===32){
    slingShot.attach(this.ball)
  }
}