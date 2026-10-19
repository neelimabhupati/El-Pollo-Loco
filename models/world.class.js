class World {

    character = new Character();
    level = level1;

    canvas;
    ctx;
    keyboard;
    camera_x = -100;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
    }

    setWorld() {
        this.character.world = this;
        this.character.animate();
    }
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        this.addObjecttoMaop(this.level.backgroundObjects);
        this.addToMap(this.character);
        this.addObjecttoMaop(this.level.enemies);
        this.addObjecttoMaop(this.level.clouds);

        this.ctx.translate(-this.camera_x, 0);

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
            this.flipImage(mo)
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }


}