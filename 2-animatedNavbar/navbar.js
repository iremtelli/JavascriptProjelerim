const toggleBtn = document.querySelector(".myNavToggle")
const dropdown = document.querySelector(".drop-down")

toggleBtn.addEventListener("click", () => {
  dropdown.classList.toggle("show")
})
