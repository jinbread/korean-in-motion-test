// module aliases
var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Composites = Matter.Composites,
        Body = Matter.Body,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        World = Matter.World,
        Events = Matter.Events,
        Constraint = Matter.Constraint,
        Bodies = Matter.Bodies;

// create an engine
var engine = Engine.create();

var gravityX = 0.5;
var gravityY = 0.5;

function changeGravity() {
    if(gravityX*gravityY > 0){
        gravityX *= -1;
        gravityY *= 1; 
    } else {
        gravityX *= 1;
        gravityY *= -1; 
    }
    

}

window.setInterval(changeGravity, 1000);



// create a renderer
var render = Render.create({
    element: document.getElementById('alphabet-l'),
    engine: engine,
    options: {
        width: 300,
        height: 300,
        wireframes: false,
        pixelRatio: 'auto',
        background: 'transparent'
    }
});

var runner = Runner.create();
Runner.run(runner, engine);

var particleOptions = { 
    friction: 0.01,
    frictionStatic: 0.01,
    render: { 
        visible: true,
        fillStyle: '#000000'
    } 
};

var constraintOptions = { 
    // friction: 0.01,
    // frictionStatic: 0.01,
    render: { visible: false } 
};

var alphabetL = Composites.softBody(50, 50, 5, 5, 4, 4, false, 22, particleOptions, constraintOptions)

alphabetL.bodies["6"].render.fillStyle = "transparent"
alphabetL.bodies["7"].render.fillStyle = "transparent"
alphabetL.bodies["8"].render.fillStyle = "transparent"
alphabetL.bodies["9"].render.fillStyle = "transparent"
alphabetL.bodies["16"].render.fillStyle = "transparent"
alphabetL.bodies["17"].render.fillStyle = "transparent"
alphabetL.bodies["18"].render.fillStyle = "transparent"
alphabetL.bodies["19"].render.fillStyle = "transparent"

console.log(alphabetL);


World.add(engine.world, [alphabetL]);

// create two boxes and a ground
World.add(engine.world, [
    // walls
    Bodies.rectangle(150, 0, 300, 40, { isStatic: true, render: {fillStyle: 'transparent'} }),
    Bodies.rectangle(150, 300, 300, 40, { isStatic: true, render: {fillStyle: 'transparent'} }),
    Bodies.rectangle(300, 150, 40, 300, { isStatic: true, render: {fillStyle: 'transparent'} }),
    Bodies.rectangle(0, 150, 40, 300, { isStatic: true, render: {fillStyle: 'transparent'} })
]);

var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.9,
            render: {
                visible: false
            }
        }
    });

World.add(engine.world, mouseConstraint);

// keep the mouse in sync with rendering
render.mouse = mouse;

Events.on(engine, 'beforeUpdate', function(event) {
    engine.world.gravity.x = gravityX;
    engine.world.gravity.y = gravityY;
});


// add all of the bodies to the world
// World.add(engine.world, [boxA, boxB, ground]);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);