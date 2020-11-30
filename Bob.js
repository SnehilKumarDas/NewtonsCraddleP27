class Bob{

    constructor(x,y,r){

        var options = {

            isStatic : false,
            restitution : 1,
            friction : 0,
            density : 0.8

        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.Bob = Bodies.circle(x,y,(this.r)/2,options);
       
        World.add(world,this.Bob);
        


    }

    display(){

        push();
        translate(this.Bob.position.x,this.Bob.position.y)
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();



    }




}