<?php
 $servername = "localhost";
 $username = "root";
 $password = "";
 $dbname = "todo_list";
// Connect to your database and retrieve the tasks
// Replace "host", "username", "password", and "database" with your actual database credentials
$conn = new mysqli("localhost", "root", "", "todo_list");
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$result = $conn->query("SELECT task FROM tasks");
$tasks = array();
if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    $tasks[] = $row["task"];
  }
}

$conn->close();
header("Content-Type: application/json");
echo json_encode($tasks);
?>
