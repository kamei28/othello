// test cmd
// wasm-pack build --target nodejs

// release cmd
// wasm-pack build --target nodejs --release

use wasm_bindgen::prelude::*;

// 色判別
#[wasm_bindgen]
pub fn next_turn(counter: usize) -> String {
    if counter & 0x1 == 0 {
        "black".to_string()
    } else {
        "white".to_string()
    }
}

// 合法手チェック
#[wasm_bindgen]
pub fn is_valid(mut board: Vec<u64>, counter: usize, loc: usize) -> bool {
    let mut boardi = board.clone();
    boardi[0] = 10;

    true
}

// 合法手作成
#[wasm_bindgen]
pub fn legal_loc(mut board: Vec<u64>, counter: usize, loc: usize) -> Vec<u64> {
    let idx_me = counter & 0x1;
    let loc_mask = 1 << loc;

    // my, opponent, all stones of bitboard
    let me = board[idx_me];
    let opp = board[1 - idx_me];
    let all = me | opp;

    // 空白かチェック
    if all & loc_mask != 0 {
        return vec![];
    }

    // 合法手作成



    // Is this location is valid
    // let is_valid = *stone & (0x1 << loc) == 0;

    board
}

// 合法手作成
#[wasm_bindgen]
pub fn rev_locs(mut board: Vec<u64>, counter: usize, loc: usize) -> Vec<u8> {

    vec![0, 0]
}

// ボード作成
#[wasm_bindgen]
pub fn put_stone(mut board: Vec<u64>, counter: usize, loc: usize) -> Vec<u64> {

    // stone color
    let idx = &board[counter & 0x1];

    // Is this location is valid
    // let is_valid = *stone & (0x1 << loc) == 0;

    // if is_valid(&board, idx, loc) {

    // }

    board
}

// // 合法手チェック
// // #[wasm_bindgen]
// pub fn is_valid(board: &Vec<u64>, idx: &u64, loc: usize) -> bool {
//     let mut boardi = board.clone();
//     boardi[0] = 10;

//     true
// }

// // 合法手作成
// #[wasm_bindgen]
// pub fn gen_valid_loc(board: Vec<u64>, stone: u64, loc: usize) -> Vec<u8> {
//     let mut boardi = board.clone();
//     boardi[0] = 10;

//     vec![]
// }

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        // let result = add(2, 2);
        // assert_eq!(result, 4);
    }
}
