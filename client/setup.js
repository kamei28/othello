let myurl = location.hostname;
let data = localStorage.getItem(myurl);
data = JSON.parse(data || "{}");

const my_color = "black"; // あとで設定作る

// ブラックモード
// localStorage.setItem(myurl, JSON.stringify({
//     bg_color: "black"
// }));

/* ブラックモードの適応 */
if (data && data.bg_color == "black") {
    console.log("ok");
    let root = document.querySelector(":root")
    root.style.background = "#242424";
    root.style.color = "whitesmoke";
}



console.log(data);