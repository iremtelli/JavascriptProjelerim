const btnCalculate = document.querySelector(".btn-calculate")
const btnDelete = document.querySelector(".btn-delete")
const heightInput = document.querySelector("#height")
const weighttInput = document.querySelector("#weight")
const textInput = document.getElementById("text-input")

let height, weight, BMI, result
btnCalculate.addEventListener("click", () => {
  height = heightInput.value
  weight = weighttInput.value

  height = height / 100

  BMI = weight / (height * height)
  textInput.innerHTML = BMI

  if (BMI < 0.5) {
    textInput.innerText = "Düşük Kilo Aralığındasınız"
  } else if (BMI > 0.99 && BMI < 24.9) {
    textInput.innerText = "İdeal Kilodasınız"
  } else {
    textInput.innerText = "Fazla Kilo Aralığındasınız"
  }
})

btnDelete.addEventListener("click", () => {
  heightInput.value = null
  weighttInput.value = null
})
