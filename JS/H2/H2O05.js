var aantalRijenRaster = 10;
var aantalKolommenRaster = 9;
var celGrootte;

var spriteJos;
var xJos;
var yJos;

function preload() {
  brug = loadImage("images/backgrounds/dame_op_brug_1800.jpg");
  spriteJos = loadImage("images/sprites/Jos100px/Jos_0.png");
}

function setup() {
  canvas = createCanvas(901,601);
  canvas.parent('processing');
  celGrootte = width / aantalKolommenRaster;
  background (brug);
}

function draw() {
  image (spriteJos, 400,300);
  tekenRaster();
}

function tekenRaster() {
    
  push();
  noFill();
  stroke('grey');
  /*
  Maak hieronder een dubbele herhaling om een raster te maken.
  HINT: je kunt terugkijken naar het raster dat je in H1 hebt gemaakt.
  Maak gebruik van de variabelen die bovenaan zijn gedeclareerd.
  */
  for (var k = 0; k < aantalRijenRaster;k++){
  for (var m = 0; m < aantalKolommenRaster;m++){
      rect(k*celGrootte,m*celGrootte,celGrootte,celGrootte);
  }
}
  pop();
}