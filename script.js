var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomb = document.querySelector(".random");

body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value;
css.textContent = body.style.background + ";";

function setBgGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value;

    css.textContent = body.style.background + ";";
}

function randomColor(brightness) {
    function randomChannel(brightness) {
        var r = 255-brightness;
        var n = 0|((Math.random() * r) + brightness);
        var s = n.toString(16);
        return (s.length==1) ? '0'+s : s;
    }
    return '#' + randomChannel(brightness) + randomChannel(brightness) + randomChannel(brightness);
}

function randomButton() {
    color1.value = randomColor(130);
    color2.value = randomColor(130);

    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value;
}

color1.addEventListener("input", setBgGradient);
color2.addEventListener("input", setBgGradient);
randomb.addEventListener("click", randomButton);
