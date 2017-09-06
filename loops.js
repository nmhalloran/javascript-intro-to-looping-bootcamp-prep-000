var weirdLoop = []

function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    array[i] = "I am ${i} stramge loops"
    console.log(array[i])
  }
}

forLoop(weirdLoop)
