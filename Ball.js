class Ball{
    constructor(x,y,r){
        var options={
            isStatic:false
        }
        this.body = Bodies.circle(x,y,r,options)
        this.radius = r
       
        Composite.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        push()
        fill("#F98B88")
        stroke("#DB6551")
        strokeWeight(4)
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius)
        pop()
    }
}