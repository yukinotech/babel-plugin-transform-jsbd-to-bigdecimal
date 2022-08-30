import JSBD from 'jsbd'

// alias

const a = JSBD.BigDecimal
a(1)

// constructor

const one = JSBD.BigDecimal(1)
const one1 = JSBD.BigDecimal(1.001)
const minusOne1 = JSBD.BigDecimal(-1.001)
const one2 = JSBD.BigDecimal('0x32')
const one3 = JSBD.BigDecimal(1n)

// add,subtract,multiply,pow,divide,remainder

const two = JSBD.add(one, one2, { maximumFractionDigits: 1 })
const two2args = JSBD.add(one, one2)
const subtract = JSBD.subtract(one, one2)
const multiply = JSBD.multiply(one, one2)
const pow = JSBD.pow(one, 4)
const divide = JSBD.divide(one, one)
const divideThree = JSBD.divide(one, one,{})
const remainder = JSBD.remainder(one, one)

// equal,notEqual,lessThan,greaterThanOrEqual,greaterThan,lessThanOrEqual

const isBig1 = JSBD.equal(JSBD.BigDecimal('0x32'), JSBD.BigDecimal(1n))
const isBig2 = JSBD.notEqual(JSBD.BigDecimal('0x32'), JSBD.BigDecimal(1n))
const isBig3 = JSBD.lessThan(JSBD.BigDecimal('0x32'), JSBD.BigDecimal(1n))
const isBig4 = JSBD.greaterThanOrEqual(JSBD.BigDecimal('0x32'), JSBD.BigDecimal(1n))
const isBig5 = JSBD.greaterThan(JSBD.BigDecimal('0x32'), JSBD.BigDecimal(1n))
const isBig6 = JSBD.lessThanOrEqual(JSBD.BigDecimal('0x32'), JSBD.BigDecimal(1n))

// round

const two2 = JSBD.round(JSBD.BigDecimal('0x32'),options)

// instanceof, JSBD has not implete yet

one instanceof JSBD
