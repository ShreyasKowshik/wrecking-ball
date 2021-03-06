class Rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1,
            length:250
        }
        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(engineWorld,this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
stroke("white");
strokeWeight(3);
line(pointB.x,pointB.y,pointA.x,pointA.y);
    }
}