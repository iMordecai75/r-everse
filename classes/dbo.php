<?php 

class DBO {

    private $dbo = null;
    private $host = 'localhost';
	private $dbname = 'moneycontroller';
	private $user = 'root';
	private $pass = 'root';
    private static $instance = null;

    public static function getInstance() {
        if(self::$instance == null) {
            self::$instance = new DBO();
        }

        return self::$instance;
    }

    function __construct() {        
        $this->dbo = new PDO ("mysql:host = $this->host;dbname=$this->dbname", $this->user, $this->pass);
    }

    public function prepare($sql) {
        return $this->dbo->prepare($sql);
    }

    public function lastInsertId($name = null) {
        return $this->dbo->lastInsertId($name);
    }

    public function quote($string, $parameter_type = PDO::PARAM_STR) {
        return $this->dbo->quote($string, $parameter_type);
    }

    public function query($sql) {
        return $this->dbo->query($sql);
    }

}