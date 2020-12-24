var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
 
var engine;
var world;
var boxes = [];
 
var ground;
var gSlider;
var boxsprite;
 
function setup() {
    createCanvas(400, 400);


    engine = Engine.create();
    world = engine.world;
 
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
    boxsprite = creatSprite(100, 100);

}
 
function mousePressed() {
    if (mouseY < 350) {
        boxsprite();
    }
}
 
function draw() 
    background(51);
    var fVal = gSlider.value();

}
