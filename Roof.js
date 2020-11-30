class Roof{
    constructor(x,y,options){

        var options = {

            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,220,60,options)
        this.width = 220
        this.height = 60
        World.add(world,this.body);
    }

    display(){

        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }



}