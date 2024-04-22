const circle = document.querySelector(".circle");
const button = document.querySelector("button");
const body = document.querySelector("body")
button.textContent = "On";

let color = 0;
button.addEventListener("click", function () {
    if (color == 0) {
        circle.style.backgroundColor = "yellow";
        button.style.backgroundColor= "brown"
        button.style.color= "yellow"
        body.style.backgroundColor= "black"
        button.style.border= "none"
        circle.style.boxShadow = "0 0 10px orange, " +
            "0 0 60px orange, " +
            "0 0 200px yellow, " +
            "inset 0 0 80px yellow";

        button.textContent = "Off";
        color = 1;
    } else {
        circle.style.backgroundColor = "transparent";
        button.style.backgroundColor= "transparent"
        body.style.backgroundColor= "white"

        button.style.color= "brown"
        button.style.border= "5px solid brown "
        circle.style.boxShadow = "none" 

        button.textContent = "On";
        color = 0;
    }
});
