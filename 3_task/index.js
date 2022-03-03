/**
 * Сформировать массив из 15 целых чисел, выбранных случайным образом из
 * интервала [10, 90]. Поменять местами первый и минимальный элементы.
*/

// 1. Делаю интервал чисел [10, 90].
const minRange = 10
const maxRange = 90
const arrRange = []

for (let i = minRange; i < maxRange; i++) {
  arrRange.push(i)
}
//console.log(arrRange)

// 2. Формирую массив из 15 чисел, выбранных случайным образом из интервала [10, 90].
const arrRandom = arrRange.sort(() => Math.random() - 0.5)
const setRange = 15
const filterResult = arrRandom.slice(0, setRange)
console.log(filterResult)

//3. Меняю местами первый и минимальный элементы.
const num = filterResult
const minIndex = num.indexOf( Math.min.apply(null, num))
const firstIndex = num[0]

const arrResult = filterResult
for (let n = 0; n < num.length; n++) {
  if (n === minIndex)
  arrResult[0] = arrResult[n], arrResult[n] = firstIndex
}

console.log(arrResult)