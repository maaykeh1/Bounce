class Bal {
    x;
    y;
    speedX;
    speedY;
 
    constructor(_x, _y, _speedX, _speedY) {
      this.x = _x;
      this.y = _y;
      this.speedX = _speedX;
      this.speedY = _speedY;
    } 
 
    update() {
      this.x = this.x + this.speedX;
      this.y = this.y + this.speedY;
 
      if (this.x <=0 || this.x >= 1280) {
        this.speedX = this.speedX * -1;
      }
      if (this.y <=0 || this.y >= 720) {
        this.speedY = this.speedY * -1;
      }
    }
 
    show() {
      fill(255, 204, 255);
      ellipse(this.x, this.y, 50, 50);
    }
  }