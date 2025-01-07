JAVASCRIPT - fetch
..........................................................................................
Chrome povolení lokálního CORS.

To se prování při spouštění chromu přepínači:
"C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir="D:\temp2\pokus"
...........................................................................................
Mozilla povolení lokálního CORS

Jedno, nebo oba dva tyto:
about:config
  security.fileuri.strict_origin_policy  false
  security.enterprise_roots.enabled      true
...........................................................................................
Response converting method:
json() when you expect a JSON payload. Parses the response body as JSON and returns a JavaScript object.
text() for plain text or HTML responses. Converts the response body to plain text.
blob() for binary files like images, videos, or PDFs. Converts the response into a Blob object, which represents binary data.
arrayBuffer() for low-level manipulation of binary data. Converts the response into an ArrayBuffer, useful for handling binary data manually (e.g., for WebGL or audio processing).
formData() for processing multipart/form-data. Converts the response into a FormData object, typically used when the server sends data in multipart/form-data format.
........................................................................................... 
1.

fetch("pokus.txt")
.then(x => x.text())
.then(y => console.log(y));
............................................................................................
2.
f1("pokus.txt");

async function f1(file) {
let x = await fetch(file);
let y = await x.text();
console.log(y);
}
