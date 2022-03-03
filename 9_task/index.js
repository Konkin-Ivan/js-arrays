/*
 * В заданном массиве найти максимальный элемент. Элементы, стоящие после максимального элемента заменить нулями.
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
const filterResult = arrRandom

// 3. Нахожу максимальный элемент
let maxArrNum = filterResult[0]
let maxArrIndex = filterResult[0]
for (i of filterResult) {
  if (filterResult[i] > maxArrNum) {
    maxArrNum = filterResult[i]
  }
}

// 4. Формирую финальный массив totalArr
const totalArr = []
for (i = 0; i < filterResult.length; i++) {
  if (i < maxArrIndex + 1) {
    totalArr.push(filterResult[i])
  } else {
    totalArr.push(0)
  }
}

console.log('Исходный массив:', filterResult)
console.log('Максимальное значение:', maxArrNum)
console.log('Индекс максимального числа:', maxArrIndex)
console.log('Результат:', totalArr)
