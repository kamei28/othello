// オセロのゲーム処理(./othello_core/src/lib.rs)
const wasm = require("./othello_core/pkg/core.js");

const game = new wasm.Game();

console.log(game.is_valid(10, "black")); // 10
