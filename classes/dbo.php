<?php 
namespace fm\classes;

class DBO {

    private $dbo = null;
    private $host = '62.149.150.110';
    //private $dbname = 'moneycontroller';
    private $dbname = 'Sql319510_4';
	private $user = 'Sql319510';
	private $pass = 'a296210b';
    private static $instance = null;

    public static function getInstance() {
        if(self::$instance == null) {
            self::$instance = new DBO();
        }

        return self::$instance;
    }

    function __construct() {        
        $this->dbo = new \PDO ("mysql:host=$this->host;dbname=$this->dbname", 
                                $this->user, 
                                $this->pass,
                                array(
                                    \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION,
                                    \PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"
                                ));
    }

    public function prepare($sql) {
        return $this->dbo->prepare($sql);
    }

    public function lastInsertId($name = null) {
        return $this->dbo->lastInsertId($name);
    }

    public function quote($string, $parameter_type = \PDO::PARAM_STR) {
        return $this->dbo->quote($string, $parameter_type);
    }

    public function query($sql) {
        return $this->dbo->query($sql);
    }

}