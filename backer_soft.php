<?php include "database_connect.php";?>


<?php
    $FrontStart = $_GET['backerFrontStart'];
    $FrontFin = $_GET['backerFrontFin'];
    $BackStart = $_GET['backerBackStart'];
    $BackFin = $_GET['backerBackFin'];
    $workOrder = $_GET['workOrder'];
    $compCount = 0;
    $NACount = 0;
    $macStatus = "";

    if ($FrontStart != "-"){
        $compCount = $compCount + 1;
    }
    if ($FrontStart != "N/A"){
        $NACount = $NACount + 1;
    }
    $mysqli->query("UPDATE backer_mac_soft SET backer_front_start = '$FrontStart' WHERE work_order = '$workOrder'");

    if ($FrontFin != "-"){
        $compCount = $compCount + 1;
    }
    if ($FrontFin != "N/A"){
        $NACount = $NACount + 1;
    }
    $mysqli->query("UPDATE backer_mac_soft SET backer_front_finish = '$FrontFin' WHERE work_order = '$workOrder'");

    if ($BackStart != "-"){
        $compCount = $compCount + 1;
    }

    $mysqli->query("UPDATE backer_mac_soft SET backer_back_start = '$BackStart' WHERE work_order = '$workOrder'");

    if ($BackFin != "-"){
        $compCount = $compCount + 1;
    }
    $mysqli->query("UPDATE backer_mac_soft SET backer_back_finish = '$BackFin' WHERE work_order = '$workOrder'");

    

    if($compCount>0){
        $macStatus = "Ongoing";
    }

    if($compCount==4){
        $macStatus = "Complete";
    }

    if($compCount==2 && $NACount ==2){
        $macStatus = "Complete";
    }

    $mysqli->query("UPDATE backer_mac_soft SET mac_status = '$macStatus' WHERE work_order = '$workOrder'");


?>

<?php include "database_disconnect.php";?>