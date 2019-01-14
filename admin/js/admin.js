function init() {
    //функция init будет делать post запрос на файл core.php
    $.post(
        "core.php",
        {
                //в качестве переменной будет посылать action равный init
            "action" : "init"  // такая строка уходит на сервер
            //если action срабатывает, то заустится функция инит
        },
        showBooks
    );
}

function showBooks(data) {
    //получаем данные и парсим, чтобы получить объект
    data = JSON.parse(data);
    console.log(data);
    //теперь выводим объект на страницу
    var out = '<select>';
    out += '<option data-id="0">Add new books</options>';
    for (var id in data){
        out += `<option data-id="${id}">${data[id].name}</option>`;
    }
    out += '</select>';
    $('.books-out').html(out);
    $('.books-out select').on('change', selectBooks);
}

function selectBooks() {
    //получаем тот товар который выбрали, получаем id чтобы отправить его на сервер
    var id = $('.books-out select option:selected').attr('data-id');
    console.log(id);
    //отправляем запрос на сервер для вычитки товара
    $.post(
        "core.php", //куда посылаю
        {
            "action": "selectOneBooks", //что посылаю
            "gid": id
        },
        function (data) {
            data = JSON.parse(data);
            $('#gname').val(data.name);
            $('#gprice').val(data.price);
            $('#gdescr').val(data.shortdesc);
            $('#gorder').val(data.ord);
            $('#gimg').val(data.img);
            $('#ggenre').val(data.genre);
            $('#gauthor').val(data.author);
            $('#gid').val(data.id);


        }
    );
}

function saveToDb() {
    var id = $('#gid').val();//проверяем Id
    console.log(id);
    if(id!=""){
        $.post(
          "core.php",
            {
                // записываем в массив - первый параметр action, который равен updateGoods
                "action": "updateBooks",
                "id" : id,
                "gname" :  $('#gname').val(),
                "gprice" : $('#gprice').val(),
                "gdescr" : $('#gdescr').val(),
                "gorder" : $('#gorder').val(),
                "gimg" :   $('#gimg').val(),
                "ggenre" : $('#ggenre').val(),
                "gauthor": $('#gauthor').val()

            },
            function (data) {
              //если пришла единица то перерисовываем
                if(data==1){
                    alert('Record saved');
                    init();
                }
                else {
                    console.log(data);
                }
            }
        );
    }
    else{
        console.log('new');
        $.post(
            "core.php",
            {
                // записываем в массив - первый параметр action, который равен updateGoods
                "action": "newBooks",
                "id" : 0,
                "gname" :  $('#gname').val(),
                "gprice" : $('#gprice').val(),
                "gdescr" : $('#gdescr').val(),
                "gorder" : $('#gorder').val(),
                "gimg" :   $('#gimg').val(),
                "ggenre" : $('#ggenre').val(),
                "gauthor": $('#gauthor').val()

            },
            function (data) {
                //если пришла единица то перерисовываем
                if(data==1){
                    alert('Record added');
                    init();
                }
                else {
                    console.log(data);
                }
            }
        );
    }
}

function deleteToDb(data) {
    var id = $('#gid').val();//проверяем Id
    console.log(id);
    if(id!=""){
        $.post(
            "core.php",
            {
                // записываем в массив - первый параметр action, который равен updateGoods
                "action": "deleteBooks",
                "id" : id,
                "gname" :  $('#gname').val(),
                "gprice" : $('#gprice').val(),
                "gdescr" : $('#gdescr').val(),
                "gorder" : $('#gorder').val(),
                "gimg" :   $('#gimg').val(),
                "ggenre" : $('#ggenre').val(),
                "gauthor": $('#gauthor').val()

            },
            function (data) {
                //если пришла единица то перерисовываем
                if(data==1){
                    alert('Record deleted');
                    init();
                }
                else {
                    console.log(data);
                }
            }
        );
    }
    else{
        console.log('new');
        $.post(
            "core.php",
            {
                // записываем в массив - первый параметр action, который равен updateGoods
                "action": "newBooks",
                "id" : 0,
                "gname" :  $('#gname').val(),
                "gprice" : $('#gprice').val(),
                "gdescr" : $('#gdescr').val(),
                "gorder" : $('#gorder').val(),
                "gimg" :   $('#gimg').val(),
                "ggenre" : $('#ggenre').val(),
                "gauthor": $('#gauthor').val()

            },
            function (data) {
                //если пришла единица то перерисовываем
                if(data==1){
                    alert('Record deleted');
                    init();
                }
                else {
                    console.log(data);
                }
            }
        );
    }
}


$(document).ready(function () {
    init();
    $('.add-to-db').on('click', saveToDb);
    $('.delete-to-db').on('click', deleteToDb);
})