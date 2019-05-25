z//   var sketchx = function(p) {
//     p.x = 0;
    
//     p.setup = function() {
//       p.createCanvas(300, 300, p.WEBGL)
//       p.ortho();

//     }

//     p.draw = function() {
//       p.background(44, 44, 44);
	
//     for(var i = 0; i < 10; i++){
//       p.push();
//       // p.rotateZ(p.frameCount * 0.01);
//       // p.rotateX(p.frameCount * 0.01);
//       p.translate(0, i*15 - 67.5, 0);
//       p.rotateY(p.x*i);
//       p.normalMaterial();
//       p.smooth();
//       p.box(150, 15, 150);
//       p.pop();		
//     }

    
//     if(p.mouseIsPressed) {
//       p.x = p.x+0.001;
//     } else {
//       p.x = p.x - 0.001;  	
//     }
//   }
// }

// new p5(sketchx, 'svg-content-x');

