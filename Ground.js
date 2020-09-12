class ground{
    constructor (x, y, w, h){
        var ground_options ={
            isStatic: true
        }
    this.Body = Bodies.rectangle(x,y,w,h,ground_options);
    this.Width = w;
    this.Height = h;
    World.add(world,this.Body);
    }
    display(){
        rectMode(CENTER);
        fill("brown")
        rect(this.Body.position.x,this.Body.position.y,this.Width,this.Height);
    }
}