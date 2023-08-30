const textNumber = document.getElementById("text")
const tryButton = document.querySelector(".btn-text")
const generateRandom = () => {
  return Math.floor(Math.random() * 10) + 1
}

tryButton.addEventListener("click", () => {
  const randomNumber = generateRandom()
  const inputValue = textNumber.value
  if (randomNumber == inputValue) {
    console.log("başarılı")
  } else {
    console.log("tekrar dene")
  }
})
