// zdog-demo.js
// create illo
let illo = new Zdog.Illustration({
  // set canvas with selector
  element: '.zdog-canvas',
  dragRotate: true,
  zoom: 0.5,
  rotate: { x: Zdog.TAU/6, z: -Zdog.TAU/12 },
  // stop rotation when dragging starts
  onDragStart: function() {
    isSpinning = false;
  },
});



let box = new Zdog.Box({
  addTo: illo,
  width: 50,
  height: 50,
  depth: 50,
  stroke: false,
  color: '#D98B8B', // default face color
  leftFace: '#3b444c',
  rightFace: '#F2CF8D',
  topFace: '#CCC6B8',
  bottomFace: '#222238',
  translate: {x: -110},
});

// copy
box.copy({
  // overwrite original options
  translate: { x: -55, y: 55 },
});
box.copy({
  // overwrite original options
  translate: { x: -55, y: -55},
});
box.copy({
  // overwrite original options
  translate: { x: 0, y: -55},
});
box.copy({
  // overwrite original options
  translate: { x: 0, y: 55},
});

// C2
box.copy({
  // overwrite original options
  translate: { x: -110, y: -55 },
  color: '#FFC72C'
});
box.copy({
  // overwrite original options
  translate: { x: -165, y: 55 },
  color: '#FFC72C'
});
box.copy({
  // overwrite original options
  translate: { x: -165, y: -55 },
  color: '#FFC72C'
});
box.copy({
  // overwrite original options
  translate: { x: -110, y: 55 },
  color: '#FFC72C'
});
box.copy({
  // overwrite original options
  translate: { x: -220 },
  color: '#FFC72C'
});
//  V
box.copy({
  // overwrite original options
  translate: { x: 110, y: 55 },
  color: '#FFC72C'
});
box.copy({
  // overwrite original options
  translate: { x: 55, y: 0 },
  color: '#FFC72C'
});
box.copy({
  // overwrite original options
  translate: { x: 55, y: -55 },
  color: '#FFC72C'
});
box.copy({
  // overwrite original options
  translate: { x: 165, y: 0 },
  color: '#FFC72C'
});
box.copy({
  // overwrite original options
  translate: { x: 165, y: -55 },
  color: '#FFC72C'
});
// update & render
illo.updateRenderGraph();


let isSpinning = true;

function animate() {
  // rotate
  // if ( isSpinning ) {
  //   illo.rotate.y += 0.01;
  // }
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}
illo.updateRenderGraph();
// animate();
