// Wrap every letter in a span
$('.ml2').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });
  
  anime.timeline({loop: true})
    .add({
      targets: '.ml2 .letter',
      scale: [20,1],
      opacity: [0,1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 1000,
      delay: function(el, i) {
        return 100*i;
      }
    }).add({
      targets: '.ml2',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });

  
    // Wrap every letter in a span
$('.ml6 .letters').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: function(el, i) {
      return 50 * i;
    }
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


// Define text style
const text = new Blotter.Text('울렁울렁', {
	family: "Arial",
  size: 80,
  fill: "#FFFFFF",
  paddingTop: 100,
  paddingBottom: 100,
  paddingRight: 100,
  paddingLeft: 100,
  weight: 800
});

// Use a material
// https://blotter.js.org/#/materials
let material = new Blotter.LiquidDistortMaterial();

// Set material opts
material.uniforms.uSpeed.value = 0.3;
material.uniforms.uVolatility.value = 0.10;
material.uniforms.uSeed.value = 0.1;

let blotter = new Blotter(material, {
  texts: text
});

// Apply to element
let scope = blotter.forText(text);
let elem = document.getElementById('blotter-container');
scope.appendTo(elem);