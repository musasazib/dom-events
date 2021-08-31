function makeRed() {
    document.body.style.backgroundColor = "red";
}
// On click -----------
const greenButton = document.getElementById('make-green');
greenButton.onclick = makeGreen;
function makeGreen() {
    document.body.style.backgroundColor = 'green';
}
// On click -----------
const blueButton = document.getElementById("make-blue");
blueButton.onclick = function () {
    document.body.style.backgroundColor = 'blue';
}
// event Listener -------
const grayButton = document.getElementById('make-gray');
grayButton.addEventListener('click', makeGray);
function makeGray() {
    document.body.style.backgroundColor = "gray";
}
// event Listener -------
const hotPinkButton = document.getElementById('make-hotpink');
hotPinkButton.addEventListener('click', function () {
    document.body.style.backgroundColor = "hotpink";
})
// event Listener -------
document.getElementById('make-lightblue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
})