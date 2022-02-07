/**
 * 4. Задан одномерный массив А[1..20]. Найти минимальный элемент среди
 * элементов массива с n-го по k-й (n и k вводятся с клавиатуры)
 */

// 1. Задаю одномерный массив А[1..20].
const minNum = 1
const maxNum = 20
const arrA = []
for (let i = minNum; i < maxNum + 1; i++) {
    arrA.push(i)
}

//2. Формирую массив из 20 чисел, выбранных случайным образом из интервала [1..20].
const arrRandom = arrA.sort(() => Math.random() - 0.5)
const filterResult = arrRandom
console.log(filterResult)


// 3. Задаю массив с n по k
function keyboardInput(n, k) {
    const arrResult = filterResult.slice(n - 1,k+n -1)
    let resValue = Math.min.apply(null, arrResult)   
   
    return resValue
}

console.log(keyboardInput(2, 10))