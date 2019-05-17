var randomTl = anime.timeline({
  easing: 'easeOutExpo',
  // duration: 1200,
  loop: true,  
})

randomTl
.add({
  targets: '.svg-path',
  translateZ: 0,
  scale: [0, 1],
  opacity: [0, 1],
  rotate: '3turn',
  delay: anime.stagger(100, {direction: 'reverse'})
})
.add({
  targets: '.svg-path',
  translateZ: 0,
  scale: [1, 0.5],
  opacity: [1, 0],
  rotate: '1turn',
  delay: anime.stagger(100)
})


var aTl = anime.timeline({
  easing: 'easeOutExpo',
  // duration: 1200,
  loop: true,  
})

aTl
.add({
  targets: '.svg-path-a',
  translateZ: 0,
  scale: [0, 1],
  opacity: [0, 1],
  rotate: '3turn',
  delay: anime.stagger(100, {direction: 'reverse'})
})
.add({
  targets: '.svg-path-a',
  translateZ: 0,
  scale: [1, 0.5],
  opacity: [1, 0],
  rotate: '1turn',
  delay: anime.stagger(100)
})





var bTl = anime.timeline({
  easing: 'easeInOutExpo',
  loop: true,  
})

bTl
.add({
  targets: '.svg-b',
  rotate: '1turn',
  duration: 1200,
  easing: 'easeOutExpo',
  delay: anime.stagger(120, {direction: 'reverse'})
})
.add({
  targets: '.svg-b',
  scale: 10,
  duration: 300,
  opacity: 0,
})
.add({
  targets: '.svg-b',
  scale: [.5, 1],
  opacity: [0, 1],
  duration: 100,
  easing: "spring(1, 100, 10, 10)"
})



var cTl = anime.timeline({
  easing: 'easeInOutExpo',
  loop: true,  
})

cTl
.add({
  targets: ['#c-1-1', '#c-1-2', '#c-1-3'],
  translateX: 10,
  duration: 300,
  easing: 'steps(1)',
})
.add({
  targets: ['#c-2-1', '#c-2-2', '#c-2-3'],
  translateX: 10,
  duration: 300,
  easing: 'steps(1)',
})
.add({
  targets: ['#c-3-1', '#c-3-2', '#c-3-3'],
  translateX: 10,
  duration: 300,
  easing: 'steps(1)',
})
.add({
  targets: ['#c-1-1', '#c-1-2', '#c-1-3'],
  translateX: 0,
  easing: 'steps(1)',
  duration: 300,
})
.add({
  targets: ['#c-2-1', '#c-2-2', '#c-2-3'],
  translateX: 0,
  easing: 'steps(1)',
  duration: 300,
})
.add({
  targets: ['#c-3-1', '#c-3-2', '#c-3-3'],
  translateX: 0,
  easing: 'steps(1)',
  duration: 300,
})
.add({
  targets: ['#c-1-1', '#c-1-2', '#c-1-3'],
  translateX: -10,
  easing: 'steps(1)',
  duration: 300,
})
.add({
  targets: ['#c-2-1', '#c-2-2', '#c-2-3'],
  translateX: -10,
  easing: 'steps(1)',
  duration: 300,
})
.add({
  targets: ['#c-3-1', '#c-3-2', '#c-3-3'],
  translateX: -10,
  easing: 'steps(1)',
  duration: 300,
})
.add({
  targets: ['#c-1-1', '#c-1-2', '#c-1-3'],
  translateX: 0,
  easing: 'steps(1)',
  duration: 300,
})
.add({
  targets: ['#c-2-1', '#c-2-2', '#c-2-3'],
  translateX: 0,
  easing: 'steps(1)',
  duration: 300,
})
.add({
  targets: ['#c-3-1', '#c-3-2', '#c-3-3'],
  translateX: 0,
  easing: 'steps(1)',
  duration: 300,
})

var c2Tl = anime.timeline({
  easing: 'easeInOutExpo',
  loop: true,  
})

