'use strict';

//variables

const btnSend = document.querySelector("#send");

//Event Listeners

eventListeners();

function eventListeners(){
    document.addEventListener("DOMContentLoaded", startForm);
}


//functions

function startForm(){
    btnSend.disabled = true;
    //btnSend.classList.add("disabled");
}