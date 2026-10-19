class Endboss extends MovableObject{

    height = 400;
    width = 250;
    y = 55;
    

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

    constructor(){
        super();
        this.loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING)
        this.x = 2500; 
        this.animate();
    }

    animate(){
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        },200);
    }
}