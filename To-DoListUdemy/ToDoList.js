const form = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo")
const todoList = document.querySelector(".list-group")
const firstCardBody = document.querySelectorAll(".card-body")[0]
const secondCardBody = document.querySelector(".card-body")[1]
const filter = document.querySelector("#filter")
const clearButton = document.querySelector("#clear-todos")

// Tüm eventlistenerları seç
// todo alanımızın değerini al
// form tekrar sayfaya yönlenmesin diye e.preventdefaultu ekle
// tekrar arayüze yeni todoları ekleyecek function oluştur işlemleri fonksiyonlara bölmek büyük projelerde çok faydalı
// string değeri UI ekle
// listItemı tanımla ama bu li değerinden geleceği için createElement içinde tanımla
// ardından linkin içindeki a elementini oluştur
// linke href ve classname ver. linki innerhtml aktar ve link oluşturma işlemi bitsin
// list ıtem oluştur ve bunun içindeki todo1 i ekle textNote olarak
// oluşan list ıtemi ul nin yani todoliste ekle

eventListeners()

function eventListeners() {
  form.addEventListener("submit", addTodo)
  document.addEventListener("DOMContentLoaded", loadAllTodosToUI)
}
function loadAllTodosToUI()

function addTodo(e) {
  e.preventDefault()
  const newTodo = todoInput.value.trim()

  if (newTodo === "") {
    //   <div class="alert alert-danger" role="alert">
    //   This is a danger alert—check it out!
    // </div>
    showAlert("danger", "Lütfen bir mesaj giriniz")
  } else {
    addTodoToUI(newTodo)
    addTodoToStorage(newTodo)
    showAlert("success", "Todo başarıyla eklendi")
  }
}
function showAlert(type, message) {
  const alert = document.createElement("div")
  alert.className = `alert alert-${type}`
  alert.textContent = message
  firstCardBody.appendChild(alert)

  setTimeout(function () {
    alert.remove()
  }, 1000)
}
function getTodosFromStorage(){
  let todos
  if(localStorage.getItem("todos")===null){
    todos =[]
  }else{
    todos=JSON.parse(localStorage.getItem("todos"))

  }
  return todos
}
function addTodoToStorage(newTodo){
  let todos= getTodosFromStorage()
  todos.push(newTodo)
  localStorage.setItem("todos" JSON.stringify)
}

function addTodoToUI(newTodo) {
  // <!-- <li class="list-group-item d-flex justify-content-between">
  //                 TODO 1
  //                 <a href="#" class="delete-item">
  //                   <i class="fa fa-remove"></i>
  //                 </a>
  //               </li>  -->

  const listItem = document.createElement("li")
  const link = document.createElement("a")
  link.href = "#"
  link.className = "delete-item"
  link.innerHTML = "<i class=' fa fa-remove'> </i>"
  listItem.className =
    "<li class='list-group-item d-flex justify-content-between'>"

  listItem.appendChild(document.createTextNode(newTodo))

  // listItem.appendChild(document.createTextNode(newTodo))
  listItem.appendChild(link)

  todoList.appendChild(listItem)
  todoInput.value = ""
}
