class pig {
    constructor (xP, yP) {
        var ball_options ={
            restitution: 1.0,
            friction:0.5,
            density: 0.5433248697
        }
        this.idk = Bodies.rectangle(xP, yP, 50, 50, ball_options);
        this.Width = 50;
        this.Height = 50;
        World.add(world,this.idk);
    }
    display () {
        push();
        rectMode(CENTER);
        fill("green");
        translate(this.idk.position.x, this.idk.position.y)
        rect(0, 0, this.Width, this.Height);
        rotate(this.idk.angle);
        pop();
    }
}