<?php include "database_connect.php";?>

<?php
    $result = $mysqli->query("SELECT * FROM die_mac_hard");

    $data = array();
    while ($row = mysqli_fetch_object($result))
    {
        array_push($data, $row);
    }
    echo json_encode($data);
?>