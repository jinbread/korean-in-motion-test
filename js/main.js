

var aTl = anime.timeline({
  easing: 'easeOutExpo',
  duration: 2000,
  loop: true,  
})

aTl
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

function draw() {
  background(255);
  angleMode(DEGREES);
  
  function drawStraightLine(x, y) {
    push();
    translate(x, y);
    rotate(xR);
    strokeWeight(lineweight);
    line(-20, 0, 0, 0);
    translate();
    pop();

    push();
    translate(x, y);
    rotate(yR);
    strokeWeight(lineweight);
    line(0, 0, 20, 0);
    translate();
    pop();
  }

  function drawVerticalLine(x, y) {
    push();
    translate(x, y);
    rotate(xR);
    strokeWeight(lineweight);
    line(0, -20, 0, 0);
    translate();
    pop();

    push();
    translate(x, y);
    rotate(yR);
    strokeWeight(lineweight);
    line(0, 0, 0, 20);
    translate();
    pop();
  }
  function drawLeftTopLine(x, y){
    push();
    translate(x, y);
    rotate(xR);
    strokeWeight(lineweight);
    line(0, 0, 20, 0);
    translate();
    pop();


    push();
    translate(x, y);
    rotate(yR);
    strokeWeight(lineweight);
    line(0, 0, 0, 20);
    translate();
    pop();
  }

  function drawRightTopLine(x, y){
    
    push();
    translate(x, y);
    rotate(xR);
    strokeWeight(lineweight);
    line(-20, 0, 0, 0);
    translate();
    pop();
    
    push();
    translate(x, y);
    rotate(yR);
    strokeWeight(lineweight);
    line(0, 0, 0, 20);
    translate();
    pop();
  }

  function drawLeftBottomLine(x, y){
    push();
    translate(x, y);
    rotate(xR);
    strokeWeight(lineweight);
    line(0, 0, 0, -20);
    translate();
    pop();

    push();
    translate(x, y);
    rotate(yR);
    strokeWeight(lineweight);
    line(0, 0, 20, 0);
    translate();
    pop();
  }

  function drawRightBottomLine(x, y){
    push();
    translate(x, y);
    rotate(xR);
    strokeWeight(lineweight);
    line(0, 0, 0, -20);
    translate();
    pop();

    push();
    translate(x, y);
    rotate(yR);
    strokeWeight(lineweight);
    line(0, 0, -20, 0);
    translate();
    pop();
  }

  drawLeftTopLine(50, 50);
  drawLeftTopLine(50, 130);
  drawLeftTopLine(90, 170);

  drawRightTopLine(210, 90);
  drawRightTopLine(250, 50);
  drawRightTopLine(250, 210);

  drawLeftBottomLine(50, 90);
  drawLeftBottomLine(90, 210);
  drawLeftBottomLine(50, 250);

  drawRightBottomLine(210, 130);
  drawRightBottomLine(250, 170);
  drawRightBottomLine(250, 250);

  drawVerticalLine(250, 90);
  drawVerticalLine(250, 130);
  drawVerticalLine(50, 170);
  drawVerticalLine(50, 210);


  drawStraightLine(90, 50);
  drawStraightLine(130, 50);
  drawStraightLine(170, 50);
  drawStraightLine(210, 50);

  drawStraightLine(90, 90);
  drawStraightLine(130, 90);
  drawStraightLine(170, 90);

  drawStraightLine(90, 130);
  drawStraightLine(130, 130);
  drawStraightLine(170, 130);

  drawStraightLine(130, 170);
  drawStraightLine(170, 170);
  drawStraightLine(210, 170);

  drawStraightLine(130, 210);
  drawStraightLine(170, 210);
  drawStraightLine(210, 210);

  drawStraightLine(90, 250);
  drawStraightLine(130, 250);
  drawStraightLine(170, 250);
  drawStraightLine(210, 250);

  if(xR >= 360) {
    xR = 0;
    yR = 0;
    // setTimeout(3000);
    // sleep();
  } else {
    xR = xR + 0.5;
    yR = yR + 2;
  }

  
  // delay(1000);
  // rotate(mouseX);
  // line(0, 0, 20, 0)

  // line(30, 50, 70, 50);
}