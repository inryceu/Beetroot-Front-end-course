document.addEventListener("DOMContentLoaded", () => {
  const textView = document.getElementById("text-view");
  const textEdit = document.getElementById("text-edit");
  let isEditing = false;

  window.addEventListener("keydown", (e) => {
    if (e.ctrlKey && (e.code === "KeyE" || e.key.toLowerCase() === "e")) {
      e.preventDefault();
      if (!isEditing) {
        isEditing = true;
        textEdit.value = textView.innerText;
        textView.style.display = "none";
        textEdit.style.display = "block";
        textEdit.focus();
      }
    }

    if (e.ctrlKey && (e.code === "KeyS" || e.key.toLowerCase() === "s")) {
      e.preventDefault();
      if (isEditing) {
        isEditing = false;
        textView.innerText = textEdit.value;
        textEdit.style.display = "none";
        textView.style.display = "block";
      }
    }
  });

  const table = document.getElementById("data-table");
  const headers = table.querySelectorAll("th");
  const tbody = table.querySelector("tbody");

  headers.forEach((header, index) => {
    header.addEventListener("click", () => {
      const type = header.dataset.type;
      const rows = Array.from(tbody.querySelectorAll("tr"));
      let sortOrder = header.dataset.order === "asc" ? -1 : 1;
      header.dataset.order = sortOrder === 1 ? "asc" : "desc";

      rows.sort((rowA, rowB) => {
        const cellA = rowA.children[index].textContent.trim();
        const cellB = rowB.children[index].textContent.trim();

        if (type === "number") {
          return (Number(cellA) - Number(cellB)) * sortOrder;
        } else {
          return cellA.localeCompare(cellB) * sortOrder;
        }
      });

      tbody.append(...rows);
    });
  });

  const resizableBox = document.getElementById("resizable-box");
  const resizer = document.getElementById("resizer");
  let isResizing = false;
  let startX, startY, startWidth, startHeight;

  resizer.addEventListener("mousedown", (e) => {
    isResizing = true;
    startX = e.clientX;
    startY = e.clientY;
    startWidth = parseInt(
      document.defaultView.getComputedStyle(resizableBox).width,
      10,
    );
    startHeight = parseInt(
      document.defaultView.getComputedStyle(resizableBox).height,
      10,
    );
    e.preventDefault();
  });

  document.addEventListener("mousemove", (e) => {
    if (!isResizing) return;
    const newWidth = startWidth + (e.clientX - startX);
    const newHeight = startHeight + (e.clientY - startY);
    resizableBox.style.width = `${newWidth}px`;
    resizableBox.style.height = `${newHeight}px`;
  });

  document.addEventListener("mouseup", () => {
    isResizing = false;
  });
});
