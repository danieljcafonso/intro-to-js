const numbers = [1, 2, 3]

const doubled = numbers.map(function (n) { return n * 2 })
const pairs = numbers.filter(function (n) { return (n % 2) === 0 })
const sum = numbers.reduce(function (total, n) { return total + n }, 0)

numbers.forEach(function (n) { console.log(n) })

console.log(doubled)
console.log(pairs)
console.log(sum)