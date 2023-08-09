document.addEventListener("DOMContentLoaded", function () {
    const taskList = document.getElementById("task-list");
    const addTaskButton = document.getElementById("add-task");
    const newTaskInput = document.getElementById("new-task");

    addTaskButton.addEventListener("click", function () {
        const taskText = newTaskInput.value;
        if (taskText.trim() !== "") {
            addTask(taskText);
            newTaskInput.value = "";
        }
    });

    taskList.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete")) {
            const taskItem = event.target.parentElement;
            taskList.removeChild(taskItem);
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete">Delete</button>
        `;
        taskList.appendChild(taskItem);
    }
});
