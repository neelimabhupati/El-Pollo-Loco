class Character extends MovableObject {
    height = 340;
    width = 140;
    y = 100;
    speed = 10;
    IMAGES_WALKING = [
        './images/2_character_pepe/2_walk/W-21.png',
        './images/2_character_pepe/2_walk/W-22.png',
        './images/2_character_pepe/2_walk/W-23.png',
        './images/2_character_pepe/2_walk/W-24.png',
        './images/2_character_pepe/2_walk/W-25.png',
        './images/2_character_pepe/2_walk/W-26.png',

    ];
    world;

    constructor() {
        super();
        this.loadImage('./images/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);

        this.animate();
    }

    animate() {

        setInterval(() => {
            if (this.world.keyboard.RIGHT ) {
                this.x += this.speed;
                this.otherDirection = false;
            }

            if (this.world.keyboard.LEFT) {
                this.x -= this.speed;
                this.otherDirection = true;
            }
            }, 1000 / 60);


        setInterval(() => {
            if (this.world.keyboard.RIGHT|| this.world.keyboard.LEFT){
                //walk animation
                let i = this.currentImageIndex % this.IMAGES_WALKING.length;// let i = 0 % 6; => 0, Rest 1
                let path = this.IMAGES_WALKING[i];
                this.image = this.imageCache[path];
                this.currentImageIndex++;
            }
        }, 50); // Move the character every 1/60th of a second
    }

    jump() {

    }
}