const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var bogie1,bogie2,bogie3,bogie4,bogie5,bogie6;
var rock;
var chain1,chain2,chain3,chain4,chain5;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);
  bogie1 = new Bogie(50,170,50,50);
  bogie2 = new Bogie(150,170,50,50);
  bogie3 = new Bogie(250,170,50,50);
  bogie4 = new Bogie(350,170,50,50);
  bogie5 = new Bogie(450,170,50,50);
  bogie6 = new Bogie(550,170,50,50);
  rock = new Rock(1100,200,100,100);
  chain1 = new Chain(bogie1.body,bogie2.body);
  chain2 = new Chain(bogie2.body,bogie3.body);
  chain3 = new Chain(bogie3.body,bogie4.body);
  chain4 = new Chain(bogie4.body,bogie5.body);
  chain5 = new Chain(bogie5.body,bogie6.body);
}

function draw() {
  background(bg);  
  Engine.update(myEngine);
  bogie1.show();
  bogie2.show();
  bogie3.show();
  bogie4.show();
  bogie5.show();
  bogie6.show();
  rock.show();
  chain1.show();
  chain2.show();
  chain3.show();
  chain4.show();
  chain5.show();
  var collision=Matter.SAT.collides(bogie6.body,rock.body);
  if(collision.collided){
    flag=1;
  }
  if(flag===1){
    textSize(30);
    stroke(3);
    fill("blue");
    text("crashed",600,300);
    crashSound.play();
  }
  }
function keyPressed (){
  if (keyCode === RIGHT_ARROW){
    Matter.Body.applyForce(bogie6.body,{x:bogie6.body.position.x,y:bogie6.body.position.y},{x:0.5,y:0});
    trainSound.play();
  }
}
  
