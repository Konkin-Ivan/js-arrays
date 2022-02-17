/*
 *  Массив содержит 2n чисел. Из суммы первых n его элементов вычесть сумму
 *  последних n элементов.
 */
// 1. Создаю массив [0..50]

const numMin = 0
const numMax = 50
const numArr = []
for (let i = numMin; i < numMax; i++) {
  numArr.push(i)
}
console.log(numArr)

//2. Формирую массив из 20 чисел, выбранных случайным образом из интервала [1..50].

const randomArr = numArr.sort(() => Math.random() - 0.5)
const filterResult = randomArr

// 3. Нахожу четные и не четные
const num1 = []
const num2 = []
for (let k = 0; k < filterResult.length; k++) {
  if ( filterResult[k] % 2 === 0 ) {
    num2.push(k)
  } else {
    num1.push(k)
  }
}

let numSum1 = ''
for ( let n = 0; n < num1.length; n++ ) {
  numSum1 = n + num1[n]
}

let numSum2 = ''
for ( let n = 0; n < num2.length; n++ ) {
  numSum2 = n + num2[n]
}

const result = numSum1 - numSum2

console.log( result )
