<?php 
namespace fm\models;

use fm\classes;

class AnagraficaTitoliModel {

    private $error = array();

    public function getItems() {
        try {
            $ordina = isset($_GET['ordina'])?$_GET['ordina']:'1-mese';
            $pagina = isset($_GET['pagina'])?$_GET['pagina']:1;
            $isin = isset($_GET['isin'])?$_GET['isin']:'';

            $limit = 30;
            $start = $limit * ($pagina - 1);

            $dbo = \fm\classes\DBO::getInstance();
            $sql = "SELECT fida_code, classifica_1_mese, nome_fondo, isin, mese, classifica_1_mese, anno,";
            $sql .= " classifica_1_anno, 3anni, classifica_3_anni, 5anni, classifica_5_anni, alias_nome_fondo_url";
            $sql .= " FROM anagrafica_titoli";

            if(!empty($isin)) {
                $sql .= " WHERE isin = ? OR nome_fondo LIKE ?";
            }

            switch($ordina) {
                case '1-mese':
                    $sql .= ' ORDER BY classifica_1_mese ASC';
                break;
                case '1-anno':
                    $sql .= ' ORDER BY classifica_1_anno ASC';
                break;
                case '3-anni':
                    $sql .= ' ORDER BY classifica_3_anni ASC';
                break;
                case '5-anni':
                    $sql .= ' ORDER BY classifica_5_anni ASC';
                break;
            }

            $sql .= ' LIMIT ' . $start . ', ' . $limit;

            $stmt = $dbo->prepare($sql);            
            $stmt->execute([$isin, "%$isin%"]);

            $rows = $stmt->fetchAll(\PDO::FETCH_ASSOC);

            return $rows;

        } catch (Exception $e) {
            throw $e;
            return array();
        }
    }

    public function getTotal() {
        try {
            $isin = isset($_GET['isin'])?$_GET['isin']:'';

            $dbo = \fm\classes\DBO::getInstance();
            $sql = "SELECT count(*) AS total FROM anagrafica_titoli";

            if(!empty($isin)) {
                $sql .= " WHERE isin = ? OR nome_fondo LIKE ?";
            }

            $stmt = $dbo->prepare($sql);
            $stmt->execute([$isin, "%$isin%"]);

            $total = $stmt->fetch();

            return $total['total'];
            
        } catch (\Throwable $th) {
            throw $th;            
        }
    }

    //TODO
    public function save($data) {
        try {
            return true;            
        } catch (Exception $e) {
            throw $e;
        }

    }

    //TODO
    public function check($data) {
        try {
            return true;
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function getError() {
        return $this->error;
    }

}