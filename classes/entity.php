<?php 

abstract class Entity {

    function __construct() {
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

    abstract function bind($data);

    abstract function insert();

    abstract function update();

}