<?php

$host = 'localhost'; 
$port = 27017; 
$database = 'Proyecto'; 


$mongo = new MongoDB\Driver\Manager("mongodb://$host:$port");

$filter = []; 
$options = [];
$query = new MongoDB\Driver\Query($filter, $options);
$cursor = $mongo->executeQuery("$database.Asignacion", $query);

?>