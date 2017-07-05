<?php

require_once("VoiceIt.php");

$myVoiceIt = new VoiceIt("e7def2592ee5401c938ec1a2fafa61a0");

$file = $_POST['file_name'];

//$response = $myVoiceIt->createUser("test@d.com", "darvesh", "Darvesh", "Punia");

$response = $myVoiceIt->createEnrollment("test@d.com", "darvesh", "recordings/".$file, "en-US");

echo json_encode($response);


?>