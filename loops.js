var weirdLoop = []

function forLoop(array) {
  i = 0

  for (var i = 0; i < 25; i++) {
      array.push("I am ${i} strange loops") [i]
      console.log(array[i])
    }
  return array
}

forLoop(weirdLoop)
