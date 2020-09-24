function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  
  //noLoop();
}



function draw( ){
    noStroke();
    background('green');
    piraat.beweeg();
    eiland.wordtBezocht(piraat);
    eiland.teken();
    piraat.teken();
    
    
}


var piraat = {
    x: 75,
    y: 50,
    sprite: null,
 

teken(){
   fill('red');
    ellipse(this.x,this.y,100);
    
},
 beweeg(){
    if (keyIsDown(LEFT_ARROW)) {
  this.x--;
  }
  if (keyIsDown(RIGHT_ARROW)) {
  this.x++;
  }
  if (keyIsDown(UP_ARROW)) {
   this.y--;
  }
  if (keyIsDown(DOWN_ARROW)) {
 this.y++;
  }
 }  
    
}

var eiland = {
    x: 400,
    y: 50,
    sprite: null,
    kleur: 'yellow',

teken(){
   fill(this.kleur);
    ellipse(this.x,this.y,200);
    
},

wordtBezocht(bezoeker){
    /*if(eiland.wordtBezocht(piraat)){
        this.kleur = 'pink';
    }
    else(){
        this.kleur = 'black';
    }
 */
if (dist(this.x,this.y,eiland.x,eiland.y)) {
      return true;
    }
    else {
      return false;
    }
    
}