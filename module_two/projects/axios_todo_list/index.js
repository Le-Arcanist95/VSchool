// Global Variables
const listContainer = document.getElementById('todo-list');
const todoForm = document.newTodoForm

// Functions
function getApi(){
    axios.get("https://api.vschool.io/ze_arcanist95/todo")
        .then(res => displayData(res.data))
        .catch(err => console.log(err));
}
function clearList(){
    while(listContainer.firstChild){
        listContainer.removeChild(listContainer.firstChild);
    }
}
function displayData(data){
    clearList();
    
    for(let i = 0; i < data.length; i++){
        const itemContainer = document.createElement('li');
        const itemTitle = document.createElement('h3');
        const itemDesc = document.createElement('p');
        const itemImg = document.createElement('img');
        const checkBox = document.createElement('input');
        const editBtn = document.createElement('button');
        const delBtn = document.createElement('button');
        const docFragment = document.createDocumentFragment()

        itemContainer.classList.add('list-item');
        itemTitle.textContent = data[i].title;
        itemTitle.classList.add('item-title');
        itemDesc.textContent = data[i].description;
        itemDesc.classList.add('item-desc');
        itemImg.src = data[i].imgUrl;
        itemImg.classList.add('item-img');
        checkBox.setAttribute('type', 'checkbox');
        checkBox.classList.add('checkbox');
        if (data[i].completed) {
            checkBox.checked = true;
        }
        checkBox.addEventListener("click", (e) => {
            e.preventDefault()

            itemTitle.classList.toggle('item-complete');
            itemDesc.classList.toggle('item-complete');
            if (checkBox.checked) {
                axios.put("https://api.vschool.io/ze_arcanist95/todo/" + data[i]._id, {completed: true})
                    .then(res => getApi())
                    .catch(err => console.log(err));
            } else {
                axios.put("https://api.vschool.io/ze_arcanist95/todo/" + data[i]._id, {completed: false})
                    .then(res => getApi())
                    .catch(err => console.log(err));
            }
        })
        editBtn.innerText = 'Edit';
        editBtn.classList.add('edit-button');
        editBtn.addEventListener("click", (e) => {
            
            const editedTodo = {
                title: "",
                description: ""
            }
            const titleInput = document.createElement("input");
            const descInput = document.createElement("input");

            if (editBtn.innerText === 'Edit') {
                // 1. Save current values
                let currentTitle = data[i].title;
                let currentDesc = data[i].description;
                editBtn.innerText = 'Save';
                
                // 2. Create input fields
                titleInput.value = currentTitle;
                descInput.value = currentDesc;
            
                // 3. Replace current content with inputs
                itemTitle.value(titleInput);
                itemDesc.value(descInput);
    
            } else if (editBtn.innerText === 'Save') {
                axios.put("https://api.vschool.io/ze_arcanist95/todo/" + data[i]._id, editedTodo)
                    .then(res => getApi())
                    .catch(err => console.log(err));
    
                editBtn.innerText = 'Edit';
            }
        })
        delBtn.classList.add('delete-button');
        delBtn.innerText = 'Delete';
        delBtn.addEventListener("click", (e) => {
            axios.delete("https://api.vschool.io/ze_arcanist95/todo/" + data[i]._id)
            .then(res => getApi())
            .catch(err => console.log(err));
        })
        
        if (itemImg.src === "") {
            itemImg.style.display = "none";
        }
        
        docFragment.appendChild(itemContainer);
        itemContainer.append(itemTitle, itemDesc, itemImg,checkBox, editBtn, delBtn);
        listContainer.appendChild(itemContainer);
    }
    
}

// Event Handlers
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value
    }
    
    todoForm.title.value = "";
    todoForm.description.value = "";
    todoForm.imgUrl.value = "";
    
    axios.post("https://api.vschool.io/ze_arcanist95/todo", newTodo)
        .then(res => getApi())
        .catch(err => console.log(err));
})
getApi();