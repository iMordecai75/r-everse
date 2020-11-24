<?php 
error_reporting(ALL);
require_once './classes/entity.php';
require_once './classes/dbo.php';
require_once './classes/anagraficaTitoli.php';
require_once './models/anagraficaTitoli.php';
require_once './views/view.php';

use fm\classes;
/*
try {
    $error = array();
    $dir = './data';
    $reader = new Reader();

    $files = $reader->readDirectory($dir);
    foreach($files as $file) {
        $filename = $dir . '/' . $file;

        $part = $reader->load($filename);        
        $filemodel = new FileModel();
        $entrymodel = new EntryModel();
        if(($key_file = $filemodel->save($part)) !== false) {            
            $rows = $reader->getContent();
            foreach($rows as $row) {
                $row['key_file'] = $key_file;                
                if($entrymodel->save($row)) {

                }
            }            
        }
    }

    $error = array_merge($error, $filemodel->getError());
    
    $view = new View();
    $view->setError($error);
    $view->display();
} catch (Exception $th) {
    die($th->getMessage());
}
*/

try {
    $error = array();
    $model = new AnagraficaTitoliModel();
    $items = $model->getItems();
    echo '<pre>' . print_r($items, true) . '</pre>';
} catch (\Throwable $th) {
    //throw $th;
    echo $th->getMessage();
}
