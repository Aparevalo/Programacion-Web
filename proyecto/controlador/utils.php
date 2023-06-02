<?php

class Utils {
    private $client;
    private $database;
    
    public function __construct($database) {
        $this->client = new MongoDB\Client("mongodb://localhost:27017");
        $this->database = $database;
    }
    
    public function insert($coleccion, $documento) {
        $db = $this->client->selectDatabase($this->database);
        $collection = $db->selectCollection($coleccion);
        
        $collection->insertOne($documento);
    }
    
    public function findById($coleccion, $id) {
        $db = $this->client->selectDatabase($this->database);
        $collection = $db->selectCollection($coleccion);
        
        $query = ['_id' => new MongoDB\BSON\ObjectId($id)];
        $resultado = $collection->findOne($query);
        
        return $resultado;
    }
    
    public function findByAttribute($coleccion, $atributo, $valor) {
        $db = $this->client->selectDatabase($this->database);
        $collection = $db->selectCollection($coleccion);
        
        $query = [$atributo => $valor];
        $resultado = $collection->find($query);
        
        return $resultado;
    }
    
    public function update($coleccion, $id, $nuevosDatos) {
        $db = $this->client->selectDatabase($this->database);
        $collection = $db->selectCollection($coleccion);
        
        $query = ['_id' => new MongoDB\BSON\ObjectId($id)];
        $update = ['$set' => $nuevosDatos];
        
        $collection->updateOne($query, $update);
    }
    
    public function delete($coleccion, $id) {
        $db = $this->client->selectDatabase($this->database);
        $collection = $db->selectCollection($coleccion);
        
        $query = ['_id' => new MongoDB\BSON\ObjectId($id)];
        
        $collection->deleteOne($query);
    }
}

?>
