const form = document.querySelector(".form");
const addUserButton = document.querySelector(".button");
const message = document.querySelector(".message");
const empContainer = document.querySelector(".employees");
const list = document.querySelector("#employees-list");

var employees = [];
var count = 0;

function addEmployee(e) {
  e.preventDefault();

  var name = document.getElementById("name").value;
  var prof = document.getElementById("prof").value;
  var age = document.getElementById("age").value;

  if (name == "" || prof == "" || age == "") {
    message.style.color = "#FF4343";
    message.innerText =
      "Error : Please Make sure All the fields are filled before adding in an employee !";
    return;
  }

  var removeText = document.querySelector(".employees > div");

  removeText.style.display = "none";

  count++;

  employees.push({
    id: count,
    name: name,
    profession: prof,
    age: age,
  });

  message.style.color = "#43FF78";
  message.innerText = "Success : Employee Added!";

  viewEmployees();

  form.reset();
}

addUserButton.addEventListener("click", addEmployee);

function viewEmployees() {
  //removing previous Employees before printing
  const list = document.querySelector("#employees-list");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }

  if (employees.length == 0) {
    var removeText = document.querySelector(".employees > div");
    removeText.style.display = "block";
    return;
  }

  employees.forEach((emp) => {
    var employee = document.createElement("li");

    employee.innerHTML = `<div class="emp"><div class="emp-data"><div>${emp.id}.</div> <div>Name: ${emp.name}</div><div>Profession: ${emp.profession}</div><div>Age: ${emp.age}</div> </div><button onclick='del(${emp.id})' class="delete">Delete User</button></div>`;

    list.appendChild(employee);
  });
}

function del(id) {
  let pos;
  employees.forEach((ele, index) => {
    if (ele.id == id) {
      pos = index;
    }
  });

  employees.splice(pos, 1);

  message.style.color = "#FF4343";
  message.innerText = "Employee Deleted!";

  viewEmployees();
}