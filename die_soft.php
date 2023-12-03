<?php include "database_connect.php";?>


<?php
    $DieFrontStart = $_GET['dieBearingStart'];
    $DieFrontFin = $_GET['dieBearingFin'];
    $DieBackStart = $_GET['dieBackmillStart'];
    $DieBackFin = $_GET['dieBackmillFin'];
    $workOrder = $_GET['workOrder'];
    $compCount = 0;
    $NACount = 0;
    $macStatus = "";

    if ($DieFrontStart != "-"){
        $compCount = $compCount + 1;
    }
    if ($DieFrontStart != "N/A"){
        $NACount = $NACount + 1;
    }
    $mysqli->query("UPDATE die_mac_soft SET die_bearing_start = '$DieFrontStart' WHERE work_order = '$workOrder'");

    if ($DieFrontFin != "-"){
        $compCount = $compCount + 1;
    }
    if ($DieFrontFin != "N/A"){
        $NACount = $NACount + 1;
    }
    $mysqli->query("UPDATE die_mac_soft SET die_bearing_finish = '$DieFrontFin' WHERE work_order = '$workOrder'");

    if ($DieBackStart != "-"){
        $compCount = $compCount + 1;
    }
    $mysqli->query("UPDATE die_mac_soft SET die_backmill_start = '$DieBackStart' WHERE work_order = '$workOrder'");

    if ($DieBackFin != "-"){
        $compCount = $compCount + 1;
    }
    $mysqli->query("UPDATE die_mac_soft SET die_backmill_finish = '$DieBackFin' WHERE work_order = '$workOrder'");

    

    if($compCount>0){
        $macStatus = "Ongoing";
    }

    if($compCount==4){
        $macStatus = "Complete";
    }

    if($compCount==2 && $NACount ==2){
        $macStatus = "Complete";
    }


    $mysqli->query("UPDATE die_mac_soft SET mac_status = '$macStatus' WHERE work_order = '$workOrder'");


?>

<?php include "database_disconnect.php";?>