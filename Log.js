class log {
    constructor (xP, yP, h, angle) {
        var ball_options = {
            restitution: 1.0,
            friction:1.0,
            density: 1.0
        }
        this.idk = Bodies.rectangle(xP, yP, 20, h, angle, ball_options);
        this.Width = 20;
        Matter.Body.setAngle(this.idk, angle);
        this.Height = h;
        World.add(world,this.idk);
    }
    display () {
        push();
        rectMode(CENTER);
        fill("white");
        stroke("green");
        strokeWeight(4);
        translate(this.idk.position.x, this.idk.position.y);
        rect(0, 0, this.Width, this.Height);
        rotate(this.idk.angle);
        pop();
    }
}