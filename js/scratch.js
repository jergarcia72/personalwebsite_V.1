function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  c = createCanvas(windowWidth, windowHeight);
  c.position(0,0);
  c.style('z-index','-1');
}

function mouseDragged(){
  x=mouseX
  y=mouseY
  o=pmouseX
  p=pmouseY
  if(y>p){
    line(o+2,p,x+2,y)
    line(o-1,p,x-1,y)
    line(o+5,p+2,x+5,y+2)
    line(o-4,p,x-4,y)
    line(o-7,p+5,x-7,y+5)
  }
  
}

