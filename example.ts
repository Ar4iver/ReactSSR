const add = (leftSide: number) => (rightSide: number) => leftSide + rightSide

const addOne = add(1)
const addSix = add(6)

console.log(addSix(5))