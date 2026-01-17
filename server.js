// データ処理用サーバ(Node.js)
// WebサーバはNetlifyを使用予定

// オセロのゲーム処理(./othello_core/src/lib.rs)
const wasm = require("./othello_core/pkg/core.js");

// Cretate WebSocket Server
const ws = require("ws");
const server = new ws.Server({ port: process.env.PORT?? 3000});
const web_server = "127.0.0.1";

// クライアントとの接続待ち
server.on("connection", socket => {
    console.log("Client connected");

    // 受信データの処理
    socket.on("message", data => {
        console.log(`Receved: ${data}`);
    });

    // 接続切れ
    socket.on("close", () => {
        console.log("Client disconnected");
    });
});


// add(BigInt, BigInt)
console.log("7n: ", wasm.add(3n, 4n));

console.log(`\nThis Server is running at https://${web_server}`);
