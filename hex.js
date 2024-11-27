let code = document.getElementById("code");
let btn = document.getElementById("btn");

document.getElementById("hex_color").style.color = "rgb(110, 210, 250)"

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

btn.onclick = () => {

    let code_value = '#';
    for (let i = 0; i < 6; i++) {
        const randomNumber = getRandomNumber();
        code_value += array[randomNumber];
    }
    code.textContent = code_value;
    document.body.style.backgroundColor = code_value;
}

function getRandomNumber() {
    return Math.floor(Math.random() * array.length);
}