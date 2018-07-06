const { join } = require('path')
const { parse } = require('url')
const express = require('express')
const fs = require('fs')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const staticPath = join(__dirname, 'static')
const staticFiles = fs.readdirSync(staticPath)
  .filter(item => !item.startsWith('.'))
  .map(item => `/${item}`)

app.prepare()
  .then(() => {
    const server = express()

    server.get('*', (req, res) => {
      const parsedUrl = parse(req.url, true)
      if (staticFiles.indexOf(parsedUrl.pathname) > -1) {
        app.serveStatic(req, res, join(__dirname, 'static', parsedUrl.pathname))
      } else {
        return handle(req, res)
      }
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Houston, we have liftoff! (port ${port})`)
    })
  })
