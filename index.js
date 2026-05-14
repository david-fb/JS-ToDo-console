const fs = require("fs");
const FILE = "./tasks.json";

function loadTasks() {
  return JSON.parse(fs.readFileSync(FILE, "utf-8"));
}

function saveTasks(tasks) {
  fs.writeFileSync(FILE, JSON.stringify(tasks, null, 2));
}

function listarTareas() {
  const tasks = loadTasks();
  if (tasks.length === 0) {
    console.log("No hay tareas.");
    return;
  }
  tasks.forEach((task, i) => {
    const estado = task.completada ? "[x]" : "[ ]";
    console.log(`${i + 1}. ${estado} ${task.nombre}`);
  });
}

listarTareas();
