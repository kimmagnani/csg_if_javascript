class Levels {
    constructor() {
    this.level = null;
    this.maxLevel = 3;
    this.actief = null;
    this.levelGehaald = null;
    this.afgelopen = null;
    this.gewonnen = null;
    this.alfa = 0.5;
  }
  
  nieuwSpel() {
    this.level = 0;
    this.actief = false;
    this.gewonnen = false;
    this.afgelopen = false;
    this.nieuwLevel();
  }

  nieuwLevel() {
    this.level++;
    this.levelGehaald = false;
  }

  update() {
    this.alfa += random(-3,3) / 100;
    if (this.alfa <= 0 || this.alfa >=1) {
        this.alfa = 0.5;
    }
  }

   tekenAnimatie() {
  /*  push();
    noStroke();
    fill(120,130,150,this.alfa);
    rect(10,10,880,580);
    pop(); */
  }

  tekenScorebord() {
    
  }

maakRijLetters() {
    
  }
  
  controleerInvoer() {
    // mag deze invoer?
    
    
  }

  verwerkInvoer() {
    // verwerk de invoer
    
    
  }

  woordIsGeraden() {
    
  }
  
  teken() {
    // teken de speltoestand
    
    
  }

  beginScherm() {
    push();
    fill('red');
    stroke(150,200,255,.7);
    strokeWeight(5);
    textSize(75);
    text("het galgje one\n direction spel",0,0,canvas.width,canvas.height * 2 / 3);
    textSize(32);
    strokeWeight(2);
    fill(0,0,0,0.75);
    text("Raad één voor één letters van het woord.\nMaar raad niet te vaak verkeerd, dan verlies je.\n\nDruk op een toets om te beginnen.\n",0,canvas.height * 1 / 2,canvas.width,canvas.height * 1 / 3);
    pop();
  }

  levelScherm() {
    push();
    fill(50,80,80,.5);
    stroke(150,200,255,.7);
    strokeWeight(3);
    text('Gefeliciteerd!\nJe hebt level '+this.level+' gehaald!\n\nDruk ENTER om naar level '+(this.level+1)+' te gaan.',0,0,canvas.width,canvas.height / 2);
    pop();
  }   

  eindScherm() {
    var tekst = 'Je hebt het gehaald.';
    if (this.gewonnen) {
      tekst = 'Gefeliciteerd!';
    }
    push();
    fill(0);
    stroke(100,75,50,.8);
    strokeWeight(3);
    text(tekst + '\n\nDruk SPATIE voor nieuw spel.',0,0,canvas.width,canvas.height);
    pop();
  }    
  
  teken() {
    background(onedirection);
    if (!this.actief) {
        if (this.afgelopen) {
            this.eindScherm();
        }
        else {
            this.beginScherm();
        }
    }
    else {
        if (this.levelGehaald) {
            this.levelScherm();
        }
        else {
            this.tekenScorebord();
        }
    }
  }
}

class Galgje {
  constructor(s,b) {
    this.speler = s;
    this.maximaalAantalBeurten = 10;
    this.speler.resterendeBeurten = this.maximaalAantalBeurten;
    this.beeldjes = b;
    this.woord = 'fantastischer';
    this.letters = [];
    this.geraden = [];
    this.pogingen = [0];
    this.maakRijLetters();
  }
  
  maakRijLetters() {
    for (var l = 0;l < this.woord.length;l++) {
      this.letters.push(this.woord.substr(l,1));
      this.geraden.push(false);
    }
  }
  
  controleerInvoer() {
    // mag deze invoer?
    
    if (this.speler.resterendeBeurten > 0 && !this.woordIsGeraden()) {
      this.verwerkInvoer();
      this.teken();
    }
  }

  verwerkInvoer() {
    // verwerk de invoer
    
    this.pogingen.push(key);
    var letterZitInWoord = false;
    for (var l = 0;l < this.letters.length;l++) {
      if (this.letters[l] == key) {
        letterZitInWoord = true;
        this.geraden[l] = true;
      }
    }
    if (!letterZitInWoord) {
      this.speler.resterendeBeurten--;
    }
  }

  woordIsGeraden() {
    var geraden = true;
    for (var b = 0;b < this.geraden.length;b++) {
      if (!this.geraden[b]) {
        geraden = false;
      }
    }
    return geraden;
  }
  
  teken() {
    // teken de speltoestand
    
    push();
    background('lightcyan');
    noStroke();
    textFont("Courier");
    textSize(40);
    textAlign(CENTER,CENTER);
    var tekst="";
    for (var l = 0;l < this.letters.length;l++) {
      if (this.geraden[l]) {
        tekst += this.letters[l]+" ";
      }
      else
      {
        tekst += "_ ";
      }
    }
    tekst=tekst.substr(0,tekst.length-1);
    text(tekst,12,0,canvas.width,70);
    image(this.beeldjes[this.maximaalAantalBeurten - this.speler.resterendeBeurten],(canvas.width - 300) / 2,75,300,300);
    textSize(80);
    if (this.speler.resterendeBeurten == 0) {
      fill('red');
      text("VERLOREN :(",0,0,canvas.width,300);
    }
    if (this.woordIsGeraden()) {
      fill('green');
      text("GEWONNEN :)",0,100,canvas.width,300);
    }    
    pop();
  } 
}

class Speler {
  constructor(n) {
    this.naam = n;
    this.resterendeBeurten = null;
  }
  
  kiesLetter() {
    // kies een letter
    // DIT WERKT OOK: if (keyCode >= 97 && keyCode <= 122) {
    
    if (key >= 'a' && key <= 'z') {
      spel.controleerInvoer();
    }
  }
}
/*  **********************************************************
    **  EINDE klasse Spel met Levels  BEGIN hoofdprogramma  **
    ********************************************************** */


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

function setup() {
  canvas = createCanvas(900,600);
  canvas.parent('processing');
  colorMode(RGB,255,255,255,1);
  textFont("Monospace");
  textSize(44);
  textAlign(CENTER,CENTER);  
  frameRate(50);
  spel = new Levels();
  spel.nieuwSpel();
}

function draw() {
  spel.update();
  spel.teken();
}

function mousePressed() {
  if (spel.actief) {
    spel.levelGehaald = true;
  }
  if (spel.level>=spel.maxLevel) {
    spel.afgelopen = true;
    spel.gewonnen = true;
    spel.actief = false;
  }  
}



 function keyTyped() {
     // spel.speler.kiesLetter();
  if (!spel.actief && !spel.levelGehaald) {
    // begin spel
    spel.actief = true;
  }
  if ((spel.levelGehaald && !spel.afgelopen) && keyCode == ENTER) {
    // level gehaald tijdens het spel
    spel.nieuwLevel();
  }
  if ((spel.afgelopen) && keyCode == 32) {
    // einde spel
    spel.nieuwSpel();
  }  
}