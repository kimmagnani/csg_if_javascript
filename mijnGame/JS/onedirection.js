/* klasse speler (mult)
   klasse level */
   
var gameSettings

function preload() {
    liam = loadImage("mijnGame/JS/plaatjesgame/liam.png");
    zayn = loadImage("mijnGame/JS/plaatjesgame/zayn.png");
    louis = loadImage("mijnGame/JS/plaatjesgame/louis.png");
    harry = loadImage("mijnGame/JS/plaatjesgame/harry.png");
    niall = loadImage("mijnGame/JS/plaatjesgame/niall.png");
    potato = loadImage("mijnGame/JS/plaatjesgame/potato.png");
    carrot = loadImage("mijnGame/JS/plaatjesgame/carrot.png");
    achtergrond = loadImage("mijnGame/JS/plaatjesgame/boom.png");
}
function setup() {
    canvas = createCanvas(windowWidth, windowHeight); 
    canvas.parent('processing');
    spel = new Levels ();
    spel.nieuwSpel();
}

class Speler {
    constructor(el) {
        this.score = null;
        this.breedte = 15;
        this.hoogte = 15;
        this.hoogte1d = 15;
        
    }}

   // vang(potato)

   // key wasd arrows 


class Potato {}

class Levels{
    constructor () {
        this.level = null;
        this.maxLevel = 5; 
        this.actief = null;
        this.gewonnen = null;
        this.afgelopen = null;
        this.levelGehaald = null;
    }

    nieuwSpel() {
    this.level = 0;
    this.actief = false;
    this.gewonnen = false;
    this.afgelopen = false;
    this.speler.niveau = 5;
    this.speler.score = 0;
    this.nieuwLevel();
  }

  nieuwLevel(){
      this.level ++;
      this.levelGehaald = false;
      this.actief = false;
  }

   teken() {
    background('paleturquoise');
    textFont("Monospace");
    textSize(20);
    push();
    fill('black'); }
if (mousePressed) {
      this.beginScherm();
    }
   
 /*  function mousePressed() {
  if (spel.actief) {
    spel.levelGehaald = true;
  }
  if (spel.level>=spel.maxLevel) {
    spel.afgelopen = true;
    spel.gewonnen = true;
    spel.actief = false;
  }  
 } */
}

class PotatoVanger {
    
beginScherm() {
    push();
    fill(0, 139, 139,.5);
    textAlign(CENTER,TOP);
    fill(0);
    text("titel\n\nProbeer meer potatoes te vangen dan je tegenstander.\n\nGebruik de pijltjestoetsen (speler 1) of awsd (speler 2) voor de besturing. Klik om het spel te starten.",0,canvas.height / 4,canvas.width,canvas.height)
    pop();
  } 


/* function mousePressed() {
  if (!spel.actief) {
    spel.actief = true;

  }
  else {
    if (spel.afgelopen) {
      spel.nieuw();
    } 
} */



}

