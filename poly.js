class Shoot{
    constructor(x, y) {
        this.body = Bodies.circle(x,y,radius);
        this.radius = 20;
        this.image = loadImage("polygon.png");
        World.add(world,this.body);
}
}
