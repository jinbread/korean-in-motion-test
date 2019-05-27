// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Body = Matter.Body,
    SVG = Matter.Svg,
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
        showAngleIndicator: true,
    }  
});

// create two boxes and a ground
var boxA = Bodies.circle(150, 200, 70);
var boxB = Bodies.circle(150, 200, 30, {
    render: {
        fillStyle: '#FFFFFF'
    }
});
var boxC = Bodies.rectangle(150, 90, 186, 39);
var boxD = Bodies.rectangle(150, 55, 48, 32);
var circleChar = Body.create({
    parts: [boxA, boxB]
})
var compound = Body.create({
    parts: [boxC, boxD],
    isStatic: true
})




// add all of the bodies to the world
World.add(engine.world, [circleChar, compound]);

World.add(engine.world, [
    // walls
    Bodies.rectangle(150, 0, 300, 1, { isStatic: true }),
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

    var py = 80 + 10 * Math.sin(engine.timing.timestamp * 0.004);
    Body.setVelocity(compound, { x: 0, y: py - compound.position.y });
    Body.setPosition(compound, { x: 150, y: py });

    if (counter >= 60 * 1.5) {
        Body.setVelocity(circleChar, { x: 0, y: -7 });
        counter = 0;
    }
});

var updateGravity = function(event) {
    var orientation = typeof window.orientation !== 'undefined' ? window.orientation : 0,
        gravity = engine.world.gravity;

    if (orientation === 0) {
        gravity.x = Common.clamp(event.gamma, -90, 90) / 90;
        gravity.y = Common.clamp(event.beta, -90, 90) / 90;
    } else if (orientation === 180) {
        gravity.x = Common.clamp(event.gamma, -90, 90) / 90;
        gravity.y = Common.clamp(-event.beta, -90, 90) / 90;
    } else if (orientation === 90) {
        gravity.x = Common.clamp(event.beta, -90, 90) / 90;
        gravity.y = Common.clamp(-event.gamma, -90, 90) / 90;
    } else if (orientation === -90) {
        gravity.x = Common.clamp(-event.beta, -90, 90) / 90;
        gravity.y = Common.clamp(event.gamma, -90, 90) / 90;
    }
};

window.addEventListener('deviceorientation', updateGravity);


// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);

console.log(circleChar.position)