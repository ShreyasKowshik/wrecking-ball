class Ball{
    constructor(){
        var options = {
            frictionAir: 0.07,
            density:5,

        }
        this.body = Bodies.circle(350,200,80/2,options);
this.radius = 80;
World.add(engineWorld,this.body);
    }
display(){
    ellipseMode(CENTER);
    ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
}
}


