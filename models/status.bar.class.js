class StatusBar extends DrawbleObject {

    IMAGES = [
        './images/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',
        './images/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
        './images/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
        './images/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
        './images/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
        './images/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png',
    ];

    percentage = 100;


    constructor(){
        this.loadImages(this.IMAGES)
    }

    setPercentage(){
        this.percentage = this.percentage;
        let path = this.IMAGES[this.resuleImageIndex()];
        let img = this.imageCache[path];

       
    }

    resuleImageIndex(){
        if(this.percentage == 100){
            return 5;
        }else if (this.percentage == 80){
            return 4;
        }else if(this.percentage > 60){
            return 3;
        }else if(this.percentage > 40){
            return 2;
        }else if(this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
        
    }

}