const fs = require('fs')
const http = require('http')
const path = require('path')

const PORT = process.env.PORT || 8080
const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
}

http.createServer((req, res) => {
  const pathname = req.url === '/' ? '/index.html' : req.url
  const filePath = path.join(__dirname, pathname)

  if (!filePath.startsWith(__dirname) || !fs.existsSync(filePath)) {
    res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' })
    res.end('Not found')
    return
  }

  res.writeHead(200, { 'content-type': contentTypes[path.extname(filePath)] || 'text/plain; charset=utf-8' })
  fs.createReadStream(filePath).pipe(res)
}).listen(PORT, () => console.log(`hello-porto listening on ${PORT}`))
