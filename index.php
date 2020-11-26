<?php
error_reporting(ALL);
require_once './classes/entity.php';
require_once './classes/dbo.php';
require_once './classes/paginator.php';
require_once './classes/anagraficaTitoli.php';
require_once './models/anagraficaTitoli.php';
require_once './views/home/view.php';

use fm\classes;

try {
    $view = new View();
    $view->setError($error);
    $view->display();
} catch (\Throwable $th) {
    echo $th->getMessage();
}