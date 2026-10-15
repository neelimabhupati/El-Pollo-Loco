class BackgroundObject extends MovableObject {

    width = 720; // Set the width of the background object
    height = 400; // Set the height of the background object
    constructor(imagePath, x) {
        super();
        this.loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height; // Set the y position to 0 for background objects               
    }
}