var bg, player1, PCLvl1,Background2
var gameState = "Intro"
var lives = 3
var score = 0


function preload(){
 bg = loadImage("PCs/BackgroundLvl1.jpg")
 bg2 = loadImage("PCs/BackgroundLvl2.png")
 bg4 = loadImage("PCs/office.jpg")
player1 = loadImage("playerLvl1.png")
player2 = loadImage("PCs/PCLvl2.png")
dropIMG = loadImage("Vaccine.png")
Play = loadImage("PlayButton.png")
germIMG = loadImage("Germ.png")
 check = loadImage("green-tick.png")
Next=loadImage("next.jpg")
restart = loadImage("restart.png")
bg3 = loadImage("PCs/BackgroundLvl3.jpg")
car1 = loadImage("PCs/blue-car.png")
car2 = loadImage("PCs/green-car.png")
car3 = loadImage("PCs/red-car.png")
car4 = loadImage("PCs/yellow-car.png")
truck = loadImage("PCs/PCLvl3.png")
mayor = loadImage("PCs/mayor.png")
speech = loadImage("speech.png")
medals = loadImage("medals.png")

}

function setup(){
 
canvas = createCanvas(displayWidth, displayHeight-150)

   Background = createSprite(2400,displayHeight/2,100,100 )
   Background.addImage(bg)
   Background.scale = 2

   Background1 = createSprite(1400,displayHeight/2,100,100 )
   Background1.addImage(bg3)
   Background1.scale = 2

   Background2 = createSprite(700,displayHeight/2,100,100 )
   Background2.addImage(bg4)
   Background2.scale = 3.5
   
    PCLvl1 = createSprite(100, displayHeight-300, 10,10)
    PCLvl1.addImage(player1)
    PCLvl1.scale = 0.5
   
    PCLvl21 = createSprite(100, displayHeight-300, 10,10)
    PCLvl21.addImage(player2)
    PCLvl21.scale = 0.5
   
    PCLvl22 = createSprite(100, displayHeight-500, 10,10)
    PCLvl22.addImage(player2)
    PCLvl22.scale = 0.5
   
    PCLvl23 = createSprite(100, displayHeight-700, 10,10)
    PCLvl23.addImage(player2)
    PCLvl23.scale = 0.5

    PCLvl3 = createSprite(100, displayHeight-350, 10,10)
    PCLvl3.addImage(truck)
    PCLvl3.scale = 1

    check1 = createSprite(displayWidth/2,350,10,10)
    check1.addImage(check)
    check1.scale = 0.3

    check2 = createSprite(displayWidth/2,350,10,10)
    check2.addImage(check)
    check2.scale = 0.3

    check3 = createSprite(displayWidth/2,350,10,10)
    check3.addImage(check)
    check3.scale = 0.3
   
    container = createSprite(displayWidth/2,0,500,200)
   
    PlayButton = createSprite(680,400,10,10)
    PlayButton.addImage(Play)
    PlayButton.scale = 0.5
   
    NextButton = createSprite(680,600,10,10)
    NextButton.addImage(Next)
    NextButton.scale = 0.1
   
    NextButton2 = createSprite(680,600,10,10)
    NextButton2.addImage(Next)
    NextButton2.scale = 0.1
   
    NextButton3 = createSprite(680,600,10,10)
    NextButton3.addImage(Next)
    NextButton3.scale = 0.1

    NextButton4 = createSprite(680,800,10,10)
    NextButton4.addImage(Next)
    NextButton4.scale = 0.1

    NextButton5 = createSprite(280,150,10,10)
    NextButton5.addImage(Next)
    NextButton5.scale = 0.1

    startButton = createSprite(displayWidth/2 + 300,650,10,10)
    startButton.addImage(Next)
    startButton.scale = 0.06

    Restart = createSprite(680,600,10,10)
    Restart.addImage(restart)
    Restart.scale = 2

    NextLevel1 = createSprite(800,400,10,10)
    NextLevel1.addImage(Next)
    NextLevel1.scale = 0.1 

    Mayor = createSprite(620, 350, 10,10)
    Mayor.addImage(mayor)

    back = createSprite(1080, 150,550,950)
    back.shapeColor = "white"

    Speech = createSprite(1050, 200,10,10)
    Speech.addImage(speech)
    Speech.scale = 1.1

    Medals = createSprite(1070, 500,10,10)
    Medals.addImage(medals)
    Medals.scale = 0.6



   
    dropsGroup = new Group()
    germsGroup = new Group()
    vaccineGroup = new Group()
    carGroup = new Group()
   
    level2State = "b1"
    scoreLvl2 = 0
     
    
   }

