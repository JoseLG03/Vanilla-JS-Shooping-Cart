'use strict';

const cart = document.querySelector("#divCart");

const cartPrice = document.querySelector("#cartPrice");

const listCupcake= document.querySelector("#container");

const tBody = document.querySelector("#listCart tbody");

const btnEmptyCart = document.querySelector("#emptyCart");

let shoppingCart = [];

//Load listeners

    function loadEventsListeners(){
 
        listCupcake.addEventListener("click", addToCart);

        cart.addEventListener("click", eraseCupcake);
    };

    loadEventsListeners();

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

    function eraseCupcake(e){
        
        if(e.target.classList.contains("eraseCupcake")){
            const idCupcake = e.target.getAttribute("data-id");

            shoppingCart = shoppingCart.filter( e => e.id !== idCupcake);

            cartHTML();
        }
    }

    function readInfoCake(e){
        let infoCake ={
            img: e.querySelector('div').getAttribute('data-setbg'),
            name: e.querySelector('.product__item__text h6 a').textContent,
            price: e.querySelector('.product__item__price').textContent,
            id: e.querySelector('.add').getAttribute('data-id'),
            count: 1
        }

        const exist = shoppingCart.some( e => e.id=== infoCake.id);

        if(exist){
            const cupcake = shoppingCart.map( e =>{
                if(e.id=== infoCake.id){
                    e.count++;
                    return e;
                }else{
                    return e;
                }
            })
            shoppingCart = [...cupcake];
        }else{
            shoppingCart = [...shoppingCart,infoCake];
        }
        
        cartHTML();
    };

    function cartHTML(){

        cleanHTML();

        shoppingCart.forEach(e => {
            const{img, name, price, count,id} =  e;
            let row = document.createElement('tr');
             
            row.innerHTML=`
                <td class=".shopping__cart__table table thead">
                    <img src="${img}" />
                </td>
                <td class=".shopping__cart__table table thead">
                    ${name}
                </td>
                <td class=".shopping__cart__table table thead">
                    ${price}
                </td>
                <td class=".shopping__cart__table table thead">
                    ${count}
                </td>
                <td class=".shopping__cart__table table thead">
                    <a href="#" class="eraseCupcake" data-id="${id}"> X </a>
                </td>
            `;
            
            tBody.appendChild(row);
        });
    
    }

    function cleanHTML(){
        while(tBody.firstChild){
            tBody.removeChild(tBody.firstChild);
        }
    }
    