weirdLoop = []

function forLoop(array) {
  i = 0

  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop")
    }
    else {
      array.push(`I am ${i} strange loops`)
    }
  }
  return array
}

function whileLoop(number) {

  while (number > 0) {
    console.log(number--)
  }
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.2
}

function doWhileLoop(array) {
  do {
    array.pop()
  } while (array.length > 0 && maybeTrue())
  console.log(array)
  return array
}

forLoop(weirdLoop)
console.log(weirdLoop)
doWhileLoop(weirdLoop)
