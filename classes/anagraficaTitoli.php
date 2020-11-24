<?php 
namespace fm\classes;

class AnagraficaTitoli extends Entity {

    function __construct() {
        parent::__construct('anagrafica_titoli', 'id');
    }

    function insert() {
        try {
            $sql = "INSERT INTO tblEntries (id, nome, cognome, email, note, file_key) VALUES (?,?,?,?,?,?)";
            $stmt = $this->dbh->prepare($sql);            
            $result = $stmt->execute([(int)$this->id, $this->nome, $this->cognome, $this->email, $this->note, (int)$this->key_file]);

            $this->key = $this->dbh->lastInsertId();

            return $result;
        } catch (PDOException $e) {            
            throw new Exception($e->getMessage());

            return false;
        }
    }
    
    function update() {
        try {
            $sql = "UPDATE tblEntries SET id = ?, nome = ?, cognome = ?, email = ?, note = ?, file_key = ? WHERE chiave = ?";
            $stmt = $this->dbh->prepare($sql);
            return $stmt->execute([$this->id, $this->nome, $this->cognome, $this->email, $this->note, $this->key_file, $this->key]);
        } catch (PDOException $e) {
            throw new Exception($e->getMessage());
            return false;
        }
    }

}
