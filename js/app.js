'use strict';

const cart = document.querySelector("#divCart");

const cartPrice = document.querySelector("#cartPrice");

const listCupcake= document.querySelector("#container");

const tBody = document.querySelector("#listCart tbody");

const btnEmptyCart = document.querySelector("#emptyCart");

let shoppingCart = [];

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
        let infoCake ={
            img: e.querySelector('div').getAttribute('data-setbg'),
            name: e.querySelector('.product__item__text h6 a').textContent,
            price: e.querySelector('.product__item__price').textContent,
            id: e.querySelector('.add').getAttribute('data-id'),
            count: 1
        }

        shoppingCart = [...shoppingCart,infoCake];
        
        cartHTML();
    };

    function cartHTML(){

        cleanHTML();

        shoppingCart.forEach(e => {
            let row = document.createElement('tr');
            //row.classList.add(""); 
            console.log(row);
            row.innerHTML=`
                <td class=".shopping__cart__table table thead">
                    ${e.name}
                </td>
            `;
            
            tBody.appendChild(row);
        });
    
    }

    function cleanHTML(){
        tBody.innerHTML="";
    }