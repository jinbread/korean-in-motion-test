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
var ground = Bodies.rectangle(150, 300, 500, 50, { isStatic: true });



// add all of the bodies to the world
World.add(engine.world, [boxA, boxB, ground]);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);