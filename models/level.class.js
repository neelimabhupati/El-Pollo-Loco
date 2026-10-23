class Level {
    enemies;
    backgroundObjects;
    coins;
    bottles;
    level_end_x = 2200;

    constructor(enemies, backgroundObjects, coins, bottles) {
        this.enemies = enemies;
       
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.bottles = bottles;
    }
}