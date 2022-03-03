//1. Делаю цикл, который генерирует исходный массив в диапазоне [-10, 30].
const minNumber = -10
const maxNumber = 30
let arr = []
for (let i = minNumber; i < maxNumber + 1; i++) {
    
    arr.push(i)
    
}

//2. Формирую массив 15 целых чисел из диапазона [-10, 30].
let randomArr = arr.sort(() => Math.random() - 0.5)
const setRange = 15
let filterResult = randomArr.slice(0, setRange)


//3. Нахожу среднее арифмитическое.
let total = 0
const li = filterResult.length
for (let n in filterResult) {
    total += filterResult[n]
}
const averageNumber = total / li

console.log('Cреднее арифметическое положительных элементов:', averageNumber)