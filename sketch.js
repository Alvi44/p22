var PLAY = 1
var END = 0
var gameState = PLAY

var lambo
var road, invisibleRoad, roadImage

var roadmansGroup, roadmanImage

var score
var gameOverImg

function preload(){
  lambo = loadImage("lambo.png")

  roadImage = loadImage("road.png")

  roadmanImage = loadImage("roadman.png")

  gameOverImg = loadImage("gameOver.png")
}

function setup() {
  createCanvas(600, 200)
  
  lambo = createSprite(50,180,20,50)
  lambo.addImage("road",roadImage)
  lambo.scale = 0.5
  lambo.setCollider("circle",0,0,40)

  road = createSprite(200,180,400,20)
  road.addImage("road",roadImage)
  road.x = road.width /2

  gameOver = createSprite(300,100)
  gameOver.addImage(gameOverImg)
  gameOver.scale = 0.5

  invisibleRoad = createSprite(200,190,400,10)
  invisibleRoad.visible = false

  roadmansGroup = createGroup()

  score = 0
 
}

function draw() {
  text("Score: "+ Math.round(score), 500,50)
  
  if(gameState === PLAY){
     gameOver.visible = false
     road.velocityX = -(6 + score / 100)

     score = score _+ 0.02
     if(score % 100 == 0 && score > 0){
     }
     

  }
 
}