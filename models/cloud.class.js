class Cloud extends MovableObject {
    y = 20;
    height = 250;
    width = 500; // Set the width of the cloud
    

    constructor() {
        super();
        this.loadImage('images/5_background/layers/4_clouds/1.png');
        this.x = Math.random() * 500; // Random x position for each cloud
        this.animate();
    }

    animate() {
        this.moveLeft();
    }

   
}