console.log(">>> start ...");

async function run_wasm() {
  console.log('>>> waiting for Event(TrunkApplicationStarted) ...');
  // Wait for the TrunkApplicationStarted event which indicates WASM is initialized
  await new Promise((resolve) => {
    window.addEventListener("TrunkApplicationStarted", resolve, { once: true });
  });
  console.log('>>> Event(TrunkApplicationStarted) received.');
  // Now you can safely access the WASM bindings
  if (window.wasmBindings && window.wasmBindings.worker_v1) {
    console.log(window.wasmBindings.worker_v1);
    window.wasmBindings.worker_v1();
  } else {
    console.error("~!~ WASM bindings or worker_v1 function not found.");
  }
}

run_wasm();
