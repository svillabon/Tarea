// Array para almacenar las tareas
let todos = [];

// Función para renderizar las tareas en la lista
function render() {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = ""; // Limpiar la lista

    todos.forEach((todo, index) => {
        const todoItem = document.createElement("li");
        todoItem.className = "todo-item";
        if (todo.completed) {
            todoItem.classList.add("completed");
        }

        todoItem.innerHTML = `
            <span>${todo.title}</span>
            <div class="todo-buttons">
                <button onclick="toggleComplete(${index})">✔</button>
                <button onclick="removeTask(${index})">❌</button>
            </div>
        `;

        todoList.appendChild(todoItem);
    });
}

// Función para añadir una nueva tarea
function addTask() {
    const todoTitle = document.getElementById("todo-title").value;
    if (todoTitle === "") return; // Evitar tareas vacías

    todos.push({
        title: todoTitle,
        completed: false
    });

    document.getElementById("todo-title").value = ""; // Limpiar el campo de entrada
    render();
}

// Función para eliminar una tarea
function removeTask(index) {
    todos.splice(index, 1);
    render();
}

// Función para marcar/desmarcar una tarea como completada
function toggleComplete(index) {
    todos[index].completed = !todos[index].completed;
    render();
}

// Evento para añadir la tarea al hacer clic en el botón
document.getElementById("add-button").addEventListener("click", addTask);
