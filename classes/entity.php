<?php 
namespace fm\classes;

abstract class Entity {
    protected $key;
    protected $table;
    protected $dbh;

    function __construct($table, $key) {
        $this->dbh = DBO::getInstance();
    }

    public function store($data = null) {
        if($data) {
            $this->bind($data);
        }

        if($this->key == 0) {
            return $this->insert();            
        } else {            
            return $this->update();            
        }
    }

    public function bind($data) {
        if(is_array($data)) {
            foreach($data as $key => $val) {
                $this->{$key} = $val;
            }         
            return true;
        } else {
            throw new Exception("Formato dati errato", 1);            

            return false;
        }
    }

    public function load($cond) {
        try {            
            $sql = 'SELECT * FROM ' . $this->table . ' WHERE ';
            $where = array();
            foreach($cond as $key => $val) {
                $valore = is_numeric($val)?$val:$this->dbh->quote($val);
                $where[] = $key . ' = ' . $valore;
            }            
            $sql .= implode(' AND ', $where);
            
            $stmt = $this->dbh->query($sql);
            
            $elem =  $stmt->fetch(PDO::FETCH_ASSOC);

            if(isset($elem[$this->key])) {
                $this->bind($elem);
            }
        } catch (PDOException $e) {
            throw new Exception($e->getMessage());            
        }
    }

    abstract function insert();

    abstract function update();

}