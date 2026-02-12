use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct Game {
    white: u64, 
    black: u64, 
    counter: u8
}

#[wasm_bindgen]
impl Game {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Game {
        Game {
            white: 0x1008000000,
            black: 0x0810000000, 
            counter: 0,
        }
    }

    /* 次のターン演算 */
    pub fn next_turn(&self) -> String {
        if self.counter & 0x1 == 0 {
            "black".to_string()
        } else {
            "white".to_string()
        }
    }

    /* 合法手チェック */
    pub fn is_valid(&self, loc: u8, color: String) -> bool {


        true
    }

    /* 合法手作成 */
    pub fn gen_legal(&self, loc: u8, color: String) -> Vec<u8> {


        vec![0, 0]
    }

    /* テスト */
    pub fn test(&self) -> String {

        "hello".to_string()
    }
}
