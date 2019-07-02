'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/umd/atti-components.min.js')
} else {
  module.exports = require('./dist/cjs/atti-components.js')
}
