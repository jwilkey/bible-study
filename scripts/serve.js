const http = require('http')
const port = 3777

const requestHandler = (request, response) => {
  console.log(request.url)
  if (request.url.startsWith('/studies')) {
    const study = require(`../public/${request.url}`)
    response.end(JSON.stringify(study))
  }
  response.end('404')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})