import {box1,box2} from './input'

// function totalSheet(input: number[][]) {
//   let total = 0
//   input.forEach((box) => {
//     total += 2 * box[0] * box[1] + 2 * box[1] * box[2] + 2 * box[2] * box[0]
//     total += Math.min(box[0] * box[1], box[1] * box[2], box[2] * box[0])
//   })
//   return total
// }
// console.log(totalSheet(box1))

function totalRibbon(input: number[][]) {
  let total = 0
  input.forEach((box) => {
    box.sort(function(a, b) {
      return a - b;
    });
    total += (box[0] + box[0] + box[1] + box[1])
    total += (box[0] * box[1] * box[2])
  })
  return total
}
console.log(totalRibbon(box2))