c2Tl
.add({
  targets: ['#c-4-1', '#c-4-2', '#c-4-3'],
  translateX: -10,
  duration: 300,
  easing: 'steps(1)',
})
.add({
  targets: ['#c-5-1', '#c-5-2', '#c-5-3'],
  translateX: -10,
  duration: 300,
  easing: 'steps(1)',
})
.add({
  targets: ['#c-6-1', '#c-6-2', '#c-6-3'],
  translateX: -10,
  duration: 300,
  easing: 'steps(1)',
})
.add({
  targets: ['#c-4-1', '#c-4-2', '#c-4-3'],
  translateX: 0,
  easing: 'steps(1)',
  duration: 300,
})
.add({
  targets: ['#c-5-1', '#c-5-2', '#c-5-3'],
  translateX: 0,
  easing: 'steps(1)',
  duration: 300,
})
.add({
  targets: ['#c-6-1', '#c-6-2', '#c-6-3'],
  translateX: 0,
  easing: 'steps(1)',
  duration: 300,
})
.add({
  targets: ['#c-4-1', '#c-4-2', '#c-4-3'],
  translateX: 10,
  easing: 'steps(1)',
  duration: 300,
})
.add({
  targets: ['#c-5-1', '#c-5-2', '#c-5-3'],
  translateX: 10,
  easing: 'steps(1)',
  duration: 300,
})
.add({
  targets: ['#c-6-1', '#c-6-2', '#c-6-3'],
  translateX: 10,
  easing: 'steps(1)',
  duration: 300,
})
.add({
  targets: ['#c-4-1', '#c-4-2', '#c-4-3'],
  translateX: 0,
  easing: 'steps(1)',
  duration: 300,
})
.add({
  targets: ['#c-5-1', '#c-5-2', '#c-5-3'],
  translateX: 0,
  easing: 'steps(1)',
  duration: 300,
})
.add({
  targets: ['#c-6-1', '#c-6-2', '#c-6-3'],
  translateX: 0,
  easing: 'steps(1)',
  duration: 300,
})



c3Tl = anime.timeline({
  easing: 'easeInOutExpo',
  loop: true,  
  
})

c3Tl
.add({
  targets: '#korean-c',
  scale: [1.5, 2.5],
  rotate: 360,
  easing: 'steps(40)',
  duration: 12000,
  // delay: 4000
})
.add({
  targets: '#korean-c',
  scale: [2.5, 1.5],
  rotate: 0,
  easing: 'steps(40)',
  duration: 12000,
  delay: 4000
})


var c4Tl = anime.timeline({
  easing: 'easeInOutExpo',
  loop: true,  
})

c4Tl
.add({
  targets: ['#c-7-1', '#c-7-2', '#c-7-3'],
  translateX: 10,
  duration: 300,
  easing: 'steps(1)',
})
.add({
  targets: ['#c-8-1', '#c-8-2', '#c-8-3'],
  translateX: 10,
  duration: 300,
  easing: 'steps(1)',
})
.add({
  targets: ['#c-9-1', '#c-9-2', '#c-9-3'],
  translateX: 10,
  duration: 300,
  easing: 'steps(1)',
})
.add({
  targets: ['#c-7-1', '#c-7-2', '#c-7-3'],
  translateX: 0,
  easing: 'steps(1)',
  duration: 300,
})
.add({
  targets: ['#c-8-1', '#c-8-2', '#c-8-3'],
  translateX: 0,
  easing: 'steps(1)',
  duration: 300,
})
.add({
  targets: ['#c-9-1', '#c-9-2', '#c-9-3'],
  translateX: 0,
  easing: 'steps(1)',
  duration: 300,
})
.add({
  targets: ['#c-7-1', '#c-7-2', '#c-7-3'],
  translateX: -10,
  easing: 'steps(1)',
  duration: 300,
})
.add({
  targets: ['#c-8-1', '#c-8-2', '#c-8-3'],
  translateX: -10,
  easing: 'steps(1)',
  duration: 300,
})
.add({
  targets: ['#c-9-1', '#c-9-2', '#c-9-3'],
  translateX: -10,
  easing: 'steps(1)',
  duration: 300,
})
.add({
  targets: ['#c-7-1', '#c-7-2', '#c-7-3'],
  translateX: 0,
  easing: 'steps(1)',
  duration: 300,
})
.add({
  targets: ['#c-8-1', '#c-8-2', '#c-8-3'],
  translateX: 0,
  easing: 'steps(1)',
  duration: 300,
})
.add({
  targets: ['#c-9-1', '#c-9-2', '#c-9-3'],
  translateX: 0,
  easing: 'steps(1)',
  duration: 300,
})



