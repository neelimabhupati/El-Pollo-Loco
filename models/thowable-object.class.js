class ThrowableObject extends MovableObject{

    constructor(x, y){
        super();
        this.loadImage('./images/7_statusbars/3_icons/icon_salsa_bottle.png');
        this.x = x;
        this.y = y;
        this.height = 70;
        this.width = 60;
        this.throw();
    }

    throw(){
        this.speedY = 15;
        this.applyGravity();
        setInterval(() =>{
            this.x += 10;
        },50 );
    }
}

