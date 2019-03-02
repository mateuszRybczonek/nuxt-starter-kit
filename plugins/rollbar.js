import Vue from 'vue'
import Rollbar from 'vue-rollbar'

import { ROLLBAR_ACCESS_TOKEN } from '@/constants/settings'

const ROLLBAR_ENV = process.env.ROLLBAR_ENV

Vue.use(Rollbar, {
  accessToken: ROLLBAR_ACCESS_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
  enabled: true,
  source_map_enabled: true,
  environment: ROLLBAR_ENV,
  payload: {
    client: {
      javascript: {
        code_version: '1.0'
      }
    }
  }
})
