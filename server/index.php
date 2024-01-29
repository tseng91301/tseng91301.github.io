<?php
require_once("cors.php");


if($_SERVER['REQUEST_METHOD']=='GET'){
    // 设置响应的Content-Type为JSON
    header('Content-Type: application/json');
    try{
        $content = file_get_contents("info/".$_GET['data'].".json");
        echo($content);
    }catch(Exception $e){
        echo("{}");
    }
}

?>