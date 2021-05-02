'use strict';

//variables

const inputName = document.querySelector("#inputName");
const inputEmail = document.querySelector("#inputEmail");
const inputMessage = document.querySelector("#inputMessage");

const btnSend = document.querySelector("#send");

//Event Listeners

eventListeners();

function eventListeners(){
    document.addEventListener("DOMContentLoaded", startForm);
    inputName.addEventListener("blur", validateForm);
}

//functions

function startForm(){
    btnSend.disabled = true;
    //btnSend.classList.add("disabled");
}

function validateForm(e){
    if(e.target.value.length > 0){
        console.log("Si hay algo");
    }else{
        e.target.style.borderBottomColor = "red";
        e.target.placeholder= "This field may not be empty";
    }
}