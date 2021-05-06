'use strict';

//variables

const inputName = document.querySelector("#inputName");
const inputEmail = document.querySelector("#inputEmail");
const inputMessage = document.querySelector("#inputMessage");

const btnSend = document.querySelector("#send");

const divName = document.querySelector("#divName");

//Event Listeners

eventListeners();

function eventListeners(){
    document.addEventListener("DOMContentLoaded", startForm);
    inputName.addEventListener("blur", validateForm);
    inputEmail.addEventListener("blur", validateForm);
    inputMessage.addEventListener("blur", validateForm);
}

//functions

function startForm(){
    btnSend.disabled = true;
    //btnSend.classList.add("disabled");
}

function validateForm(e){
    if(e.target.value.length > 0){
        btnSend.disabled = false;
        e.target.style.borderColor = "#e1e1e1";
    }else{
        e.target.style.borderColor = "red";
        //e.target.placeholder= "This field may not be empty";
            if(e.target.id === "inputName"){
                displayError(e.target.parentElement.id);
            }else if(e.target.id === "inputEmail"){
                displayError(e.target.parentElement.id);
            }else if(e.target.id === "inputMessage"){
                displayError(e.target.parentElement.id);
            };
        }
    }

function displayError(e){

    const divName = document.querySelector(`#${e}`);
    const msjError = document.createElement("p");
    const classError = document.querySelectorAll(".error");

    console.log(classError);

    msjError.classList.add("error");
    msjError.textContent = "This field may not be empty.";
    
    if(classError.length === 0){
        divName.appendChild(msjError);
    }
}