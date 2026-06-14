// Minimal web target for capsule_web_lite. Listens on $PORT (injected by the
// runner as controlled runtime config) and answers every request with a fixed
// line. No dependencies, no secrets.
const http = require("http");

const port = Number(process.env.PORT || 3000);
http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("hello from web_app_lite\n");
  })
  .listen(port, "127.0.0.1", () => {
    console.log(`web_app_lite listening on 127.0.0.1:${port}`);
  });
