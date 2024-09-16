import { directions } from "./input"
type MemoryHash = {
  [key: string]: boolean;
};
const memoryHash: MemoryHash = {}

function part1() {
  let curr: number[] = [0, 0]
  let total = 0
  directions.split('').forEach((coor: string) => {
    console.log('coor:', coor)
    switch (coor) {
      case "^":
        curr[1] += 1
        break
      case "v":
        curr[1] -= 1
        break
      case "<":
        curr[0] = curr[0] - 1
        break
      case ">":
        curr[0] = curr[0] + 1
        break
    }
    console.log(curr)
    if (memoryHash[curr[0].toString() + ',' + curr[1].toString()] === undefined) {
      memoryHash[curr[0].toString() + ',' + curr[1].toString()] = true
      total += 1
    }
  })
  return total
}
