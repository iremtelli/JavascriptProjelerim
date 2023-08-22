//butona tıklandığında değer 18 den küçükse bara giremez

const textInput = document.getElementById("text")
const btn = document.querySelector(".btnText")

btn.addEventListener("click", () => {
  if (textInput.value < 18) {
    alert("Bara giremez")
  } else {
    alert("Bara Girebilir")
  }
})
const generateRandomColorNumber = () => {
  return Math.floor(Math.random() * 256)
}
