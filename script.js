const data = document.getElementById("data")
const fotm = document.getElementById("form")
const BtnAdd = document.querySelector(".BtnAdd")
const collect = document.querySelector(".collect")

form.addEventListener('submit', function (event) {
    event.preventDefault();
});

BtnAdd.addEventListener("click", (e) => {

    if (data.value === "") {
        alert("Enter reference")
    } else {
        const element = document.createElement("h1");
        element.className = "element"
        element.textContent = data.value;
        collect.prepend(element);
        console.log(element);
        const dalete = document.createElement("i");
        dalete.classList = "fa-solid fa-delete-left";
        element.appendChild(dalete);
        dalete.addEventListener("click", (e) => {
            element.remove();
        })
    }
    data.value = "";


});