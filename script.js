const tasks = [
  { title: "Task 1 en", url: "Task1/pages/index_en.html" },
  { title: "Task 1 ua", url: "Task1/pages/index_ua.html" },
  { title: "Task 4", url: "Task4/pages/index.html" },
  { title: "Task 5", url: "Task5/pages/index.html" },
  { title: "Task 7", url: "Task7/pages/index.html" },
  { title: "Task 8", url: "Task8/pages/index.html" },
  { title: "Task 9", url: "Task9/pages/index.html" },
  { title: "Task 11", url: "Task11/pages/index.html" },
  { title: "Task 12", url: "Task12/pages/index.html" },
  { title: "Task 13", url: "Task13/pages/index.html" },
  { title: "Task 14", url: "Task14/pages/index.html" },
  { title: "Task 15", url: "Task15/pages/index.html" },
  { title: "Task 16", url: "Task16/pages/index.html" },
  { title: "Task 17", url: "Task17/pages/index.html" },
  { title: "Task 18", url: "Task18/pages/index.html" },
  { title: "Task 19", url: "Task19/pages/index.html" },
  { title: "Task 20", url: "Task20/pages/index.html" },
  { title: "Task 24", url: "Task24/pages/index.html" },
];

const taskList = document.getElementById("task-list");

tasks.forEach((task) => {
  const listItem = document.createElement("li");
  listItem.className = "task-item";

  const link = document.createElement("a");
  link.className = "task-link";
  link.href = task.url;
  link.textContent = task.title;

  listItem.appendChild(link);
  taskList.appendChild(listItem);
});
