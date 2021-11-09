class Plank{
    constructor(x,y,w,h,angle){
        var options={
            isStatic : false,
            frictionAir : 0.2
        }
        this.width = w
        this.body = Bodies.rectangle(x,y,this.width,20,options)
        Matter.Body.setAngle(this.body,angle)
        Composite.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        fill("cyan")
        rectMode(CENTER)
        stroke("#00DBFF")
        strokeWeight(4)
        translate(pos.x,pos.y)
        rotate(angle)
        rect(0,0,this.width,20)
        pop()
    }
}