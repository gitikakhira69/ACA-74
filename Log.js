class Log{
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
        fill("yellow")
        stroke("#FFA701")
        strokeWeight(4)
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height)
        pop()
    }
}