const mainContainer = document.querySelector(".main");
const form = document.getElementById("add-todo");
const input = document.getElementById("title");
const listContainer = document.querySelector(".todos");
const list = document.getElementById("list");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newItem = document.createElement("li");
    const itemTitle = document.createElement("div");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    itemTitle.textContent = input.value;
    editButton.textContent = "edit";
    deleteButton.textContent = "X";
    input.value = "";

    newItem.append(itemTitle, editButton, deleteButton);
    list.append(newItem);

    deleteButton.addEventListener('click', (e) => {
        e.target.parentNode.remove();
    });

});