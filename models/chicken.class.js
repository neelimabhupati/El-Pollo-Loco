class Chicken extends MovableObject {
    y = 360;
    height = 65;
    width = 80;

    IMAGES_WALKING = [
        './images/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        './images/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        './images/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    constructor() {
        super();
        this.loadImage('./images/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = 200 + Math.random() * 500; // Random x position for each chicken
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60); // Move the cloud left every 1/60th of a second 

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200); // Move the character every 1/60th of a second
    }

    jump() {

    }
}