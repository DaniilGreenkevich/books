var cart = {}; // basket

function init1() {

    $.post(
        "admin/core.php",
        {
            "action" : "loadBooks"
        },
        booksGet
    );
}


function initAuthor() {

    $("div.content").remove();
    $.post(
        "admin/core.php",
        {
            "action" : "loadAuthors"

        },
        authorsGet
    );
}
function initAuthor2() {

    $("div.content").remove();
    $.post(
        "admin/core.php",
        {
            "action" : "loadAuthors2"

        },
        authorsGet
    );
}

function initAuthor3() {

    $("div.content").remove();
    $.post(
        "admin/core.php",
        {
            "action" : "loadAuthors3"

        },
        authorsGet
    );
}

function initFantasy() {

    $("div.content").remove();
    $.post(
        "admin/core.php",
        {
            "action" : "loadFantasy"

        },
        authorsGet
    );
}

function initComics() {

    $("div.content").remove();
    $.post(
        "admin/core.php",
        {
            "action" : "loadComics"

        },
        authorsGet
    );
}

function booksGet(data) {
    //вывод на страницу
    data = JSON.parse(data);
    console.log(data);
    var out='';
    for(var key in data){

        out +='<div class="itembook">';
        out +=`<p class="name">${data[key].name}</p>`;
        out +=`<div class="itemauthor" >${data[key].author}</div>`;
        out +=`<img src="images/${data[key].img}" alt="">`;
        out +=`<div class="price" >${data[key].price}</div>`;
        out +=`<button class="order" data-id="${key}">Order now</button>`;
        out +='</div>';
    }
    $('.books').html(out);
    $('.order').on('click',addToCart);
}


function authorsGet(data) {
    //вывод на страницу
    data = JSON.parse(data);
    console.log(data);
    var out='';
    for(var key in data){

        out +='<div class="itembook">';
        out +=`<p class="name">${data[key].name}</p>`;
        out +=`<div class="itemauthor" >${data[key].author}</div>`;
        out +=`<img src="images/${data[key].img}" alt="">`;
        out +=`<div class="price" >${data[key].price}</div>`;
        out +=`<button class="order" data-id="${key}">Order now</button>`;

        out +='</div>';

    }
    $('.authors').html(out);
    console.log('send');
    $('.order').on('click',addToCart);
}

function addToCart() {
    //функция добавления в корзину
    var id = $(this).attr('data-id');
   // console.log(id);
    if(cart[id] == undefined){
        cart[id] = 1;
    }
    else {
        cart[id]++;// если есть книга, то + 1
    }
    showMiniCart();
    saveCart();
}

function saveCart() {
    localStorage.setItem('cart',JSON.stringify(cart)); //добавляет cart в строку, так как localsrorage работает только со строками
}

function showMiniCart(data) {
    var out = '';
    for (var key in cart){
        out += key + '----' + cart[key]+'<br>';
    }
    $('.mini-cart').html(out);
}

function loadCart() {
    if(localStorage.getItem('cart')){
        // если есть расшифрованные данные в сторедж, то записываем в cart
        cart = JSON.parse(localStorage.getItem('cart'));
        showMiniCart();
    }

}
function clearCart() {
    localStorage.clear();
    window.location.reload();

}


$(document).ready(function () {

    init1();
    loadCart();
    $('.clearcart').on('click',clearCart);
});