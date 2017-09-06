var weirdLoop = []

function forLoop(array) {
  i = 0

  for (var i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loop{i === 0 ? \'\' : \'s\'}`)
  }
}

forLoop(weirdLoop)
console.log(weirdLoop)
