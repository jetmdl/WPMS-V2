<?php include "database_connect.php";?>


<?php
    $DesignStart = $_GET['DesignStart'];
    $DesignFin = $_GET['DesignFin'];
    $ModelStart = $_GET['ModelStart'];
    $ModelFin = $_GET['ModelFin'];
    $ProgStart = $_GET['ProgStart'];
    $ProgFin = $_GET['ProgFin'];
    $TurnStart = $_GET['TurnStart'];
    $TurnFin = $_GET['TurnFin'];
    $SoftStart = $_GET['SoftStart'];
    $SoftFin = $_GET['SoftFin'];
    $HeatStart = $_GET['HeatStart'];
    $HeatFin = $_GET['HeatFin'];
    $HardStart = $_GET['HardStart'];
    $HardFin = $_GET['HardFin'];
    $RamStart = $_GET['RamStart'];
    $RamFin = $_GET['RamFin'];
    $SectionStart = $_GET['SectionStart'];
    $SectionFin = $_GET['SectionFin'];
    $WireStart = $_GET['WireStart'];
    $WireFin = $_GET['WireFin'];
    $FinStart = $_GET['FinStart'];
    $FinFin = $_GET['FinFin'];
    $PackStart = $_GET['PackStart'];
    $PackFin = $_GET['PackFin'];
    $workOrder = $_GET['workOrder'];

    //if ($DesignStart != "-"){
        $mysqli->query("UPDATE backers SET design_start = '$DesignStart' WHERE work_order = '$workOrder'");
    //}

    //if ($DesignFin != "-"){
        $mysqli->query("UPDATE backers SET design_finish = '$DesignFin' WHERE work_order = '$workOrder'");
    //}

    //if ($ModelStart != "-"){
        $mysqli->query("UPDATE backers SET model_start = '$ModelStart' WHERE work_order = '$workOrder'");
    //}

    //if ($ModelFin != "-"){
        $mysqli->query("UPDATE backers SET model_finish = '$ModelFin' WHERE work_order = '$workOrder'");
    //}

    //if ($ProgStart != "-"){
        $mysqli->query("UPDATE backers SET prog_start = '$ProgStart' WHERE work_order = '$workOrder'");
    //}

    //if ($ProgFin != "-"){
        $mysqli->query("UPDATE backers SET prog_finish = '$ProgFin' WHERE work_order = '$workOrder'");
    //}

    //if ($TurnStart != "-"){
        $mysqli->query("UPDATE backers SET turning_start = '$TurnStart' WHERE work_order = '$workOrder'");
    //}

    //if ($TurnFin != "-"){
    $mysqli->query("UPDATE backers SET turning_finish = '$TurnFin' WHERE work_order = '$workOrder'");
    //}

    //if ($SoftStart != "-"){
    $mysqli->query("UPDATE backers SET soft_mac_start = '$SoftStart' WHERE work_order = '$workOrder'");
    //}

    //if ($SoftFin != "-"){
    $mysqli->query("UPDATE backers SET soft_mac_finish = '$SoftFin' WHERE work_order = '$workOrder'");
    //}

    //if ($HeatStart != "-"){
    $mysqli->query("UPDATE backers SET heat_treat_send = '$HeatStart' WHERE work_order = '$workOrder'");
    //}

    //if ($HeatFin != "-"){
    $mysqli->query("UPDATE backers SET heat_treat_back = '$HeatFin' WHERE work_order = '$workOrder'");
    //}

    //if ($HardStart != "-"){
    $mysqli->query("UPDATE backers SET hard_mac_start = '$HardStart' WHERE work_order = '$workOrder'");
    //}

    //if ($HardFin != "-"){
    $mysqli->query("UPDATE backers SET hard_mac_finish = '$HardFin' WHERE work_order = '$workOrder'");
    //}

    //if ($FinStart != "-"){
    $mysqli->query("UPDATE backers SET finishing_start = '$FinStart' WHERE work_order = '$workOrder'");
    //}

    //if ($FinFin != "-"){
    $mysqli->query("UPDATE backers SET finishing_finish = '$FinFin' WHERE work_order = '$workOrder'");
    //}

    //if ($PackStart != "-"){
    $mysqli->query("UPDATE backers SET packing_start = '$PackStart' WHERE work_order = '$workOrder'");
    //}

    //if ($PackFin != "-"){
    $mysqli->query("UPDATE backers SET packing_finish = '$PackFin' WHERE work_order = '$workOrder'");
    //}

?>

<?php include "database_disconnect.php";?>