// データ処理用サーバ(Node.js)
// WebサーバはNetlifyを使用予定

// Othello Engine(./othello_core/src/lib.rs)
const wasm = require("./othello_core/pkg/core.js");
const fn = require("./lib/funcs.js");

// Cretate the WebSocket Server
const ws = require("ws");
const ws_server = new ws.Server({ port: port = process.env.PORT?? 3000 });
const server_address = "127.0.0.1";
const game_data = {};

// Request processing
ws_server.on("connection", socket => {
    console.log("Client connected!");

    // 受信データの処理
    socket.on("message", data => {
        console.log(`\rReceved: ${data}`);
        game_data["id"] = game_data["id"]?? new wasm.Game();
        let game = game_data["id"];
        let json = fn.json_parse(data);
        let res = {};
        
        if (!json) {
            // 伝送エラー？
            
        // マスクリック時の処理
        } else if (json.type == "click" && typeof(json.loc) == "number") {
            let valid = game.is_valid(json.loc, json.color);
            res.color = game.next_turn();   // 保持色との整合性チェック行う
            res.state = valid? "ok": "ng";
            res.rev_loc = json.loc;     // だめだめ
            return game.is_valid(json.loc, json.color);


            // // 合法手なら反転する石を算出
            // if (wasm.is_valid(json.loc, json.color)) {
            //     board = wasm.put_stone(board, counter, json.loc);
            //     res.rev_locs = wasm.rev_locs(board, counter, json.loc);
            //     res.state = "ok";
            //     counter++;

            // // 非合法手なら赤表示
            // } else {
            //     res.state = "ng";
            // }

            console.log(board, res);
        }

        socket.send(JSON.stringify(res));

        // socket.send(JSON.stringify({
        //     state: "ok" | "ng", 
        //     color: "white" | "black", 
        //     add_loc: loc | 0, 
        //     rev_locs: [1, 2, 3]
        // }));
    });

    // 接続切れ
    socket.on("close", () => {
        console.log("Client disconnected");
    });
});

console.log(`\nServer running on ws://${server_address}:${port}`);
