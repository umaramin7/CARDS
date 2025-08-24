let h1 = document.querySelector("h1");
window.addEventListener("keydown",function(detail){
    if(detail.key == " "){
        h1.textContent="SPC";
    }
    else{
        h1.textContent= detail.key;
    }
})