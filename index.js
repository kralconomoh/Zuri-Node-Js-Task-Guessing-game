let upper = 2

while(true) {
  let guess = prompt(`Enter a number between 1 - ${upper}: (stage ${upper-1}) `);
  let random = Math.ceil(Math.random() * upper)
  if(guess == random) {
    upper++
    console.log('Correct Levelling Up!')
  } else {
    console.log('Wrong Guess, Sorry Game Over. you guessed', guess,'. The correct answer is', random)
    break
  }
}