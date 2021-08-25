class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
    }
  
    play(){

     

      form.hidden()
      background(bgimg)
      // if(player.index===1)
      // {
      //   player.xpos=hero1.x
      //   player.ypos=hero1.y
      //   player.update();
      // }
      // if(player.index===2)
      // {
      //  player.xpos=hero2.x
      //  player.ypos=hero2.y
      //   player.update()
      // }
      Player.getPlayerInfo()

if(allPlayers!==undefined)
{
      
  //  for(var plr in allPlayers)
  //  {
        player.getposition();
        this.showHealth();
          if(player.index===1)
          {
            hero2.x=allPlayers["player2"].x;
            hero2.y=allPlayers["player2"].y;
            hero1.x=player.xpos;
            hero1.y=player.ypos; 
            textSize(20);
            fill("red")
            text(player.name,hero1.x,hero1.y+60);    
           
            if(keyCode===UP_ARROW){
              //hero1.y=hero1.y-4
     //         console("up")
              player.changePosition(0,-4)  
              hero1.changeAnimation("hero jump",jump)
              hero2.endAnimation=frameCount+10;


            }
            if(keyCode===DOWN_ARROW){
            //hero1.y=hero1.y+4
              player.changePosition(0,4)
            }
            if(keyCode===LEFT_ARROW){
              //hero1.x=hero1.x-4
              player.changePosition(-7,0)
              hero1.changeAnimation("hero walk",walking)

            }
            if(keyCode===RIGHT_ARROW){
              //hero1.x=hero1.x-4
              hero1.addAnimation("hero lwalk",lwalking) 
              hero2.endAnimation=frameCount+10;

              player.changePosition(7,0)
            }
            //q
            if(keyCode===113){
                hero1.changeAnimation("hero punch",punch)
                hero1.endAnimation=frameCount+10;
            }
            //
            if(keyCode===101){
              hero1.changeAnimation("hero kick",kick)
              hero1.endAnimation=frameCount+10;
              
            }
            keyCode=65;
           
            if(hero1.isTouching(hero2)){
                //hero2.x=hero2.x+100;
                player.changePosition(-20,0);
                hero2.changeAnimation("hero2 recover",lrecover);
                if(hero1.x<hero2.x)
                {
                  player.health-=10
                }
                if(player.health<=10)
                {
                  player.health=0;
                }
             
                hero2.endAnimation=frameCount+10;
  
                  
            }
            if(player.health<=0)
            {
              gameState=2;
              game.update(2);
            }
   //          hero1.x=hero1.x-0.5
          }
          
          if(player.index===2)
          {
         //   console.log(plr)
         hero2.x=player.xpos;
         hero2.y=player.ypos;        
        
            hero1.x=allPlayers["player1"].x;
            hero1.y=allPlayers["player1"].y;
            textSize(20);
            fill("red")
            text(player.name,hero2.x,hero2.y+60);    
           
            if(keyCode===UP_ARROW){
              //hero2.y=hero2.y-4
              player.changePosition(0,-4) 
              hero2.changeAnimation("hero2 jump",jump)
              hero2.endAnimation=frameCount+10;


            }
            if(keyCode===DOWN_ARROW){
              //hero2.y=hero2.y+4
              player.changePosition(0,4)  
            }
            if(keyCode===LEFT_ARROW){
              //hero2.y=hero2.x-4
              player.changePosition(-7,0)  
              hero2.changeAnimation("hero2 walk",walking)
              hero2.endAnimation=frameCount+10;


            }
            if(keyCode===RIGHT_ARROW){
              //hero1.x=hero1.x-4
              player.changePosition(7,0)
              hero2.changeAnimation("hero2 lwalk",lwalking)           
              hero2.endAnimation=frameCount+10;
              
            }
            if(keyCode===113){
              hero2.changeAnimation("hero2 punch",lpunch)
              hero2.endAnimation=frameCount+10;
           
            }
            if(keyCode===101){
              hero2.changeAnimation("hero2 kick",lkick)
              hero2.endAnimation=frameCount+10;
                         
            }
            if(hero2.isTouching(hero1)){
              //hero2.x=hero2.x+100;
              player.changePosition(-20,0);
              hero1.changeAnimation("hero recover",recover)
              if(hero2.x<hero1.x)
               {
                player.health-=20
               }
                hero1.endAnimation=frameCount+10;
               if(player.health<=10)
               {
                 player.health=0;
               }
          
          }
          if(player.health<=0){
            gameState=2
            game.update(2)
          }
            keyCode=65;
           
     //        hero2.x=hero2.x-0.5
    //      }
      }

      
      hero1.collide(invisibl)
      hero2.collide(invisibl)
    
  }
       }
    showHealth(){
      textSize(20);
      fill("blue");
      text(player.name,width/2-200,50)
      fill("white")
      rect(width/2-100,30,200,20)
      fill("yellow")
      rect(width/2-100,30,player.health,20)
      
    }
      
    end(){
      
    }
  }
  