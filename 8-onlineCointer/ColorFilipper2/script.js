const colorBtn = document.getElementById("btncolor")
const pmyColor = document.querySelector(".myColor")
const inputColor1 = document.getElementById("textColor1")
const inputColor2 = document.getElementById("textColor2")

colorBtn.addEventListener("click", () => {
  console.log(inputColor.value)
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)

  pmyColor.innerHTML = `rgb(${r},${g},${b})`
  document.body.style.backgroundColor = `rgb(${r},${g},${b}`
})

inputColor.addEventListener("change", () => {
  document.body.style.backgroundColor = inputColor.value
})
