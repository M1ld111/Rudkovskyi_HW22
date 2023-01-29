const kon = document.getElementsByClassName('kon')
const div = document.getElementsByClassName('p-class')

kon[0].addEventListener("mouseover", () => {
    div[0].style.backgroundColor = "rgba(220,220,220,0)"
    div[0].style.transitionDuration = "1s"
    kon[0].style.color = "white"
    kon[0].style.transitionDuration = "1s"
});

kon[0].addEventListener("mouseout", () => {
    div[0].style.backgroundColor = "rgba(220,220,220,1)"
    div[0].style.transitionDuration = "1s"
    kon[0].style.color = "black"
    kon[0].style.transitionDuration = "1s"
});