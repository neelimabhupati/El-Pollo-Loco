class Endboss extends MovableObject {

    height = 400;
    width = 250;
    y = 55;
    hits = 0;
    defeated = false;

    IMAGES_WALKING = [
        './images/4_enemie_boss_chicken/2_alert/G5.png',
        './images/4_enemie_boss_chicken/2_alert/G6.png',
        './images/4_enemie_boss_chicken/2_alert/G7.png',
        './images/4_enemie_boss_chicken/2_alert/G8.png',
        './images/4_enemie_boss_chicken/2_alert/G9.png',
        './images/4_enemie_boss_chicken/2_alert/G10.png',
        './images/4_enemie_boss_chicken/2_alert/G11.png',
        './images/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    IMAGES_DEAD = [
        './images/4_enemie_boss_chicken/5_dead/G24.png',
        './images/4_enemie_boss_chicken/5_dead/G25.png',
        './images/4_enemie_boss_chicken/5_dead/G26.png'
    ];
    constructor() {
        super();
        this.loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 2500;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);
    }

    hitByBottle() {
        if (this.defeated) {
            return false;
        }

        this.hits++;

        if (this.hits >= 4) {
            this.defeated = true;

            let frame = 0;
            const deathAnimation = setInterval(() => {
                if (frame >= this.IMAGES_DEAD.length) {
                    clearInterval(deathAnimation);
                    return;
                }

                this.image = this.imageCache[this.IMAGES_DEAD[frame]];
                frame++;
            }, 200);

            return true;
        }

        return false;
    }
}