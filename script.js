var boxes = document.querySelectorAll(".box");

boxes[0].style.backgroundColor = "blue";

boxes[2].style.backgroundColor = "yellow";

var leftMargin = 00;
var topMargin = 00;
var moveAmount = 20;

function boxClicked() {
    console.log("Your box has been clicked")
    leftMargin += moveAmount;
    topMargin += moveAmount;
    boxes[0].style.marginLeft = leftMargin + "px";
    boxes[0].style.marginTop = topMargin + "px";
}

boxes[0].addEventListener("click", boxClicked)

console.log(boxes[0]);