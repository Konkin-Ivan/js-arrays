/*
 * В заданном массиве найти среднее арифметическое положительных чисел, среднее арифметическое отрицательных чисел и число нулей.
 */

// 1. Создаю массив [-10..10]

const minRange = -10
const maxRange = 10
const arrRange = []
for (i = minRange; i < maxRange +1; i++) {
  arrRange.push(i)
}

//2. Разделяю масиив по значениям (отрицательные, положительные, ноль).

const negativeArr = []
const zeroArr = []
const positiveArr = []
for (n of arrRange) {
  if (n < 0) {
    negativeArr.push(n)
  } else if (n === 0) {
    zeroArr.push(n)
  } else if (n > 0) {
    positiveArr.push(n)
  }
}

//3. Нахожу среднее арифмитическое.

const zeroResult = zeroArr.length

let totalNegative = 0
for (n in negativeArr) {
  totalNegative += negativeArr[n]
}
const lengthNegativeArr = negativeArr.length
const negativeResult = totalNegative / lengthNegativeArr

let totalPositive = 0
for (n in positiveArr) {
  totalPositive += positiveArr[n]
}
const lengthPositiveArr = positiveArr.length
const positiveResult = totalPositive / lengthPositiveArr


console.log(negativeArr)
console.log(zeroArr)
console.log(positiveArr)

console.log('negative:', negativeResult)
console.log('zero:', zeroResult)
console.log('positive:', positiveResult)
