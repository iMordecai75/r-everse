<?php 
use fm\classes;

class AnagraficaTitoliModel {

    private $error = array();

    public function getItems() {
        try {
            $dbo = \fm\classes\DBO::getInstance();
            $sql = "SELECT * FROM anagrafica_titoli ORDER BY mese DESC LIMIT 0, 30";
            $stmt = $dbo->prepare($sql);
            $stmt->execute();

            $rows = $stmt->fetchAll(\PDO::FETCH_ASSOC);

            return $rows;

        } catch (Exception $e) {
            throw $e;
            return array();
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