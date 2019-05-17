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
  
  
  