const mainContainer = document.querySelector(".main");
const form = document.getElementById("add-todo");
const input = document.getElementById("title");
const listContainer = document.querySelector(".todos");
const list = document.getElementById("list");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newItem = document.createElement("li");
    const itemTitle = document.createElement("div");
    const deleteButton = document.createElement("button");
    const editButton = document.createElement("button");
    const editInput = document.createElement("input");

    itemTitle.textContent = input.value;
    editButton.textContent = "Edit";
    deleteButton.textContent = "X";
    input.value = "";

    newItem.append(itemTitle, editButton, deleteButton);
    list.append(newItem);
    
    deleteButton.addEventListener('click', (e) => {
        e.target.parentNode.remove();
    });

    editButton.addEventListener('click', (e) => {
        if (e.target.textContent === "Edit") {
            let prevValue = itemTitle.textContent;
            editInput.value = prevValue;
            itemTitle.textContent = "";
            editButton.textContent = "Save";

            itemTitle.append(editInput);
        } else if (e.target.textContent === "Save") s{
            itemTitle.textContent = editInput.value;
            editButton.textContent = "Edit";
            editInput.remove();
        };
    });
});


