function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  var x=80;
  var y=80;
  var sens=1;
  function draw() {
    background(255);
    y=y+sens;
    
    fill(0);
    
    ellipse(mouseX,y, 80, 80);
    if(y>windowHeight){
        sens=-1
    }
    if(y<0){
        sens=1
    }
  }