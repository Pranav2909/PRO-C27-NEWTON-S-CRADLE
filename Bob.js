class Bob {
    constructor(x, y, width, height) {
        var options = {
            isStatic: false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
        }
      this.body = Bodies.ellipse(x, y, width, height,options);
      this.width = w;
      this.height = h;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.w, this.h);
      
    }
  };