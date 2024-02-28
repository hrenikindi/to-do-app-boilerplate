
var tasks = [];

var input = document.getElementById("input");

var todolist = document.getElementById("todolist");

document.getElementById("button").onclick = click;


function click() {

  tasks.push(input.value);
  console.log(tasks);
  input.value = "";

  display();
}

function display() {
  todolist.innerHTML = " ";

  tasks.forEach(function (n, i) {
    todolist.innerHTML +=
      "<li>" +
      n +
      "<a onclick='edit(" +
      i +
      ")'>Edit</a>" +
      "<a onclick='deleteItem(" +
      i +
      ")'>&times | </a></li>";
  });
}


function deleteItem(i) {
  tasks.splice(i, 1);
  display();
}

function edit(i) {

  var newValue = prompt("Add new task!");
  tasks.splice(i, 1, newValue);
  display();
}