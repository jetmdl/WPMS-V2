<?php include "database_connect.php";?>


<?php
    $PortHardStart = $_GET['mandHardStart'];
    $PortHardFin = $_GET['mandHardFin'];
    $PortPolishStart = $_GET['mandPolishStart'];
    $PortPolishFin = $_GET['mandPolishFin'];
    $workOrder = $_GET['workOrder'];
    $compCount = 0;
    $macStatus = "";

    if ($PortHardStart != "-"){
        $compCount = $compCount + 1;
    }
    $mysqli->query("UPDATE mandrel_mac_hard SET port_hard_start = '$PortHardStart' WHERE work_order = '$workOrder'");

    if ($PortHardFin != "-"){
        $compCount = $compCount + 1;
    }
    $mysqli->query("UPDATE mandrel_mac_hard SET port_hard_finish = '$PortHardFin' WHERE work_order = '$workOrder'");

    if ($PortPolishStart != "-"){
        $compCount = $compCount + 1;
    }
    $mysqli->query("UPDATE mandrel_mac_hard SET port_polish_start = '$PortPolishStart' WHERE work_order = '$workOrder'");

    if ($PortPolishFin != "-"){
        $compCount = $compCount + 1;
    }
    $mysqli->query("UPDATE mandrel_mac_hard SET port_polish_finish = '$PortPolishFin' WHERE work_order = '$workOrder'");

    

    if($compCount>0){
        $macStatus = "Ongoing";
    }

    if($compCount==4){
        $macStatus = "Complete";
    }


    $mysqli->query("UPDATE mandrel_mac_hard SET mac_status = '$macStatus' WHERE work_order = '$workOrder'");


?>

<?php include "database_disconnect.php";?>