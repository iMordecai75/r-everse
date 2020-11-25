<?php 
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

    public function save($data) {
        try {
            if($this->check($data) !== true) {
                
                return false;
            }
            $entry = new Entry();            
            if($entry->bind($data) !== true) {
                $this->error[] = 'Errore nel formato dei dati';
                return false;
            }

            if(!$entry->store()) {
                $this->error[] = 'Errore nel salvataggio';
                return false;
            }

            return $entry->key;
            
        } catch (Exception $e) {
            throw $e;
        }

    }

    public function check($data) {
        $error = array();
        if(!is_int($data['id'])) {
            $error[] = "L'id deve essere un numero intero";
        }
        if(!is_string($data['nome'])) {
            $error[] = "Il nome deve essere una stringa";
        }
        if(!is_string($data['cognome'])) {
            $error[] = "Il cognome deve essere una stringa";
        }
        if(!empty($data['email']) && !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
            $error[] = "L'email non ha il formato corretto";
        }

        if(count($error) == 0) {            
            $this->path = $path;
            return true;
        } else {
            $this->error = array_merge($this->error, $error);
            return false;
        }
    }

    public function getError() {
        return $this->error;
    }

}