<?php include "database_connect.php";?>


<?php
    $FrontStart = $_GET['bolFrontStart'];
    $FrontFin = $_GET['bolFrontFin'];
    $BackStart = $_GET['bolBackStart'];
    $BackFin = $_GET['bolBackFin'];
    $workOrder = $_GET['workOrder'];
    $compCount = 0;
    $macStatus = "";

    if ($FrontStart != "-"){
        $compCount = $compCount + 1;
    }
    $mysqli->query("UPDATE bol_mac_soft SET bol_front_start = '$FrontStart' WHERE work_order = '$workOrder'");

    if ($FrontFin != "-"){
        $compCount = $compCount + 1;
    }
    $mysqli->query("UPDATE bol_mac_soft SET bol_front_finish = '$FrontFin' WHERE work_order = '$workOrder'");

    if ($BackStart != "-"){
        $compCount = $compCount + 1;
    }
    $mysqli->query("UPDATE bol_mac_soft SET bol_back_start = '$BackStart' WHERE work_order = '$workOrder'");

    if ($BackFin != "-"){
        $compCount = $compCount + 1;
    }
    $mysqli->query("UPDATE bol_mac_soft SET bol_back_finish = '$BackFin' WHERE work_order = '$workOrder'");

    

    if($compCount>0){
        $macStatus = "Ongoing";
    }

    if($compCount==4){
        $macStatus = "Complete";
    }


    $mysqli->query("UPDATE bol_mac_soft SET mac_status = '$macStatus' WHERE work_order = '$workOrder'");


?>

<?php include "database_disconnect.php";?>