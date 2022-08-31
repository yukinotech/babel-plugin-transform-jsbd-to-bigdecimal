# babel-plugin-transform-jsbd-to-bigdecimal

A scheme similar to JSBI, for transforming JSBD to native bigdecimal, Referring to the implementation of jsbi (https://github.com/GoogleChromeLabs/babel-plugin-transform-jsbi-to-bigint)

## how to use

use as a babel plugin `@yukinotech/babel-plugin-transform-jsbd-to-bigdecimal`

```js
const result = require('@babel/core').transform(code, {
  plugins: ['@yukinotech/babel-plugin-transform-jsbd-to-bigdecimal'],
  comments: false,
})
```
## what it do

it will replace indetitor `JSBD` to native bigdecimal syntax

| Operation                        | native BigDecimals | JSBD                                     |
| ---------------------------------| -------------------| -----------------------------------------|
| Addition                         | `c = a + b`        | `c = JSBD.add(a, b)`                     |
| Subtraction                      | `c = a - b`        | `c = JSBD.subtract(a, b)`                |
| Multiplication                   | `c = a * b`        | `c = JSBD.multiply(a, b)`                |
| Division with two arguments      | `c = a / b`        | `c = JSBD.divide(a, b)`                  |
| Remainder                        | `c = a % b`        | `c = JSBD.remainder(a, b)`               |
| Exponentiation                   | `c = a ** b`       | `c = JSBD.pow(a, b)`                     |
| Comparison to other BigInts      | `a === b`          | `JSBD.equal(a, b)`                       |
|                                  | `a !== b`          | `JSBD.notEqual(a, b)`                    |
|                                  | `a < b`            | `JSBD.lessThan(a, b)`                    |
|                                  | `a <= b`           | `JSBD.lessThanOrEqual(a, b)`             |
|                                  | `a > b`            | `JSBD.greaterThan(a, b)`                 |
|                                  | `a >= b`           | `JSBD.greaterThanOrEqual(a, b)`          |
|                                  | `c = BigDecimal.round(a,option)` | `c = JSBD.round(a, option)` |
| Division with three arguments    | `c = BigDecimal.divide(a,b,roundOption)` | `c = JSBD.divide(a, b,roundOption)`|

### differences from bigint to bigdecimal

since bigdecimal has a roundOption, we can't just transform `JSBI.add(one,two)` to `one + two`,if there are three arguments we just transform `JSBD.add(one,two,option)` to `Decimal.add(one,two,option)`

### test examples

#### input

```js
import JSBD from 'jsbd'

// alias

const a = JSBD.BigDecimal
a(1)

// constructor

const one = JSBD.BigDecimal(1)
const plus_num_one = JSBD.BigDecimal(+1)
const minus_num_one = JSBD.BigDecimal(-1)
const num_13p3 = JSBD.BigDecimal(13.3)
const plus_num_13p3 = JSBD.BigDecimal(+13.3)
const minus_num_13p3 = JSBD.BigDecimal(-13.3)
const str_12p4 = JSBD.BigDecimal('12.4')
const plus_str_12p4 = JSBD.BigDecimal('+12.4')
const minus_str_12p4 = JSBD.BigDecimal('-12.4')
const str_12 = JSBD.BigDecimal('12')
const plus_str_12 = JSBD.BigDecimal('+12')
const minus_str_12 = JSBD.BigDecimal('-12')
const bigint = JSBD.BigDecimal(1n)
const minus_bigint = JSBD.BigDecimal(-1n)
const plus_bigint = JSBD.BigDecimal(+1n)

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

const isBig1 = JSBD.equal(JSBD.BigDecimal('12.4'), JSBD.BigDecimal(1n))
const isBig2 = JSBD.notEqual(JSBD.BigDecimal('12.4'), JSBD.BigDecimal(1n))
const isBig3 = JSBD.lessThan(JSBD.BigDecimal('12.4'), JSBD.BigDecimal(1n))
const isBig4 = JSBD.greaterThanOrEqual(JSBD.BigDecimal('12.4'), JSBD.BigDecimal(1n))
const isBig5 = JSBD.greaterThan(JSBD.BigDecimal('12.4'), JSBD.BigDecimal(1n))
const isBig6 = JSBD.lessThanOrEqual(JSBD.BigDecimal('12.4'), JSBD.BigDecimal(1n))

// round

const two2 = JSBD.round(JSBD.BigDecimal(0x32),options)
```

#### output

```js
1m;
const one = 1m;
const plus_num_one = +1m;
const minus_num_one = -1m;
const num_13p3 = 13.3m;
const plus_num_13p3 = +13.3m;
const minus_num_13p3 = -13.3m;
const str_12p4 = 12.4m;
const plus_str_12p4 = +12.4m;
const minus_str_12p4 = -12.4m;
const str_12 = 12m;
const plus_str_12 = +12m;
const minus_str_12 = -12m;
const bigint = 1m;
const minus_bigint = -1m;
const plus_bigint = +1m;
const two = BigDecimal.add(one, one2, {
  maximumFractionDigits: 1
});
const two2args = one + one2;
const subtract = one - one2;
const multiply = one * one2;
const pow = one ** 4;
const divide = one / one;
const divideThree = BigDecimal.divide(one, one, {});
const remainder = one % one;
const isBig1 = 12.4m === 1m;
const isBig2 = 12.4m !== 1m;
const isBig3 = 12.4m < 1m;
const isBig4 = 12.4m >= 1m;
const isBig5 = 12.4m > 1m;
const isBig6 = 12.4m <= 1m;
const two2 = BigDecimal.round(50m, options);
```