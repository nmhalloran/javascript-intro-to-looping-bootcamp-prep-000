var weirdLoop = []

function forLoop(array) {
  i = 0

  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      array.push(`I am 1 strange loop`)
    }
    else {
      array.push(`I am ${i} strange loops`)
    }
  }
}

function whileLoop(number) {
  let countdown = 10;

  while (countdown > 0) {
    console.log(countdown--)
  }
  return 'done'
}
