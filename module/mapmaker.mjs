// MARK: Main module entry point
Hooks.once("init", function() {
  console.log('foundryvtt-mapmaker | Initializing foundryvtt-mapmaker');
  CONFIG.debug.hooks = true;  
});

// Button registration
Hooks.on('getSceneControlButtons', (controls) => {
  console.log('foundryvtt-mapmaker | getSceneControlButtons');
  console.log(controls);

  const drawingControls = controls.find((control) => control.name === "drawings");
  drawingControls.tools.push({
    name: "polywall",
    title: "mapmaker.PolywallButtonTitle",
    icon: "fas fa-trowel-bricks",
    onClick: () => {console.log("Click!")},
    button: true
  });
});