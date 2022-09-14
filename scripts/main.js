//planet
require("planet/helloworld");

// maxSchematicSize
Vars.maxSchematicSize = 512;

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
            let selectedSector = uiPlanet.selected;
            let sectors = selectedSector.planet.sectors;
              sectors.each((e) => {
                e.info.destination = selectedSector;
              });
          });

          // Invasion Sector when you click Sector
          t.button("Invasion", Icon.upOpen, () => {
            let selectedSector = uiPlanet.selected;
            let sectors = selectedSector.planet.sectors;
            let varsState = Vars.state;

              let selectedSectorWave = selectedSector.isBeingPlayed()
                ? varsState.wave
                : selectedSector.info.wave + selectedSector.info.wavesPassed;

              let waveMax =
                Math.max(selectedSector.info.winWave, selectedSectorWave) +
                Math.floor(Math.random() * (20 - 10) + 10);

              Vars.ui.hudfrag.showToast("waveMax = " + waveMax);

              if (selectedSector.isBeingPlayed()) {
                varsState.rules.winWave = waveMax;
                varsState.rules.waves = true;
                varsState.rules.attackMode = false;
              } else {
                selectedSector.info.winWave = waveMax;
                selectedSector.info.waves = true;
                selectedSector.info.attack = false;
                selectedSector.saveInfo();
              }
              Events.fire(new SectorInvasionEvent(selectedSector));
          });

          // Enemy Base respawn When you click Sector
          t.button("Respawn", Icon.upOpen, () => {
            let selectedSector = uiPlanet.selected;
            if (!selectedSector.hasBase()) {
              selectedSector.generateEnemyBase = true;
              selectedSector.threat = 1;
              selectedSector.saveInfo();

              Vars.ui.hudfrag.showToast(
                `Enemy Base respawn in ${selectedSector.id} `
              );
            } else {
              Vars.ui.hudfrag.showToast(
                `Enemy Base already exists in ${selectedSector.id} `
              );
            }
          });
        })
      );
    }
  });
});
/**
 * 
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
