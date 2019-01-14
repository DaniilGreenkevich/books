<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "catbook";

function connect(){
    $conn = new mysqli("localhost", "root", "", catbook);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    mysqli_set_charset($conn, "utf8");
    return $conn;
}

function init(){
    //вывожу список товаров из базы
    $conn = connect();
    $sql = "SELECT id, name FROM books";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $out = array();
        // output data of each row
        while($row = $result->fetch_assoc()) {
            $out[$row["id"]]= $row;
        }
        //для удобства перебора массив пакуем в строку
        echo json_encode($out);
    } else {
        echo "0";
    }
    $conn->close();
}
function selectOneBooks(){
    $conn = connect(); //подключение
    $id = $_POST['gid'];
    $sql = "SELECT * FROM books WHERE id='$id'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        echo json_encode($row);
    } else {
        echo "0";
    }
    $conn->close();
}

function updateBooks (){
    $conn = connect(); //подключение
    $id = $_POST['id'];
    $name = $_POST['gname'];
    $price = $_POST['gprice'];
    $descr = $_POST['gdescr'];
    $img = $_POST['gimg'];
    $ord = $_POST['gorder'];
    $genre = $_POST['ggenre'];
    $author = $_POST['gauthor'];

    $sql = "UPDATE books SET name='$name', price = '$price', shortdesc = '$descr', img = '$img', ord = '$ord', genre = '$genre',
 author = '$author'  WHERE id = '$id' ";

    if ($conn->query($sql) === TRUE) {
        echo "1";
    } else {
        echo "Error updating record: " . $conn->error;
    }


    $conn->close();
    //writeJSON();
}

function deleteBooks (){
    $conn = connect(); //подключение
    $id = $_POST['id'];
    $name = $_POST['gname'];
    $price = $_POST['gprice'];
    $descr = $_POST['gdescr'];
    $img = $_POST['gimg'];
    $ord = $_POST['gorder'];
    $genre = $_POST['ggenre'];
    $author = $_POST['gauthor'];

    $sql = "Delete FROM books WHERE id = '$id' ";

    if ($conn->query($sql) === TRUE) {
        echo "1";
    } else {
        echo "Error updating record: " . $conn->error;
    }


    $conn->close();
    //writeJSON();
}


function newBooks (){
    $conn = connect(); //подключение
    $name = $_POST['gname'];
    $price = $_POST['gprice'];
    $descr = $_POST['gdescr'];
    $img = $_POST['gimg'];
    $ord = $_POST['gorder'];
    $genre = $_POST['ggenre'];
    $author = $_POST['gauthor'];

    $sql = "INSERT INTO books (name, price, shortdesc, img, ord, genre, author)
VALUES ('$name', '$price','$descr', '$img', '$ord', '$genre', '$genre')";

    if (mysqli_query($conn, $sql)) {
        echo "1";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    $conn->close();
}


function loadBooks(){
    $conn = connect();
    $sql = "SELECT * FROM books";
    //Выполняем запрос
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {  //если я выбираю больше строк чем 0, то создаю пустой массив
        $out = array(); //пустой массив
        // output data of each row
        while($row = $result->fetch_assoc()) {
            $out[$row["id"]]= $row;
        }
        //для удобства перебора массив пакуем в строку
        echo json_encode($out);
    } else {
        echo "0";
    }
    $conn->close();
}

function loadAuthors(){
    $conn = connect();
    //тут конечно надо сделать запрос на сервер, а не писать функции под каждого автора))
    $sql = "SELECT * FROM books WHERE author='Joanne Rowling'";
//    $sql = "SELECT author FROM books";
    //Выполняем запрос
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {  //если я выбираю больше строк чем 0, то создаю пустой массив
        $out = array(); //пустой массив
        // output data of each row
        while($row = $result->fetch_assoc()) {
            $out[$row["id"]]= $row;
        }
        //для удобства перебора массив пакуем в строку
        echo json_encode($out);
    } else {
        echo "0";
    }
    $conn->close();
}

function loadAuthors2(){
    $conn = connect();
    //тут конечно надо сделать запрос на сервер, а не писать функции под каждого автора))
    $sql = "SELECT * FROM books WHERE author='Marvel'";
//    $sql = "SELECT author FROM books";
    //Выполняем запрос
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {  //если я выбираю больше строк чем 0, то создаю пустой массив
        $out = array(); //пустой массив
        // output data of each row
        while($row = $result->fetch_assoc()) {
            $out[$row["id"]]= $row;
        }
        //для удобства перебора массив пакуем в строку
        echo json_encode($out);
    } else {
        echo "0";
    }
    $conn->close();
}

function loadAuthors3(){
    $conn = connect();
    //тут конечно надо сделать запрос на сервер, а не писать функции под каждого автора))
    $sql = "SELECT * FROM books WHERE author='Robert Kane'";
//    $sql = "SELECT author FROM books";
    //Выполняем запрос
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {  //если я выбираю больше строк чем 0, то создаю пустой массив
        $out = array(); //пустой массив
        // output data of each row
        while($row = $result->fetch_assoc()) {
            $out[$row["id"]]= $row;
        }
        //для удобства перебора массив пакуем в строку
        echo json_encode($out);
    } else {
        echo "0";
    }
    $conn->close();
}

function loadFantasy(){
    $conn = connect();
    //тут конечно надо сделать запрос на сервер, а не писать функции под каждого автора))
    $sql = "SELECT * FROM books WHERE genre='fantasy'";
//    $sql = "SELECT author FROM books";
    //Выполняем запрос
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {  //если я выбираю больше строк чем 0, то создаю пустой массив
        $out = array(); //пустой массив
        // output data of each row
        while($row = $result->fetch_assoc()) {
            $out[$row["id"]]= $row;
        }
        //для удобства перебора массив пакуем в строку
        echo json_encode($out);
    } else {
        echo "0";
    }
    $conn->close();
}

function loadComics(){
    $conn = connect();
    //тут конечно надо сделать запрос на сервер, а не писать функции под каждого автора))
    $sql = "SELECT * FROM books WHERE genre='comics'";
//    $sql = "SELECT author FROM books";
    //Выполняем запрос
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {  //если я выбираю больше строк чем 0, то создаю пустой массив
        $out = array(); //пустой массив
        // output data of each row
        while($row = $result->fetch_assoc()) {
            $out[$row["id"]]= $row;
        }
        //для удобства перебора массив пакуем в строку
        echo json_encode($out);
    } else {
        echo "0";
    }
    $conn->close();
}




