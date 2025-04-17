#![warn(clippy::all, rust_2018_idioms)]

mod app;
pub use app::TemplateApp;

use wasm_bindgen::prelude::*;
#[wasm_bindgen]
pub fn hello_world() {
    log::info!(">f> hello_world");
} 

mod rust_function;
pub use rust_function::rust_function;

mod worker_v1;
pub use worker_v1::worker_v1;