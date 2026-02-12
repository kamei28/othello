let board = document.querySelector("#board");
let tbody = document.createElement("tbody");
let tr = document.createElement("tr");

/* 8×8のボード作成 */
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

/* ボードに反映 */
board.appendChild(tbody);

/* 初期4駒の配置（白） */
["28", "37"].forEach(id => {
    let idElement = document.getElementById(id);
    idElement.classList.add("white");
});

/* 初期4駒の配置（黒） */
["29", "36"].forEach(id => {
    let idElement = document.getElementById(id);
    idElement.classList.add("black");
});

/* 四隅の丸表示 */
["11", "15", "43", "47"].forEach(id => {
    let idElement = document.getElementById(id);
    idElement.classList.add("mark");
});

/* ボードのクリック処理 */
board.addEventListener("click", async event => {
    if (event.target.tagName == "TD" && socket.readyState === 1) {
        socket.send(JSON.stringify({
            type: "click", 
            loc: Number(event.target.id), 
            color: my_color
        }));
    } else {
        // !TDの場合は無視
        // !== 1の場合はサーバ未接続
    }
});
