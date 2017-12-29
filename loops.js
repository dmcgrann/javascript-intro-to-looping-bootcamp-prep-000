function forLoop(array) {
  var array = []
  array.length = 25
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      console.log("I am 1 strange loop.")
    } if (false) {
      console.log("I am ${i} strange loops.")
    }
  }
}

function whileLoop(n) {
  let countdown = n
  while (countdown > 0) {
    console.log(--countdown)
  } return ('done')
}
