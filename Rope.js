class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){

        this.offsetX = offsetX
        this.offsetY = offsetY

        var options = {

            bodyA : bodyA,
            bodyB : bodyB,
            pointB:{x:this.offsetX,y:this.offsetY},
            //stiffness : 0.02,
            //length : 10

        }

        this.rope = Matter.Constraint.create(options)
        World.add(world,this.rope)

    }

    display(){

        push();
        var posA = this.rope.bodyA.position;
        var posB = this.rope.bodyB.position;

        strokeWeight(5)
        stroke("yellow")
        line(posA.x,posA.y,posB.x + this.offsetX,posB.y + this.offsetY);
        pop();
    }


}
