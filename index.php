<?php
if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['ip'])){
    $ip_addr = $_POST['ip'];
    putenv("REMOTE_SERVER_IP=".$ip_addr);
    http_response_code(200);
}elseif($_SERVER['REQUEST_METHOD'] == 'GET'){
    $ip_addr = getenv("REMOTE_SERVER_IP");
    echo("IP Address Now: ".$ip_addr);
}
?>