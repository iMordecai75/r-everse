<?php 
//error_reporting(0);
include './classes/entity.php';
include './classes/dbo.php';
include './classes/reader.php';
include './classes/entry.php';
include './classes/file.php';
include './models/file.php';
include './models/entry.php';
include './views/view.php';

//$filename = 'data/CONTAQ_OUTBOUND_33_20201026.csv';

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

