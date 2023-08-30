const refreshBtn = document.getElementById("btn")
const container = document.getElementById("user-container")

let userList
const getUsers = async () => {
  userList = []
  container.innerHTML = ""
  const response = await fetch("https://randomuser.me/api/?results=10")
  userList = await response.json()
  userList = userList.results

  userList.map((user) => {
    createCard(user)
  })
}

getUsers()

const createCard = (user) => {
  const card = document.createElement("li")
  card.innerHTML = `
  
         <img
            src=${user.picture.medium}
            alt=""
          />
          <div>
            <p>${user.name.first}</p>
            <p>${user.email}</p>
          </div>`

  container.appendChild(card)
}
refreshBtn.addEventListener("click", () => {
  getUsers()
})
