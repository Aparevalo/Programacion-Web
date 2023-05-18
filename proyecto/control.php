<?php

require 'vendor/autoload.php'; // Reemplaza 'vendor/autoload.php' con la ruta correcta de tu archivo de carga automática de PHP-FFANN

use Fann\Fann;

// Configuración de la red neuronal
$numInput = 3; // Número de entradas (hora, día, número de aula)
$numOutput = 1; // Número de salidas (profesor)
$numLayers = 2; // Número de capas ocultas
$numNeuronsHidden = 10; // Número de neuronas en cada capa oculta

// Crea una instancia de la red neuronal
$ann = new Fann($numLayers, $numInput, $numNeuronsHidden, $numOutput);

// Configura los parámetros de la red neuronal
$ann->setActivationFunctionHidden(Fann::SIGMOID_SYMMETRIC);
$ann->setActivationFunctionOutput(Fann::SIGMOID_SYMMETRIC);
$ann->setTrainingAlgorithm(Fann::TRAIN_RPROP);

// Establece la conexión con la base de datos MySQL
$host = 'localhost';
$user = 'root';
$password = '';
$database = 'proyecto';

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Error al conectar a la base de datos: " . $conn->connect_error);
}

// Construye y ejecuta la consulta SQL para obtener los datos de entrenamiento de la tabla deseada
$query = "SELECT hora, dia, aula, profesor FROM tabla_entrenamiento";
$result = $conn->query($query);

if ($result === false) {
    die("Error en la consulta: " . $conn->error);
}

// Prepara los datos de entrenamiento y prueba
$trainingData = [];
$testData = [];

while ($row = $result->fetch_assoc()) {
    $input = [$row['hora'], $row['dia'], $row['aula']];
    $output = [$row['profesor']];
    $trainingData[] = [$input, $output];
}

// Cierra la conexión con la base de datos
$conn->close();

// Obtén los datos de prueba del formulario POST
$hora = $_POST['hora'];
$dia = $_POST['dia'];
$aula = $_POST['aula'];

// Agrega los datos de prueba al conjunto de entrenamiento
$input = [$hora, $dia, $aula];
$testData[] = $input;
$trainingData[] = [$input, [0]]; //

$trainingData[] = [$input, [0]]; // Asigna un valor predeterminado de 0 para el profesor

// Entrena la red neuronal con los nuevos datos de entrenamiento
$epochs = 100; // Número de épocas de entrenamiento
$errorThreshold = 0.001; // Umbral de error para finalizar el entrenamiento
$ann->trainOnData($trainingData, $epochs, 0, $errorThreshold);

// Guarda los pesos y configuraciones de la red neuronal actualizada en un archivo de texto
$ann->save("red_neuronal.txt");

// Carga los pesos y configuraciones desde el archivo guardado
$ann = new Fann("red_neuronal.txt");

// Realiza la predicción para los datos de prueba recién agregados
$output = $ann->run($input);
$profesor = round($output[0]); // Redondea la salida a la clase más cercana (profesor)

// Verifica la disponibilidad del aula en función de los datos de prueba recién agregados
$disponible = true;
$aulasDisponibles = [];

foreach ($trainingData as $data) {
    if ($data[0][0] == $hora && $data[0][1] == $dia) {
        $aulasDisponibles[] = $data[0][2];
        
        if ($data[0][2] == $aula) {
            $disponible = false;
        }
    }
}

if ($disponible) {
    echo "El aula $aula está disponible en el horario $hora del día $dia. Profesor: $profesor" . PHP_EOL;
} else {
    echo "El aula $aula no está disponible en el horario $hora del día $dia." . PHP_EOL;
}

// Muestra las aulas disponibles en el horario y día especificados
echo "Aulas disponibles en el horario $hora del día $dia: " . implode(", ", array_unique($aulasDisponibles)) . PHP_EOL;

