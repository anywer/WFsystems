const http = require('http');
const fs = require('fs');
const path = require('path');

const sourceRoot = path.resolve(process.argv[2] || '.');
const outputRoot = path.resolve(process.argv[3] || path.join(process.cwd(), 'assets', 'demo'));
const port = Number(process.argv[4] || 5502);

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml; charset=utf-8',
  '.webp': 'image/webp',
};

fs.mkdirSync(outputRoot, { recursive: true });

const server = http.createServer((request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);

  if (request.method === 'POST' && url.pathname === '/__capture') {
    const fileName = path.basename(url.searchParams.get('name') || 'capture.png');
    if (!/^[a-z0-9-]+\.png$/i.test(fileName)) {
      response.writeHead(400).end('invalid name');
      return;
    }

    const chunks = [];
    let size = 0;
    request.on('data', (chunk) => {
      size += chunk.length;
      if (size > 20 * 1024 * 1024) request.destroy();
      else chunks.push(chunk);
    });
    request.on('end', () => {
      fs.writeFileSync(path.join(outputRoot, fileName), Buffer.concat(chunks));
      response.writeHead(201, { 'content-type': 'text/plain; charset=utf-8' }).end(fileName);
    });
    return;
  }

  const requestedPath = decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname);
  const filePath = path.resolve(sourceRoot, `.${requestedPath}`);
  if (!filePath.startsWith(`${sourceRoot}${path.sep}`)) {
    response.writeHead(403).end('forbidden');
    return;
  }

  fs.stat(filePath, (error, stat) => {
    if (error || !stat.isFile()) {
      response.writeHead(404).end('not found');
      return;
    }
    response.writeHead(200, { 'content-type': contentTypes[path.extname(filePath).toLowerCase()] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(response);
  });
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Serving ${sourceRoot} on http://127.0.0.1:${port}`);
  console.log(`Saving captures to ${outputRoot}`);
});
