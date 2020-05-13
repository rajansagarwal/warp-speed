function warp() {
    this.x = random(width, -width);
    this.y = random(-height, height);
    this.z = random(width);
    this.pz = this.z;
  
    this.update = function() {
      this.z = this.z - speed;
      if (this.z < 1) {
        this.z = width;
        this.x = random(-width, width);
        this.y = random(-height, height);
        this.pz = this.z;
      }
    };
    
    var ran = (int)(Math.random() * 255);

    this.show = function() {
      fill(ran);
      noStroke();
  
      var sx = map(this.x / this.z, 0, 1, 0, width);
      var sy = map(this.y / this.z, 0, 1, 0, height);
  
      var rand = (int)(Math.random() * 120);
      var r = map(this.z, 0, width, mouseY/20, mouseY/40);
      ellipse(sx, sy, r, r);
  
      var px = map(this.x / this.pz, 0, 1, 0, width);
      var py = map(this.y / this.pz, 0, 1, 0, height);
  
      this.pz = this.z;
  
      stroke(ran);
      line(px, py, sx, sy);
    };
  }
