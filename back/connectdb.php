<?php
    $db_host = "localhost";
    $db_user = "root";
    $db_pass = "";
    $db_base = "superheroes";
    $db_table = "heroes";
    $mysqli = new mysqli($db_host, $db_user, $db_pass, $db_base);
    if($mysqli->connect_error){
        die("no connection");
    }
?>