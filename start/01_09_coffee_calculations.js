// Write your code here

const array = [2, 3, 1, 5]

let coffeeReduce = array.reduce(
    (accumulator, currentValue) => 
        accumulator + currentValue
)

console.log(coffeeReduce * 1.25)