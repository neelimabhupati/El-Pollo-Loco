class Chicken extends MovableObject {
     y = 360;
     height = 55;
     width = 70;

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
        this.animate();
    }

    animate() {
        setInterval(() => {
            let i = this.currentImageIndex % this.IMAGES_WALKING.length;// let i = 0 % 6; => 0, Rest 1
            let path = this.IMAGES_WALKING[i];
            this.image = this.imageCache[path];
            this.currentImageIndex++;
        }, 200); // Move the character every 1/60th of a second
    }

    jump() {

    }
}