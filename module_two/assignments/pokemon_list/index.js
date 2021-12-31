const xhr =  new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200){
        const JSONdata = xhr.responseText;
        const data = JSON.parse(JSONdata);
        displayData(data.objects[0].pokemon);
    } ;
};

xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();

function displayData(arr) {
    for (let i = 0; i < arr.length; i++) {
        const nameElement = document.createElement("h4");
        nameElement.textContent = arr[i].name;
        document.body.appendChild(nameElement);
    };
};