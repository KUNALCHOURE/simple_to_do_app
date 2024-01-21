let inp=document.querySelector("#input");
let btn=document.querySelector("button");
let u=document.querySelector("#LIST");
btn.addEventListener("click",function(){
  let item=document.createElement("li");
  item.innerText=inp.value;
  u.appendChild(item);
  inp.value="";
 

   
});