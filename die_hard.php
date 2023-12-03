<?php include "database_connect.php";?>


<?php
    $DieFrontStart = $_GET['dieFrontStart'];
    $DieFrontFin = $_GET['dieFrontFin'];
    $DieBackStart = $_GET['dieBackStart'];
    $DieBackFin = $_GET['dieBackFin'];
    $workOrder = $_GET['workOrder'];
    $compCount = 0;
    $NACount = 0;
    $macStatus = "";

    if ($DieFrontStart != "-"){
        $compCount = $compCount + 1;
    }
    $mysqli->query("UPDATE die_mac_hard SET die_front_start = '$DieFrontStart' WHERE work_order = '$workOrder'");

    if ($DieFrontFin != "-"){
        $compCount = $compCount + 1;
    }
    $mysqli->query("UPDATE die_mac_hard SET die_front_finish = '$DieFrontFin' WHERE work_order = '$workOrder'");

    if ($DieBackStart != "-"){
        $compCount = $compCount + 1;
    }
    if ($DieBackStart != "N/A"){
        $NACount = $NACount + 1;
    }
    $mysqli->query("UPDATE die_mac_hard SET die_back_start = '$DieBackStart' WHERE work_order = '$workOrder'");

    if ($DieBackFin != "-"){
        $compCount = $compCount + 1;
    }
    if ($DieBackFin != "N/A"){
        $NACount = $NACount + 1;
    }
    $mysqli->query("UPDATE die_mac_hard SET die_back_finish = '$DieBackFin' WHERE work_order = '$workOrder'");

    

    if($compCount>0){
        $macStatus = "Ongoing";
    }

    if($compCount==4){
        $macStatus = "Complete";
    }

    if($compCount==2 && $NACount ==2){
        $macStatus = "Complete";
    }

    $mysqli->query("UPDATE die_mac_hard SET mac_status = '$macStatus' WHERE work_order = '$workOrder'");


?>

<?php include "database_disconnect.php";?>