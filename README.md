# babel-plugin-transform-jsbd-to-bigdecimal

A scheme similar to JSBI, for transforming JSBD to native bigdecimal, Referring to the implementation of jsbi (https://github.com/GoogleChromeLabs/babel-plugin-transform-jsbi-to-bigint)

## how to use

## how it work

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
| Division with three arguments    | `c = BigDecimal.divide(a,b,roundOption)` | `c = JSBD.divide(a, b,roundOption)`|

### differences from bigint to bigdecimal

since bigdecimal has a roundOption, we can't just transform `JSBI.add(one,two)` to `one + two`,if there are three arguments we just transform `JSBD.add(one,two,option)` to `Decimal.add(one,two,option)`
