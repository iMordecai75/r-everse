<?php
use fm\models;

class fondi {

    public function items() {
        try {
            $model = new fm\models\AnagraficaTitoliModel();

            $items = $model->getItems();
            $total = $model->getTotal();
            $page = isset($_GET['pagina'])?$_GET['pagina']:1;
            $paginator = new fm\classes\paginator($total, 30, $page, 'ajax');            

            ob_start();

            include __DIR__ . '/../layouts/table.php';

            $output = ob_get_contents();
            ob_end_clean();

            header('Content-Type: application/json');
            echo json_encode(
                array(
                    'status' => 'OK',
                    'html' => $output,
                    'paginazione' => $paginator->render()
                    )
            );

        } catch (\Throwable $th) {
            throw $th;
        }
    }
}