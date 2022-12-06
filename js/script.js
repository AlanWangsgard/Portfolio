// console.log("hello")
// window.onscroll

function checkY() {
    console.log(window.scrollY)
    if (window.scrollY > 150) {
        changeColors()
    } else {
        original()
    }
}

function changeColors() {
    // console.log("hi")
    document.querySelector(".main").style.backgroundColor = "#55595D"
    document.querySelector("body").style.backgroundColor = "darkblue"
}

function original() {
    document.querySelector(".main").style.backgroundColor = "darkblue"
    document.querySelector("body").style.backgroundColor = "#55595D"
}