<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include "db.php";

// Get JSON input
$input = file_get_contents("php://input");
$data = json_decode($input, true); // <-- IMPORTANT (array)

// Read values safely
$name = isset($data['name']) ? $data['name'] : "";
$email = isset($data['email']) ? $data['email'] : "";

// Prevent blank insert
if ($name == "" || $email == "") {
    echo json_encode([
        "status" => "error",
        "message" => "Missing name or email"
    ]);
    exit;
}

$sql = "INSERT INTO users (name, email) VALUES ('$name', '$email')";

if ($conn->query($sql)) {
    echo json_encode(["status" => "success"]);
} else {
    echo json_encode(["status" => "error", "message" => $conn->error]);
}
?>
