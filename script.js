//var x = 50;
 //var y = 50;
 //var speedX = 2;
 //var speedY = 5;
 var bal = new Bal(50, 100);

function draw() {
   // Kleur de achtergrond blauw, zodat je het kunt zien
   background('blue');

   bal.show();
   bal.update();
 } 