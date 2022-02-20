/*
 * В массиве из 2n чисел найти сумму квадратов элементов с четными индексами и сумму кубов элементов с нечетными индексами.
 *
 * Сначала нужно ввести рандомно значения в массиве.
Четные индексы возводим в квадрат и складываем между собой, а нечетные в куб, и также складываем.
*/

// 1. Создаю масиив [0..10]
const minRange = 0
const maxRange = 10
const arrRangeNumber = []
for (i = minRange; i < maxRange +1; i++) {
  arrRangeNumber.push(i)
}

//2. Формирую массив из 10 чисел, выбранных случайным образом из интервала [0, 10].
const arrRandom = arrRangeNumber.sort(() => Math.random() - 0.5)
const setRange = 10
const filterResult = arrRandom.slice(0, setRange)

// 3. Разделяю четные/нечетные
const oddArrNumber = []
const evenArrNumber = []
for (n of filterResult) {
  if (n % 2 === 0) {
    const fff = Math.pow(n, 2)
    evenArrNumber.push(fff)
  } else {
    const fff = Math.pow(n, 3)
    oddArrNumber.push(fff)
  }
}

let totalEvenNumber = 0
for (n in evenArrNumber) {
  totalEvenNumber += evenArrNumber[n]
}

let totalOddNumber = 0
for (n in oddArrNumber) {
  totalOddNumber += oddArrNumber[n]
}

console.log('Even number:', totalEvenNumber)
console.log('Odd number:', totalOddNumber)
