let userList;
const userContainer = document.querySelector(".user-container");
const btn = document.querySelector(".btn");
const getUsers = async () => {
  const response = await fetch("https://randomuser.me/api/?results=10");
  userList = await response.json();
  userList = userList.results;

  userList.map((user) => {
    createList(user);
  });
};

getUsers();

const createList = (user) => {
  const listElement = document.createElement("li");
  listElement.innerHTML = `
    <div>
    <img
      src=${user.picture.medium}
      alt=""
    />
  </div>
  <div class="info-container">
    <p>${user.name.first} ${user.name.last}</p>
    <p>${user.email}</p>
    <p>${user.gender}</p>
  </div>
    
    `;

  userContainer.appendChild(listElement);
};

btn.addEventListener("click", () => {
  userContainer.innerHTML = "";
  getUsers();
});
