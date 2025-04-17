console.log(">>> start ...");

async function run_wasm() {
  console.log('>>> waiting for Event(TrunkApplicationStarted) ...');
  // Wait for the TrunkApplicationStarted event which indicates WASM is initialized
  await new Promise((resolve) => {
    window.addEventListener("TrunkApplicationStarted", resolve, { once: true });
  });
  console.log('>>> Event(TrunkApplicationStarted) received.');
  // Now you can safely access the WASM bindings
  if (window.wasmBindings && window.wasmBindings.rust_function) {
    console.log(window.wasmBindings.rust_function);
    window.wasmBindings.rust_function();
  } else {
    console.error("~!~ WASM bindings or rust_function function not found.");
  }
}

run_wasm();
