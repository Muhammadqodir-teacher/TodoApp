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
        // element list
        const element = document.createElement("div");
        element.className = "element";
        collect.prepend(element);
        // checkBox and text
        const elementText = document.createElement("span");
        elementText.classList = "elementText";
        element.prepend(elementText);
        // check input
        const complate = document.createElement("input");
        complate.classList = "complate"
        complate.setAttribute("type", "checkbox");
        elementText.appendChild(complate);
        // check input event
        complate.addEventListener('change', () => {
            if (complate.checked) {
                text.style.textDecoration = "line-through"
            } else {
                text.style.textDecoration = "none"
            }
        })
        // text list
        const text = document.createElement("p");
        text.classList = "text"
        text.textContent = data.value;
        elementText.appendChild(text);
        // data time
        const time = document.createElement("p");
        time.classList = "time";
        let localData = new Date();
        let hours = (localData.getHours());
        let minutes = (localData.getMinutes());
        let seconds = (localData.getSeconds());
        time.textContent = `${hours} : ${minutes} : ${seconds}`;
        element.appendChild(time);
        // edit dalet icons div
        const elementBox = document.createElement("div");
        elementBox.classList = "elementBox";
        element.appendChild(elementBox);
        // dalete icon
        const deleteIcon = document.createElement("i");
        deleteIcon.className = "fa-solid fa-delete-left";
        elementBox.appendChild(deleteIcon);
        // edit icon
        const editIcon = document.createElement("i");
        editIcon.className = "fa-solid fa-pen-to-square";
        elementBox.prepend(editIcon);
        // check icon
        const checkIcon = document.createElement("i");
        checkIcon.className = "fa-solid fa-check";
        checkIcon.style.display = "none";
        elementBox.prepend(checkIcon);
        // edit new input
        const newInput = document.createElement("input");
        newInput.className = "newInput";
        newInput.style.display = "none";
        element.prepend(newInput);
        // dalete all event
        daleteAll.addEventListener('click', () => {
            modal.style.display = "flex";
        });
        // modal btns yes
        modalBtnYes.addEventListener('click', () => {
            collect.innerHTML = "";
            modal.style.display = "none"
        });
        // modal btns no
        modalBtnNo.addEventListener('click', () => {
            modal.style.display = "none"
        });
        // edit icon event
        editIcon.addEventListener("click", () => {
            const oldText = element.childNodes[1].textContent;
            newInput.value = oldText;
            newInput.defaultValue = oldText;
            newInput.style.display = "block";
            element.childNodes[1].textContent = "";
            checkIcon.style.display = "block";
            editIcon.style.display = "none";
        });
        // check icon event
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
        // dalete icon text remove
        deleteIcon.addEventListener("click", () => {
            element.remove();
        });

    }
    // data input value
    data.value = "";
    // modal display none window
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none"
        }
    }
});
// search function
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

