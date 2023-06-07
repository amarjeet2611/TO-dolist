<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $task = $_POST["task"];
 
  $servername = "localhost";
$username = "root";
$password = "";
$dbname = "todo_list";
  
  $conn = new mysqli("localhost", "root", "", "todo_list");
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  $stmt = $conn->prepare("INSERT INTO tasks (task) VALUES (?)");
  $stmt->bind_param("s", $task);
  $stmt->execute();
  $stmt->close();
  $conn->close();
}
?>
