const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computerbase
var playerbase
var player
var Computerplayer

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  computerbase = new ComputerBase();
  playerbase = new PlayerBase(300, random(450, height -300), 180, 150);
  player = new Player(285, PlayerBase.body.position.y-153,50,180);
  Computerplayer = new ComputerPlayer();


 }

function draw() {

  background(180);

  Engine.update(engine);
  

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   computerbase.display();
   playerbase.display();
  

   //display Player and computerplayer
   player.display();
   Computerplayer.display();

}
