function makeRed() {
    document.body.style.backgroundColor = "red";
}

const greenButton = document.getElementById('make-green');
greenButton.onclick = makeGreen;
function makeGreen() {
    document.body.style.backgroundColor = 'green';
}

const blueButton = document.getElementById("make-blue");
blueButton.onclick = function () {
    document.body.style.backgroundColor = 'blue';
}

const grayButton = document.getElementById('make-gray');
grayButton.addEventListener('click', makeGray);
function makeGray() {
    document.body.style.backgroundColor = "gray";
}

const hotPinkButton = document.getElementById('make-hotpink');
hotPinkButton.addEventListener('click', function () {
    document.body.style.backgroundColor = "hotpink";
})

document.getElementById('make-lightblue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
})