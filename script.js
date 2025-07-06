const data = document.getElementById("data");
const form = document.getElementById("form");
const BtnAdd = document.querySelector(".BtnAdd");
const collect = document.querySelector(".collect");
const searech = document.querySelector(".search");
const daleteAll = document.querySelector(".daleteAll");
const modal = document.querySelector(".modal__container");
const modalBtnYes = document.querySelector(".modal__yesbtn");
const modalBtnNo = document.querySelector(".modal__nobtn");

form.addEventListener('submit', function (event) {
    event.preventDefault();
});

BtnAdd.addEventListener("click", () => {
    if (data.value === "") {
        alert("Enter something");
    } else {
        const element = document.createElement("div");
        element.className = "element";
        collect.prepend(element);


        const text = document.createElement("p");
        text.classList = "text"
        text.textContent = data.value;
        element.prepend(text);

        const elementBox = document.createElement("div");
        elementBox.classList = "elementBox";
        element.appendChild(elementBox);

        const deleteIcon = document.createElement("i");
        deleteIcon.className = "fa-solid fa-delete-left";
        elementBox.appendChild(deleteIcon);

        const editIcon = document.createElement("i");
        editIcon.className = "fa-solid fa-pen-to-square";
        elementBox.prepend(editIcon);

        const checkIcon = document.createElement("i");
        checkIcon.className = "fa-solid fa-check";
        checkIcon.style.display = "none";
        elementBox.prepend(checkIcon);

        const newInput = document.createElement("input");
        newInput.className = "newInput";
        newInput.style.display = "none";
        element.prepend(newInput);

        daleteAll.addEventListener('click', () => {
            modal.style.display = "flex";
        });

        modalBtnYes.addEventListener('click', () => {
            collect.innerHTML = "";
            modal.style.display = "none"
        });

        modalBtnNo.addEventListener('click', () => {
            modal.style.display = "none"
        });

        editIcon.addEventListener("click", () => {
            const oldText = element.childNodes[1].textContent;
            newInput.value = oldText;
            newInput.defaultValue = oldText;
            newInput.style.display = "block";
            element.childNodes[1].textContent = "";
            checkIcon.style.display = "block";
            editIcon.style.display = "none";
        });

        checkIcon.addEventListener("click", () => {
            if (newInput.value.trim() !== "") {
                element.childNodes[1].textContent = newInput.value;
            } else {
                element.childNodes[1].textContent = newInput.defaultValue;
            }
            newInput.style.display = "none";
            checkIcon.style.display = "none";
            editIcon.style.display = "block";
        });



        deleteIcon.addEventListener("click", () => {
            element.remove();
        });

    }
    data.value = "";



});


function searchFunction() {
    let filter = searech.value.toUpperCase();
    let elements = document.querySelectorAll(".element");

    for (let i = 0; i < elements.length; i++) {
        let text = elements[i].querySelector("p").textContent.toUpperCase();
        if (text.includes(filter)) {
            elements[i].style.display = "flex";
        } else {
            elements[i].style.display = "none";
        }
    }
}

