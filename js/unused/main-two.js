// var elem = document.getElementById('svg-content-h');
// var params = { width: 300, height: 300 };
// var two = new Two(params).appendTo(elem);

// var circle = two.makeCircle(0, 0, 44);
// var circle2 = two.makeCircle(0, 0, 102);
// var circle3 = two.makeCircle(0, -44, 8);
// var circle4 = two.makeCircle(0, -102, 8);


// circle.noFill();
// circle.stroke = '#ffffff'; // Accepts all valid css color
// circle.linewidth = 2;

// circle2.noFill();
// circle2.stroke = '#ffffff'; // Accepts all valid css color
// circle2.linewidth = 2;

// circle3.noStroke();
// circle4.noStroke();

// var group1 = two.makeGroup(circle, circle3);
// group1.translation.set(150, 150);

// var group2 = two.makeGroup(circle2, circle4);
// group2.translation.set(150, 150);

// two.bind('update', function(frameCount){
//   group1.rotation += 0.01 * Math.PI;
//   group2.rotation -= 0.005 * Math.PI;
// }).play();