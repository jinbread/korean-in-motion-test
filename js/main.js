var aTl = anime.timeline({
  easing: 'easeOutExpo',
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

anime({
  targets: '.alphabet-f',
  scale: [
    {value: 0, easing: 'easeInOutExpo', duration: 1500},
    {value: 1, easing: 'easeOutCubic', duration: 2400}
  ],
  delay: anime.stagger(200, {grid: [10, 10], from: 'center'}),
  loop: true,
});

anime({
  targets: '.alphabet-fc',
  // borderRadius: ['0%', '50%'],
  scale: [
    {value: 0, easing: 'easeInOutExpo', duration: 1500},
    {value: 1, easing: 'spring(1, 100, 10, 0)', duration: 2400}
  ],
  delay: anime.stagger(200, {grid: [6, 8], from: 'center'}),
  loop: true,
});

anime({
  targets: '.alphabet-g',
  rotateY: '4turn',
  loop: true,
  easing: 'easeInOutExpo',
  duration: 3000,
  delay: anime.stagger(100),
})

lTl = anime.timeline({
  easing: 'easeOutExpo',
  loop: true,    
})

lTl
.add({
  targets: '#alphabet-l-1',
  translateX: -42,
  duration: 200,
  easing: 'easeOutExpo',
  translateY: 42,
  delay: 800
})
.add({
  targets: '#alphabet-l-2',
  translateX: +42,
  duration: 200,
  easing: 'easeOutExpo',
  translateY: -42,
  delay: 800
})
.add({
  targets: '#alphabet-l-3',
  translateX: -42,
  duration: 200,
  easing: 'easeOutExpo',
  translateY: -42,
  delay: 800
})
.add({
  targets: '#alphabet-l-4',
  translateX: 42,
  duration: 200,
  easing: 'easeOutExpo',
  translateY: 42,
  delay: 800
})
.add({
  targets: '#alphabet-l-4',
  translateX: 0,
  duration: 200,
  easing: 'easeOutExpo',
  translateY: 0,
  delay: 800
})
.add({
  targets: '#alphabet-l-3',
  translateX: 0,
  duration: 200,
  easing: 'easeOutExpo',
  translateY: 0,
  delay: 800
})
.add({
  targets: '#alphabet-l-2',
  translateX: 0,
  duration: 200,
  easing: 'easeOutExpo',
  translateY: 0,
  delay: 800
})
.add({
  targets: '#alphabet-l-1',
  translateX: 0,
  duration: 200,
  easing: 'easeOutExpo',
  translateY: 0,
  delay: 800
})

wTl = anime.timeline({
  easing: 'easeOutExpo',
  loop: true,  
})

wTl
.add({
  targets: '.alphabet-wb',
  translateX: 46,
  duration: 200,
  easing: 'easeOutExpo',
  // translateY: 46,
  delay: 800
})
.add({
  targets: '.alphabet-wa',
  translateX: -46,
  translateY: -46,
  duration: 200,
  easing: 'easeOutExpo',
  delay: 200
})
.add({
  targets: '.alphabet-wc',
  // translateX: -46,
  translateY: -46,
  duration: 200,
  easing: 'easeOutExpo',
  delay: 200
})
.add({
  targets: '.alphabet-wd',
  translateX: -46,
  translateY: 46,
  duration: 200,
  easing: 'easeOutExpo',
  delay: 200
})
.add({
  targets: '.alphabet-wa',
  translateX: 0,
  translateY: 0,
  duration: 200,
  easing: 'easeOutExpo',
  delay: 800
})
.add({
  targets: '.alphabet-wd',
  translateX: 0,
  translateY: 0,
  duration: 200,
  easing: 'easeOutExpo',
  delay: 200
})
.add({
  targets: '.alphabet-wb',
  translateX: 0,
  duration: 200,
  easing: 'easeOutExpo',
  delay: 200
  // translateY: 46,
})
.add({
  targets: '.alphabet-wc',
  // translateX: -46,
  translateY: 0,
  duration: 200,
  easing: 'easeOutExpo',
  delay: 200
})

var jTla = anime.timeline({
  loop: true,
  easing: "easeInOutExpo",
})

jTla
.add({
  targets: '.alphabet-j-left',
  rotate: 109,
  duration: 400
})
.add({
  targets: '.alphabet-j-left',
  rotate: 0,
  duration: 400
})

var jTlb = anime.timeline({
  loop: true,
  easing: "easeInOutExpo",
})

jTlb
.add({
  targets: '.alphabet-j-right',
  rotate: -110,
  duration: 400
})
.add({
  targets: '.alphabet-j-right',
  rotate: 0,
  duration: 400
})

jTlo = anime.timeline({
  loop: true,
  easing: "easeInOutExpo",
})

jTlo
.add({
  targets: '.alphabet-j-oval',
  translateX: -190,
  translateY: 40,
  duration: 400,
})
.add({
  targets: '.alphabet-j-oval',
  translateX: -40,
  translateY: 100,
  duration: 400,
})
.add({
  targets: '.alphabet-j-oval',
  translateX: -180,
  translateY: 180,
  duration: 400,
})
.add({
  targets: '.alphabet-j-oval',
  translateX: -10,
  translateY: 160,
  duration: 400,
})
.add({
  targets: '.alphabet-j-oval',
  translateX: -80,
  translateY: 10,
  duration: 400,
})
.add({
  targets: '.alphabet-j-oval',
  translateX: 0,
  translateY: 0,
  duration: 400,
})

var vTl = anime.timeline({
  easing: 'linear',
  loop: true,
  delay: 200,
})

vTl
.add({
  targets: '.cube',
  rotateY: 90,
  delay: anime.stagger(200),
})
.add({
  targets: '.cube',
  rotateY: 0,
  delay: anime.stagger(200)
})

anime({
  targets: "#alphabet-i-1",
  rotate: -360,
  loop: true,
  delay: 500,
  duration: 2500
})

anime({
  targets: "#alphabet-i-2",
  rotate: 360,
  loop: true,
  delay: 500,
  duration: 2500
})

anime({
  targets: "#alphabet-i-3",
  rotate: 360,
  loop: true,
  delay: 500,
  duration: 2500
})

anime({
  targets: "#alphabet-i-4",
  rotate: -360,
  loop: true,
  delay: 500,
  duration: 2500
})

anime({
  targets: "#alphabet-i-6",
  rotate: 360,
  loop: true,
  delay: 500,
  duration: 2500
})

anime({
  targets: "#alphabet-i-5",
  rotate: 360,
  loop: true,
  delay: 500,
  duration: 2500
})

var iTl = anime.timeline({
  loop: true,
  delay: 500,
  duration: 2500
})

iTl
.add({
  targets: "#alphabet-i",
  scale: 1,
})
.add({
  targets: "#alphabet-i",
  scale: 2,
})
.add({
  targets: "#alphabet-i",
  scale: 1,
})

// p5.js script
// p5.js script
// p5.js script
// p5.js script
// p5.js script

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
    p.background(0, 229, 119);
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
    // console.log(p.millis());
    if (p.millis() % 10000 > 0 && p.millis() % 10000 < 200 ) {
      p.background(0, 229, 119);
    }
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
    p.strokeWeight(1.7);
    p.stroke(0);
    p.rect(p.xpos+(p.sWeight/2), p.ypos+(p.sWeight/2), p.rad-p.sWeight, p.rad-p.sWeight);

    p.noFill();
    p.strokeWeight(1.7);
    p.stroke(0);
    p.rect(p.xpos-(p.sWeight/2), p.ypos-(p.sWeight/2), p.rad+p.sWeight, p.rad+p.sWeight);
  }
}

new p5(sketche, 'svg-content-e');
