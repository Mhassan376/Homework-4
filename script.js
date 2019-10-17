const balloon = document.getElementById("balloon");
const explosion = document.getElementById("explosion");
const text = document.getElementById("text");
balloon.style.fontSize = "30px";
let size = parseInt(balloon.style.fontSize);

const handler = function (event) {
    let key = event.keyCode;
    if (key == 73) {
        if (size <= 60 && size > 0) {
            size += 10;
            balloon.style.fontSize = size.toString() + "px";
        }
        if (size > 60) {
            balloon.style.visibility = "hidden";
            explosion.style.visibility = "visible";
            document.removeEventListener('keyup', handler);
        }
    }
    else if (key == 68) {
        if (size > 0) {
            size -= 10;
            balloon.style.fontSize = size.toString() + "px";
        }
        if (size <= 0) {
            text.style.visibility = "visible";
            document.removeEventListener('keyup', handler);
        }
    }
}
document.addEventListener('keyup', handler);