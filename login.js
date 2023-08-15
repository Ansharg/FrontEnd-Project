const maxWidth=700;
function checkWidth(){
    var currentWidth=window.innerWidth;
    if(currentWidth<=maxWidth){
        window.location.href="index.html";
    }
};
checkWidth();
window.addEventListener("resize",checkWidth);