/* 8×8のボード作成 */
let board = document.querySelector("#board");
let tbody = document.createElement("tbody");
let tr = document.createElement("tr");

for (let i = 64; i >= 0; i--) {
    if (i != 64 && !(i & 0x7)) {
        console.log(i);
        tbody.appendChild(tr);
        tr = document.createElement("tr");
    }

    let td = document.createElement("td");
    td.id = i;
    tr.appendChild(td);
}

board.appendChild(tbody);


/* 初期4駒の配置 */
let white_pieces = ["28", "37"];
let black_pieces = ["29", "36"];

white_pieces.forEach(id => {
    let idElement = document.getElementById(id);
    idElement.classList.add("white");
});

black_pieces.forEach(id => {
    let idElement = document.getElementById(id);
    idElement.classList.add("black");
});


/* 四隅の丸表示 */
let ids = ["11", "15", "43", "47"];

ids.forEach(id => {
    let idElement = document.getElementById(id);
    idElement.classList.add("mark");
});


/* ボードのクリック処理 */
board.addEventListener("click", async event => {
    if (event.target.tagName == "TD" && socket.readyState === 1) {
        socket.send(JSON.stringify({
            type: "click", 
            loc: Number(event.target.id)
        }));
    } else {
        // !TDの場合は無視
        // !== 1の場合はサーバ未接続
    }
});
