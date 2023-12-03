<?php include "database_connect.php";?>


<?php
    $lipFrontStart = $_GET['lipFrontStart'];
    $lipFrontFin = $_GET['lipFrontFin'];
    $lipBackStart = $_GET['lipBackStart'];
    $lipBackFin = $_GET['lipBackFin'];
    $workOrder = $_GET['workOrder'];
    $compCount = 0;
    $macStatus = "";

    if ($lipFrontStart != "-"){
        $compCount = $compCount + 1;
    }
    $mysqli->query("UPDATE lip_mac_soft SET lip_front_start = '$lipFrontStart' WHERE work_order = '$workOrder'");

    if ($lipFrontFin != "-"){
        $compCount = $compCount + 1;
    }
    $mysqli->query("UPDATE lip_mac_soft SET lip_front_finish = '$lipFrontFin' WHERE work_order = '$workOrder'");

    if ($lipBackStart != "-"){
        $compCount = $compCount + 1;
    }
    $mysqli->query("UPDATE lip_mac_soft SET lip_back_start = '$lipBackStart' WHERE work_order = '$workOrder'");

    if ($lipBackFin != "-"){
        $compCount = $compCount + 1;
    }
    $mysqli->query("UPDATE lip_mac_soft SET lip_back_finish = '$lipBackFin' WHERE work_order = '$workOrder'");

    

    if($compCount>0){
        $macStatus = "Ongoing";
    }

    if($compCount==4){
        $macStatus = "Complete";
    }


    $mysqli->query("UPDATE lip_mac_soft SET mac_status = '$macStatus' WHERE work_order = '$workOrder'");


?>

<?php include "database_disconnect.php";?>