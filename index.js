const simple_array = ['Orange', 'Red', 'Yellow', 'Blue', 'Green', 'Violet', 'Pink'];

let code = document.getElementById("code");
let btn = document.getElementById("btn");
let simple = document.getElementById("simple");
document.getElementById("simple_color").style.color = "rgb(110, 210, 250)"

btn.onclick = () => {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = simple_array[randomNumber];
    code.textContent = simple_array[randomNumber];
}

function getRandomNumber() {
    return Math.floor(Math.random() * simple_array.length);
}
