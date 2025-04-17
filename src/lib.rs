#![warn(clippy::all, rust_2018_idioms)]

mod app;
pub use app::TemplateApp;

use wasm_bindgen::prelude::*;
#[wasm_bindgen]
pub fn hello_world() {
    log::info!(">f> hello_world");
} 