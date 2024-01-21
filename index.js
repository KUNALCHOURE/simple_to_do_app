let inp=document.querySelector("#input");
let btn=document.querySelector("button");
let u=document.querySelector("#LIST");
btn.addEventListener("click",function(){
  let item=document.createElement("li");
  item.innerText=inp.value;

  let btn=document.createElement("button");
  btn.innerText="Delete";
  btn.classList.add("Delete");

  item.appendChild(btn);
  u.appendChild(item);
  
  inp.value="";

 

   
});