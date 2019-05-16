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



hTl = anime.timeline({
  easing: 'easeInOutExpo',
  loop: true
})

var h1Path = anime.path('#h-1-1')
var h2Path = anime.path('#h-2-1')

h2Tl = anime.timeline({
  easing: 'easeInOutExpo',
  loop: true
})


anime({
  targets: '#h-1-2',
  translateX: h1Path('x'),
  translateY: h1Path('y'),
  rotate: h1Path('angle'),
  easing: 'easeInOutExpo',
  duration: 1500,
  loop: true,
  direction: 'alternate'
})


anime({
  targets: '#h-2-2',
  translateX: h2Path('x'),
  translateY: h2Path('y'),
  rotate: h2Path('angle'),
  easing: 'easeInOutExpo',
  duration: 3000,
  loop: true,
  direction: 'alternate',
});


anime({
  targets: '#h-1-1',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutExpo',
  duration: 1500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
})

anime({
  targets: '#h-2-1',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutExpo',
  duration: 3000,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true,
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

function setup(){
  var canvas = createCanvas(300, 300);
  canvas.parent('svg-content-d');
  // background(255, 0, 200);

  

}


var xR = 0;
var yR = 0;
var lineweight = 2;
var stopCount = 0;

var r1 = 0;
var r2 = 0;

function draw() {
  background(255);
  angleMode(DEGREES);
  
  

  function drawStraightLine(x, y, a, b) {
    push();
    translate(x, y);
    rotate(a);
    strokeWeight(lineweight);
    line(-20, 0, 0, 0);
    translate();
    pop();

    push();
    translate(x, y);
    rotate(b);
    strokeWeight(lineweight);
    line(0, 0, 20, 0);
    translate();
    pop();
    
  }

  

  function drawVerticalLine(x, y, a, b) {
    push();
    translate(x, y);
    rotate(a);
    strokeWeight(lineweight);
    line(0, -20, 0, 0);
    translate();
    pop();

    push();
    translate(x, y);
    rotate(b);
    strokeWeight(lineweight);
    line(0, 0, 0, 20);
    translate();
    pop();
  }
  function drawLeftTopLine(x, y, a, b){
    push();
    translate(x, y);
    rotate(a);
    strokeWeight(lineweight);
    line(0, 0, 20, 0);
    translate();
    pop();


    push();
    translate(x, y);
    rotate(b);
    strokeWeight(lineweight);
    line(0, 0, 0, 20);
    translate();
    pop();
  }

  function drawRightTopLine(x, y, a, b){
    
    push();
    translate(x, y);
    rotate(a);
    strokeWeight(lineweight);
    line(-20, 0, 0, 0);
    translate();
    pop();
    
    push();
    translate(x, y);
    rotate(b);
    strokeWeight(lineweight);
    line(0, 0, 0, 20);
    translate();
    pop();
  }

  function drawLeftBottomLine(x, y, a, b){
    push();
    translate(x, y);
    rotate(a);
    strokeWeight(lineweight);
    line(0, 0, 0, -20);
    translate();
    pop();

    push();
    translate(x, y);
    rotate(b);
    strokeWeight(lineweight);
    line(0, 0, 20, 0);
    translate();
    pop();
  }

  function drawRightBottomLine(x, y, a ,b){
    push();
    translate(x, y);
    rotate(a);
    strokeWeight(lineweight);
    line(0, 0, 0, -20);
    translate();
    pop();

    push();
    translate(x, y);
    rotate(b);
    strokeWeight(lineweight);
    line(0, 0, -20, 0);
    translate();
    pop();
  }

  drawLeftTopLine(50, 50, xR, yR);
  drawLeftTopLine(50, 130, xR, yR);
  drawLeftTopLine(90, 170, xR, yR);

  drawRightTopLine(210, 90, xR, yR);
  drawRightTopLine(250, 50, xR, yR);
  drawRightTopLine(250, 210, xR, yR);

  drawLeftBottomLine(50, 90, xR, yR);
  drawLeftBottomLine(90, 210, xR, yR);
  drawLeftBottomLine(50, 250, xR, yR);

  drawRightBottomLine(210, 130, xR, yR);
  drawRightBottomLine(250, 170, xR, yR);
  drawRightBottomLine(250, 250, xR, yR);

  drawVerticalLine(250, 90, xR, yR);
  drawVerticalLine(250, 130, xR, yR);
  drawVerticalLine(50, 170, xR, yR);
  drawVerticalLine(50, 210, xR, yR);


  drawStraightLine(90, 50, xR, yR);
  drawStraightLine(130, 50, xR, yR);
  drawStraightLine(170, 50, xR, yR);
  drawStraightLine(210, 50, xR, yR);

  drawStraightLine(90, 90, xR, yR);
  drawStraightLine(130, 90, xR, yR);
  drawStraightLine(170, 90, xR, yR);

  drawStraightLine(90, 130, xR, yR);
  drawStraightLine(130, 130, xR, yR);
  drawStraightLine(170, 130, xR, yR);

  drawStraightLine(130, 170, xR, yR);
  drawStraightLine(170, 170, xR, yR);
  drawStraightLine(210, 170, xR, yR);

  drawStraightLine(130, 210, xR, yR);
  drawStraightLine(170, 210, xR, yR);
  drawStraightLine(210, 210, xR, yR);

  drawStraightLine(90, 250, xR, yR);
  drawStraightLine(130, 250, xR, yR);
  drawStraightLine(170, 250, xR, yR);
  drawStraightLine(210, 250, xR, yR);

  xR = xR + 1;
  yR = yR + 1;

}