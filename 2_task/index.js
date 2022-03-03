//1. Делаю интервал чисел [10, 50].
const minRange = 10
const maxRange = 50
const arrRange = []
for (let i = minRange; i < maxRange + 1; i++) {
    arrRange.push(i)
}

//2. Формирую массив из 10 чисел, выбранных случайным образом из интервала [10, 50].
const arrRandom = arrRange.sort(() => Math.random() - 0.5)
const setRange = 10
const filterResult = arrRandom.slice(0, setRange)


//3. Нахожу максимальный среди элементов с четными индексами.
const oddEven =[]
for (let n of filterResult) {
   if (n % 2 === 0) {
       oddEven.push(n)
   }
}

const max = oddEven
const maxOdd = Math.max.apply(null, max)

console.log('Максимальный среди элементов с четными индексами:', maxOdd)