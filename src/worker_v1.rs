#![cfg(target_arch = "wasm32")]
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub async fn worker_v1() {
    log::info!(">f> rust_function");
}
