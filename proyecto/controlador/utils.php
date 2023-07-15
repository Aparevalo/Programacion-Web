<?php

class Utils {
    private $mongo;
    private $database;
    private $collectionName;

    public function __construct($host, $port, $database, $collectionName) {
        $mongoUrl = "mongodb://$host:$port";
        $this->mongo = new MongoDB\Driver\Manager($mongoUrl);
        $this->database = $database;
        $this->collectionName = $collectionName;
    }

    public function insertDocument($document) {
        $bulk = new MongoDB\Driver\BulkWrite;
        $bulk->insert($document);
        $this->executeBulkWrite($bulk);
    }

    public function updateDocument($id, $update) {
        $bulk = new MongoDB\Driver\BulkWrite;
        $bulk->update(['_id' => new MongoDB\BSON\ObjectId($id)], ['$set' => $update]);
        $this->executeBulkWrite($bulk);
    }

    public function deleteDocument($id) {
        $bulk = new MongoDB\Driver\BulkWrite;
        $bulk->delete(['_id' => new MongoDB\BSON\ObjectId($id)]);
        $this->executeBulkWrite($bulk);
    }

    public function searchDocumentByName($name) {
        $filter = ['name' => $name];
        $options = [];
        $query = new MongoDB\Driver\Query($filter, $options);
        $result = $this->mongo->executeQuery("$this->database.$this->collectionName", $query);
        return $result->toArray();
    }

    public function getDocumentsJSON() {
        $filter = [];
        $options = [];
        $query = new MongoDB\Driver\Query($filter, $options);
        $result = $this->mongo->executeQuery("$this->database.$this->collectionName", $query);

        $documents = [];
        foreach ($result as $document) {
            $documents[] = $document;
        }

        return json_encode($documents);
    }

    private function executeBulkWrite($bulk) {
        $writeConcern = new MongoDB\Driver\WriteConcern(MongoDB\Driver\WriteConcern::MAJORITY, 1000);
        $this->mongo->executeBulkWrite("$this->database.$this->collectionName", $bulk, $writeConcern);
    }

    public function getObjectIdByName($name) {
        $filter = ['nombre' => $name];
        $options = [];
        $query = new MongoDB\Driver\Query($filter, $options);
        $result = $this->mongo->executeQuery("$this->database.$this->collectionName", $query);
        $document = current($result->toArray());
        return $document->_id;
    }
}

?>