anime({
  targets: '.svg-d',
  rotate: '1turn',
  duration: 1200,
  easing: 'easeOutExpo',
  loop: true
  // delay: anime.stagger(120, {direction: 'reverse'})
})




// // Wrap every letter in a span
// $('.ml2').each(function(){
//     $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
//   });
  
//   anime.timeline({loop: true})
//     .add({
//       targets: '.ml2 .letter',
//       scale: [4,1],
//       opacity: [0,1],
//       translateZ: 0,
//       easing: "easeOutExpo",
//       duration: 1000,
//       delay: function(el, i) {
//         return 100*i;
//       }
//     }).add({
//       targets: '.ml2',
//       opacity: 0,
//       duration: 1000,
//       easing: "easeOutExpo",
//       delay: 1000
//     });

  
// // Wrap every letter in a span
// $('.ml6 .letters').each(function(){
//   $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
// });

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml6 .letter',
//     translateY: ["1.1em", 0],
//     translateZ: 0,
//     duration: 750,
//     delay: function(el, i) {
//       return 50 * i;
//     }
//   }).add({
//     targets: '.ml6',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });



// // Define text style
// const text = new Blotter.Text('울렁울렁', {
// 	family: "Arial",
//   size: 80,
//   fill: "#e81594",
//   paddingTop: 50,
//   paddingBottom: 50,
//   weight: 800
// });

// // Use a material
// // https://blotter.js.org/#/materials
// let material = new Blotter.LiquidDistortMaterial();

// // Set material opts
// material.uniforms.uSpeed.value = 0.3;
// material.uniforms.uVolatility.value = 0.10;
// material.uniforms.uSeed.value = 0.1;

// let blotter = new Blotter(material, {
//   texts: text
// });

// // Apply to element
// let scope = blotter.forText(text);
// let elem = document.getElementById('blotter-container');
// scope.appendTo(elem);



// // Define text style
// const text2 = new Blotter.Text('스르륵', {
// 	family: "Arial",
//   size: 60,
//   fill: "rgb(240, 88, 144)",
//   paddingTop: 50,
//   paddingBottom: 100,
//   weight: 800
// });


// // Use a material
// let material2 = new Blotter.SlidingDoorMaterial();

// let blotter2 = new Blotter(material2, {
//   texts: text2
// });

// // Apply to element
// let scope2 = blotter2.forText(text2);
// let elem2 = document.getElementById('blotter-sliding');
// scope2.appendTo(elem2);


