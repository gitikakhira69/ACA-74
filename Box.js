class Box{
    constructor(x,y,w,h){
        var options={
            isStatic : false
        }
        this.body = Bodies.rectangle(x,y,w,h,options)
        this.width = w
        this.height = h
        Composite.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        push()
        fill("red")
        rectMode(CENTER)
        strokeWeight(3)
        rect(pos.x,pos.y,this.width,this.height)
        pop()
    }
}