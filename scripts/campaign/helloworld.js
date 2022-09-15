//Gold-mod 참조
//helloworld presets
const helloPlanetaryTerminal = new SectorPreset(
  "planetaryTerminal",
  Planets.helloworld,
  100
);
helloPlanetaryTerminal.captureWave = 30;
helloPlanetaryTerminal.difficulty = 10;

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
  helloPlanetaryTerminal: helloPlanetaryTerminal,
};
