class Coin extends DrawbleObject {
    constructor(x, y) {
        super();
        this.loadImage('./images/8_coin/coin_1.png');
        this.x = x;
        this.y = y;
        this.width = 80;
        this.height = 80;
    }
}