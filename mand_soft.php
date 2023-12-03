<?php include "database_connect.php";?>


<?php
    $PortFrontStart = $_GET['mandPortFrontStart'];
    $PortFrontFin = $_GET['mandPortFrontFin'];
    $PortBackStart = $_GET['mandPortBackStart'];
    $PortBackFin = $_GET['mandPortBackFin'];
    $workOrder = $_GET['workOrder'];
    $compCount = 0;
    $macStatus = "";

    if ($PortFrontStart != "-"){
        $compCount = $compCount + 1;
    }
    $mysqli->query("UPDATE mandrel_mac_soft SET port_front_start = '$PortFrontStart' WHERE work_order = '$workOrder'");

    if ($PortFrontFin != "-"){
        $compCount = $compCount + 1;   
    }
    $mysqli->query("UPDATE mandrel_mac_soft SET port_front_finish = '$PortFrontFin' WHERE work_order = '$workOrder'");

    if ($PortBackStart != "-"){
        $compCount = $compCount + 1;   
    }
    $mysqli->query("UPDATE mandrel_mac_soft SET port_back_start = '$PortBackStart' WHERE work_order = '$workOrder'");

    if ($PortBackFin != "-"){
        $compCount = $compCount + 1;
    }
    $mysqli->query("UPDATE mandrel_mac_soft SET port_back_finish = '$PortBackFin' WHERE work_order = '$workOrder'");

    

    if($compCount>0){
        $macStatus = "Ongoing";
    }

    if($compCount==4){
        $macStatus = "Complete";
    }


    $mysqli->query("UPDATE mandrel_mac_soft SET mac_status = '$macStatus' WHERE work_order = '$workOrder'");


?>

<?php include "database_disconnect.php";?>