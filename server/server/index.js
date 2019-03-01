'use strict'

import express from 'express'
import middlewares from './middlewares'

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3030

app.set('port', port)

middlewares(app)

app.listen(port, host)
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
