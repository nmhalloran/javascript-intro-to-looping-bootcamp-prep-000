var weirdLoop = []

function forLoop(array) {
  i = 0

  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am " + i + " strange loop")
    }
    else {
      array.push("I am " + i + " strange loops")
    }
  }
}

forLoop(weirdLoop)
console.log(weirdLoop)
