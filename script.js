let input = document.querySelector("input");
let addBtn = document.querySelector(".add");
let list = document.querySelector(".list");
let clearBtn = document.querySelector('.clear')

let todos = [];

function getData(){
let data = JSON.parse(localStorage.getItem('todos'))
if(data){
    todos = data;
}
renderItems()
}

function save() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function renderItems() {
    list.innerHTML = "";
    todos.forEach((todo, index) => {
        let item = document.createElement("li");
        item.textContent = todo;

        let deletebtn = document.createElement("button");
        deletebtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        item.append(deletebtn);

        list.append(item);

        deletebtn.addEventListener("click", () => {
            todos = todos.filter((e,ind) => {
                return ind!=index;
            });
            renderItems();
        });
        
    });
    save();
    console.log(localStorage.getItem("todos"))
}

addBtn.addEventListener("click", () => {
    let userInput = input.value.trim()
    if(userInput==""){
        alert("Please Write Something")
    }else{
        todos.push(userInput);
        input.value = "";
    renderItems();
    }
    
});

clearBtn.addEventListener("click",()=>{
    todos = []
    renderItems()
})

input.addEventListener("keydown", (event) => {
    // 1. चेक करें कि दबाई गई key 'Enter' है
    if (event.key === 'Enter') {
        // 2. 'Enter' का डिफ़ॉल्ट व्यवहार (जैसे फॉर्म सबमिट करना) रोकें
        event.preventDefault(); 
        let userInput = input.value.trim()
        
        if(userInput === ""){
            alert("Please Write Something")
        } else {
            todos.push(userInput);
            input.value = "";
            renderItems();
        }
    }
});
getData()