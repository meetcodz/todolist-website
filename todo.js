


const input = document.getElementById("input-box");
const task = document.getElementById("list-container");
const button = document.getElementById("submit");

function addTask(){
    if(input.value===''){
       window.alert("Please enter a task")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        task.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = '';
    saveData();
}

task.addEventListener("click",function(e){
        if(e.target.tagName === "LI"){
                e.target.classList.toggle("checked");
              saveData();
        }
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveData();
        }
},false);

function saveData(){
    localStorage.setItem("data",task.innerHTML);
}

function showTask(){
    task.innerHTML = localStorage.getItem("data");
}
showTask();

input.addEventListener("keydown", function (event){  if (event.key === "Enter") {
        button.click();  // Simulate button click
    }})