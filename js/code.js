//jshint esversion: 6

// create illo
let illo = new Zdog.Illustration({
    // set canvas with selector
    element: '.zdog-canvas',
  });
  
  new Zdog.Shape({
    addTo: illo,
    path: [
      { x: 10, y: -45, z: 0 },               // create / and start line top right
      { x:  -10, y: 45, z: 0 },             // line to down left
      { move: { x: 25, y: -30, z: 0 } },    // create > move line to top right
      { x:  85, y: 0, z: 0 },               // line to bottom right
      { x: 25, y: 30, z: 0 },               // line to bottom left
      { move: { x: -30, y: -30, z: 0 } },   // create < move line to top right
      { x:  -90, y: 0, z: 0 },             // line to bottom left
      { x:  -30, y: 30,z: 0 },             // line to bottom right
    ],
    
    closed: false, // unclosed
    stroke: 10,
    color: '#dfdfdf'
  });
  
  new Zdog.Shape({
    addTo: illo,
    path: [
      { x: 10, y: -45, z: -5 },               // create / and start line top right
      { x:  -10, y: 45, z: -5 },             // line to down left
      { move: { x: 25, y: -30, z: -5 } },    // create > move line to top right
      { x:  85, y: 0, z: -5 },               // line to bottom right
      { x: 25, y: 30, z: -5 },               // line to bottom left
      { move: { x: -30, y: -30, z: -5 } },   // create < move line to top right
      { x:  -90, y: 0, z: -5 },             // line to bottom left
      { x:  -30, y: 30,z: -5 },             // line to bottom right
    ],
    
    closed: false, // unclosed
    stroke: 10,
    color: '#E63946'
  });

  new Zdog.Shape({
    addTo: illo,
    path: [
      { x: 10, y: -45, z: 5 },               // create / and start line top right
      { x:  -10, y: 45, z: 5 },             // line to down left
      { move: { x: 25, y: -30, z: 5 } },    // create > move line to top right
      { x:  85, y: 0, z: 5 },               // line to bottom right
      { x: 25, y: 30, z: 5 },               // line to bottom left
      { move: { x: -30, y: -30, z: 5 } },   // create < move line to top right
      { x:  -90, y: 0, z: 5 },             // line to bottom left
      { x:  -30, y: 30,z: 5 },             // line to bottom right
    ],
    
    closed: false, // unclosed
    stroke: 10,
    color: '#E63946'
  });
  
  
  // update & render
  illo.updateRenderGraph();
  
  function animate() {
    // rotate illo each frame
    illo.rotate.y += 0.03;
    illo.updateRenderGraph();
    // animate next frame
    requestAnimationFrame( animate );
  }
  // start animation
  animate();