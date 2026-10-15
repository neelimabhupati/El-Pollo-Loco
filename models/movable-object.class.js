class MovableObject {
    x = 120;
    y = 280;
    image;
    height = 150;
    width = 100;

    loadImage(path) {
        this.image = new Image();
        this.image.src = path;
    }

    moveRight() {
        console.log("Moving right");
    }

    moveLeft() {}

}