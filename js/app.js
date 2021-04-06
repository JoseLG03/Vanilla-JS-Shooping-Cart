'use strict';

const cart = document.querySelector("#divCart");

const cartPrice = document.querySelector("#cartPrice");

const listCupcake= document.querySelector("#container");

const tBody = document.querySelector("#listCart tbody");

const btnEmptyCart = document.querySelector("#emptyCart");

const btnAdd = document.querySelector(".cart_add");

let shoppingCart = [];

//console.log(cart);
//console.log(cartPrice);
//console.log(btnEmptyCart);
//console.log(listCart);
//console.log(tBody);

//Load listeners

    loadEventsListeners();

    function loadEventsListeners(){
 
        listCupcake.addEventListener("click", addToCart);

        btnEmptyCart.addEventListener("click", emptyCart);
    };

    function addToCart(e){

        e.preventDefault();

        if(e.target.classList.contains('add')){
            console.log("Agregar al carrito");
        }
    };

    function emptyCart(){
        console.log("Vaciar el carrito");
    };