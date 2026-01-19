// test cmd
// wasm-pack build --target nodejs

// release cmd
// wasm-pack build --target nodejs --release

use wasm_bindgen::prelude::*;

// ボード作成
#[wasm_bindgen]
pub fn put_stone(board: Vec<u64>, loc: u8) -> Vec<u64> {
    let mut board = board;
    board[0] = 10;

    board
}

// 合法手作成
#[wasm_bindgen]
pub fn legalize(board: Vec<u64>, loc: u8) -> Vec<u8> {
    let mut boardi = board.clone();
    boardi[0] = 10;

    vec![]
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        // let result = add(2, 2);
        // assert_eq!(result, 4);
    }
}
