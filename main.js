
const tasks = [];

function addTask(title, description, status) {
    tasks.push({ title, description, status });
}

function displayTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");

        
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", function () {
            editTask(index);
        });

      
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function () {
            deleteTask(index);
        });

        listItem.textContent = task.title + " - " + task.description + " (" + task.status + ")";
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);
    });
}


function editTask(index) {
    const updatedTitle = prompt("Enter updated title:");
    const updatedDescription = prompt("Enter updated description:");
    const updatedStatus = prompt("Enter updated status (To Do, In Progress, Completed):");

    if (updatedTitle && updatedDescription && updatedStatus) {
        tasks[index].title = updatedTitle;
        tasks[index].description = updatedDescription;
        tasks[index].status = updatedStatus;
        displayTasks();
    } else {
        alert("Please fill in all fields.");
    }
}


function deleteTask(index) {
    const confirmDelete = confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
        tasks.splice(index, 1);
        displayTasks();
    }
}

const taskForm = document.getElementById("task-form");
taskForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("task-title").value;
    const description = document.getElementById("task-description").value;
    const status = document.getElementById("task-status").value;

    if (title && description && status) {
        addTask(title, description, status);
        displayTasks();

        // Clear the form fields
        document.getElementById("task-title").value = "";
        document.getElementById("task-description").value = "";
        document.getElementById("task-status").value = "To Do";
    } else {
        alert("Please fill in all fields.");
    }
});


displayTasks();
