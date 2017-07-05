<?php

header('Access-Control-Allow-Origin: *');

require_once("VoiceIt.php");

$myVoiceIt = new VoiceIt("e7def2592ee5401c938ec1a2fafa61a0");

$file = $_POST['file_name'];
$email = $_POST['username'];
$pass = $_POST['password'];

$path = 'recordings/'.$file;

// $result = $myVoiceIt->authentication("test@d.com", "darvesh", "recordings/".$file, "85", "en-US");

// $response = $myVoiceIt->authentication("test@d.com", "darvesh", $path, "85", "en-US");

$response = $myVoiceIt->authentication($email, $pass, $path, "85", "en-US");

echo $response;


?>