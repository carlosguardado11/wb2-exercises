"use strict";

window.onload = init;

function init() {
    const helloCarlos = document.getElementById('helloBtn');
    helloCarlos.onclick = onHelloBtnClicked;
}

function onHelloBtnClicked() {
    alert('Hi there');
}