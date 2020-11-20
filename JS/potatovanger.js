function setup (){
    canvas = createCanvas(900,900);
    canvas.parent('processing');
    frameRate(10)
    background(onedirection);
    textFont("Monospace");
    textSize(25);
    fill('green');
}
var harry;
var harryx = 650;
var louis;
var louisx = 200;
var carrot;
var carrotx;
var carroty = 0, carroty2 = 0;
var random, random2;
var counter = 0;
var carrotx2;
var carrot2;
var time = 1;
var score = 0, score2 = 0;
var placeholder, placeholder2;
var life = 3, life2 = 3;
var tie = "gelijk spel!", player1win= "speler 1 wint!", player2win= "speler 2 wint!";

function preload(){
      harry = loadImage("JS/H2/harry.png");
      louis = loadImage("JS/H2/louis.png");
      onedirection = loadImage("JS/H2/onedirection.jpg");
      carrot = loadImage("JS/H2/carrot.png");
      carrot2 = loadImage("JS/H2/carrot.png");
      onedirection2 = loadImage ("JS/plaatjesgame/onedirection.png");
      gelijkspel = loadImage ("JS/nialltie.jpg")
  }

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
            this.x += 50;
            this.frameNummer = 1;
        }
        if (keyIsDown(LEFT_ARROW)) {
            this.x -= 50;
        }
    }
}
    

function draw (){
    background(onedirection);
    text("Levens speler 1=" + life,10,890);
    text("Levens speler 2=" + life2,650,890);

if(life2 > 0){    
    if(carrotx2 == harryx){
       placeholder2 = 1; 
       score2 += 1;
    }
    if(carroty2 >= 900){
      life2 -= 1;
    }
    if(counter == 0 || carroty2 >= 900 || placeholder2 == 1){    
    random2 = Math.floor(Math.random() * 9) + 9;
    carrotx2 = random2*50;
    carroty2 = 0;
    placeholder2 = 0;
    }
    carroty2 += (score2 * 2)+2;
    if (keyIsDown(LEFT_ARROW) && harryx > 450) {
    harryx -= 50;
   }
  if (keyIsDown(RIGHT_ARROW) && harryx <= 800 ) {
    harryx += 50;
  }
  
}

if(life > 0){
    if(carrotx == louisx){
       placeholder = 1;
       score += 1;
    }
     if(carroty >= 900){
      life -= 1;
    }
    if(counter == 0 || carroty >= 900 || placeholder == 1){  
    random = Math.floor(Math.random() * 9);
    carrotx = random*50;
    carroty = 0;
    placeholder = 0;
    }
  carroty += (score * 2)+2;
  if (keyIsDown(65) && louisx >= 35) {
    louisx -= 50;
   }
   if (keyIsDown(68) && louisx <= 375) {
    louisx += 50;
   }
}

    harry.resize(75,75);
    louis.resize(75,75);
    carrot.resize(50,50);
    carrot2.resize(50,50);

    image(carrot,carrotx,carroty);
    image(carrot2,carrotx2,carroty2);
    image(harry,harryx-20,825);
    image(louis,louisx-15,825);

    counter = 1;

    if(life <= 0 && life2 <= 0){
      textSize(100);
      background(onedirection2);
      if(score2 > score){
      text(player2win,200,300,450);
      fill("red");   
      }
      if(score > score2){
      text(player1win,200,300,450);
      fill("red");   
      }
      if(score == score2){
    background(gelijkspel);
      text(tie,200,300,450);
      fill("red");
      }
    }


}

