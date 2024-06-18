var main = document.querySelector(".main");
var mainbtn = document.querySelector(".mainbtn");
var overlay = document.querySelector(".overlay");
var closebtn = document.querySelector(".overlaybtn");

mainbtn.addEventListener("click",function(){
    overlay.classList.remove("hidden");
    mainbtn.classList.add("hidden");
})

closebtn.addEventListener("click",function(){
    overlay.classList.add("hidden");
    mainbtn.classList.remove("hidden");
})
