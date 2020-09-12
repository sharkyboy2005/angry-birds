class box {
    constructor (xP, yP, w, h) {
        var ball_options ={
            restitution: 1.0,
            friction:0.5,
            density: 0.5433248697
        }
        this.idk = Bodies.rectangle(xP, yP, w, h, ball_options);
        this.Width = w
        this.Height = h
        World.add(world,this.idk);
    }
    display () {
        push();
        rectMode(CENTER);
        fill("white");
        stroke("green");
        strokeWeight(4);
        translate(this.idk.position.x, this.idk.position.y)
        rect(0, 0, this.Width, this.Height);
        rotate(this.idk.angle);
        pop();
    }
}