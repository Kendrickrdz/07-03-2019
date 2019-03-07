var d;

function preload(){
	img = loadImage('dk.png');
 }


function setup() {
  createCanvas(400, 400);
  d = new dk();
}

function draw() {
  background(220);
	d.mostrar();
  if(/*keyIsPressed &&*/keyCode == RIGHT_ARROW){
  d.derecha();            
  }
  if(keyIsPressed && keyCode == LEFT_ARROW){
  d.izquierda();            
  }
  if(keyIsPressed && keyCode == UP_ARROW){
  d.arriba();            
  }
  if(keyIsPressed && keyCode == DOWN_ARROW){
  d.abajo();            
  }
  if(keyIsPressed && keyCode == 65){
  noLoop();            
  }

}

function mousePressed(){
  loop();
}

  imageMode(CENTER);
