var outerClip = new Path.Circle({
    center: [150, 150],
    radius: 103,
    fillColor: 'white'
});




var inner = new Path.Circle({
    center: [150, 150],
    radius: 103,
    // parent: originals,
    fillColor: 'white'
});




// var ring = outer.subtract(inner);


// The amount of segment points we want to create:
var amount = 4;

// The maximum height of the wave:
var height = 30;

// Create a new path and style it:
var path = new Path({
	// 80% black:
	strokeColor: '#FF00FF',
	strokeWidth: 200,
	strokeCap: 'square'
});

var path2 = new Path({
	// 80% black:
	strokeColor: '#FBB03B',
	strokeWidth: 200,
	strokeCap: 'square'
});

// Add 5 segment points to the path spread out
// over the width of the view:
for (var i = 0; i <= amount; i++) {
    path.add(new Point(i / amount, 2) * 300);
    path2.add(new Point(i / amount, 2) * view.size);
}

// Select the path, so we can see how it is constructed:
// path.selected = true;
// path2.selected = true;

function onFrame(event) {
	// Loop through the segments of the path:
	for (var i = 0; i <= amount; i++) {
		var segment = path.segments[i];
		var segment2 = path2.segments[i];

		// A cylic value between -1 and 1
		var sinus = Math.sin(event.time * 2 + i);
		var cosus = Math.cos(event.time * 2 + i);
		
		// Change the y position of the segment point:
		segment.point.y = sinus * height + 250;
		segment2.point.y = cosus * height + 250;
	}
	// Uncomment the following line and run the script again
	// to smooth the path:
	path.smooth();
	path2.smooth();
}

path.blendMode = 'multiply'
path2.blendMode = 'multiply'

var group = new Group(outerClip, path2, path);
group.clipped = true;


var outer = new Path.Circle({
    center: [150, 150],
    radius: 45,	
    // parent: originals,
    fillColor: '#FFCDD1'
});
