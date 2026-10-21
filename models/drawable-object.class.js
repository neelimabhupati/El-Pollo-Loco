class DrawbleObject {
    image;
    imageCache = {};
    currentImageIndex = 0;
    x = 120;
    y = 280;
    height = 150;
    width = 100;

    loadImage(path) {
        this.image = new Image();
        this.image.src = path;
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

    loadImages(arr) {
        arr.forEach((path) => {
            let image = new Image();
            image.src = path;
            this.imageCache[path] = image;
        });
    }

}