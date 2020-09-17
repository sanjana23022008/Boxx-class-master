const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var ground1;
var pig1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground1 =new Ground(600,395,1200,20);


    box1 = new Box(700,320,70,70);
     box2 =new Box(920,320,70,70);
    pig1=new Pig(810, 350);

    

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground1.display();
    box2.display();
    pig1.display();
   
}