var ball = document.getElementById("ball");


ball.style.top = ball.offsetTop + "px";
ball.style.left = ball.offsetLeft + "px";

var ballHeight = ball.offsetHeight;
var ballWidth = ball.offsetWidth;



function setValue(value) {
    return value + "px";
}




function keycode(keyPress){
    var top = parseInt(ball.style.top);
    var left = parseInt(ball.style.left);

    if(keyPress === "w" || keyPress === "W"){
         if (top > 5) {
            ball.style.top = setValue(top - 5);
         }

    }

    else if(keyPress === "A" || keyPress === "a"){
        if (left > 5) {
            ball.style.left = setValue(left - 5);
        }
    }

    else if(keyPress === "S" || keyPress === "s"){
        if (top < (window.innerHeight - ballHeight) - 5) {
            ball.style.top = setValue(top + 5);
        }
    }

    else if(keyPress === "D" || keyPress === "d"){
        if (left < (window.innerWidth - ballWidth) - 5) {
            ball.style.left = setValue(left + 5);
        }
    }


};




window.addEventListener("keypress", function(event){

    keycode(event.key);
});