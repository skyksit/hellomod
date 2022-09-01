Events.on(ClientLoadEvent, () => {
  var winWave = Vars.state.rules.winWave;
  var sectors = Planets.serpulo.sectors;

  var s223 = sectors.items[223];

  const myDialog = new BaseDialog("Dialog Title");
  // Add "go back" button
  myDialog.addCloseButton();
  // Add text to the main content
  myDialog.cont.add("sectors[223].info.wave = " + s223.info.wave + "\n");
  myDialog.cont.add(
    "Vars.state.rules.winWave = " + Vars.state.rules.winWave + "\n"
  );
  // Show dialog
  myDialog.show();
  //Toast message example
  // Vars.ui.hudfrag.showToast("Hello World!");
});

Events.on(ClientLoadEvent, () => {
  let uiPlanet = Vars.ui.planet;
  uiPlanet.shown(() => {
    if (uiPlanet.mode === PlanetDialog.Mode.look) {
      uiPlanet.fill(
        cons((t) => {
          t.top().right();
          t.defaults().size(200, 54);

          // One Click All Sectors Destination Sector Redirect
          t.button("Redirect", Icon.upOpen, () => {
            let sectors = Planets.serpulo.sectors;
            let groundZero = sectors.get(15);
            uiPlanet.showSelect(groundZero, (selectedSector) => {
              sectors.each((e) => {
                e.info.destination = selectedSector;
              });
            });
          });
          // Invasion Sector when you click Sector
          t.button("Invasion", Icon.upOpen, () => {
            let sectors = Planets.serpulo.sectors;
            let groundZero = sectors.get(15);
            // let state = Vars.state;

              uiPlanet.showSelect(groundZero, (selectedSector) => {
                Events.fire(new SectorInvasionEvent(selectedSector));
              });
          });
        })
      )
    }
  });
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
