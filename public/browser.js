console.log("FrontEnd JS ishga tushdi");

function itemTemplate(item) {
    return `<li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
                <span class="item-text">${item.reja}</span>
                <div>
                    <button 
                    style="padding: 5px 30px 5px 30px; margin-right: 12px"
                    data-id="${item._id}"
                     class="edit-me btn btn-secondary btn-sm mr-1">
                        수정
                    </button>
                    <button 
                    style="padding: 5px 30px 5px 30px;"
                    data-id="${item._id}"
                    class="delete-me btn btn-danger btn-sm">삭제</button>
                </div>
               </li>`;
}

let createField = document.getElementById("create-field");

document.getElementById("create-form")
.addEventListener("submit", function (e) {
e.preventDefault();


axios 
.post("/create-item", { reja: createField.value })
.then((response) => {
    document.getElementById("item-list").insertAdjacentHTML("beforeend", itemTemplate(response.data));
    createField.value = "";
    createField.focus();
})
.catch((err) => {
    console.log("Iltimos qayta harakat qiling !");
});
});

document.addEventListener("click", function (e) {
// delete oper
console.log(e.target);
if (e.target.classList.contains("delete-me")) { // contains mavjudmi tekshirish
    if (confirm("정말 삭제하시겠습니까?")) {
       axios
       .post("/delete-item", {id: e.target.getAttribute("data-id")})
       .then((respose) => {
        console.log(respose.data);
        e.target.parentElement.parentElement.remove();
       })
       .catch((err) => {
    console.log("다시 시도해 주세요!");

       });
    }
   
}
// edit oper
if (e.target.classList.contains("edit-me")) {
    let userInput = prompt("수정해 주세요",
        e.target.parentElement.parentElement.querySelector(".item-text").innerHTML 
    );
    if (userInput) {
     axios
     .post("/edit-item", {
        id: e.target.getAttribute("data-id"),
        new_input: userInput,
    })
    .then((response) => {
      console.log(response.data);
      e.target.parentElement.parentElement.querySelector(
        ".item-text"
    ).innerHTML = userInput;
    })
    .catch((err) => {
    console.log("다시 시도해 주세요!");

    });
    }
  }
});
document.getElementById("clean-all").addEventListener("click", function () {
axios.post("/delete-all", {delete_all: true}).then(respose => {
    alert(respose.data.state);
    document.location.reload();
})
}); 




