const btnColor = document.getElementById("colorChangeBtn")
const infoBox = document.querySelector(".myColorSpan")

btnColor.addEventListener("click", () => {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)

  infoBox.innerHTML = `rgb(${r}, ${g}, ${b})`

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})

// const generateRandomColorNumber = () => {
//   return Math.floor(Math.random() * 256)
// }
