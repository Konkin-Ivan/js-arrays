/*
 * В заданном массиве поменять местами наибольший и наименьший элементы.
 */

const filterResult = [21, 12, 20, 15, 13, 22, 14, 17, 18, 16, 19]//arrRandom

console.log('Исходный массив:', filterResult)

// Нахожу максимальный и минимальный элемент
let maxArrNum = filterResult[0]
let maxArrIndex = filterResult[0]
let minArrNum = filterResult[0]
let minArrIndex = filterResult[0]

for (i = 0; i < filterResult.length; i++) {
  if (filterResult[i] > maxArrNum) {
    maxArrNum = filterResult[i], maxArrIndex = i
  }
  if (filterResult[i] < minArrNum) {
    minArrNum = filterResult[i], minArrIndex = i
  }
}

// Меняю местами минимальный и максимальный элемент
let totalArr = filterResult

for (i = 0; i < filterResult.length; i++) {
  if (i === minArrIndex) {
    totalArr[minArrIndex] = maxArrNum
  }
  if (i === maxArrIndex) {
    totalArr[i] = minArrNum
  }
}

console.log('Максимальное значение:', maxArrNum)
console.log('Минимальное значение:', minArrNum)
console.log('Индекс максимального числа:', maxArrIndex)
console.log('Индекс минимального числа:', minArrIndex)
console.log('Результат:', totalArr)
