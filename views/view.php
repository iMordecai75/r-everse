<?php 

class View {

    private $error = array();

    function __construct() {}

    public function display() {   

        try {
            $error = array();
            $model = new AnagraficaTitoliModel();
            $items = $model->getItems();            
        } catch (\Throwable $th) {
            //throw $th;
        }
        try {
            ob_start();

            include __DIR__ . '/tmpl/layout.php';

            $output = ob_get_contents();
            ob_end_clean();

            echo $output;
        } catch (Exception $e) {
            throw $e;
        }       
    }

    public function setError($error) {
        $this->error = $error;
    }
}