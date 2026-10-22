class Bottle extends DrawbleObject {
    constructor(x, y) {
        super();
        this.loadImage('./images/6_salsa_bottle/1_salsa_bottle_on_ground.png');
        this.x = x;
        this.y = y;
        this.width = 60;
        this.height = 80;
    }
}