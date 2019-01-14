var cart = {};
function loadCart() {
    if(localStorage.getItem('cart')){
        // если есть расшифрованные данные в сторедж, то записываем в cart
        cart = JSON.parse(localStorage.getItem('cart'));
            showCart();
        }
    else {
        $('.main-cart').html('basket is empty');
    }
}


function showCart() {
    //вывод корзины
    if (!isEmpty(cart)) {
        $('.main-cart').html('Basket is empty!');
    }
    else {
        $('.main-cart').html('Your Basket');
        console.log('it is working');
        $.post("admin/core.php",

            {
                "action" : "loadBooks"
            },
            function(data) {

                var books = JSON.parse(data);
                 console.log(books);
                var out = '';
                for (var id in cart) {
                    out += `<p class="namecart">Name: ${books[id].name} </p>  `;
                    out += `<button data-id="${id}" class="del-books tools">x</button>`;
                    out +='<div class="itembooks">'
                    out += `<img src="images\\${books[id].img}">` ;
                    out += `<i class="desc">Description: ${books[id].shortdesc} <br></i>`;
                    out += `  `;
                    out += '<br>';
                    out += 'Price: '+books[id].price + ' euro';
                    out += '<br>';
                    out += `  <button data-id="${id}" class="minus-books">-</button>  `;
                    out += `  ${cart[id] }`;
                    out += `  <button data-id="${id}" class="plus-books">+</button>  `;
                    out += '<br>';
                    out += 'Sum: '+cart[id]*books[id].price+' euro';
                    out +='</div>';
                    out += '<br>';
                    out += '<hr>';
                }

                $('.main-cart').html(out);
                $('.del-books').on('click', delBooks);
                $('.plus-books').on('click', plusBooks);
                $('.minus-books').on('click', minusBooks);
            });
    }
}



function delBooks() {
    //удаление товара
    //получаю id товара по которому кликнули  $(this) это кнопка по которой кликнули, у нее есть атрибут data-id
    var id = $(this).attr('data-id');
    //удаляем по id
    delete cart[id];
    saveCart();//обязательно сохраняем состояние в локал сторедж после ужаления
    showCart();//перерисовываем корзину
}

function plusBooks() {
    //добавление товара
    //получаю id товара по которому кликнули  $(this) это кнопка по которой кликнули, у нее есть атрибут data-id
    var id = $(this).attr('data-id');
    //добавление по id
    cart[id]++;
    saveCart();//обязательно сохраняем состояние в локал сторедж после ужаления
    showCart();//перерисовываем корзину
}
function minusBooks() {
    //уменьшение товара
    //получаю id товара по которому кликнули  $(this) это кнопка по которой кликнули, у нее есть атрибут data-id
    var id = $(this).attr('data-id');

    if(cart[id]==1){
        delete cart[id];
    }
    else {
        cart[id]--;
    }
    saveCart();//обязательно сохраняем состояние в локал сторедж после ужаления
    showCart();//перерисовываем корзину
}
function saveCart() {
    localStorage.setItem('cart',JSON.stringify(cart)); //добавляет cart в строку, так как localsrorage работает только со строками
}

function isEmpty(object) {
    //проверка на пустоту корзины
    for (var key in object)
        if(object.hasOwnProperty(key)) return true;
    return false;
}

function sendEmail() {
    var address = $('#address').val();
    var fname = $('#fname').val();
    var email = $('#email').val();
    var amount = $('#amount').val();
    if(address!='' && fname!='' && email!='' && amount!='' ) {
        if(isEmpty(cart)){
        //ajax запрос
            $.post(
                 "core/mail.php",       //куда отправляем
                {
                    "address" : address,
                    "fname" : fname,
                    "email" : email,
                    "amount" : amount,
                    "cart" : cart
                },

                function (data) {
                     //в случае успешной отправки, функция обработает ответ
                     if(data==1){
                         alert('Order send');
                     }else{
                         alert('Repeat order');
                     }

                }
            );
    }
    else {
            alert('): basket is empty!')
        }
    }
    else {
        alert('fill fields');
    }


}



$(document).ready(function () {
    loadCart();
    $('.send-email').on('click', sendEmail); // отправить заказ
});
