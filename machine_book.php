<?php include "database_connect.php";?>


<?php
    $table = $_GET['table'];
    $field = $_GET['field'];
    $cnc = $_GET['cnc'];
    $workOrder = $_GET['work_order'];

    if ($table == "lip_mac_soft"){

        if ($field == "lip_front_machine"){
            $mysqli->query("UPDATE lip_mac_soft SET lip_front_machine = '$cnc' WHERE work_order = '$workOrder'");
        }
        if ($field == "lip_back_machine"){
            $mysqli->query("UPDATE lip_mac_soft SET lip_back_machine = '$cnc' WHERE work_order = '$workOrder'");
        }
        
    }

    if ($table == "mandrel_mac_soft"){

        if ($field == "port_front_machine"){
            $mysqli->query("UPDATE mandrel_mac_soft SET port_front_machine = '$cnc' WHERE work_order = '$workOrder'");
        }
        if ($field == "port_back_machine"){
            $mysqli->query("UPDATE mandrel_mac_soft SET port_back_machine = '$cnc' WHERE work_order = '$workOrder'");
        }
        
    }
    echo "HERE1";
    if ($table == "die_mac_soft"){
        echo "HERE2";
        if ($field == "die_bearing_machine"){
            echo "HERE3";
            $mysqli->query("UPDATE die_mac_soft SET die_bearing_machine = '$cnc' WHERE work_order = '$workOrder'");
        }
        if ($field == "die_backmill_machine"){
            $mysqli->query("UPDATE die_mac_soft SET die_backmill_machine = '$cnc' WHERE work_order = '$workOrder'");
        }
        
    }
    
    if ($table == "backer_mac_soft"){

        if ($field == "backer_front_machine"){
            $mysqli->query("UPDATE backer_mac_soft SET backer_front_machine = '$cnc' WHERE work_order = '$workOrder'");
        }
        if ($field == "backer_back_machine"){
            $mysqli->query("UPDATE backer_mac_soft SET backer_back_machine = '$cnc' WHERE work_order = '$workOrder'");
        }
        
    }

    if ($table == "bol_mac_soft"){

        if ($field == "bol_front_machine"){
            $mysqli->query("UPDATE bol_mac_soft SET bol_front_machine = '$cnc' WHERE work_order = '$workOrder'");
        }
        if ($field == "bol_back_machine"){
            $mysqli->query("UPDATE bol_mac_soft SET bol_back_machine = '$cnc' WHERE work_order = '$workOrder'");
        }
        
    }

    if ($table == "lip_mac_hard"){

        if ($field == "lip_front_machine"){
            $mysqli->query("UPDATE lip_mac_hard SET lip_front_machine = '$cnc' WHERE work_order = '$workOrder'");
        }
        if ($field == "lip_back_machine"){
            $mysqli->query("UPDATE lip_mac_hard SET lip_back_machine = '$cnc' WHERE work_order = '$workOrder'");
        }
        
    }

    if ($table == "mandrel_mac_hard"){

        if ($field == "port_hard_machine"){
            $mysqli->query("UPDATE mandrel_mac_hard SET port_hard_machine = '$cnc' WHERE work_order = '$workOrder'");
        }
        if ($field == "port_polish_machine"){
            $mysqli->query("UPDATE mandrel_mac_hard SET port_polish_machine = '$cnc' WHERE work_order = '$workOrder'");
        }
        
    }

    if ($table == "die_mac_hard"){

        if ($field == "die_front_machine"){
            $mysqli->query("UPDATE die_mac_hard SET die_front_machine = '$cnc' WHERE work_order = '$workOrder'");
        }
        if ($field == "die_back_machine"){
            $mysqli->query("UPDATE die_mac_hard SET die_back_machine = '$cnc' WHERE work_order = '$workOrder'");
        }
        
    }

?>

<?php include "database_disconnect.php";?>