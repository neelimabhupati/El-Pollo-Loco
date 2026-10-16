class World {

    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()
    ];
    backgroundObjects = [
        new BackgroundObject('./images/5_background/layers/air.png', 0),
        new BackgroundObject('./images/5_background/layers/3_third_layer/1.png',0),
        new BackgroundObject('./images/5_background/layers/2_second_layer/1.png',0),
        new BackgroundObject('./images/5_background/layers/1_first_layer/1.png',0)
    ];
    clouds = [new Cloud()];
    canvas;
    ctx;
    keyboard;

    constructor(canvas,keyboard) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld(){
        this.character.world = this;
    }
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addObjecttoMaop(this.backgroundObjects);
        this.addToMap(this.character);
        this.addObjecttoMaop(this.enemies);
        this.addObjecttoMaop(this.clouds);

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