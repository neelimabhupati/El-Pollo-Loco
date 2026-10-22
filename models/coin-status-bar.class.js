class CoinStatusBar extends DrawbleObject {
    IMAGES = [
        './images/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
        './images/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        './images/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        './images/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        './images/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        './images/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png'
    ];


    percentage = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 50;
        this.y = 80; // Health bar kinda
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