var sketchd = function(p) {
  p.xR = 0;
  p.yR = 0;
  p.lineweight = 2;
  p.r1 = 0;
  p.r2 = 0;

  p.setup = function() {
    p.createCanvas(300, 300);
    // p.parent('svg-content-d');    
  }

  p.draw = function() {
    p.background(255);
    p.angleMode(p.DEGREES);

    function drawStraightLine(x, y, a, b) {
      p.push();
      p.translate(x, y);
      p.rotate(a);
      p.strokeWeight(p.lineweight);
      p.line(-20, 0, 0, 0);
      p.translate();
      p.pop();
  
      p.push();
      p.translate(x, y);
      p.rotate(b);
      p.strokeWeight(p.lineweight);
      p.line(0, 0, 20, 0);
      p.translate();
      p.pop();
    }
  
    
  
    function drawVerticalLine(x, y, a, b) {
      p.push();
      p.translate(x, y);
      p.rotate(a);
      p.strokeWeight(p.lineweight);
      p.line(0, -20, 0, 0);
      p.translate();
      p.pop();
  
      p.push();
      p.translate(x, y);
      p.rotate(b);
      p.strokeWeight(p.lineweight);
      p.line(0, 0, 0, 20);
      p.translate();
      p.pop();
    }
    function drawLeftTopLine(x, y, a, b){
      p.push();
      p.translate(x, y);
      p.rotate(a);
      p.strokeWeight(p.lineweight);
      p.line(0, 0, 20, 0);
      p.translate();
      p.pop();
  
  
      p.push();
      p.translate(x, y);
      p.rotate(b);
      p.strokeWeight(p.lineweight);
      p.line(0, 0, 0, 20);
      p.translate();
      p.pop();
    }
  
    function drawRightTopLine(x, y, a, b){
      
      p.push();
      p.translate(x, y);
      p.rotate(a);
      p.strokeWeight(p.lineweight);
      p.line(-20, 0, 0, 0);
      p.translate();
      p.pop();
      
      p.push();
      p.translate(x, y);
      p.rotate(b);
      p.strokeWeight(p.lineweight);
      p.line(0, 0, 0, 20);
      p.translate();
      p.pop();
    }
  
    function drawLeftBottomLine(x, y, a, b){
      p.push();
      p.translate(x, y);
      p.rotate(a);
      p.strokeWeight(p.lineweight);
      p.line(0, 0, 0, -20);
      p.translate();
      p.pop();
  
      p.push();
      p.translate(x, y);
      p.rotate(b);
      p.strokeWeight(p.lineweight);
      p.line(0, 0, 20, 0);
      p.translate();
      p.pop();
    }
  
    function drawRightBottomLine(x, y, a ,b){
      p.push();
      p.translate(x, y);
      p.rotate(a);
      p.strokeWeight(p.lineweight);
      p.line(0, 0, 0, -20);
      p.translate();
      p.pop();
  
      p.push();
      p.translate(x, y);
      p.rotate(b);
      p.strokeWeight(p.lineweight);
      p.line(0, 0, -20, 0);
      p.translate();
      p.pop();
    }
  
    drawLeftTopLine(50, 50, p.xR, p.yR);
    drawLeftTopLine(50, 130, p.xR, p.yR);
    drawLeftTopLine(90, 170, p.xR, p.yR);
  
    drawRightTopLine(210, 90, p.xR, p.yR);
    drawRightTopLine(250, 50, p.xR, p.yR);
    drawRightTopLine(250, 210, p.xR, p.yR);
  
    drawLeftBottomLine(50, 90, p.xR, p.yR);
    drawLeftBottomLine(90, 210, p.xR, p.yR);
    drawLeftBottomLine(50, 250, p.xR, p.yR);
  
    drawRightBottomLine(210, 130, p.xR, p.yR);
    drawRightBottomLine(250, 170, p.xR, p.yR);
    drawRightBottomLine(250, 250, p.xR, p.yR);
  
    drawVerticalLine(250, 90, p.xR, p.yR);
    drawVerticalLine(250, 130, p.xR, p.yR);
    drawVerticalLine(50, 170, p.xR, p.yR);
    drawVerticalLine(50, 210, p.xR, p.yR);
  
  
    drawStraightLine(90, 50, p.xR, p.yR);
    drawStraightLine(130, 50, p.xR, p.yR);
    drawStraightLine(170, 50, p.xR, p.yR);
    drawStraightLine(210, 50, p.xR, p.yR);
  
    drawStraightLine(90, 90, p.xR, p.yR);
    drawStraightLine(130, 90, p.xR, p.yR);
    drawStraightLine(170, 90, p.xR, p.yR);
  
    drawStraightLine(90, 130, p.xR, p.yR);
    drawStraightLine(130, 130, p.xR, p.yR);
    drawStraightLine(170, 130, p.xR, p.yR);
  
    drawStraightLine(130, 170, p.xR, p.yR);
    drawStraightLine(170, 170, p.xR, p.yR);
    drawStraightLine(210, 170, p.xR, p.yR);
  
    drawStraightLine(130, 210, p.xR, p.yR);
    drawStraightLine(170, 210, p.xR, p.yR);
    drawStraightLine(210, 210, p.xR, p.yR);
  
    drawStraightLine(90, 250, p.xR, p.yR);
    drawStraightLine(130, 250, p.xR, p.yR);
    drawStraightLine(170, 250, p.xR, p.yR);
    drawStraightLine(210, 250, p.xR, p.yR);
  
    p.xR = p.xR + 1;
    p.yR = p.yR + 1;
  
  }
  
}

