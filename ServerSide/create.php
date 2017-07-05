<?php

require_once("VoiceIt.php");

// require 'init_voice_it.php';

$myVoiceIt = new VoiceIt("e7def2592ee5401c938ec1a2fafa61a0");


//if(isset($_POST['email']) and isset($_POST['pass'])){
	// $get_email = $_POST['email'];
	// $get_pass = $_POST['pass']; 
	echo json_encode($myVoiceIt->createUser("simple@gmail.com", "1234567", "Darvesh", "Punia","7845454785","",""));
	 // print $response = $myVoiceIt->createUser("developer@voiceit-tech.com", "d0CHipUXOk", "John", "Doe");
//}


?>