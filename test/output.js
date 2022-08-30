1m;
const one = 1m;
const one1 = 1.001m;
const minusOne1 = BigDecimal(-1.001);
const one2 = BigDecimal('0x32');
const one3 = 1m;
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
const isBig1 = BigDecimal('0x32') === 1m;
const isBig2 = BigDecimal('0x32') !== 1m;
const isBig3 = BigDecimal('0x32') < 1m;
const isBig4 = BigDecimal('0x32') >= 1m;
const isBig5 = BigDecimal('0x32') > 1m;
const isBig6 = BigDecimal('0x32') <= 1m;
const two2 = BigDecimal.round(BigDecimal('0x32'), options);
typeof one === "bigdecimal";