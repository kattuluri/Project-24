class paper {
    constructor(x,y,diameter){
      var options = {
        isStatic : false,
        restitution : 0.3,
        friction : 0.5,
        density : 1.2
      }
      this.body = Bodies.circle(x,y,diameter,options);
      this.diameter = diameter
      World.add(world,this.body);
    }
    display(){
      var p = this.body.position
      var a = this.body.angle
      push()
      translate(p.x,p.y)
      rotate(a)
      strokeWeight(4)
      stroke("blue")
      fill("red");
      circle(0,0,this.diameter)
      pop()
    }
  }