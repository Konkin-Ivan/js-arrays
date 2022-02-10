const arrCustom = [
    15,  9, 18,  1, 10,  8, 13,
     2, 14, 16, 17,  6, 20,  5,
    12,  3, 11, 19,  4,  7
  ]
console.log(arrCustom)
function stringSlice( n, k ) {
  let arrResult = []
  
  for(let i = n; i < arrCustom.length; i++) {
    if ( i < k)
    arrResult.push(arrCustom[i])
  }
    return arrResult
}

console.log(stringSlice(0, 6));