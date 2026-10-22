const level1 = new Level([
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Endboss()
],
    [
        new Cloud()
    ],

    [
        new BackgroundObject('./images/5_background/layers/air.png', -719),
        new BackgroundObject('./images/5_background/layers/3_third_layer/2.png', -719),
        new BackgroundObject('./images/5_background/layers/2_second_layer/2.png', -719),
        new BackgroundObject('./images/5_background/layers/1_first_layer/2.png', -719),

        new BackgroundObject('./images/5_background/layers/air.png', 0),
        new BackgroundObject('./images/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('./images/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('./images/5_background/layers/1_first_layer/1.png', 0),
        new BackgroundObject('./images/5_background/layers/air.png', 719),
        new BackgroundObject('./images/5_background/layers/3_third_layer/2.png', 719),
        new BackgroundObject('./images/5_background/layers/2_second_layer/2.png', 719),
        new BackgroundObject('./images/5_background/layers/1_first_layer/2.png', 719),

        new BackgroundObject('./images/5_background/layers/air.png', 719 * 2),
        new BackgroundObject('./images/5_background/layers/3_third_layer/1.png', 719 * 2),
        new BackgroundObject('./images/5_background/layers/2_second_layer/1.png', 719 * 2),
        new BackgroundObject('./images/5_background/layers/1_first_layer/1.png', 719 * 2),
        new BackgroundObject('./images/5_background/layers/air.png', 719 * 3),
        new BackgroundObject('./images/5_background/layers/3_third_layer/2.png', 719 * 3),
        new BackgroundObject('./images/5_background/layers/2_second_layer/2.png', 719 * 3),
        new BackgroundObject('./images/5_background/layers/1_first_layer/2.png', 719 * 3),

    ],
    Array.from({ length: 10 }, (_, index) =>
        new Coin(
            150 + index * 200 + Math.random() * 100,
            190 + Math.random() * 120
        )
    ),

    Array.from({ length: 5 }, (_, index) =>
        new Bottle(
            300 + index * 350 + Math.random() * 100,
            340
        )
    )

);

