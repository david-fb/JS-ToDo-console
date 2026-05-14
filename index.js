const fs = require("fs");
const FILE = "./tasks.json";

function loadTasks() {
  return JSON.parse(fs.readFileSync(FILE, "utf-8"));
}

function saveTasks(tasks) {
  fs.writeFileSync(FILE, JSON.stringify(tasks, null, 2));
}
