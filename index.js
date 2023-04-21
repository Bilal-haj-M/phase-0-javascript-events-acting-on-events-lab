// Your code here
const dodger = document.getElementById("dodger")
const speed = 1;

function moveDodgerLeft() {
  dodger.style.left = `${parseInt(dodger.style.left) -  speed}px`
}

function moveDodgerRight() {
  dodger.style.left = `${parseInt(dodger.style.left) + speed}px`
}

function moveUp() {
  dodger.style.top = `${parseInt(dodger.style.top) - speed}px`
}

function moveDown() {
  dodger.style.top = `${parseInt(dodger.style.top) + speed}px`
}

document.addEventListener("keydown", function (event)  {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft()
  }else if (event.key === "ArrowRight") {
    moveDodgerRight()
  }else if (event.key === "ArrowUp") {
    moveUp()
  }
})














