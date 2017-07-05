<?php 

session_start();

if(isset($_POST['load_data'])){

	$username = $_SESSION['username'];
	echo $username;

}else if(isset($_POST['log_out'])){

	session_destroy();

}

?>