new p5(sketchd, 'svg-content-d');



// function draw() {
//   background(255);
//   angleMode(DEGREES);
  
  

//   function drawStraightLine(x, y, a, b) {
//     push();
//     translate(x, y);
//     rotate(a);
//     strokeWeight(lineweight);
//     line(-20, 0, 0, 0);
//     translate();
//     pop();

//     push();
//     translate(x, y);
//     rotate(b);
//     strokeWeight(lineweight);
//     line(0, 0, 20, 0);
//     translate();
//     pop();
    
//   }

  

//   function drawVerticalLine(x, y, a, b) {
//     push();
//     translate(x, y);
//     rotate(a);
//     strokeWeight(lineweight);
//     line(0, -20, 0, 0);
//     translate();
//     pop();

//     push();
//     translate(x, y);
//     rotate(b);
//     strokeWeight(lineweight);
//     line(0, 0, 0, 20);
//     translate();
//     pop();
//   }
//   function drawLeftTopLine(x, y, a, b){
//     push();
//     translate(x, y);
//     rotate(a);
//     strokeWeight(lineweight);
//     line(0, 0, 20, 0);
//     translate();
//     pop();


//     push();
//     translate(x, y);
//     rotate(b);
//     strokeWeight(lineweight);
//     line(0, 0, 0, 20);
//     translate();
//     pop();
//   }

//   function drawRightTopLine(x, y, a, b){
    
//     push();
//     translate(x, y);
//     rotate(a);
//     strokeWeight(lineweight);
//     line(-20, 0, 0, 0);
//     translate();
//     pop();
    
//     push();
//     translate(x, y);
//     rotate(b);
//     strokeWeight(lineweight);
//     line(0, 0, 0, 20);
//     translate();
//     pop();
//   }

//   function drawLeftBottomLine(x, y, a, b){
//     push();
//     translate(x, y);
//     rotate(a);
//     strokeWeight(lineweight);
//     line(0, 0, 0, -20);
//     translate();
//     pop();

//     push();
//     translate(x, y);
//     rotate(b);
//     strokeWeight(lineweight);
//     line(0, 0, 20, 0);
//     translate();
//     pop();
//   }

//   function drawRightBottomLine(x, y, a ,b){
//     push();
//     translate(x, y);
//     rotate(a);
//     strokeWeight(lineweight);
//     line(0, 0, 0, -20);
//     translate();
//     pop();

//     push();
//     translate(x, y);
//     rotate(b);
//     strokeWeight(lineweight);
//     line(0, 0, -20, 0);
//     translate();
//     pop();
//   }

//   drawLeftTopLine(50, 50, xR, yR);
//   drawLeftTopLine(50, 130, xR, yR);
//   drawLeftTopLine(90, 170, xR, yR);

//   drawRightTopLine(210, 90, xR, yR);
//   drawRightTopLine(250, 50, xR, yR);
//   drawRightTopLine(250, 210, xR, yR);

//   drawLeftBottomLine(50, 90, xR, yR);
//   drawLeftBottomLine(90, 210, xR, yR);
//   drawLeftBottomLine(50, 250, xR, yR);

//   drawRightBottomLine(210, 130, xR, yR);
//   drawRightBottomLine(250, 170, xR, yR);
//   drawRightBottomLine(250, 250, xR, yR);

//   drawVerticalLine(250, 90, xR, yR);
//   drawVerticalLine(250, 130, xR, yR);
//   drawVerticalLine(50, 170, xR, yR);
//   drawVerticalLine(50, 210, xR, yR);


