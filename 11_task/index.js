/*
 * Задан массив положительных вещественных чисел. Вычислить значения функции у=0,5х при значениях аргумента, заданных в исходном массиве, и поместить их в другой массив. Вывести на экран дисплея оба массива в виде двух столбцов.
 */

// 1 Массив положительных вещественных чисел.
const minIndex = 0
const maxIndex = 10
const numberArray = []

for (i = minIndex; i < maxIndex + 1; i++) {
  numberArray.push(i)
}

// 2 Вычислить значения функции.
const totalArr = []
for (f of numberArray) {
  let a = f / 2
  totalArr.push(a)
}

console.log('Исходный массив:', numberArray)
console.log('Результат:', totalArr)
