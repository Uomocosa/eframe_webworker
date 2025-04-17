// This is a simple example, on how to add .js files, and "link them" with trunk serve
// 1. Create a new .js file "file_name.js" and add it to the assets/ folder.
// 2. In index.html (on the root directory) in the <head> add the following:
//    <link data-trunk rel="copy-file" href="assets/file_name.js"/>
// 3. In the body of index.html add the following:
//    <script src="__hello_from_js__.js"></script>

// This is an example, starting from this, I'll try to create a WebWorker
console.log("JS> hello!");