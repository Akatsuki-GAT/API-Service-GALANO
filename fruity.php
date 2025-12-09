
<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

if (!isset($_GET["fruit"])) {
    echo json_encode(["error" => "Fruit not specified"]);
    exit;
}

$fruit = $_GET["fruit"];
$url = "https://www.fruityvice.com/api/fruit/$fruit";

echo file_get_contents($url);
?>