<?php 
libxml_use_internal_errors(true);
error_reporting(0);
$cadena = $_POST['text'];
$cadena = strtolower($cadena);

$coincidencias = array(
    array("asignar aula", "reservar aula", "ocupar aula"),
    array("aulas desocupadas", "aulas dispobibles"),
    
);

$acciones = array("asignar","disponibles");


echo $cadena;
?>