function setup() {
    createCanvas(windowWidth-50, windowHeight-50);
    positionEnnemi();
  }
  
  var x=80;
  var y=80;
  var sensY=0;
  var sensX=0;
  var vitesse=1;
  var ennemiX=0;
    var ennemiY=0;
    var size=50;
  var score = 0;
  var mort =0;
var newEnnemiX=0;
var newEnnemiY=0;
    function positionEnnemi(){
      ennemiX=random(0,windowWidth-50);
      ennemiY=random(0,windowHeight-50);
    }
    function positionNewEnnemi(){
      newEnnemiX=random(0,windowWidth-50);
      newEnnemiY=random(0,windowHeight-50);
    }
    

  function draw() {
    if(mort==1){
      background(127);

      fill(255,0,0);
      text("Mort",50,50);
      text("Max Score : "+score,50,100);
      return;
    }
    background(127);
    fill(255,0,0);
    rect(x,y,size,size);
    y=y+sensY;
    x=x+sensX;
    textSize(32);
    fill(0);
    text("score ="+score,50,50)
  


if(x-size/2< ennemiX+size/2 && 
  x+size/2>ennemiX-size/2 &&
  y-size/2 < ennemiY+size/2 &&
  y+size/2 > ennemiY -size/2
){
  positionEnnemi();
  score= score +1;
  vitesse = vitesse+ 1;
  newEnemi = newEnnemi +1;
  
}


    
    fill(0,255,0);
    rect (ennemiX,ennemiY,size,size);

if (y+size>=windowHeight-50){mort=1}
if (y<=0){mort=1}
if (x+size>=windowWidth-50){mort=1}
if (x<=0){mort=1}


  }

  function keyPressed() {
    if (keyCode === DOWN_ARROW) {
      sensY = vitesse;
      sensX =0;
    } else if (keyCode === UP_ARROW) {
      sensY = -vitesse;
      sensX =0;
    }
    if (keyCode === RIGHT_ARROW) {
      sensX = vitesse;
      sensY=0;
    } else if (keyCode === LEFT_ARROW) {
      sensX = -vitesse;
      sensY=0;
    }
  }

