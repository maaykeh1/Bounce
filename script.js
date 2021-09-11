var x = [50, 100, 150, 200, 250];
var y = [50, 100, 150, 200, 250];
var speedX = [2, 5, 15, 20, 25];
var speedY = [5, 2, 7, 9, 12];
/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

}
/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
  // stel vulkleur in
  fill(255, 255, 255);
  // teken een cirkel
  ellipse(x, y, 80, 80);
  
  for (let i = 0; i < x.length(); i++)
  {
    if(x[i] <= 0 || x[i] >= 1280)
    {
      speedX[i] = speedX[i] * -1;
    }

    if(y[i] <= 0 || y[i] >= 720)
    {
     speedY[i] = speedY[i] * -1;
    }
  }

  //positie updaten 
 // x = x + speedX;
 // y = y + speedY;
  // laat stuiteren tegen de onderkant
 // if (y === 720) {
  //  speedY = speedY * -1;
 // } 
}
