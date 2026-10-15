let canvas;
let world;
let keyboard = new keyboard();

function init() {
    canvas = document.getElementById("canvas");
    world = new World(canvas);
    

    console.log("My Character is:", world.character);
}

window.addEventListener('keypress', (event) =>{
    console.log(event);

});