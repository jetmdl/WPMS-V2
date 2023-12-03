<?php include "database_connect.php";?>


<?php
    $size = $_GET['size'];
    $stock = $_GET['stock'];



    $mysqli->query("UPDATE h11_stock SET stock = '$stock' WHERE size = '$size'");


?>

<?php include "database_disconnect.php";?>