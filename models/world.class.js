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
    camera_x = -100;

    constructor(canvas,keyboard) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
        
    }

    setWorld(){
        this.character.world = this;
    }
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x,0);
        this.addObjecttoMaop(this.backgroundObjects);
        this.addToMap(this.character);
        this.addObjecttoMaop(this.enemies);
        this.addObjecttoMaop(this.clouds);

        this.ctx.translate(-this.camera_x,0);

        // draw wird immer wieder aufrufen, damit die Position des Charakters immer wieder neu gezeichnet wird.
        requestAnimationFrame(() => this.draw());
    }

    addObjecttoMaop(Objects) {
        Objects.forEach((object) => {
            this.addToMap(object);
        });
    }

   addToMap(mo) {
    if (mo.otherDirection) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }
    this.ctx.drawImage(mo.image, mo.x, mo.y, mo.width, mo.height);
    if (mo.otherDirection) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}


}