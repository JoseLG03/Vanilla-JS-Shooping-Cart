'use strict';

const cart = document.querySelector("#divCart");

const cartPrice = document.querySelector("#cartPrice");

const listCupcake= document.querySelector("#container");

const tBody = document.querySelector("#listCart tbody");

const btnEmptyCart = document.querySelector("#emptyCart");

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
            const cupcakeSelected = e.target.parentElement.parentElement.parentElement;

            readInfoCake(cupcakeSelected);
        }
    };

    function emptyCart(){
        console.log("Vaciar el carrito");
    };

    function readInfoCake(e){
        console.log(e);
        let infoCake ={
            //img: e.querySelector('img').src,
            //name: e.querySelector('h6 a').textContent,
            //price: e.querySelector('product__item__price').textContent,
            id: e.querySelector('a').getAttribute('data-id'),
            count: 1
        }
        console.log(infoCake);
    };