require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const { register } = require('esbuild-register/dist/node')

register({
  target: 'node16'
})

module.exports = require('./gatsby-config.ts')
