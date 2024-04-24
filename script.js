const circle = document.querySelector(".circle");
const button = document.querySelector("button");
const body = document.querySelector("body");
const star = document.querySelectorAll(".star")
const sun = document.querySelector(".sun")
const cloud = document.querySelector(".content")
const crsr = document.querySelector(".cursor")
const container = document.querySelector(".main")
console.log(star)
button.textContent = "On";

container.addEventListener("mousemove",function(details) {
    crsr.style.left=details.x+"px";
    crsr.style.top=details.y+"px";
})

let color = 0;
button.addEventListener("click", function () {
    if (color == 0) {
        circle.style.backgroundColor = "yellow";
        cloud.style.display="none"
        button.style.backgroundColor= "white";
        for(var i=0;i<Math.min(5,star.length); i++){
            star[i].style.display="block"
            star[i].style.transition="all 3s linear"
        }
        sun.style.display="block"
        button.style.color= "black"
        body.style.background= "linear-gradient(black, DarkSlateGray)"
        button.style.border= "5px solid white "
        circle.style.boxShadow = "0 0 10px orange, " +
            "0 0 60px orange, " +
            "0 0 200px yellow, " +
            "inset 0 0 80px yellow";

        button.textContent = "Off";
        color = 1;
    } else {
        circle.style.backgroundColor = "orange";
        cloud.style.display="block"
        button.style.backgroundColor= "transparent"
        body.style.background= "linear-gradient(lightskyblue, white)"
        for(var i=0;i<Math.min(5,star.length); i++){
            star[i].style.display="none"
        }
        sun.style.display="none"
        circle.style.boxShadow = "0 0 10px orange, " +
        "0 0 60px orange, " +
        "0 0 200px orange, " +
        "inset 0 0 80px orange";
        button.style.color= "black"
        button.style.border= "5px solid black " 
        button.textContent = "On";
        color = 0;
    }
});
