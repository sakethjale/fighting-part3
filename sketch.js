var walking,lwalking
var punch,lpunch
var lnock,nock,recover
var kick,lkick
var jump,ljump
var idel,lidel

var gameState=0;
var database,game,player,form,playerCount;

var bgimg;
var hero1,hero2
var invisibl
var allPlayers
var ju,jv

function preload(){
firstpage=loadImage("f.jpg")
bgimg=loadImage("bg.png")
ju=loadImage("h/idel1.png")
jv=loadImage("h/lidel1.png")

idel=loadAnimation("h/idel1.png","h/idel2.png","h/idel3.png","h/idel4.png")
lidel=loadAnimation("h/lidel1.png","h/lidel2.png","h/lidel3.png","h/lidel4.png")

walking=loadAnimation("h/walk1.png","h/walk2.png","h/walk3.png","h/walk4.png","h/walk5.png")
lwalking=loadAnimation("h/lwalk1.png","h/lwalk2.png","h/lwalk3.png","h/lwalk4.png","h/lwalk5.png")

punch=loadAnimation("h/punch1.png","h/punch2.png","h/punch3.png")
lpunch=loadAnimation("h/lpunch1.png","h/lpunch2.png","h/lpunch3.png")

kick=loadAnimation("h/kick1.png","h/kick2.png","h/kick3.png")
lkick=loadAnimation("h/lkick1.png","h/lkick2.png","h/lkick3.png")

nock=loadAnimation("h/k1.png","h/k2.png","h/k3.png","h/k4.png","h/k5.png")
lnock=loadAnimation("h/lk1.png","h/lk2.png","h/lk3.png","h/lk4.png","h/lk5.png")

recover=loadAnimation("h/kr3.png","h/kr4.png","h/kr5.png","h/kr7.png","h/kr8.png","h/lidel1.png")
lrecover=loadAnimation("h/lkr3.png","h/lkr4.png","h/lkr5.png","h/kr7.png","h/kr8.png","h/lidel1.png")

jump=loadAnimation("h/jump1.png","h/jump2.png","h/jump3.png","h/jump4.png","h/jump5.png","h/jump6.png","h/jump7.png")
ljump=loadAnimation("h/ljump1.png","h/ljump2.png","h/ljump3.png","h/ljump4.png","h/ljump5.png","h/ljump6.png","h/ljump7.png")

idel=loadAnimation("h/idel1.png","h/idel2.png","h/idel3.png","h/idel4.png");
lidel=loadAnimation("h/lidel1.png","h/lidel2.png","h/lidel3.png","h/lidel4.png");

}

function setup() {
//if(gameState===0)
//{
  createCanvas(windowWidth,windowHeight);

database=firebase.database()

  game=new Game()
   game.getState();
game.start();
//}



//if(gameState===1&&hero1===undefined)
//{
  hero1=createSprite(width/5,height-170,20,20)
  hero1.addAnimation("hero1 ideal",idel)
  hero1.addAnimation("hero punch",punch)
  hero1.addAnimation("hero kick",kick)
  hero1.addAnimation("hero recover",recover)
  hero1.addAnimation("hero jump",jump)
  hero1.addAnimation("hero walk",walking)
  hero1.addAnimation("hero lwalk",lwalking)



  //hero1.addImage("ji",ju)
  hero1.scale=1.3
  hero1.visible=false
  
  hero2=createSprite(width/1.5,height-170,20,20)
  hero2.addAnimation("hero2 idel",lidel)
  hero2.addAnimation("hero2 punch",lpunch)
  hero2.addAnimation("hero2 kick",lkick)
  hero2.addAnimation("hero2 recover",lrecover)
  hero2.addAnimation("hero2 lwalk",lwalking)  
  hero2.addAnimation("hero2 lwalk",walking)           
  hero2.addAnimation("hero2 jump",jump)



  //hero2.addImage("ja",jv)

  hero2.scale=1.3
  hero2.visible=false

 

  invisibl=createSprite(width/2,height-100,width,10);
//}



}

function draw() {
  background(firstpage);
  
 if(playerCount===2)
 {
  gameState=1;
  
  game.update(1);

  //setup();
  
  
 }
 if(gameState===1)
 {
  hero1.visible=true
  hero2.visible=true

   if(frameCount===hero1.endAnimation)
   {
    hero1.changeAnimation("hero1 ideal",idel)

   }
   if(frameCount===hero2.endAnimation)
   {
    hero2.changeAnimation("hero2 idel",lidel)
  
   }      
   game.play();
 }
  
  
  drawSprites();
 
}

