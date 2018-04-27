const path = require("path");
const argv = require("electron").remote.process.argv;
const resultFile = path.join(__dirname, argv[2]);
const results = require(resultFile);

results.game = JSON.parse(results.game);
results.details = JSON.parse(results.details);

const [player0, player1] = results.game.settings.players.names;

window.__data__ = {
  matchData: results.game,
  playerData: [
    { name: player0, emailHash: "" },
    { name: player1, emailHash: "" }
  ]
};
