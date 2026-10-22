class ThrowableObject extends MovableObject {

    IMAGES_ROTATION = [
        './images/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        './images/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        './images/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        './images/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
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
        this.speedY = 18;
        this.applyGravity();

        setInterval(() => {
            this.x += 20 * this.direction;
            this.playAnimation(this.IMAGES_ROTATION);
        }, 100);
    }
}

