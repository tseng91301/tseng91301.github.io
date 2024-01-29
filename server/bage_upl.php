<?php
require_once("cors.php");

// Install PSR-4-compatible class autoloader
spl_autoload_register(function($class){
require str_replace('\\', DIRECTORY_SEPARATOR, ltrim($class, '\\')).'.php';
});
// Get Markdown class
use Michelf\Markdown;

$data_json = $_POST['data'];

if($data_json["from"] == null){
    $data_json["from"] = "Anonymous";
}

$md_text = $data_json["detail"];
$md_html = Markdown::defaultTransform($md_text);
$data_json["detail"] = $md_html;
$prev_data = json_decode(file_get_contents("info/notify.json"), true);
array_push($prev_data["notify_data"],$data_json);
file_put_contents("info/notify.json",json_encode($prev_data));
echo('["success"]');

?>
