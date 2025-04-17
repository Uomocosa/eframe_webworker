use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub async fn rust_function() {
    log::info!(">f> rust_function");
}