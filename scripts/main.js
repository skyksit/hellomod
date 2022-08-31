Events.on(WorldLoadEvent, (e) => {
  var winWave = Vars.state.rules.winWave;
  var hasSector = Vars.state.hasSector();
  var startSector = Planets.serpulo.startSector;
  var sectors = Planets.serpulo.sectors;

  var s223 = sectors.items[223];

  const myDialog = new BaseDialog("Dialog Title");
  // Add "go back" button
  myDialog.addCloseButton();
  // Add text to the main content
  myDialog.cont.add("sectors[223].preset.captureWave = " + s223.preset.captureWave);
  myDialog.cont.add("sectors.size = " + sectors.size);
  // Show dialog
  myDialog.show();
});

/**
 //serpulo presets
const goldMountains = new SectorPreset("goldMountains", Planets.serpulo, 172);
goldMountains.captureWave = 30;
goldMountains.difficulty = 4;

const goldMines = new SectorPreset("goldMines", Planets.serpulo, 205);
goldMines.difficulty = 7;

const abandonedDesert = new SectorPreset("abandonedDesert", Planets.serpulo, 157);
abandonedDesert.captureWave = 30;
abandonedDesert.difficulty = 8;

const reignLair = new SectorPreset("eradLair", Planets.serpulo, 122);
reignLair.captureWave = 30;
reignLair.difficulty = 10;

module.exports = {
  goldMountains: goldMountains,
  goldMines: goldMines,
  abandonedDesert: abandonedDesert,
  reignLair: reignLair
};
 */
