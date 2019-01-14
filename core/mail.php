<?php
//читаем json из корзины
$json = file_get_contents('../books.json');
//декодируем строку в массив
$json = json_decode($json, true);


//создаем письмо
$message = '';
$message .= '<h1>Order in shop</h1>';
$message .= '<p>Address: '.$_POST['address'].'</p>';
$message .= '<p>Full Name: '.$_POST['fname'].'</p>';
$message .= '<p>email: '.$_POST['email'].'</p>';
$message .= '<p>Amount: '.$_POST['amount'].'</p>';

//Корзина которую ввел пользователь
$cart = $_POST['cart'];


//количество товара который ввел пользователь
//$id - id товара $count - кол-во товара
$sum = 0;
foreach ($cart as $id=>$count) {
    $message .='All for pay: '.$sum;
    $message .= $json[$id]['name'].' --- ';
    $message .= $count. ' --- ';
    $message .= $count*$json[$id]['price'];
    $message .= '<br>';
    $sum = $sum + $count*$json[$id]['price'];
}

$to = 'danilgorbunov@gmail.com'.',';
$to .= $_POST['email']; //то что введет пользователь
//так как html письмо надо ввести док тайп
$spectext = '<!DOCTYPE HTML><html><head><title>Заказ</title></head><body>';
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
//headers - заголовок
//отправка - $to - кому
$m = mail($to, 'Order in shop', $spectext.$message.'</body></html>', $headers);

if ($m) {echo 1;} else {echo 0;}
