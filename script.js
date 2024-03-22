function switchOff() {
  document.getElementById("bulbImage").src =
    "/TourchLight/img/bulb-go-off-img.png";
  document.getElementById("catImage").src = "/TourchLight/img/cat-eyes-img.png";
  document.getElementById("switchstatus").textContent = "Switched Off";
  document.getElementById("onswitch").style.backgroundColor = "#22c55e";
  document.getElementById("offswitch").style.backgroundColor = "#cbd2d9";
}
function switchOn() {
  document.getElementById("bulbImage").src =
    "/TourchLight/img/bulb-go-on-img.png";
  document.getElementById("catImage").src = "/TourchLight/img/cat-img.png";
  document.getElementById("switchstatus").textContent = "Switched On";
  document.getElementById("onswitch").style.backgroundColor = "#cbd2d9";
  document.getElementById("offswitch").style.backgroundColor = "#e12d39";
}
