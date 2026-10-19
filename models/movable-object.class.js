class MovableObject {
    x = 120;
    y = 280;
    image;
    height = 150;
    width = 100;
    imageCache = {};
    currentImageIndex = 0;
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        return this.y < 180;
    }
    loadImage(path) {
        this.image = new Image();
        this.image.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let image = new Image();
            image.src = path;
            this.imageCache[path] = image;
        });
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }
    moveRight() {
        console.log("Moving right");
        this.x += this.speed;

    }

    moveLeft() {
        this.x -= this.speed;


    }

    playAnimation(images) {
        let i = this.currentImageIndex % images.length;
        let path = images[i];
        this.image = this.imageCache[path];
        this.currentImageIndex++;
    }

    jump() {
        this.speedY = 20;
    }


}