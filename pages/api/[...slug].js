import path from 'path'
import Cors from 'cors'
import request from 'request'
import initMiddleware from '../../lib/init-middleware'

// Initialize the cors middleware
const cors = initMiddleware(
  Cors({
    methods: ['GET', 'OPTIONS'],
  })
)


export default async function handler(req, res) {
  await cors(req, res)

  const {
    query: { slug },
  } = req

  const caltransBaseUrl = 'http://cwwp2.dot.ca.gov/';

  res.setHeader('content-disposition', `attachment; filename=${slug[slug.length - 1]}`);

  request
    .get(`${caltransBaseUrl}/${path.join(...slug)}`)
    .on(`error`, error => {
      res.writeHead(404, { 'Content-Type': 'text/html' })
      res.write('<h1>404 not found</h1>')
      res.end()
    })
    .pipe(res);
}
