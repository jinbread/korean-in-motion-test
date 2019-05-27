// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Body = Matter.Body,
    SVG = Matter.Svg,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint,
    Events = Matter.Events,
    Common = Matter.Common
    Bodies = Matter.Bodies;
    

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.getElementById('alphabet-n'),
    engine: engine,
    options: {
        width: 300,
        height: 300,
        wireframes: false,
        pixelRatio: 'auto',
        background: 'white',
        // showAngleIndicator: true,
    }  
});

// create two boxes and a ground
var boxA = Bodies.circle(150, 200, 70);
var boxB = Bodies.circle(150, 200, 30, {
    render: {
        fillStyle: '#FFFFFF'
    }
});
var boxC = Bodies.rectangle(150, 90, 200, 39);
var boxD = Bodies.rectangle(150, 55, 48, 32);
var circleChar = Body.create({
    parts: [boxA, boxB]
})
// var compound = Body.create({
//     parts: [boxC, boxD],
//     isStatic: false
// })




// add all of the bodies to the world
World.add(engine.world, [circleChar, boxC, boxD]);

World.add(engine.world, [
    // walls
    Bodies.rectangle(150, 0, 300, 40, { isStatic: true, render: { fillStyle: 'transparent' } }),
    Bodies.rectangle(150, 300, 300, 60, { 
        isStatic: true,
        render: { fillStyle: 'transparent' }
     }),
    Bodies.rectangle(300, 150, 40, 300, { isStatic: true,
        render: { fillStyle: 'transparent' } }),
    Bodies.rectangle(0, 150, 40, 300, { isStatic: true,
        render: { fillStyle: 'transparent' } })
]);

var counter = 0;

Events.on(engine, 'beforeUpdate', function(event) {
    counter += 1;

    if (counter >= 60 * 2) {
        
        Body.setVelocity(circleChar, { x: 0, y: -10 });
        counter = 0;
    }
});


// add mouse control
var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 1.2,
            render: {
                visible: false
            }
        }
    });

World.add(engine.world, mouseConstraint);

// keep the mouse in sync with rendering
render.mouse = mouse;


// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);