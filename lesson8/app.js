'use strict';
let number = 0;
let basketText = document.createElement('p');
let btn = document.querySelectorAll('.catalog-showcase__dropbox-button');
let basketNumber = document.querySelector('.header__basket-number');
let headerBasketFinish = document.querySelector('.header__basket-finish');
let priceNumber = 1;
let basketProduct = ' ';
let search = 0;
let totalPrice = '';
let finishTotalPrice = 0;
let basketButton = document.querySelector('.header__basket');

basketButton.addEventListener('click', function(){
    if (headerBasketFinish.getAttribute('style') == "display: none;") {
        headerBasketFinish.setAttribute('style', 'display: block;')
    } 
    else {
        headerBasketFinish.setAttribute('style', 'display: none;')
    } 
})

btn.forEach(function(button){
    button.addEventListener('click', clickHandler)
})

function clickHandler(event){
    let search = 0;
    number++;
    basketNumber.setAttribute('style','display: block;')
    basketNumber.appendChild(basketText)
    basketText.innerText = number;
    let div = document.querySelectorAll('.header__basket-finish div');
    let title1 = event.currentTarget.parentNode.parentNode.children[2];
    let price1 = event.currentTarget.parentNode.parentNode.children[4];
    let newPrice =price1.innerText.replace('$','');
    basketProduct =`${title1.innerText} ${price1.innerText}`
    console.log(basketProduct)

    if (number <= 1) {
        priceNumber = 1;
        totalPrice = newPrice * priceNumber;
        let basketDiv = document.createElement('div');
        headerBasketFinish.appendChild(basketDiv)
        basketProduct = `${title1.innerText} ${price1.innerText} ${priceNumber} шт $${totalPrice}`
        basketDiv.textContent = basketProduct
    }
    
    if (number > 1) {
        for (let i = 0; i < div.length; i++){
            if (div[i].innerText.includes(basketProduct)) {
                priceNumber = div[i].innerText.slice(29,31);
                priceNumber++;
                totalPrice = newPrice * priceNumber;
                basketProduct =`${title1.innerText} ${price1.innerText} ${priceNumber} шт $${totalPrice}`
                div[i].innerText = basketProduct
                search++
            }     
        }

        if (search <1) {
            priceNumber = 1;
            totalPrice = newPrice * priceNumber;
            let basketDiv = document.createElement('div');
            headerBasketFinish.appendChild(basketDiv)
            basketProduct = `${title1.innerText} ${price1.innerText} ${priceNumber} шт $${totalPrice}`
            basketDiv.innerText = basketProduct 
        }
    }
    let remove1 =document.querySelectorAll('.header__basket-finish h4');
    remove1.forEach(function(elem) {
        elem.remove()
    })
    
    finishTotalPrice = finishTotalPrice + Number(newPrice);
    let basketDiv = document.createElement('h4');
    headerBasketFinish.appendChild(basketDiv);
    basketDiv.innerText = `Товаров в корзине на сумму: $ ${finishTotalPrice}`;
    
}

