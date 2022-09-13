const helloWorld = new Planet("helloWorld", Planets.sun, 1, 3);
helloWorld.generator = new SerpuloPlanetGenerator();
helloWorld.meshLoader = () => new HexMesh(helloWorld, 6);
helloWorld.sectorSeed = 7;
helloWorld.startSector = 1;
helloWorld.allowWaves = true;
helloWorld.allowWaveSimulation = true;
helloWorld.allowSectorInvasion = true;
helloWorld.allowLaunchSchematics = true;
helloWorld.enemyCoreSpawnReplace = true;
helloWorld.allowLaunchLoadout = true;
helloWorld.alwaysUnlocked = true;
helloWorld.hiddenItems.addAll(Items.erekirItems).removeAll(Items.serpuloItems);

// goldMountains.captureWave = 30;
// goldMountains.difficulty = 4;

// const goldMines = new SectorPreset("goldMines", Planets.serpulo, 205);
// goldMines.difficulty = 7;

// const abandonedDesert = new SectorPreset(
//   "abandonedDesert",
//   Planets.serpulo,
//   157
// );
// abandonedDesert.captureWave = 30;
// abandonedDesert.difficulty = 8;

// const reignLair = new SectorPreset("eradLair", Planets.serpulo, 122);
// reignLair.captureWave = 30;
// reignLair.difficulty = 10;

module.exports = {
  helloWorld: helloWorld,
};
