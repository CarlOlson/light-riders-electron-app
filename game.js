
let results = require('./resultfile.json');
results.game = JSON.parse(results.game);
results.details = JSON.parse(results.details);

const [player0, player1] = results.game.settings.players.names;

window.__data__ = {
  matchData: results.game,
  playerData: [{"name": player0,"emailHash":""},{"name": player1,"emailHash":""}]
};
