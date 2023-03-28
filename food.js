console.log("hi");

window.addEventListener("DOMContentLoaded",function(e){
console.log("page loaded");
});
let btn=document.querySelector("#click me");
btn.addEventListener("click",function(e){
    console.log("the buuton was clicked");
});