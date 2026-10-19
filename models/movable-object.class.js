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

    moveRight() {
        console.log("Moving right");
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60); // Move the cloud left every 1/60th of a second 

    }

    playAnimation(images){
        let i = this.currentImageIndex % this.IMAGES_WALKING.length;// let i = 0 % 6; => 0, Rest 1
        let path = images[i];
        this.image = this.imageCache[path];
        this.currentImageIndex++;
    }

}