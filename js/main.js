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
