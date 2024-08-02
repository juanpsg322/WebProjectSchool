<?php
$mysqli  = new mysqli("localhost","root","","veterinariamascotafekiz");
if ($mysqli->connect_errno) {
    echo "Fallo al conectar a MySQL: (" . $mysqli->connect_errno. ")" . $mysqli->connect_error;
}
echo $mysqli->host_info . "\n";

$mysqli = new mysqli("127.0.0.1","root","","veterinariamascotafekiz",3306);
if ($mysqli->connect_errno) {
    echo "fallo al conectar a MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

echo $mysqli->host_info . "\n";
?>$