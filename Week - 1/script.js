let students = [];
for (let i = 1; i <= 50; i++) {
students.push({
id: i,
name: "Student " + i,
present: false
});
}
function render(data) {
const table = document.getElementById("tableBody");
table.innerHTML = "";
data.forEach((s, index) => {
const row = document.createElement("tr");
row.innerHTML = `
<td>${s.id}</td>
<td>${s.name}</td>
<td>${s.present ? "Present" : "Absent"}</td>
<td>
<button onclick="deleteStudent(${index})">Delete</button>
</td>
`;
table.appendChild(row);
});
}
window.onload = () => render(students);
function addStudent() {
const id = document.getElementById("id").value;
const name = document.getElementById("name").value;
const present = document.getElementById("status").value === "true";
students.push({ id, name, present });
render(students);
}
function updateStudent() {
const id = document.getElementById("id").value;
const name = document.getElementById("name").value;
const present = document.getElementById("status").value === "true";
const index = students.findIndex(s => s.id == id);
if (index !== -1) {
students[index] = { id, name, present };
render(students);
setTimeout(() => {
document.getElementById("tableBody").rows[index].classList.add("updated");
}, 50);
} else {
alert("Student not found!");
}
}
function deleteStudent(index) {
students.splice(index, 1);
render(students);
}
function updateDOM() {
console.time("DOM Update");
const table = document.getElementById("tableBody");
students.forEach((s, index) => {
s.present = Math.random() > 0.5;
const row = table.rows[index];
if (row) {
row.cells[2].textContent =
s.present ? "Present" : "Absent";
}
});
console.timeEnd("DOM Update");
}
let oldVDOM = [];
function createVDOM(data) {
return data.map(s => ({
id: s.id,
status: s.present ? "Present" : "Absent"
}));
}
function diff(oldVDOM, newVDOM) {
let changes = [];
newVDOM.forEach((newNode, index) => {
const oldNode = oldVDOM[index];
if (!oldNode || oldNode.status !== newNode.status) {
changes.push({ index, staus: newNode.status });
}
});
return changes;
}
function patchDOM(changes) {
const table = document.getElementById("tableBody");
changes.forEach(change => {
const row = table.rows[change.index];
if (row) {
row.cells[2].textContent = change.status;

row.classList.add("updated");
}
});
}
function updateVDOM() {
console.time("VDOM Update");
students.forEach(s => {
s.present = Math.random()  > 0.5;
});
const newVDOM = createVDOM(students);
if (oldVDOM.length === 0) {
oldVDOM = createVDOM(students);
}
const changes = diff(oldVDOM, newVDOM);
patchDOM(changes);
oldVDOM = newVDOM;
console.timeEnd("VDOM Update");
}
