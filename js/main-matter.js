// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.getElementById('alphabet-n'),
    engine: engine,
    options: {
        width: 300,
        height: 300
    }  
});

// create two boxes and a ground
var boxA = Bodies.rectangle(100, 100, 80, 80);
var boxB = Bodies.rectangle(50, 50, 80, 80);
var boxC = Bodies.rectangle(250, 50, 120, 120);
var boxD = Bodies.rectangle(200, 20, 40, 40);
var ground = Bodies.rectangle(150, 307, 500, 10, { isStatic: true });



// add all of the bodies to the world
World.add(engine.world, [boxA, boxB, boxC, boxD, ground]);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);