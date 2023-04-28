import express from 'express'
import { join } from 'node:path'

const server = express()

import collections from './routes/collections'

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))
server.use('/api/v1/collections', collections)


export default server
