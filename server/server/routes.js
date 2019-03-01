'use strict'

import { Router } from 'express'

const router = Router()

// Mocks
const users = [
  { name: 'Mateusz-1' },
  { name: 'Mateusz-2' },
  { name: 'Mateusz-3' }
]

export default () => {
  // Get all users.
  router.get('/users', (req, res, next) => {
    res.body = users
    next()
  })

  // Get the user by id.
  router.get('/users/:id', (req, res, next) => {
    const id = parseInt(req.params.id)

    if (id >= 0 && id < users.length) {
      res.body = users[id]
      next()
    } else {
      const err = new Error('User Not Found')
      err.status = 400
      next(err)
    }
  })

  // Handle routes not found.
  router.use(function(req, res, next) {
    if (!req.route) {
      const err = new Error('Route Not Found')
      err.status = 404
      return next(err)
    }
    next()
  })

  return router
}
