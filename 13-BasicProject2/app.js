const button = document.getElementById("generate-color")
const colors = ["red", "blue", "purple", "orange", "pink", "yellow", "green"]

button.addEventListener("click", () => {
  // console.log("tıklandı")
  // document.body.style.backgroundColor = colors[6]
  const randomNumber = Math.floor(Math.random() * colors.length)
  document.body.style.backgroundColor = colors[randomNumber]
})
