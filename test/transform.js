const fs = require('fs')

const code = fs.readFileSync('./test/input.js', { encoding: 'utf-8' })

const result = require('@babel/core').transform(code, {
  plugins: ['./dist/index.js'],
  comments: false,
})

const expectOriginalCode = fs.readFileSync('./test/output.js', {
  encoding: 'utf-8',
})

const expect = require('@babel/core').transform(expectOriginalCode, {
  plugins: ['@babel/plugin-syntax-decimal'],
  comments: false,
})

console.log(result.code)

if (result.code !== expect.code) {
  throw new Error('test error')
}
