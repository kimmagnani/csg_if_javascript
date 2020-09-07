function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  
  //noLoop();
}

function preload(){
    pl = loadImage("images/sprites/kever.png");
}



function draw() {
for (var n = 0;n < 9;n++) {
  
image(pl,50*n,45,50,50);
 
}



}

