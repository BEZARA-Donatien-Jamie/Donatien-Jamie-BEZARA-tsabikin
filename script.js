var perso = document.querySelector(".perso");
var obstacles = document.querySelector(".obstacles");

function sauter(){
    //mampy tsabikina
    if(perso.classList != "animation"){
        perso.classList.add('animation');
    }
    setTimeout(function(){
        perso.classList.remove('animation');
    },500)
}
//malakonogno sa mitofotra ny olona entina
var verification = setInterval(function(){
    var persoTop= parseInt(window.getComputedStyle(perso).getPropertyValue("top"));
    var obstaclesLeft = parseInt(window.getComputedStyle(obstacles).getPropertyValue("left"));

    if(obstaclesLeft<20 && obstaclesLeft> 0 && persoTop>= 130){
        obstacles.style.animation = "none";
        alert("resy anao")
    }
})