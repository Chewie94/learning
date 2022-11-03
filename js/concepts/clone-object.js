const data = { name: "Alice", age: 26 }
// 1 shallow
const copy1 = { ...data }
// 2 shallow
const copy2 = Object.assign({}, data)
// 3 deep
const copy3 = JSON.parse(JSON.stringify(data))
// 4 deep
const copy4 = structuredClone(data)

// Shallow - “one-level-deep” copy
const data2 = { name: "Alice", age: 26, hobbies: ["Jogging", "Tennis", "Gym"] }
const dataCopy = { ...data2 }
data2.hobbies[0] = "Golf"
console.log(data2.hobbies)
console.log(dataCopy.hobbies)
// ["Golf", "Tennis", "Gym"]
// ["Golf", "Tennis", "Gym"]