//   drawStraightLine(90, 50, xR, yR);
//   drawStraightLine(130, 50, xR, yR);
//   drawStraightLine(170, 50, xR, yR);
//   drawStraightLine(210, 50, xR, yR);

//   drawStraightLine(90, 90, xR, yR);
//   drawStraightLine(130, 90, xR, yR);
//   drawStraightLine(170, 90, xR, yR);

//   drawStraightLine(90, 130, xR, yR);
//   drawStraightLine(130, 130, xR, yR);
//   drawStraightLine(170, 130, xR, yR);

//   drawStraightLine(130, 170, xR, yR);
//   drawStraightLine(170, 170, xR, yR);
//   drawStraightLine(210, 170, xR, yR);

//   drawStraightLine(130, 210, xR, yR);
//   drawStraightLine(170, 210, xR, yR);
//   drawStraightLine(210, 210, xR, yR);

//   drawStraightLine(90, 250, xR, yR);
//   drawStraightLine(130, 250, xR, yR);
//   drawStraightLine(170, 250, xR, yR);
//   drawStraightLine(210, 250, xR, yR);

//   xR = xR + 1;
//   yR = yR + 1;

// }

var elem = document.getElementById('svg-content-h');
var params = { width: 300, height: 300 };
var two = new Two(params).appendTo(elem);

var circle = two.makeCircle(0, 0, 44);
var circle2 = two.makeCircle(0, 0, 102);
var circle3 = two.makeCircle(0, -44, 8);
var circle4 = two.makeCircle(0, -102, 8);


circle.noFill();
circle.stroke = '#ffffff'; // Accepts all valid css color
circle.linewidth = 2;

circle2.noFill();
circle2.stroke = '#ffffff'; // Accepts all valid css color
circle2.linewidth = 2;

circle3.noStroke();
circle4.noStroke();

var group1 = two.makeGroup(circle, circle3);
group1.translation.set(150, 150);

var group2 = two.makeGroup(circle2, circle4);
group2.translation.set(150, 150);

two.bind('update', function(frameCount){
  group1.rotation += 0.01 * Math.PI;
  group2.rotation -= 0.005 * Math.PI;
}).play();



var sketche = function(p) {
  p.rad = 80; // Width of the shape
  p.xpos = 0;
  p.ypos = 0; // Starting position of shape
  p.sWeight = 40;
  
  p.xspeed = 6.8; // Speed of the shape
  p.yspeed = 6.0; // Speed of the shape
  
  p.xdirection = 1; // Left or Right
  p.ydirection = 1; // Top to Bottom

  p.setup = function(){
    p.createCanvas(300, 300);
    p.background(66, 0, 247);
    //noStroke();
    p.frameRate(10);
    // Set the starting position of the shape
    p.xpos = 50;
    p.ypos = 50;
  }

  p.draw = function(){
      // Update the position of the shape
    p.xpos = p.xpos + p.xspeed * p.xdirection;
    p.ypos = p.ypos + p.yspeed * p.ydirection;

    // Test to see if the shape exceeds the boundaries of the screen
    // If it does, reverse its direction by multiplying by -1
    if (p.xpos > p.width - p.rad - (p.sWeight / 2) || p.xpos < 20) {
      p.xdirection *= -1;
    }
    if (p.ypos > p.height - p.rad - (p.sWeight / 2) || p.ypos < 20) {
      p.ydirection *= -1;
    }
    // Draw the shape
    p.noFill();
    p.strokeWeight(p.sWeight);
    p.stroke(255);
    p.rect(p.xpos, p.ypos, p.rad, p.rad);
    
    p.noFill();
    p.strokeWeight(1);
    p.stroke(0);
    p.rect(p.xpos+(p.sWeight/2), p.ypos+(p.sWeight/2), p.rad-p.sWeight, p.rad-p.sWeight);

    p.noFill();
    p.strokeWeight(1);
    p.stroke(0);
    p.rect(p.xpos-(p.sWeight/2), p.ypos-(p.sWeight/2), p.rad+p.sWeight, p.rad+p.sWeight);
  }
}

new p5(sketche, 'svg-content-e');
