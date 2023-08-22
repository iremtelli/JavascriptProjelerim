const textNumber = document.getElementById("text")
const button = document.querySelector(".btnText")
const generateRandom = () => {
  return Math.floor(Math.random() * 10) + 1
}

button.addEventListener("click", () => {
  const randomNum = generateRandom()
  const inputValue = textNumber.value
  if (inputValue == randomNum) {
    alert("You guessed the number!")
  } else {
    alert(`Wrong! The number was ${randomNum}`)
  }
})
