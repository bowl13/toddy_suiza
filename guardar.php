<?php 
   $hostname_cnx = "localhost";
   $database_cnx = "toddycl";
   $username_cnx = "toddycl";
   $password_cnx = "pepsico";

   $cnx = mysql_pconnect($hostname_cnx, $username_cnx, $password_cnx) or trigger_error(mysql_error(),E_USER_ERROR);
   mysql_select_db($database_cnx, $cnx);

	$query = mysql_query("INSERT INTO toddy_suiza (`nombre` , 
												`apellido` ,  
												`rut` ,
												`email`, 
												`celular`,
												`direccion` ,
												`comuna` , 
												`region` ,
												`boleta` ,
												`ip` 
												) VALUES (
												'".utf8_decode(ucwords(strtolower($_POST['nombre'])))."',
												'".utf8_decode(ucwords(strtolower($_POST['apellido'])))."',
												'".utf8_decode(strtolower($_POST['rut']))."',
												'".utf8_decode(strtolower($_POST['email']))."',
												'".utf8_decode(ucwords(strtolower($_POST['celular'])))."',
												'".utf8_decode(ucwords(strtolower($_POST['direccion'])))."',
												'".utf8_decode(ucwords(strtolower($_POST['comuna'])))."',
												'".utf8_decode(ucwords(strtolower($_POST['region'])))."',
												'".utf8_decode(ucwords(strtolower($_POST['boleta'])))."',
												'".$_SERVER['REMOTE_ADDR']."')") or die(mysql_error());
												
												echo $query;
?>