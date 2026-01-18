const server_address = "ws://127.0.0.1:3000";
let socket = new WebSocket(server_address);
let pieceloc = 0;

// 接続成功
socket.onopen = () => {
    console.log(`${socket.url}に接続しました。`);
};

// 接続切断
socket.onclose = () => {
    console.log(`${socket.url}との接続が途切れました。`);
};

// データ受信
socket.onmessage = message => {
    console.log(`${socket.url}からの受信: ${message.data}`);

    // データ解析
    let json = json_parse(message.data);

    // json.type == boardならボード処理実行
    if (json && json.type == "board") {
        
        // 前回の置き場所を削除して更新
        document.getElementById(pieceloc | 0).classList.remove("ok", "ng");
        pieceloc = json && json.add_loc | 0;

        // 青又は赤で位置表示
        let stone = document.getElementById(json.add_loc);
        stone.classList.add(json.state);
        stone.classList.add(json.color);

        // 置き換え駒があれば白黒反転
        json.rev_locs.forEach(id => {
            let stone2 = document.getElementById(id);
            stone2.classList = null;
            stone2.classList.add(json.color);
        });
    }

    console.log(json);
};

/* JSON変換 */
const json_parse = data => {
    try {
        return JSON.parse(data);
    } catch {
        return null
    };
};
