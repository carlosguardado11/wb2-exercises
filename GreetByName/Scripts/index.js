"use strict";

window.onload = init;

function init() {
    const namefield = document.getElementById('nameField');
    let name = nameField.value;
}

function init() {
    const greetBtn = document.getElementById('greetBtn');
    greetBtn.onclick = onGreetUserBtnClicked;
}

function onGreetUserBtnClicked() {
    alert('Hi there ' + nameField.value + '!');
}