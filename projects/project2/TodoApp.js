let todoInputEl = document.getElementById("todo")
let addBtnEl = document.getElementById("add-btn")
let listEl = document.getElementById("list")

function onDelete(listItemEl){
    listItemEl.remove()
}

function onAdd(){
    if (todoInputEl.value.trim() === "") return

    let listItemEl = document.createElement("li")
    listItemEl.classList.add("list-item")
    // listItemEl.textContent = todoInputEl.value

    let textEl = document.createElement("span")
    textEl.className = "todo-text"
    textEl.textContent = todoInputEl.value

    let deleteBtnEl = document.createElement("button")
    deleteBtnEl.className = "btn btn-danger btn-sm pr-2"
    deleteBtnEl.textContent = "Delete"

    deleteBtnEl.onclick = function () {
        onDelete(listItemEl)
    }

    listItemEl.appendChild(textEl)
    listItemEl.appendChild(deleteBtnEl)
    listEl.appendChild(listItemEl)

    todoInputEl.value = ""
}

addBtnEl.addEventListener("click", onAdd)
