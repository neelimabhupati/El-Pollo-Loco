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
        // if (this instanceof Character || this instanceof Chicken) {
        //     const x = this.x + (this.collisionOffsetX ?? 0);
        //     const y = this.y + (this.collisionOffsetY ?? 0);
        //     const width = this.collisionWidth ?? this.width;
        //     const height = this.collisionHeight ?? this.height;

        //     ctx.beginPath();
        //     ctx.lineWidth = 3;
        //     ctx.strokeStyle = 'red';
        //     ctx.rect(x, y, width, height);
        //     ctx.stroke();
        // }
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let image = new Image();
            image.src = path;
            this.imageCache[path] = image;
        });
    }

}