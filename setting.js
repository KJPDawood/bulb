var btn = document.getElementById("btn");
var bulb = document.getElementById("frame");
var body = document.getElementById("body");
var count = true;
btn.addEventListener("click",function () {
    if (count === true) {
        btn.innerHTML = "off";
        body.style.backgroundColor = "white";
        bulb.className = "frame2";
        count = false;
    } else if (count === false) {
        btn.innerHTML = "On";
        body.style.backgroundColor = "black";
        bulb.className = "frame";
        count = true;
    }
})