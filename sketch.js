//Write your code here
const Engine = Matter.Engine;
const Composite= Matter.Composite;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ground1,
    log1,log2,log3,
    ball1,ball2,
    plank1,plank2,plank3,plank4,plank5,plank6,plank7,plank8,
    box1,box2,box3;

function setup(){
    canvas = createCanvas(1500,600);
    engine = Engine.create();
    world = engine.world;

   
    ground = new Ground(450,350,400,20)
    ground1 = new Ground(1250,550,400,20)

    angleMode(RADIANS)

    plank1 = new Plank(440,200,350,20,PI/180)
    log1 = new Log(430,250,100,20)
    plank3 = new Plank(440,40,350,20,PI/180)
    log3 = new Log(430,30,100,20)
   
    plank2 = new Plank(1250,430,350,20,PI/180)
    log2 = new Log(1250,450,100,20)
    plank4 = new Plank(1330,330,165,20,-PI/2)
    plank5 = new Plank(1180,230,165,20,-PI/2)

    box1 = new Box(1250,220,75,80)
    box2 = new Box(1250,215,75,80)

    plank6 = new Plank(1250,130,350,20,PI/180)
    box3 = new Box(1250,115,75,80)

    plank7 = new Plank(1220,10,200,20,-PI/3)
    plank8 = new Plank(1250,50,200,20,PI/3)
     
    ball1 = new Ball(330,50,50)
    ball2 = new Ball(530,50,50)
     
}

function draw(){
    background("#C0FEFC");
    Engine.update(engine);
    ground.display()
    ground1.display()
    log1.display()
    log2.display()
    plank1.display()
    plank2.display()
    ball1.display()
    ball2.display()
    plank3.display()
    log3.display()
    plank4.display()
    plank5.display()
    box1.display()
    box2.display()
    plank6.display()
    box3.display()
    plank8.display()
    plank7.display()
}