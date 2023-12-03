<?php include "database_connect.php";?>


<?php
    $workOrder = $_GET['w_o'];
    $dieNo = $_GET['dieNo'];
    $customer = $_GET['customer'];
    $diameter = $_GET['dia'];
    $type = $_GET['type'];

    //Components and additional production processes now chosen during sign-off
    //$lip = $_GET['lip'];
    //$mandrel = $_GET['mandrel'];
    //$dieplate = $_GET['dieplate'];
    //$backer = $_GET['backer'];
    //$bolster = $_GET['bolster'];
    //$mandMill = $_GET['mandrelMill'];
    //$dieMIll = $_GET['dieMill'];


    //$qlip = 0;
    //$sqmandrel = 0;
    //$qdieplate = 0;
    //$qbacker = 0;
    //$qbolster = 0;
    //$qpart = 1;

    //if ($lip == "1"){
    //    $qlip = 1;
    //}

    //if ($mandrel == "1"){
    //    $sqmandrel = 1;
    //}

    //if ($dieplate == "1"){
    //    $qdieplate = 1;
    //}

    //if ($backer == "1"){
    //    $qbacker = 1;
    //}

    //if ($bolster == "1"){
    //    $qbolster = 1;
    //}

    $qStatus = "Ongoing";
    $qNextStage = "-";
    $notApplicable = "N/A";
    $qScrapNotes = "";
    $qApprovedDate = "-";
    $qPart = 1;

    //$mysqli->query("INSERT INTO job_table (work_order, job_type, job_diameter, job_customer, job_status, lip_required, mand_required, die_required, backer_required, bolster_required, next_stage, die_number, scrap_notes, approved_date, part_required) VALUES ('$workOrder', '$type', '$diameter', '$customer', '$qStatus', '$qlip', '$sqmandrel', '$qdieplate', '$qbacker', '$qbolster', '$qNextStage', '$dieNo', '$qScrapNotes', '$qApprovedDate', '$qPart' )");
    $mysqli->query("INSERT INTO job_table (work_order, job_type, job_diameter, job_customer, job_status, next_stage, die_number, scrap_notes, approved_date, part_required) VALUES ('$workOrder', '$type', '$diameter', '$customer', '$qStatus', '$qNextStage', '$dieNo', '$qScrapNotes', '$qApprovedDate', '$qPart' )");
    $mysqli->query("INSERT INTO lips (work_order) VALUES ('$workOrder')");
    $mysqli->query("INSERT INTO mandrels (work_order) VALUES ('$workOrder')");
    $mysqli->query("INSERT INTO dieplates (work_order) VALUES ('$workOrder')");
    $mysqli->query("INSERT INTO backers (work_order) VALUES ('$workOrder')");
    $mysqli->query("INSERT INTO bolsters (work_order) VALUES ('$workOrder')");
    $mysqli->query("INSERT INTO part (work_order) VALUES ('$workOrder')");
    $mysqli->query("INSERT INTO lip_mac_soft (work_order) VALUES ('$workOrder')");
    $mysqli->query("INSERT INTO lip_mac_hard (work_order) VALUES ('$workOrder')");
    $mysqli->query("INSERT INTO mandrel_mac_soft (work_order) VALUES ('$workOrder')");
    $mysqli->query("INSERT INTO mandrel_mac_hard (work_order) VALUES ('$workOrder')");
    $mysqli->query("INSERT INTO die_mac_soft (work_order) VALUES ('$workOrder')");
    $mysqli->query("INSERT INTO die_mac_hard (work_order) VALUES ('$workOrder')");
    $mysqli->query("INSERT INTO backer_mac_soft (work_order) VALUES ('$workOrder')");
    $mysqli->query("INSERT INTO backer_mac_hard (work_order) VALUES ('$workOrder')");
    $mysqli->query("INSERT INTO bol_mac_soft (work_order) VALUES ('$workOrder')");
    $mysqli->query("INSERT INTO bol_mac_hard (work_order) VALUES ('$workOrder')");

 
    $mysqli->query("UPDATE mandrels SET section_mill_start = '$notApplicable' WHERE work_order = '$workOrder'");
    $mysqli->query("UPDATE mandrels SET section_mill_finish = '$notApplicable' WHERE work_order = '$workOrder'");
    $mysqli->query("UPDATE dieplates SET section_mill_start = '$notApplicable' WHERE work_order = '$workOrder'");
    $mysqli->query("UPDATE dieplates SET section_mill_finish = '$notApplicable' WHERE work_order = '$workOrder'");

    //Use these to create a process production php page.
    //if($mandMill == "1"){
    //    $mysqli->query("UPDATE mandrels SET section_mill_start = '$qNextStage' WHERE work_order = '$workOrder'");
    //    $mysqli->query("UPDATE mandrels SET section_mill_finish = '$qNextStage' WHERE work_order = '$workOrder'");
    //}

    //if($dieMill == "1"){
    //    $mysqli->query("UPDATE dieplates SET section_mill_start = '$qNextStage' WHERE work_order = '$workOrder'");
    //    $mysqli->query("UPDATE dieplates SET section_mill_finish = '$qNextStage' WHERE work_order = '$workOrder'");
    //}
?>

<!DOCTYPE html>
<html>
    <head>
        <title>WPMS</title>
        <meta charset="UTF-8"/>
        <link rel="stylesheet" href="style.css"/>
        <link rel="shortcut icon" href="">
    </head>
    <body>
        <?php include "database_connect.php";?>
        <div class="header-container">
            <div class="logo-container">
                <img class="logo" src="logo.png"/>
            </div>
            <div class="title-container">
                <h1 class="Prog-title">Work Progress Management System</h1>
            </div>
        </div>
        <div class="navigation-container">
            <nav>
                <ul class="nav-bar">
                    <li><a href='wip.php'>WIP Tracker</a></li>
                    <li><a href='steel.php'>Steel Inventory</a></li> 
                    <li><a href='book_job_in.php'>Book In</a></li>                   
                    <li><a href='index.php'>Log Out</a></li>
                </ul>
            </nav>
        </div>
        <div class="menu-container">
        </div>
        <div class="col-header-container" id="col-header-container">
        </div>
        <div class="content-container" id='content-container'>
            <h1 class="added">Job Added</h1>
        </div>
        <div class="foot-container" id="foot-container"></div>
    </body>
</html>

<?php include "database_disconnect.php";?>