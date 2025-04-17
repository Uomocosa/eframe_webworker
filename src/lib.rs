#![warn(clippy::all, rust_2018_idioms)]

mod app;
pub use app::TemplateApp;

#[cfg(target_arch = "wasm32")]
use wasm_bindgen::prelude::*;
#[wasm_bindgen]
#[cfg(target_arch = "wasm32")]
pub fn hello_world() {
    log::info!(">f> hello_world");
}

mod rust_function;
#[cfg(target_arch = "wasm32")]
pub use rust_function::rust_function;

mod worker_v1;
#[cfg(target_arch = "wasm32")]
pub use worker_v1::worker_v1;
