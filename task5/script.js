document.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {}
    else  {
    let text = document.querySelector('input').value;
    document.querySelector('#duplicateField').textContent = text; }
})

document.querySelector('button').addEventListener('click', buttonClick);
document.querySelector('button').addEventListener('click', buttock);

function buttonClick() {
    let button = document.querySelector('#duplicateField').textContent;
    console.log(button);
    document.querySelector('#duplicateField').textContent = '';
}

function buttock() {
    document.querySelector('input').value = '';
}

