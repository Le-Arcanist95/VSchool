const submit = document.getElementById("submit");

function createAlert() {
    const firstName = document.travelForm.firstName.value;
    const lastName = document.travelForm.lastName.value;
    const age = document.travelForm.age.value;
    const gender = document.travelForm.gender.value;
    const location = document.travelForm.travelLocation.value;
    const diet = [];
        if(travelForm.diabetic.checked){
            diet.push(document.travelForm.diabetic.value);
        };
        if(travelForm.gluten.checked){
            diet.push(document.travelForm.gluten.value);
        };
        if(travelForm.peanut.checked){
            diet.push(document.travelForm.peanut.value);
        };

        alert(
            "First Name: " + firstName + 
            "\nLast Name: " + lastName + 
            "\nAge: " + age + 
            "\nGender: " + gender + 
            "\nTravel Location: " + location + 
            "\nDiet: " + diet
        );
};

submit.addEventListener("click", createAlert);