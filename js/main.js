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


