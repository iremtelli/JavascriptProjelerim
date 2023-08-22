const btn = document.querySelector(".btnClick")
const info = document.querySelector(".info-text")

btn.addEventListener("click", () => {
  //info.style.display = "none"
  // console.log(info.style.display)
  if (info.style.display == "none") {
    info.style.display = "block"
  } else {
    info.style.display = "none"
  }
})
