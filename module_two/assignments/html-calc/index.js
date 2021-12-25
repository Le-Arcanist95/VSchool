const addSubmit = document.getElementById("addSubmit");
const subSubmit = document.getElementById("subSubmit");
const mulSubmit = document.getElementById("mulSubmit");
const addResult = document.getElementById("addResult");
const subResult = document.getElementById("subResult");
const mulResult = document.getElementById("mulResult");

addSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    let aNum1 = document.addForm.addNum1.value;
    let aNum2 = document.addForm.addNum2.value;
    
    addResult.textContent = "= " + (parseInt(aNum1) + parseInt(aNum2));
});

subSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    let sNum1 = document.subForm.subNum1.value;
    let sNum2 = document.subForm.subNum2.value;
    
    subResult.textContent = "= " + (parseInt(sNum1) - parseInt(sNum2));
});

mulSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    let mNum1 = document.mulForm.mulNum1.value;
    let mNum2 = document.mulForm.mulNum2.value;
    
    mulResult.textContent = "= " + (parseInt(mNum1) * parseInt(mNum2));
});