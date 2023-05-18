<?php

$ffi = FFI::cdef("
    typedef struct {
        unsigned int num_layers;
        unsigned int num_inputs;
        unsigned int num_outputs;
        unsigned int *layers;
        float **weights;
        float **bias;
    } FANN;

    FANN *fann_create_standard_array(unsigned int num_layers, const unsigned int *layers);
    void fann_destroy(FANN *ann);
    void fann_train_on_data(FANN *ann, float **input, float **output);
    float *fann_run(FANN *ann, float *input);
", "C:/fann/libfann.so");

// Configuración de la red neuronal
$numInput = 3; // Número de entradas (hora, día, número de aula)
$numOutput = 1; // Número de salidas (profesor)
$numLayers = 2; // Número de capas ocultas
$numNeuronsHidden = 10; // Número de neuronas en cada capa oculta

// Crear la estructura de la red neuronal
$layers = FFI::new("unsigned int[" . ($numLayers + 2) . "]");
$layers[0] = $numInput;
for ($i = 1; $i <= $numLayers; $i++) {
    $layers[$i] = $numNeuronsHidden;
}
$layers[$numLayers + 1] = $numOutput;

$ann = $ffi->fann_create_standard_array($numLayers + 2, FFI::addr($layers));

// Obtén los datos de entrenamiento de la tabla en MySQL
$host = 'localhost';
$user = 'tu_usuario';
$password = 'tu_contraseña';
$database = 'tu_base_de_datos';

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Error al conectar a la base de datos: " . $conn->connect_error);
}

$query = "SELECT hora, dia, aula, profesor FROM tabla_entrenamiento";
$result = $conn->query($query);

if ($result === false) {
    die("Error en la consulta: " . $conn->error);
}

$trainingData = [];
$testData = [];

while ($row = $result->fetch_assoc()) {
    $input = [floatval($row['hora']), floatval($row['dia']), floatval($row['aula'])];
    $output = [floatval($row['profesor'])];
    $trainingData[] = [$input, $output];
}

$conn->close();

// Entrenar la red neuronal con los datos de entrenamiento
$inputSize = FFI::sizeof(FFI::addr($trainingData[0][0]));
$outputSize = FFI::sizeof(FFI::addr($trainingData[0][1]));

$inputPtrs = FFI::new("float*[$inputSize]");
$outputPtrs = FFI::new("float*[$outputSize]");

foreach ($trainingData as $data) {
    FFI::memcpy(FFI::addr($inputPtrs), FFI::addr($data[0]), $inputSize);
    FFI::memcpy(FFI::addr($outputPtrs), FFI::addr($data[1]), $outputSize);
    $ffi->fann_train_on_data($ann, $inputPtrs, $outputPtrs);
}

// Obtener los datos de prueba del formulario POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $hora = floatval($_POST['hora']);
    $dia = floatval($_POST['dia']);
    $aula = floatval($_POST['aula']);

    // Agregar los datos de prueba al conjunto de entrenamiento
    $testData[] = [$hora, $dia, $aula];
    $trainingData[] = [[$hora, $dia, $aula], [0]]; // Asignar un valor predeterminado de 0 para el profesor

    // Entrenar la red neuronal con los nuevos datos de entrenamiento
    $inputSize = FFI::sizeof(FFI::addr($testData[0][0]));
    $outputSize = FFI::sizeof(FFI::addr($testData[0][1]));

    $inputPtrs = FFI::new("float*[$inputSize]");
    $outputPtrs = FFI::new("float*[$outputSize]");

    foreach ($trainingData as $data) {
        FFI::memcpy(FFI::addr($inputPtrs), FFI::addr($data[0]), $inputSize);
        FFI::memcpy(FFI::addr($outputPtrs), FFI::addr($data[1]), $outputSize);
        $ffi->fann_train_on_data($ann, $inputPtrs, $outputPtrs);
    }
}

// Realizar la predicción para los datos de prueba recién agregados
if (!empty($testData)) {
    $input = FFI::new("float[" . count($testData[0]) . "]");
    $output = $ffi->fann_run($ann, FFI::addr($input));
    $profesor = round($output[0]); // Redondear la salida a la clase más cercana (profesor)
}

// Verificar la disponibilidad del aula en función de los datos de prueba recién agregados
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

// Mostrar los resultados
if (isset($profesor)) {
    echo "Resultado de la predicción: Profesor: $profesor" . PHP_EOL;
}

if ($disponible) {
    echo "El aula $aula está disponible en el horario $hora del día $dia." . PHP_EOL;
} else {
    echo "El aula $aula no está disponible en el horario $hora del día $dia." . PHP_EOL;
}

// Mostrar las aulas disponibles en el horario y día especificados
echo "Aulas disponibles en el horario $hora del día $dia: " . implode(", ", array_unique($aulasDisponibles)) . PHP_EOL;

