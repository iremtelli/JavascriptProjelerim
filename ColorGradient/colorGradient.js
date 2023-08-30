const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const changeBtn = document.querySelector(".colorBtn")
const generateBtn = document.querySelector(".generateBtn")
const copyColor = document.getElementById("copycolor")
const hexcodes = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
]
changeBtn.addEventListener("click", function () {
  let firstHexColor = "#"
  let secondHexColor = "#"

  for (let i = 0; i < 6; i++) {
    let firstRandomNumber = getRndInteger()
    let secondRandomNumber = getRndInteger()
    firstHexColor += hexcodes[firstRandomNumber]
    secondHexColor += hexcodes[secondRandomNumber]
    console.log(firstRandomNumber)
  }

  document.body.style.background = `linear-gradient(to left top, ${firstHexColor}, ${secondHexColor})`
})

function getRndInteger() {
  return Math.floor(Math.random() * hexcodes.length)
}

// input1.addEventListener("change", function (event) {
//   let color1 = event.target.value
//   document.body.style.background = `linear-gradient(to left top, ${color1}, ${secondHexColor} `
// })
// input2.addEventListener("change", function (event) {
//   let color2 = event.target.value
//   document.body.style.background = `linear-gradient(to left top, ${color2}`
//   console.log(event.target.value)
// })

generateBtn.addEventListener("click", () => {
  let first = input1.value
  let second = input2.value
  document.body.style.background = `linear-gradient(to left top, ${first}, ${second})`
})
copyColor.addEventListener("click", () => {
  let first = input1.value
  let second = input2.value
  navigator.clipboard.writeText(
    `linear-gradient(to left top, ${first}, ${second})`
  )
})
