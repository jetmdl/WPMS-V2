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
        $mysqli->query("UPDATE dieplates SET design_start = '$DesignStart' WHERE work_order = '$workOrder'");
    //}

    //if ($DesignFin != "-"){
        $mysqli->query("UPDATE dieplates SET design_finish = '$DesignFin' WHERE work_order = '$workOrder'");
    //}

    //if ($ModelStart != "-"){
        $mysqli->query("UPDATE dieplates SET model_start = '$ModelStart' WHERE work_order = '$workOrder'");
    //}

    //if ($ModelFin != "-"){
        $mysqli->query("UPDATE dieplates SET model_finish = '$ModelFin' WHERE work_order = '$workOrder'");
    //}

    //if ($ProgStart != "-"){
        $mysqli->query("UPDATE dieplates SET prog_start = '$ProgStart' WHERE work_order = '$workOrder'");
    //}

    //if ($ProgFin != "-"){
        $mysqli->query("UPDATE dieplates SET prog_finish = '$ProgFin' WHERE work_order = '$workOrder'");
    //}

    //if ($TurnStart != "-"){
        $mysqli->query("UPDATE dieplates SET turning_start = '$TurnStart' WHERE work_order = '$workOrder'");
    //}

    //if ($TurnFin != "-"){
        $mysqli->query("UPDATE dieplates SET turning_finish = '$TurnFin' WHERE work_order = '$workOrder'");
    //}

    //if ($SoftStart != "-"){
        $mysqli->query("UPDATE dieplates SET soft_mac_start = '$SoftStart' WHERE work_order = '$workOrder'");
    //}

    //if ($SoftFin != "-"){
        $mysqli->query("UPDATE dieplates SET soft_mac_finish = '$SoftFin' WHERE work_order = '$workOrder'");
    //}

    //if ($HeatStart != "-"){
        $mysqli->query("UPDATE dieplates SET heat_treat_send = '$HeatStart' WHERE work_order = '$workOrder'");
    //}

    //if ($HeatFin != "-"){
        $mysqli->query("UPDATE dieplates SET heat_treat_back = '$HeatFin' WHERE work_order = '$workOrder'");
    //}

    //if ($HardStart != "-"){
        $mysqli->query("UPDATE dieplates SET hard_mac_start = '$HardStart' WHERE work_order = '$workOrder'");
    //}

    //if ($HardFin != "-"){
        $mysqli->query("UPDATE dieplates SET hard_mac_finish = '$HardFin' WHERE work_order = '$workOrder'");
    //}

    //if ($SectionStart != "-"){
        $mysqli->query("UPDATE dieplates SET section_mill_start = '$SectionStart' WHERE work_order = '$workOrder'");
    //}  

    //if ($SectionFin != "-"){
        $mysqli->query("UPDATE dieplates SET section_mill_finish = '$SectionFin' WHERE work_order = '$workOrder'");
    //}

    //if ($WireStart != "-"){
        $mysqli->query("UPDATE dieplates SET wirespark_start = '$WireStart' WHERE work_order = '$workOrder'");
    //}

    //if ($WireFin != "-"){
        $mysqli->query("UPDATE dieplates SET wirespark_finish = '$WireFin' WHERE work_order = '$workOrder'");
    //}

    //if ($FinStart != "-"){
        $mysqli->query("UPDATE dieplates SET finishing_start = '$FinStart' WHERE work_order = '$workOrder'");
    //}

    //if ($FinFin != "-"){
        $mysqli->query("UPDATE dieplates SET finishing_finish = '$FinFin' WHERE work_order = '$workOrder'");
    //}

    //if ($PackStart != "-"){
        $mysqli->query("UPDATE dieplates SET packing_start = '$PackStart' WHERE work_order = '$workOrder'");
    //}

    //if ($PackFin != "-"){
        $mysqli->query("UPDATE dieplates SET packing_finish = '$PackFin' WHERE work_order = '$workOrder'");
    //}

?>

<?php include "database_disconnect.php";?>