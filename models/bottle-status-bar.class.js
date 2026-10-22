class BottleStatusBar extends DrawbleObject {
    IMAGES = [
        './images/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
        './images/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
        './images/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
        './images/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
        './images/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
        './images/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png'
    ];

    percentage = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 50;
        this.y = 140;
        this.width = 200;
        this.height = 60;
        this.setPercentage(0);
    }

    setPercentage(percentage) {
        this.percentage = Math.max(0, Math.min(100, percentage));
        const imagePath = this.IMAGES[Math.floor(this.percentage / 20)];
        this.image = this.imageCache[imagePath];
    }

}