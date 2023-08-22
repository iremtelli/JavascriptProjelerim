const loginBtn = document.querySelector("#loginButton")
const mailInput = document.querySelector("#mailInput")
const passwordInput = document.querySelector("#passwordInput")
const dbMail = "merve"
const dbPassword = "1234"

loginBtn.addEventListener("click", () => {
 
  const userMail = mailInput.value
  const userPassword = passwordInput.value

  if ((userMail == dbMail) & (userPassword == dbPassword)) {
    alert("Başarılı Giriş!")
  } else {
    alert("E-mail ya da şifreniz hatalıdır.")
  }
})
