/* eslint-disable @typescript-eslint/no-var-requires */
require('@babel/register')({
  // ignore: ['*/node_modules'],
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  cache: false,
})
require('./src/main')
