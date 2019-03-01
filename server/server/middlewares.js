'use strict'

import express from 'express'
import favicon from 'serve-favicon'
import bodyParser from 'body-parser'
import config from './config'
import routes from './routes'

export default app => {
  app.use(express.static(config.static_dir.root))
  app.use(favicon(config.static_dir.root + '/favicon.ico'))
  app.use(bodyParser.json())

  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.header('Access-Control-Allow-Credentials', true)
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
  })

  app.use('/', routes())

  app.use((req, res, next) => {
    if (res.body !== undefined) {
      res.body = {
        status: 200,
        data: res.body
      }
      res.json(res.body)
    } else {
      next()
    }
  })

  app.use((err, req, res, next) => {
    res.body = {
      status: err.status,
      message: err.message
    }
    res.status(err.status || 500)
    res.json(res.body)
  })
}
