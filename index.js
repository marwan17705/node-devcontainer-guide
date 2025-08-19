import http from "node:http";

const port = process.env.PORT || 3000;

const server = http.createServer((_, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ ok: true, env: process.env.NODE_ENV, ts: Date.now() }));
});

server.listen(port, () => {
  console.log(`[server] listening on http://localhost:${port}`);
});