function draw(){
  background("lavender")
  drawSprites()


  if(gameState==="Intro"){

    Background.visible = false;
    Background1.visible = false;
    Background2.visible = false
    PCLvl1.visible=false;
    NextButton.visible = false
    PlayButton.visible = true
    NextLevel1.visible = false
    NextButton2.visible = false
    NextButton3.visible = false
    NextButton4.visible = false
    startButton.visible = false
    Restart.visible = false
    PCLvl21.visible=false;
    PCLvl22.visible=false;
    PCLvl23.visible=false;
    container.visible = false;
    check1.visible = false
    check2.visible = false
    check3.visible = false
    PCLvl3.visible = false
    Mayor.visible = false
    back.visible = false
    Medals.visible = false
    Speech.visible = false
    NextButton5.visible = false

    textSize(50)
    fill("darkblue")
    textAlign(CENTER)
    text("COVID APOCALYPSE",displayWidth/2,200)

    if(mousePressedOver(PlayButton)&&gameState==="Intro"){
      gameState = "desc"

    }

  }

  if(gameState === "desc"){
    Background.visible = false;
    Background1.visible = false;
    Background2.visible = false
    PCLvl1.visible=false;
    NextButton.visible = false
    PlayButton.visible = false
    NextLevel1.visible = false
    NextButton2.visible = false
    NextButton3.visible = false
    NextButton4.visible = false
    startButton.visible = true
    Restart.visible = false
    PCLvl21.visible=false;
    PCLvl22.visible=false;
    PCLvl23.visible=false;
    container.visible = false;
    check1.visible = false
    check2.visible = false
    check3.visible = false
    PCLvl3.visible = false
    Mayor.visible = false
    back.visible = false
    Medals.visible = false
    Speech.visible = false
    NextButton5.visible = false

    textSize(25)
    fill("darkblue")
    textAlign(CENTER)
    text("You're a journalist, reporting a new-found vaccination againt Covid_19, ",displayWidth/2,200)
    text(" when a accidental yet mass leak of contaminated virus wrecks havoc! ",displayWidth/2,260)
    text("You are the only one safe because you managed to reach a safe covid-free bay at the time. ",displayWidth/2,320)
    text("You find a sample of the immediate antidote for coronavirus and now must safely get to the VaccineCenter,  ",displayWidth/2,380)
    text("gather barrels, and collect as much vaccines as possible and get it to the mayor’s office ASAP.",displayWidth/2,440)
    text("During this one-of-a-kind mission, you will encounter several germs trying to attack you, ",displayWidth/2,500)
    text(" or obstacles in your way. The health of the nation is in your hands. Good Luck...    .",displayWidth/2,560)

    if(mousePressedOver(startButton)&&gameState==="desc"){
      gameState = "Intro-Level1"

    }
  }





  if(gameState==="Intro-Level1"){
    Background.visible = false;
    Background1.visible = false;
    Background2.visible = false
    PCLvl1.visible=false;
    NextButton.visible = true
    PlayButton.visible = false
    NextLevel1.visible = false
    NextButton2.visible = false
    NextButton3.visible = false
    NextButton4.visible = false
    NextButton5.visible = false
    startButton.visible = false
    Restart.visible = false
    PCLvl21.visible=false;
    PCLvl22.visible=false;
    PCLvl23.visible=false;
    container.visible = false;
    check1.visible = false
    check2.visible = false
    check3.visible = false
    PCLvl3.visible = false
    Mayor.visible = false
    back.visible = false
    Medals.visible = false
    Speech.visible = false



    
    textSize(50)
    fill("darkblue")
    textAlign(CENTER)
    text("Level 1",displayWidth/2,200)
    textSize(30)
    text("Use Space key to shoot the germs.",displayWidth/2,250)
    text("Use Arrow keys to move the player",displayWidth/2,350)
    text("Click on next button to continue.",displayWidth/2,450)


    if(mousePressedOver(NextButton)&&gameState==="Intro-Level1"){
      gameState = "Level1"

    }
  }






  if(gameState==="Level1"){
    Background.visible = true;
    Background1.visible = false;
    Background2.visible = false
    PCLvl1.visible=true;
    NextButton.visible = false
    PlayButton.visible = false;
    NextLevel1.visible = false
    NextButton2.visible = false
    NextButton3.visible = false
    NextButton4.visible = false
    NextButton5.visible = false
    startButton.visible = false
    Restart.visible = false
    PCLvl21.visible=false;
    PCLvl22.visible=false;
    PCLvl23.visible=false;
    container.visible = false;
    check1.visible = false
    check2.visible = false
    check3.visible = false
    PCLvl3.visible = false
    Mayor.visible = false
    back.visible = false
    Medals.visible = false
    Speech.visible = false



    textSize(35)
    fill("darkblue")
    textAlign(CENTER)
    text("SCORE:"+score,displayHeight+300,835) 

   
   camera.position.y = displayHeight/2

    
   /* if(keyDown(RIGHT_ARROW) )[
      PCLvl1.x = PCLvl1.x+10
    ]
    if(keyDown(LEFT_ARROW) )[
      PCLvl1.x = PCLvl1.x-10
    ]*/
    if(keyDown(UP_ARROW) )[
      PCLvl1.y = PCLvl1.y-10
    ]
    if(keyDown(DOWN_ARROW) )[
      PCLvl1.y = PCLvl1.y+10
    ]

    if(keyDown("space")){
      if(frameCount%5===0){
        Drops();
      }
    }
    if(frameCount%10===0){
    Germs();
    }
    Background.velocityX=-5

    if(dropsGroup.isTouching(germsGroup)){
      dropsGroup[0].destroy()
      germsGroup[0].destroy()
      score=score+1
    }

    if(Background.x<-1200){
      NextLevel1.visible = true
    }

    if(mousePressedOver(NextLevel1)&&gameState==="Level1"){
      gameState = "Intro-Level2"
      germsGroup.destroyEach();
      dropsGroup.destroyEach();

    console.log(Background.x)

 
  }

  }





  
  if(gameState==="Intro-Level2"){
    Background.visible = false;
    Background1.visible = false;
    Background2.visible = false
    PCLvl1.visible=false;
    NextButton.visible = false
    PlayButton.visible = false;
    NextLevel1.visible = false
    NextButton2.visible = true
    NextButton3.visible = false
    NextButton4.visible = false
    NextButton5.visible = false
    startButton.visible = false
    Restart.visible = false
    PCLvl21.visible=false;
    PCLvl22.visible=false;
    PCLvl23.visible=false;
    container.visible = false;
    check1.visible = false
    check2.visible = false
    check3.visible = false
    PCLvl3.visible = false 
    back.visible = false
    Medals.visible = false
    Speech.visible = false


     
    if(mousePressedOver(NextButton2)&&gameState==="Intro-Level2"){
      gameState = "Level2"

    }

  

    textSize(50)
    fill("darkblue")
    textAlign(CENTER)
    text("Level 2",displayWidth/2,200)
    textSize(30)
    text("Press 'b' key to for a barrel.",displayWidth/2,250)
    text("Use Arrow keys to move the barrel and collect leaking vaccine",displayWidth/2,350)
    text("Click on next button to continue.",displayWidth/2,450)


  }

  if(gameState === "Level2"){
    Background.visible = true;
    Background1.visible = false;
    Background2.visible = false
    PCLvl1.visible=false;
    NextButton.visible = false
    PlayButton.visible = false;
    NextLevel1.visible = false
    NextButton2.visible = false
    NextButton3.visible = false
    NextButton4.visible = false
    NextButton5.visible = false
    startButton.visible = false
    Restart.visible = false
    PCLvl21.visible=true;
    PCLvl22.visible=true;
    PCLvl23.visible=true;
    container.visible = true;
    check1.visible = false
    check2.visible = false
    check3.visible = false
    PCLvl3.visible = false
    back.visible = false
    Medals.visible = false
    Speech.visible = false
    Mayor.visible = false

    Background.addImage(bg2)
    Background.x = 500
    Background.y = 400

    textSize(50)
    fill("black")
    textAlign(CENTER)
    text("VACCINE",displayWidth/2,50)
    text("SCORE:"+scoreLvl2,displayWidth-200,50)

    
    Leak();
   

    if(level2State === "b1"){
      if(keyDown("b")){
        PCLvl21.x = displayWidth/2
        PCLvl21.y = displayHeight-300
      }
      if(keyDown(LEFT_ARROW)){
        PCLvl21.x -= 5
      }
      if(keyDown(RIGHT_ARROW)){
        PCLvl21.x += 5
      }
      if(vaccineGroup.isTouching(PCLvl21)){
        vaccineGroup[0].destroy();
        scoreLvl2+=10
      }
      if(scoreLvl2 === 100){
        level2State = "b2"
        PCLvl21.destroy();
        
      }
    }

    if(scoreLvl2 === 100){
      check1.visible = true
    }

    if(level2State === "b2"){
      if(keyDown("b")){
        PCLvl22.x = displayWidth/2
        PCLvl22.y = displayHeight-200
      }
      if(keyDown(LEFT_ARROW)){
        PCLvl22.x -= 5
      }
      if(keyDown(RIGHT_ARROW)){
        PCLvl22.x += 5
      }
      if(vaccineGroup.isTouching(PCLvl22)){
        vaccineGroup[0].destroy();
        scoreLvl2+=10
      }
      if(scoreLvl2 === 200){
        level2State = "b3"
        PCLvl22.destroy();
        
      }
    }
    if(scoreLvl2 === 200){
      check2.visible = true
    }


    if(level2State === "b3"){
      if(keyDown("b")){
        PCLvl23.x = displayWidth/2
        PCLvl23.y = displayHeight-200
      }
      if(keyDown(LEFT_ARROW)){
        PCLvl23.x -= 5
      }
      if(keyDown(RIGHT_ARROW)){
        PCLvl23.x += 5
      }
      if(vaccineGroup.isTouching(PCLvl23)){
        vaccineGroup[0].destroy();
        scoreLvl2+=10
      }
      if(scoreLvl2 === 300){
        gameState = "Intro-Level3"
        PCLvl23.destroy();
        vaccineGroup.destroyEach();
      }
    }

    if(scoreLvl2 === 300){
        check3.visible = true
    }


  }
  // intro-level3
  if(gameState === "Intro-Level3"){
    Background.visible = false;
    Background1.visible = false;
    Background2.visible = false
    PCLvl1.visible=false;
    NextButton.visible = false
    PlayButton.visible = false;
    NextLevel1.visible = false
    NextButton2.visible = false
    NextButton3.visible = true
    NextButton4.visible = false
    NextButton5.visible = false
    startButton.visible = false
    Restart.visible = false
    PCLvl21.visible=false;
    PCLvl22.visible=false;
    PCLvl21.visible=false;
    PCLvl23.visible=false
    container.visible = false;
    check1.visible = false
    check2.visible = false
    check3.visible = false
    PCLvl3.visible = false
    Mayor.visible = false
    back.visible = false
    Medals.visible = false
    Speech.visible = false


    textSize(50)
    fill("darkblue")
    textAlign(CENTER)
    text("Level 3",displayWidth/2,200)
    textSize(30)
    text("Great Job! Now carefully transport the precious vaccine to the mayor's office ASAP!.",displayWidth/2,250)
    text("Use Arrow keys to direct the vehicle",displayWidth/2,350)
    text("Click on next button to continue.",displayWidth/2,450)
   

    if(mousePressedOver(NextButton3)&&gameState ==="Intro-Level3" ){
      gameState ="Level3"
    }

  
  }


  if(gameState === "Level3"){
    Background.visible = false;
    Background1.visible = true;
    Background2.visible = false
    PCLvl1.visible=false;
    NextButton.visible = false
    PlayButton.visible = false;
    NextLevel1.visible = false
    NextButton2.visible = false
    NextButton3.visible = false
    NextButton4.visible = false
    NextButton5.visible = false
    startButton.visible = false
    Restart.visible = false
    PCLvl21.visible=false;
    PCLvl22.visible=false;
    PCLvl21.visible=false;
    PCLvl23.visible=false
    container.visible = false;
    check1.visible = false
    check2.visible = false
    check3.visible = false
    PCLvl3.visible = true
    Mayor.visible = false
    back.visible = false
    Medals.visible = false
    Speech.visible = false


  
  Background1.velocityX=-2
  console.log(Background1.x)

  textSize(50)
  fill("darkblue")
  textAlign(CENTER)
  text("LIVES : "+ lives,1100,displayHeight-200)

  camera.position.y = displayHeight/2

if(keyDown(UP_ARROW)){
  PCLvl3.y -=5
  PCLvl3.scale -= 0.005
}

if(keyDown(DOWN_ARROW)){
  PCLvl3.y +=5
  PCLvl3.scale += 0.005
}

if(carGroup.isTouching(PCLvl3)){
  carGroup[0].destroy()
  lives-=1
}
if(lives === 0){
  carGroup.destroyEach();
  gameState = "over"
}

    cars();

if(Background1.x<-400){
  gameState="End"
  carGroup.destroyEach()
}

  } 

  if(gameState === "End"){
    Background.visible = false;
    Background1.visible = false;
    Background2.visible = false
    PCLvl1.visible=false;
    NextButton.visible = false
    PlayButton.visible = false;
    NextLevel1.visible = false
    NextButton2.visible = false
    NextButton3.visible = false
    NextButton4.visible = true
    NextButton5.visible = false
    startButton.visible = false
    Restart.visible = false
    PCLvl21.visible=false;
    PCLvl22.visible=false;
    PCLvl21.visible=false;
    PCLvl23.visible=false
    container.visible = false;
    check1.visible = false
    check2.visible = false
    check3.visible = false
    PCLvl3.visible = false
    Mayor.visible = false
    back.visible = false
    Medals.visible = false
    Speech.visible = false


    textSize(50)
    fill("darkblue")
    textAlign(CENTER)
    text("CONGRATULATIONS!!",displayWidth/2,300)
    textSize(40)
    text("You have successfully delivered the vaccine to the Mayor's office",displayWidth/2,displayHeight/2 + 100)

    if(mousePressedOver(NextButton4) && gameState === "End"){
      gameState = "End2"
    }

  }

    if(gameState === "End2"){
      Background.visible = false;
      Background1.visible = false;
      Background2.visible = true
      PCLvl1.visible=false;
      NextButton.visible = false
      PlayButton.visible = false;
      NextLevel1.visible = false
      NextButton2.visible = false
      NextButton3.visible = false
      NextButton4.visible = false
      NextButton5.visible = true
      startButton.visible = false
      Restart.visible = false
      PCLvl21.visible=false;
      PCLvl22.visible=false;
      PCLvl21.visible=false;
      PCLvl23.visible=false
      container.visible = false;
      check1.visible = false
      check2.visible = false
      check3.visible = false
      PCLvl3.visible = false
      Mayor.visible = true
      back.visible = true
      Medals.visible = true
      Speech.visible = true

      if(mousePressedOver(NextButton5) && gameState === "End2"){
        gameState = "Mssg"
      }


    }

    if(gameState === "Mssg"){
      Background.visible = false;
      Background1.visible = false;
      Background2.visible = false
      PCLvl1.visible=false;
      NextButton.visible = false
      PlayButton.visible = false;
      NextLevel1.visible = false
      NextButton2.visible = false
      NextButton3.visible = false
      NextButton4.visible = false
      NextButton5.visible = false
      startButton.visible = false
      Restart.visible = true
      PCLvl21.visible=false;
      PCLvl22.visible=false;
      PCLvl21.visible=false;
      PCLvl23.visible=false
      container.visible = false;
      check1.visible = false
      check2.visible = false
      check3.visible = false
      PCLvl3.visible = false
      Mayor.visible = false
      back.visible = false
      Medals.visible = false
      Speech.visible = false
    textSize(50)
    fill("darkblue")
    textAlign(CENTER)
    text("A final message from the creator:",displayWidth/2,displayHeight/2 - 300)
    textSize(30)
    text("'You don't have to save the city to be brave...",displayWidth/2,displayHeight/2 - 200)
    text("To be brave, be cautious, stay healthy, and help protect each other, ",displayWidth/2,displayHeight/2 - 100)
    textSize(40)
    text("#HandsSpaceSafe'",displayWidth/2,displayHeight/2)

    if(mousePressedOver(Restart) && gameState === "Mssg"){
      gameState = "Intro"
    }




    }


  

  if(gameState === "over"){
    Background.visible = false;
    Background1.visible = false;
    Background2.visible = false
    PCLvl1.visible=false;
    NextButton.visible = false
    PlayButton.visible = false;
    NextLevel1.visible = false
    NextButton2.visible = false
    NextButton3.visible = false
    NextButton4.visible = false
    NextButton5.visible = false
    startButton.visible = false
    Restart.visible = true
    PCLvl21.visible=false;
    PCLvl22.visible=false;
    PCLvl21.visible=false;
    PCLvl23.visible=false
    container.visible = false;
    check1.visible = false
    check2.visible = false
    check3.visible = false
    PCLvl3.visible = false
  textSize(50)
  fill("darkblue")
  textAlign(CENTER)
  text("GAME OVER",displayWidth/2,displayHeight/2)

  if(mousePressedOver(Restart) && gameState === "over"){
    gameState = "Intro"
  }


  }
}

