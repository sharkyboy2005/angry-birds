const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var g, ball;

var thinking, loading;

var swine;
var log1;
var Red;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    g = new ground(600, 380, 1200, 10);

    swine = new pig(500, 200);
    log1 = new log(600, 200, 180, PI/7);
    Red = new bird(300, 40);

    thinking = new box(200, 200, 50, 50);
    loading = new box (230, 50, 50, 50) ;
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    g.display();
    loading.display();
    thinking.display();
    swine.display();
    log1.display();
    Red.display();
}