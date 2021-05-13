class Box{
    constructor(x,y){
        var options = {
            restitution: 0.25,
            friction: 1


        }
        this.body = Bodies.rectangle(x,y,50,50,options);
this.width = 50;
this.height = 50;
World.add(engineWorld,this.body);
    }
    display(){
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height)    }
}


