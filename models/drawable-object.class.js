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

    loadImages(arr) {
        arr.forEach((path) => {
            let image = new Image();
            image.src = path;
            this.imageCache[path] = image;
        });
    }

}