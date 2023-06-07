const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Write Your Tasks Here!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveTask(inputBox.value);
  }
  inputBox.value = "";
}

listContainer.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveTask(task) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "save_task.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      console.log("Task saved successfully");
    }
  };
  xhr.send("task=" + encodeURIComponent(task));
}

function loadTasks() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "load_tasks.php", true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      var tasks = JSON.parse(xhr.responseText);
      var listContainer = document.getElementById("list-container");
      listContainer.innerHTML = "";
      tasks.forEach(function(task) {
        var li = document.createElement("li");
        li.innerHTML = task;
        listContainer.appendChild(li);
        var span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
      });
    }
  };
  xhr.send();
}

loadTasks();
