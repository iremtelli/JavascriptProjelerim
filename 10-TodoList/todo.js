const workContainer = document.querySelector(".work-container");
const familyContainer = document.querySelector(".family-container");
const personalContainer = document.querySelector(".personel-container");
const todoContainer = document.querySelector(".todo-container");
const input = document.querySelector("input");
const select = document.querySelector("select");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  addTodo();
});

// Delete
todoContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

const addTodo = () => {
  const text = input.value;
  const category = select.value;

  const todo = document.createElement("div");
  todo.classList.add("single-todo");
  todo.innerHTML = `
   
        <span>${text}</span>
        <i class="fa-solid fa-trash delete"></i>
   
  `;

  if (category === "work") {
    workContainer.appendChild(todo);
  } else if (category === "family") {
    familyContainer.appendChild(todo);
  } else if (category === "personel") {
    personalContainer.appendChild(todo);
  } else {
    alert("Yanlış seçim");
  }
};
