var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//creating plddle and the ball
var paddle = createSprite(200, 375, 50, 15);
var ball = createSprite(150, 250, 20, 20);

//first row of boxes
var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="red";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="blue";
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="red";
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="blue";
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="red";
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="blue";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="red";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="blue";

//second row of boxes
var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="blue";
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="red";
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="blue";
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="red";
var box13 = createSprite(225, 125, 50, 50);
box13.shapeColor="blue";
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="red";
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="blue";
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="red";


//initial value
var hits=0
var gameState = "serve"

function draw() {
  background("white");
  fill("red")
text("score:"+hits ,10,20);

if (gameState == "serve"){
text("welcome ! press enter key to start ",90,200)
textSize(25);}
   
   
  //Moving the ball on pressing enter key
  if(keyDown("enter")){
    ball.velocityX = randomNumber(-5,5);
    ball.velocityY = randomNumber(-5,5);
    gameState = "p"
  
  }
  
  //Making the ball bounceOff the paddle and three sides of canvas
  createEdgeSprites();
  ball.bounceOff(rightEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(topEdge);
  ball.bounceOff(paddle);

  //Moving the paddle with mouse along the x-axis
  paddle.x=World.mouseX;
  
  //destroy the boxes when ball touches them
  if(ball.isTouching(box1))
  { box1.destroy();hits=hits+1
  playSound("assets/category_hits/puzzle_game_magic_item_unlock_5.mp3", false);}
if(ball.isTouching(box2))
  { box2.destroy();hits=hits+1 
  playSound("assets/category_hits/puzzle_game_magic_item_unlock_5.mp3", false);}
 if(ball.isTouching(box3))
  { box3.destroy();hits=hits+1
     playSound("assets/category_hits/puzzle_game_magic_item_unlock_5.mp3", false);
  }
 if(ball.isTouching(box4))
  { box4.destroy();hits=hits+1
     playSound("assets/category_hits/puzzle_game_magic_item_unlock_5.mp3", false);
  }
 if(ball.isTouching(box5))
  { box5.destroy();hits=hits+1
     playSound("assets/category_hits/puzzle_game_magic_item_unlock_5.mp3", false);
  }
 if(ball.isTouching(box6))
  { box6.destroy();hits=hits+1
     playSound("assets/category_hits/puzzle_game_magic_item_unlock_5.mp3", false);
  }
 if(ball.isTouching(box7))
  { box7.destroy();hits=hits+1
     playSound("assets/category_hits/puzzle_game_magic_item_unlock_5.mp3", false);
  }
 if(ball.isTouching(box8))
  { box8.destroy();hits=hits+1
     playSound("assets/category_hits/puzzle_game_magic_item_unlock_5.mp3", false);
  }
 if(ball.isTouching(box9))
  { box9.destroy();hits=hits+1
     playSound("assets/category_hits/puzzle_game_magic_item_unlock_5.mp3", false);
  }
 if(ball.isTouching(box10))
  { box10.destroy();hits=hits+1
     playSound("assets/category_hits/puzzle_game_magic_item_unlock_5.mp3", false);
  }
 if(ball.isTouching(box11))
  { box11.destroy();hits=hits+1
     playSound("assets/category_hits/puzzle_game_magic_item_unlock_5.mp3", false);
  }
 if(ball.isTouching(box12))
  { box12.destroy();hits=hits+1
     playSound("assets/category_hits/puzzle_game_magic_item_unlock_5.mp3", false);
  }
 if(ball.isTouching(box13))
  { box13.destroy();hits=hits+1
     playSound("assets/category_hits/puzzle_game_magic_item_unlock_5.mp3", false);
  }
 if(ball.isTouching(box14))
  { box14.destroy();hits=hits+1
     playSound("assets/category_hits/puzzle_game_magic_item_unlock_5.mp3", false);
  }
 if(ball.isTouching(box15))
  { box15.destroy();hits=hits+1
     playSound("assets/category_hits/puzzle_game_magic_item_unlock_5.mp3", false);
  }
 if(ball.isTouching(box16))
  { box16.destroy();hits=hits+1
     playSound("assets/category_hits/puzzle_game_magic_item_unlock_5.mp3", false);
  }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
