function getModal() {
    document.querySelector("#modal").classList.toggle("hide");
    document.querySelector("body").classList.toggle("hideScroll");
    document.querySelector("#modal").classList.toggle("addScroll");
}

function checkFields(event) {
    const valuesToCheck = ["title", "category", "image", "description", "link"];
    const isEmpty = valuesToCheck.find(function(value) {
        const checkIfIsString = typeof event.target[value].value === "string";
        const checkEmpty = !event.target[value].value.trim();
        if (checkIfIsString && checkEmpty) {
            return true;
        }
    })
    if (isEmpty) {
        event.preventDefault();
        alert("Por favor, preencha todos os campos!")
    }
}


// document.querySelector("button.fat").addEventListener("click", function() {
//     document.querySelector("footer").classList.toggle("hide");
// })
