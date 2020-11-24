<?php 

class Entry extends Entity {

    public $key, $id, $nome, $cognome, $email, $note, $id_file;

    function __construct() {
        $this->key = 0;
        $this->id = 0;
        $this->nome = '';
        $this->cognome = '';
        $this->email = '';
        $this->note = '';
        $this->id_file = 0;

        $this->dbh = DBO::getInstance();
    }

    public function bind($data) {
        if(is_array($data)) {
            $this->key = isset($data['chiave'])?$data['chiave']:0;
            $this->id = isset($data['id'])?$data['id']:0;
            $this->nome = isset($data['nome'])?$data['nome']:'';
            $this->cognome = isset($data['cognome'])?$data['cognome']:'';
            $this->email = isset($data['email'])?$data['email']:'';
            $this->note = isset($data['note'])?$data['note']:'';
            $this->key_file = isset($data['key_file'])?$data['key_file']:'';

            return true;
        } else {
            throw new Exception("Formato dati errato", 1);            

            return false;
        }
    }

    public function load($cond) {
        try {            
            $sql = 'SELECT * FROM tblEntries WHERE ';
            $where = array();
            foreach($cond as $key => $val) {
                $valore = is_numeric($val)?$val:$this->dbh->quote($val);
                $where[] = $key . ' = ' . $valore;
            }            
            $sql .= implode(' AND ', $where);
            
            $stmt = $this->dbh->query($sql);
            
            $elem =  $stmt->fetch(PDO::FETCH_ASSOC);

            if(isset($elem['id'])) {
                $this->bind($elem);
            }
        } catch (PDOException $e) {
            throw new Exception($e->getMessage());            
        }
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
