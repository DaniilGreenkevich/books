<?php
//получаем переменную post
$action = $_POST['action'];

require_once 'function.php';

switch ($action) {
    case 'init':
        init();
        break;
    case 'selectOneBooks' :
        selectOneBooks();
        break;
    case 'updateBooks':
        updateBooks();
        break;
    case 'newBooks':
        newBooks();
        break;
    case 'loadBooks':
        loadBooks();
        break;
    case 'deleteBooks':
        deleteBooks();
        break;
    case 'loadAuthors':
        loadAuthors();
        break;
    case 'loadAuthors2':
        loadAuthors2();
        break;
    case 'loadAuthors3':
        loadAuthors3();
        break;
    case 'loadFantasy':
        loadFantasy();
        break;
    case 'loadComics':
        loadComics();
        break;
}