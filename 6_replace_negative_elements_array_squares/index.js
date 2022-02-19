/*
 * Заменить отрицательные элементы в числовом массиве из n чисел (n>10) их квадратами, оставив остальные без изменения.
 */

// 1. Создаю массив [-50..10]

const minRange = -50
const maxRange = 10
numArr = []
for (i = minRange; i < maxRange +1; i++) {
  numArr.push(i)
}

console.log(numArr)

// 2. Заменяю отрицательные

const nArr =[]
for (n = numArr[0]; n < numArr.length; n++) {
  if (n < 0) {
    const fff = Math.pow(n, 2)
    nArr.push(fff)
  } else {
    nArr.push(n)
  }
}

console.log(nArr)
