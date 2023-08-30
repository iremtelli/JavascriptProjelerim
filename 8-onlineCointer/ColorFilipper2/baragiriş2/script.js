const randomNumber = document.getElementById("text")
const btn = document.querySelector(".btnText")

btn.addEventListener("click", () => {
  if (randomNumber.value < 18) {
    alert("Bara Giremez")
  } else {
    alert("Bara Girebilir")
  }
})
