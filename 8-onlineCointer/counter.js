const numInfo = document.getElementById("number")
const increaseBtn = document.querySelector(".btnIncrease")
const decreaseBtn = document.querySelector(".btnDecrease")
const resetBtn = document.querySelector(".btnReset")

let count = 0

increaseBtn.addEventListener("click", () => {
  count++
  changeColor(count)
})

decreaseBtn.addEventListener("click", () => {
  count--
  changeColor(count)
})

resetBtn.addEventListener("click", () => {
  count = 0
  changeColor(count)
})

const changeColor = (count) => {
  if (count == 0) {
    numInfo.style.color = "black"
  } else if (count > 0) {
    numInfo.style.color = "green"
  } else {
    numInfo.style.color = "red"
  }
  numInfo.innerText = count
}