function Germs(){
  if(frameCount%80===0&&Background.x>-2200){
    var y = random(200,displayHeight-200)
    germ = createSprite(displayWidth-200,y,10,10)
    germ.addImage(germIMG)
    germ.scale = 0.2
    germ.velocityX=-2
    germsGroup.add(germ)
  }
}

function Drops(){
 
  drops = createSprite(PCLvl1.x+20,PCLvl1.y-40,30,30)
  drops.addImage(dropIMG)
  drops.scale = 0.1
  drops.velocityX = 5
  dropsGroup.add(drops)
  
}

function Leak(){


  if(frameCount%40===0){
    vaccine = createSprite(random(displayWidth/2-300,displayWidth/2+300),100,10,10)
    vaccine.velocityY = 3;
    vaccine.shapeColor = "blue"
    vaccine.lifetime = 1000
    vaccineGroup.add(vaccine)
  }
 

}

function cars(){
  if(frameCount%120===0){
    var y = random(150,displayHeight-300)
    car = createSprite(displayWidth,y,10,10)
    var rand = Math.round(random(1,4))
    switch(rand){
      case 1: car.addImage(car1)
      break;
      case 2: car.addImage(car2)
      break;
      case 3: car.addImage(car3)
      break;
      case 4: car.addImage(car4)
      break;
      default : break
    }
    car.scale = 0.2
    car.velocityX=-2
    carGroup.add(car)
  }
}
