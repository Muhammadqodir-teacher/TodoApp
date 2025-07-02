const data = document.getElementById("data");
const form = document.getElementById("form");
const BtnAdd = document.querySelector(".BtnAdd");
const collect = document.querySelector(".collect");

form.addEventListener('submit', function (event) {
    event.preventDefault();
});

BtnAdd.addEventListener("click", () => {
    if (data.value === "") {
        alert("Enter something");
    }

    const element = document.createElement("h1");
    element.className = "element";
    element.textContent = data.value;

    collect.prepend(element);

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

    data.value = "";
});
