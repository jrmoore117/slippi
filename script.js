const { default: SlippiGame } = require('@slippi/slippi-js');

const game = new SlippiGame("test.slp");

// Get game settings – stage, characters, etc
const settings = game.getSettings();
const [player1, player2] = settings.players;
console.log(`stock-icon-${player1.characterId}-${player1.characterColor}`);
console.log(`stock-icon-${player2.characterId}-${player2.characterColor}`);

// Get metadata - start time, platform played on, etc
const metadata = game.getMetadata();
// console.log(metadata);

// Get computed stats - openings / kill, conversions, etc
const stats = game.getStats();
// console.log(stats);

// Get frames – animation state, inputs, etc
// This is used to compute your own stats or get more frame-specific info (advanced)
const frames = game.getFrames();
console.log(frames[1000].players); // Print frame when timer starts counting down
// console.log(frames[1].players);
// console.log(frames[2].players);
// console.log(frames[3].players);
// console.log(frames[4].players);