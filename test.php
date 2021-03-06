<?php
require_once './classes/entity.php';
require_once './classes/dbo.php';
require_once './classes/paginator.php';
require_once './classes/anagraficaTitoli.php';
require_once './models/anagraficaTitoli.php';
require_once './controllers/fondi.php';
require_once './views/home2/view.php';

use fm\classes;
use fm\views;


if(isset($_GET['task']) && !empty($_GET['task'])) {
    try {
        $task = $_GET['task'];
        $part = explode('.', $task);

        $controller = new $part[0];
        $controller->{$part[1]}();        
    } catch (\Throwable $th) {
        echo $th->getMessage();
    }
} else {
    try {
        $view = new \fm\views\View();
        $view->setError($error);
        $view->display();
    } catch (\Throwable $th) {
        echo $th->getMessage();
    }
}

