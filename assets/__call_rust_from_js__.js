console.log("start ...");

async function run_wasm() {
  console.log('index.js loaded');

  // Wait for the TrunkApplicationStarted event which indicates WASM is initialized
  await new Promise((resolve) => {
    window.addEventListener("TrunkApplicationStarted", resolve, { once: true });
  });

  // Now you can safely access the WASM bindings
  if (window.wasmBindings && window.wasmBindings.hello_world) {
    console.log(window.wasmBindings.hello_world);
    window.wasmBindings.hello_world();
  } else {
    console.error("WASM bindings or hello_world function not found.");
  }
}

run_wasm();
