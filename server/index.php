<?php
// 允许所有域的跨域请求
header("Access-Control-Allow-Origin: *");

// 允许特定的HTTP方法
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

// 允许特定的自定义标头
header("Access-Control-Allow-Headers: Content-Type");

// 允许跨域请求时包含凭据（例如在Ajax请求中使用withCredentials）
header("Access-Control-Allow-Credentials: true");

// 如果发出了预检请求（OPTIONS请求），则设置预检结果缓存时间（单位：秒）
header("Access-Control-Max-Age: 3600");

// 如果发出的请求是OPTIONS预检请求，立即结束脚本执行
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    echo("");
    exit(0);
}

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