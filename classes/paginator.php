<?php 

class paginator {
    private $total;
    private $limit;
    private $page;

    function __construct($total, $limit, $page) {
        $this->total = (int)$total;
        $this->limit = (int)$limit;
        $this->page = (int)$page;
    }

    public function render() {
        $url = $this->parseUrl();
        $pages = ceil($this->total/$this->limit);
        $page = $this->page;
        $html = array();
        $html[] = '<ul>';

        for($x = 1; $x<=$pages; $x++) {
            if($page == $x) {
                $html[] = '<li class="active">' . $x . '</li>';
            } else {
                if($x == 1) {
                    $html[] = '<li><a href="' . $url . 'pagina=' . $x . '">' . $x . '</a></li>';
                } else if ($x == $pages) {
                    $html[] = '<li><a href="' . $url . 'pagina=' . $x . '">' . $x . '</a></li>';
                } else if($x > $page && $x < ($page + 3)){
                    $html[] = '<li><a href="' . $url . 'pagina=' . $x . '">' . $x . '</a></li>';
                } else if($x == ($page-1)){
                    $html[] = '<li><a href="' . $url . 'pagina=' . $x . '"><<</a></li>';
                } else if($x == ($page + 3)) {
                    $html[] = '<li><a href="' . $url . 'pagina=' . $x . '">>></a></li>';
                }
            }            
        }
        $html[] = '</ul>';

        return implode(' ', $html);
    }

    private function parseUrl() {
        $url = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'];
        $queryString = $_SERVER['QUERY_STRING'];

        parse_str($queryString, $params);
        unset($params['pagina']);

        $query = array();
        foreach($params as $key => $val) {
            $query[] = $key . '=' . $val;
        }
        $url = $url . '?' . implode('&',$query);

        return $url . (count($params)?'&':'');
    }
}