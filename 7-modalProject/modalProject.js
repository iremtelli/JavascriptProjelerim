const openBtn = document.querySelector(".Open-btn")
const closeBtn = document.querySelector(".close-btn")
const modal = document.querySelector(".modal-outter")

openBtn.addEventListener("click", () => {
  modal.classList.add("show")
})

closeBtn.addEventListener("click", () => {
  modal.classList.remove("show")
})
