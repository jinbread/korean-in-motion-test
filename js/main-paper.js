// // Create a circle shaped path at the center of the view,
// // with a radius of 70:
// var path = new Path.Circle({
// 	center: view.center,
// 	radius: 70,
// 	fillColor: 'yellow'
// });

// function onFrame(event) {
// 	// Each frame, change the fill color of the path slightly by
// 	// adding 1 to its hue:
// 	path.fillColor.hue += 1;
// }

// The amount of segment points we want to create:
var amount = 5;

// The maximum height of the wave:
var height = 30;

// Create a new path and style it:
var path = new Path({
	// 80% black:
	strokeColor: 'magenta',
	strokeWidth: 10,
	strokeCap: 'square'
});

var path2 = new Path({
	// 80% black:
	strokeColor: 'blue',
	strokeWidth: 10,
	strokeCap: 'square'
});

// Add 5 segment points to the path spread out
// over the width of the view:
for (var i = 0; i <= amount; i++) {
    path.add(new Point(i / amount, 2) * view.size);
    path2.add(new Point(i / amount, 2) * view.size);
}

// Select the path, so we can see how it is constructed:
// path.selected = true;

function onFrame(event) {
	// Loop through the segments of the path:
	for (var i = 0; i <= amount; i++) {
        var segment = path.segments[i];
        var segment2 = path2.segments[i];

		// A cylic value between -1 and 1
        var sinus = Math.sin(event.time * 2 + i);
        var cosus = Math.cos(event.time * 4 + i);
		
		// Change the y position of the segment point:
        segment.point.y = sinus * height + 100;
        segment2.point.y = cosus * height + 200;
	}
	// Uncomment the following line and run the script again
	// to smooth the path:
    path.smooth();
    path2.smooth();
}