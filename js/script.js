window.onscroll=function(){
    myfunction();
};
//DOM select
var nav =document.querySelector("nav");
var features=document.querySelector(".sfeatures");
var navigation=document.querySelector(".navigation");
var icon=document.querySelector(".mobile-icon");

icon.addEventListener("click",function(){
    navigation.classList.toggle("active");
});
function myfunction(){
    var dftop=window.pageYOffset;
    if(dftop>features.offsetTop){
        nav.classList.add("sticky");
    }
    else if(dftop<features.offsetTop){
        nav.classList.remove("sticky");
    }
}

