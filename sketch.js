//Declaring the variables.
var bullet1,bullet2,bullet3,bullet4;
var line1,line2,line3,line4;
var wall1,wall2,wall3,wall4;
var speed,weight1,weight2,weight3,weight4;
var damage1,damage2,damage3,damage4;
var thickness;

function setup() {
  //Creating the canvas area.
  createCanvas(1600,500);

  //Assigning speed,thickness and weight random values.
  speed = random(100,221);
  thickness = random(22,83);
  weight1 = random(30,52);
  weight2 = random(30,52);
  weight3 = random(300,52);
  weight4 = random(30,52);

  //Creating three line sprites.
  line1 = createSprite(730,90,1500,5.5);
  line2 = createSprite(730,190,1500,5.5);
  line3 = createSprite(730,290,1500,5.5);

  //Giving them white color.
  line1.shapeColor = color(255,255,255);
  line2.shapeColor = color(255,255,255);
  line3.shapeColor = color(255,255,255);

  //Creating 4 bullet sprites and giving them white color.
  bullet1 = createSprite(50,40,30,15);
  bullet1.shapeColor = color(255,255,255);

  bullet2 = createSprite(50,140,30,15);
  bullet2.shapeColor = color(255,255,255);

  bullet3 = createSprite(50,240,30,15);
  bullet3.shapeColor = color(255,255,255);

  bullet4= createSprite(50,340,30,15);
  bullet4.shapeColor = color(255,255,255);

  //Creating a 4 wall sprites and giving it blue color.
  wall1 = createSprite(1300,40,thickness,70);
  wall1.shapeColor = color("blue");

  wall2 = createSprite(1300,140,thickness,70);
  wall2.shapeColor = color("blue");

  wall3 = createSprite(1300,240,thickness,70);
  wall3.shapeColor = color("blue");

  wall4 = createSprite(1300,340,thickness,70);
  wall4.shapeColor = color("blue");
}

function draw() {
  //Setting background color to black.
  background(0,0,0);

  
  //Setting all the bullets velocity x same as the value of speed.
  bullet1.velocityX = speed;
  bullet2.velocityX = speed;
  bullet3.velocityX = speed;
  bullet4.velocityX = speed;

  //Assigning functions when any of the four bullets touches the wall.
  //Setting that particular bullet's velocity x to 0.
  //Setting damage1, damage2, damage3 & damage4 values as 0.5*weight1*speed*speed/(thickness*thickness*thickness).
  //Changing the wall color as per the damage's value.

  if(hasCollided(bullet1,wall1)){
    bullet1.velocityX= 0;

    var damage1= 0.5*weight1*speed*speed/(thickness*thickness*thickness)
  
    if(damage1>10){
    wall1.shapeColor= "red";
    }
  
    if(damage1<10){
      wall1.shapeColor= "Green";
    }
  }

  if(hasCollided(bullet2,wall2)){
    bullet2.velocityX= 0;

    var damage2= 0.5*weight2*speed*speed/(thickness*thickness*thickness)
  
    if(damage2>10){
    wall2.shapeColor= "red";
    }
  
    if(damage2<10){
      wall2.shapeColor= "green";
    }
  }

  if(hasCollided(bullet3,wall3)){
    bullet3.velocityX= 0;

    var damage3= 0.5*weight3*speed*speed/(thickness*thickness*thickness)
  
    if(damage3>10){
    wall3.shapeColor= "red";
    }
  
    if(damage3<10){
      wall3.shapeColor= "green";
    }
  }

  
  if(hasCollided(bullet4,wall4)){
    //Displaying the text.
    fill("red");
    textSize(15);
    textStyle(BOLD);
    textFont("cursive");
    text("(Refresh the page to re-test)",620,380);

  
    
      bullet4.velocityX= 0;
      var damage4= 0.5*weight4*speed*speed/(thickness*thickness*thickness)
    
      if(damage4>10){
      wall4.shapeColor= "red";
      }
    
      if(damage4<10){
        wall4.shapeColor= "green";
      }
    }

//Displaying text as per the damages' value.
if(damage1 > 10) {
  fill(color("red"));
  textStyle(BOLD);
  textFont("cursive");
  text("Damage is more.",1000,49);
}

if(damage1 < 10) {
  fill(color("green"));
  textStyle(BOLD);
  textFont("cursive");
  text("Damage is less",1000,49);
}

if(damage2 > 10) {
  fill(color("red"));
  textStyle(BOLD);
  textFont("cursive");
  text("Damage is more.",1000,149);
}

if(damage2 < 10) {
  fill(color("green"));
  textStyle(BOLD);
  textFont("cursive");
  text("Damage is less",1000,149);
}

if(damage3>10) {
  fill(color("red"));
  textStyle(BOLD);
  textFont("cursive");
  text("Damage is more.",1000,249);
}

if(damage3 < 10) {
  fill(color("green"));
  textStyle(BOLD);
  textFont("cursive");
  text("Damage is less",1000,249);
}

if(damage4 > 10) {
  fill(color("red"));
  textStyle(BOLD);
  textFont("cursive");
  text("Damage is more",1000,349);
}

if(damage4 < 10) {
  fill(color("green"));
  textStyle(BOLD);
  textFont("cursive");
  text("Damage is less",1000,349);
}

fill("white");
textSize(20);
textStyle(BOLD);
textFont("Arial");

text("BULLET 1",22,49);
text("BULLET 2",22,149);
text("BULLET 3",22,249);
text("BULLET 4",22,349);

text("Speed: " + Math.round(speed),210,49);
text("Speed: " + Math.round(speed),210,149);
text("Speed: " + Math.round(speed),210,249);
text("Speed: " + Math.round(speed),210,349);

text("Weight: " + Math.round(weight1),400,49);
text("Weight: " + Math.round(weight2),400,149);
text("Weight: " + Math.round(weight3),400,249);
text("Weight: " + Math.round(weight4),400,349);
  
fill("aqua");
    textSize(40);
    textStyle(BOLD);
    textFont("Arial");
    text("AKSHAY'S SHOOTING TEST 2020",400,460);
    
  //Displaying all the sprites on the canvas.
  drawSprites();
}

function hasCollided(lbullet1, lwall1)
{
	bulletRightEdge=lbullet1.x +lbullet1.width;
	wallLeftEdge=lwall1.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true;
	}
	return false;
}

function hasCollided(lbullet2,lwall2){
  bulletRightEdge=lbullet2.x +lbullet2.width;
  wallLeftEdge=lwall2.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
    return false;
}


function hasCollided(lbullet3,lwall3){
  bulletRightEdge=lbullet3.x +lbullet3.width;
  wallLeftEdge=lwall3.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
    return false;
}

function hasCollided(lbullet4,lwall4){
  bulletRightEdge=lbullet4.x +lbullet4.width;
  wallLeftEdge=lwall4.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
    return false;
}


