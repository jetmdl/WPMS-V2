<?php include "database_connect.php";?>


<?php

    $lip = $_GET['lip_required'];
    $mandrel = $_GET['mandrel_required'];
    $dieplate = $_GET['die_required'];
    $backer = $_GET['backer_required'];
    $bolster = $_GET['bolster_required'];
    $designStart = $_GET['design_start'];
    $designFin = $_GET['design_finish'];
    $workOrder = $_GET['workOrder'];

    $part =0;
    $notApplicable = "N/A";
    
    $mysqli->query("UPDATE job_table SET lip_required = '$lip' WHERE work_order = '$workOrder'");
    $mysqli->query("UPDATE job_table SET mand_required = '$mandrel' WHERE work_order = '$workOrder'");
    $mysqli->query("UPDATE job_table SET die_required = '$dieplate' WHERE work_order = '$workOrder'");
    $mysqli->query("UPDATE job_table SET backer_required = '$backer' WHERE work_order = '$workOrder'");
    $mysqli->query("UPDATE job_table SET bolster_required = '$bolster' WHERE work_order = '$workOrder'");
    $mysqli->query("UPDATE job_table SET part_required = '$part' WHERE work_order = '$workOrder'");

    $mysqli->query("UPDATE lips SET design_start = '$designStart' WHERE work_order = '$workOrder'");
    $mysqli->query("UPDATE lips SET design_finish = '$designFin' WHERE work_order = '$workOrder'");

    $mysqli->query("UPDATE mandrels SET design_start = '$designStart' WHERE work_order = '$workOrder'");
    $mysqli->query("UPDATE mandrels SET design_finish = '$designFin' WHERE work_order = '$workOrder'");

    $mysqli->query("UPDATE dieplates SET design_start = '$designStart' WHERE work_order = '$workOrder'");
    $mysqli->query("UPDATE dieplates SET design_finish = '$designFin' WHERE work_order = '$workOrder'");

    $mysqli->query("UPDATE backers SET design_start = '$designStart' WHERE work_order = '$workOrder'");
    $mysqli->query("UPDATE backers SET design_finish = '$designFin' WHERE work_order = '$workOrder'");

    $mysqli->query("UPDATE bolsters SET design_start = '$designStart' WHERE work_order = '$workOrder'");
    $mysqli->query("UPDATE bolsters SET design_finish = '$designFin' WHERE work_order = '$workOrder'");

 /*   if($lip == "1"){
        $mysqli->query("INSERT INTO lips (work_order, design_start, design_finish) VALUES ('$workOrder', '$designStart', '$designFin')");
    }

    if($mandrel == "1"){
        $mysqli->query("INSERT INTO mandrels (work_order, design_start, design_finish) VALUES ('$workOrder', '$designStart', '$designFin')");
    }

    if($dieplate == "1"){
        $mysqli->query("INSERT INTO dieplates (work_order, design_start, design_finish) VALUES ('$workOrder', '$designStart', '$designFin')");
    }

    if($backer == "1"){
        $mysqli->query("INSERT INTO backers (work_order, design_start, design_finish) VALUES ('$workOrder', '$designStart', '$designFin')");
    }

    if($bolster == "1"){
        $mysqli->query("INSERT INTO bolsters (work_order, design_start, design_finish) VALUES ('$workOrder', '$designStart', '$designFin')");
    } */


 
    $mysqli->query("UPDATE mandrels SET section_mill_start = '$notApplicable' WHERE work_order = '$workOrder'");
    $mysqli->query("UPDATE mandrels SET section_mill_finish = '$notApplicable' WHERE work_order = '$workOrder'");
    $mysqli->query("UPDATE dieplates SET section_mill_start = '$notApplicable' WHERE work_order = '$workOrder'");
    $mysqli->query("UPDATE dieplates SET section_mill_finish = '$notApplicable' WHERE work_order = '$workOrder'");

    if($mandMill == "1"){
        $mysqli->query("UPDATE mandrels SET section_mill_start = '$qNextStage' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE mandrels SET section_mill_finish = '$qNextStage' WHERE work_order = '$workOrder'");
    }

    if($dieMill == "1"){
        $mysqli->query("UPDATE dieplates SET section_mill_start = '$qNextStage' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE dieplates SET section_mill_finish = '$qNextStage' WHERE work_order = '$workOrder'");
    }
?>


<?php include "database_disconnect.php";?>