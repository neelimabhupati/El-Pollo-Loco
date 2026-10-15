class World {

    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()
    ];
    backgroundObjects = [
        new BackgroundObject('./images/5_background/layers/3_third_layer/1.png', 0)
    ];
    clouds = [new Cloud()];
    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.draw();
    }
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addToMap(this.character);
        this.addObjecttoMaop(this.enemies);
        this.addObjecttoMaop(this.clouds);
        this.addObjecttoMaop(this.backgroundObjects);

        // draw wird immer wieder aufrufen, damit die Position des Charakters immer wieder neu gezeichnet wird.
        requestAnimationFrame(() => this.draw());
    }

    addObjecttoMaop(Objects) {
        Objects.forEach((object) => {
            this.addToMap(object);
        });
    }

    addToMap(mo) {
        this.ctx.drawImage(mo.image, mo.x, mo.y, mo.width, mo.height);
    }
}