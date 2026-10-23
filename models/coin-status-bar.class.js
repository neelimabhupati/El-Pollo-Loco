class CoinStatusBar extends DrawbleObject {
    IMAGES = [
        './images/Grafiken-Sharkie/4. Marcadores/green/Coin/0_  copia 4.png',
        './images/Grafiken-Sharkie/4. Marcadores/green/Coin/20_  copia 2.png',
        './images/Grafiken-Sharkie/4. Marcadores/green/Coin/40_  copia 4.png',
        './images/Grafiken-Sharkie/4. Marcadores/green/Coin/60_  copia 4.png',
        './images/Grafiken-Sharkie/4. Marcadores/green/Coin/80_  copia 4.png',
        './images/Grafiken-Sharkie/4. Marcadores/green/Coin/100_ copia 4.png'
    ];

    percentage = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 50;
        this.y = 60; // Health bar kinda
        this.width = 200;
        this.height = 60;
        this.setPercentage(0);
    }

    setPercentage(percentage) {
        this.percentage = Math.max(0, Math.min(100, percentage));
        const imagePath = this.IMAGES[this.resultImageIndex()];
        this.image = this.imageCache[imagePath];

    }

    resultImageIndex() {
        return Math.floor(this.percentage / 20);
    }

}