<?php

include "./partials/Connection.php";

try {

    if (isset($_POST)) {
        $data = file_get_contents("php://input");
        $task = json_decode($data, true);
        $title = $task["title"];
        $id = $task["id"];
        $description = $task["description"];
        echo $id;
        echo $title;
    }
    $query = "UPDATE task set title = '$title', description = '$description' where id = $id;";

    if ($conn->query($query)) {
        echo "The task was updated";
    } else {
        echo "The task hasnt been updated";
    }
    
} catch (PDOException $e) {
    die($e->getMessage());
}
