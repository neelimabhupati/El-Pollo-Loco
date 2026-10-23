class ThrowableObject extends MovableObject {

    IMAGES_ROTATION = [
        './images/Grafiken-Sharkie/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png'
    ];

    constructor(x, y, direction) {
        super();
        this.loadImage(this.IMAGES_ROTATION[0]);
        this.loadImages(this.IMAGES_ROTATION);
        this.x = x;
        this.y = y;
        this.height = 80;
        this.width = 90;
        this.direction = direction;
        this.throw();
    }

    throw() {
        // this.speedY = 18;
        // // this.applyGravity();

        setInterval(() => {
            this.x += 6 * this.direction;
            // this.playAnimation(this.IMAGES_ROTATION);
        }, 1000/ 60);
    }
}

