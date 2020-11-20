class speler {
    constructor () {
       this.x = 0;
       this.y = 200;
       this.levens = null;
       this.stapGrootte
    }
    /* toon() {
        image(mandPlaatje,this.x,this.y,raster.celGrootte,raster.celGrootte);
    } */

    beweeg() {
        if (keyIsDown(RIGHT_ARROW)) {
            this.x += this.stapGrootte;
            this.frameNummer = 1;
        }
        if (keyIsDown(LEFT_ARROW)) {

        }
    }
} 

class raster {
constructor() {
    this.aantalRijen = 18;
    this.aantalKolommen = 18;
    this.celGrootte = null;
  }
  
  berekenCelGrootte() {
    this.celGrootte = canvas.width / this.aantalKolommen;
  }
  
  teken() {
    push();
    noFill();
    stroke('grey');
    for (var rij = 0;rij<this.aantalRijen;rij++) {
      for (var kolom = 0;kolom<this.aantalKolommen;kolom++) {
        rect(kolom*this.celGrootte,rij*this.celGrootte,this.celGrootte,this.celGrootte);
      }
    }
    pop();
  } 
}


function setup (){
    canvas = createCanvas(900,600);
    canvas.parent('processing');
    raster = new Raster(18,18);
    raster.berekenCelGrootte();
    noLoop();
}

function draw (){
    raster.teken();
}

function preload() {
    liam = loadImage("JS/plaatjesgame/liam.png");
    zayn = loadImage("JS/plaatjesgame/zayn.png");
    louis = loadImage("JS/plaatjesgame/louis.png");
    harry = loadImage("JS/plaatjesgame/harry.png");
    niall = loadImage("JS/plaatjesgame/niall.png");
    potato = loadImage("JS/plaatjesgame/potato.png");
    carrot = loadImage("JS/plaatjesgame/carrot.png");
    achtergrond = loadImage("JS/plaatjesgame/boom.png");
    onedirection = loadImage("JS/plaatjesgame/onedirection.png");
}
