class Character extends MovableObject {
    height = 250;
    width = 240;
    y = 80;
    speed = 3;

    bossAttackStartedAt = 0;
    bossAttackActive = false;
    world;
    // walking_sound = new Audio('./audio/walking.mp3');

    collisionOffsetX = 45;
    collisionOffsetY = 115;
    collisionWidth = 150;
    collisionHeight = 75;


    IMAGES_WALKING = [
        './images/Grafiken-Sharkie/1.Sharkie/3.Swim/1.png',
        './images/Grafiken-Sharkie/1.Sharkie/3.Swim/2.png',
        './images/Grafiken-Sharkie/1.Sharkie/3.Swim/3.png',
        './images/Grafiken-Sharkie/1.Sharkie/3.Swim/4.png',
        './images/Grafiken-Sharkie/1.Sharkie/3.Swim/5.png',
        './images/Grafiken-Sharkie/1.Sharkie/3.Swim/6.png'
    ];

    IMAGES_JUMPING = [
        './images/Grafiken-Sharkie/1.Sharkie/3.Swim/1.png',
        './images/Grafiken-Sharkie/1.Sharkie/3.Swim/2.png',
        './images/Grafiken-Sharkie/1.Sharkie/3.Swim/3.png',
        './images/Grafiken-Sharkie/1.Sharkie/3.Swim/4.png',
        './images/Grafiken-Sharkie/1.Sharkie/3.Swim/5.png',
        './images/Grafiken-Sharkie/1.Sharkie/3.Swim/6.png'
    ];

    IMAGES_DEAD = [
        './images/Grafiken-Sharkie/1.Sharkie/6.dead/1.Poisoned/1.png',
        './images/Grafiken-Sharkie/1.Sharkie/6.dead/1.Poisoned/2.png',
        './images/Grafiken-Sharkie/1.Sharkie/6.dead/1.Poisoned/3.png',
        './images/Grafiken-Sharkie/1.Sharkie/6.dead/1.Poisoned/4.png',
        './images/Grafiken-Sharkie/1.Sharkie/6.dead/1.Poisoned/5.png',
        './images/Grafiken-Sharkie/1.Sharkie/6.dead/1.Poisoned/6.png',
        './images/Grafiken-Sharkie/1.Sharkie/6.dead/1.Poisoned/7.png',
        './images/Grafiken-Sharkie/1.Sharkie/6.dead/1.Poisoned/8.png',
        './images/Grafiken-Sharkie/1.Sharkie/6.dead/1.Poisoned/9.png',
        './images/Grafiken-Sharkie/1.Sharkie/6.dead/1.Poisoned/10.png',
        './images/Grafiken-Sharkie/1.Sharkie/6.dead/1.Poisoned/11.png',
        './images/Grafiken-Sharkie/1.Sharkie/6.dead/1.Poisoned/12.png'
    ];

    IMAGES_HURT = [
        './images/Grafiken-Sharkie/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        './images/Grafiken-Sharkie/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        './images/Grafiken-Sharkie/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        './images/Grafiken-Sharkie/1.Sharkie/5.Hurt/1.Poisoned/4.png',
        './images/Grafiken-Sharkie/1.Sharkie/5.Hurt/1.Poisoned/5.png'
    ];

    IMAGES_BOSS_ATTACK = [
        './images/Grafiken-Sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
        './images/Grafiken-Sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
        './images/Grafiken-Sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
        './images/Grafiken-Sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
        './images/Grafiken-Sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
        './images/Grafiken-Sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
        './images/Grafiken-Sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
        './images/Grafiken-Sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png'
    ];

    constructor() {
        super();
        this.loadImage('./images/Grafiken-Sharkie/1.Sharkie/3.Swim/1.png'); this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_BOSS_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.animate();
    }

    playBossAttack() {
        this.bossAttackStartedAt = Date.now();
        this.bossAttackActive = true;
    }

    animate() {

        setInterval(() => {
            if (this.bossAttackActive) {
                return;
            }

            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
            }

            if (this.world.keyboard.LEFT && this.x > 0) {
                this.moveLeft();
                this.otherDirection = true;
                // this.walking_sound.play();
            }

            if (this.world.keyboard.UP && this.y > 0) {
                this.y -= this.speed;
            }

            if (this.world.keyboard.DOWN && this.y < 480 - this.height) {
                this.y += this.speed;
            }

            // this.world.camera_x = -this.x + 100;
            this.world.camera_x = Math.min(0, -this.x + 100);
            // this.world.camera_x = -this.x + 100;
        }, 1000 / 60);


        setInterval(() => {

            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);

            } else if (this.bossAttackActive) {

                const frameIndex = Math.floor(
                    (Date.now() - this.bossAttackStartedAt) / 100
                );

                if (frameIndex >= this.IMAGES_BOSS_ATTACK.length) {
                    this.bossAttackActive = false;
                } else {
                    const imagePath = this.IMAGES_BOSS_ATTACK[frameIndex];
                    this.image = this.imageCache[imagePath];
                }

            } else if (
                this.world.keyboard.RIGHT ||
                this.world.keyboard.LEFT ||
                this.world.keyboard.UP ||
                this.world.keyboard.DOWN
            ) {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 50);
    }

}