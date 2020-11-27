<?php 
namespace fm\views;

class View {

    private $error = array();

    function __construct() {}

    public function display() {   

        try {
            $error = array();
            $model = new \fm\models\AnagraficaTitoliModel();
            $items = $model->getItems();
            $total = $model->getTotal();
            $page = isset($_GET['pagina'])?$_GET['pagina']:1;
            $paginator = new \fm\classes\paginator($total, 30, $page);
        } catch (\Throwable $th) {
            throw $th;
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