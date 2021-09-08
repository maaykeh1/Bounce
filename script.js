var xA = 50;
var yA = 50;
var speedXA = 2;
var speedYA = 5;

var xB = 50;
var yB = 50;
var speedXB = 2;
var speedYB = 5;

var xC = 50;
var yC = 50;
var speedXC = 2;
var speedYC = 5;

var xD = 50;
var yD = 50;
var speedXD = 2;
var speedYD = 5; 

var xE = 50;
var yE = 50;
var speedXE = 2;
var speedYE = 5;
/**

 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background(231, 199, 255;
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // Kleur de achtergrond blauw, zodat je het kunt zien
  background(231, 199, 255;
  // stel vulkleur in
  fill(100, 101, 255);

  // teken een cirkel
  ellipse(xA,yA,80,80);
  ellipe (xB, yB, 60, 60);
  ellipe (xC, yC, 40, 40);
  ellipe (xD, yD, 20, 20);
  ellipe (xE, yE, 10, 10);


  //positie van de bal
  xA = xA+ speedXA
  yA = yA + speedYA

  if (yA === 720){
    speedYA = speedYA * -1;
  }

  xB = xB+ speedXB
  yB = yB + speedB

  if (yC === 720){
    speedYC = speedYC * -1;
  }

  xC = xC+ speedXC
  yC = yC + speedC

  if (yC === 720){
    speedYC = speedYC * -1;
  }

  xD = xD+ speedXD
  yD = yD + speedD

  if (yD === 720){
    speedYD = speedYD * -1;
  }

  xE = xE+ speedXE
  yE = yE + speedE

  if (yE === 720){
    speedYE = speedYE * -1;
  } 

}