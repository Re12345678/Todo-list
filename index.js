let adbtn=document.getElementById("adbtn");
let list=document.getElementById("list");
let inputf=document.getElementById("inputf");


function addtask(){
    if(inputf.value === ''){
        alert("you must write something!");
    }
  else{
    let li= document.createElement("li");
    li.innerHTML = inputf.value;
    list.appendChild(li);
    let span =document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
  }
  inputf.value="";
  savedata();
}

list.addEventListener("click",function(e){
    if(e.target.tagName=== "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else{
        if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            savedata();
    }
}
},false);
function savedata(){
    localStorage.setItem("data",list.innerHTML);
}
function showdata(){
    list.innerHTML=  localStorage.getItem("data");
}
showdata();