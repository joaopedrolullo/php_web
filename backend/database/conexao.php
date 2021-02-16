<?php
  require 'config.php';
  //conexão com BD
  $conn = new mysqli($dbhost, $dbuser, $dbpassword, $dbname);
	if ($conn->connect_error) {
		die ('Conexão falhou (' . $conn->connect_errno . ') '
			. $conn->connect_error);
	}

	if (mysqli_connect_error()) {
		die('Conexão Falhou (' . mysqli_connect_errno() . ') '
					. mysqli_connect_error());
	}
?>