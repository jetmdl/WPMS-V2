<?php include "database_connect.php";?>


<?php
    $workOrder = $_GET['w_o'];
    $component = $_GET['component'];
    $staff = $_GET['staff'];
    $notes = $_GET['notes'];

    //echo $component;

    $lip = 0;
    $mandrel = 0;
    $dieplate = 0;
    $backer = 0;
    $bolster = 0;

    if ($component == "lip"){
        $lip = 1;
    }
    if ($component == "mandrel"){
        $mandrel = 1;
    }
    if ($component == "dieplate"){
        $dieplate = 1;
    }
    if ($component == "backer"){
        $backer = 1;
    }
    if ($component == "bolster"){
        $bolster = 1;
    }

    //echo "Lip= ", $lip;
    //echo "Mandrel= ", $mandrel;
    //echo "Dieplate= ", $dieplate;
    //echo "Backer= ", $backer;
    //echo "Bolster= ", $bolster;


    //$lip = $_GET['lip'];
    //$mandrel = $_GET['mandrel'];
    //$dieplate = $_GET['dieplate'];
    //$backer = $_GET['backer'];
    //$bolster = $_GET['bolster'];

    $qlip = 0;
    $sqmandrel = 0;
    $qdieplate = 0;
    $qbacker = 0;
    $qbolster = 0;
    $reset = "-";

    $formatDate = date('d/m/Y');


    if ($lip == "1"){
        $table = "lips";
        $noteString = "Lip scrapped on $formatDate - tracking replacement.";
        $mysqli->query("UPDATE lips SET design_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE lips SET design_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE lips SET model_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE lips SET model_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE lips SET prog_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE lips SET prog_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE lips SET turning_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE lips SET turning_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE lips SET soft_mac_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE lips SET soft_mac_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE lips SET heat_treat_send = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE lips SET heat_treat_back = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE lips SET hard_mac_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE lips SET hard_mac_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE lips SET ramspark_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE lips SET ramspark_finish =  '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE lips SET section_mill_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE lips SET section_mill_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE lips SET wirespark_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE lips SET wirespark_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE lips SET finishing_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE lips SET finishing_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE lips SET packing_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE lips SET packing_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE job_table SET scrap_notes = '$noteString' WHERE work_order = '$workOrder'");
    }

    if ($mandrel == "1"){
        $table = "mandrels";
        $noteString = "Mandrel scrapped on $formatDate - tracking replacement.";
        $mysqli->query("UPDATE mandrels SET design_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE mandrels SET design_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE mandrels SET model_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE mandrels SET model_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE mandrels SET prog_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE mandrels SET prog_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE mandrels SET turning_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE mandrels SET turning_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE mandrels SET soft_mac_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE mandrels SET soft_mac_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE mandrels SET heat_treat_send = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE mandrels SET heat_treat_back = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE mandrels SET hard_mac_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE mandrels SET hard_mac_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE mandrels SET ramspark_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE mandrels SET ramspark_finish =  '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE mandrels SET section_mill_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE mandrels SET section_mill_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE mandrels SET wirespark_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE mandrels SET wirespark_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE mandrels SET finishing_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE mandrels SET finishing_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE mandrels SET packing_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE mandrels SET packing_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE job_table SET scrap_notes = '$noteString' WHERE work_order = '$workOrder'");
    }

    if ($dieplate == "1"){
        $table = "dieplates";
        $noteString = "Dieplate scrapped on $formatDate - tracking replacement.";
        $mysqli->query("UPDATE dieplates SET design_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE dieplates SET design_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE dieplates SET model_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE dieplates SET model_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE dieplates SET prog_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE dieplates SET prog_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE dieplates SET turning_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE dieplates SET turning_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE dieplates SET soft_mac_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE dieplates SET soft_mac_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE dieplates SET heat_treat_send = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE dieplates SET heat_treat_back = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE dieplates SET hard_mac_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE dieplates SET hard_mac_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE dieplates SET ramspark_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE dieplates SET ramspark_finish =  '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE dieplates SET section_mill_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE dieplates SET section_mill_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE dieplates SET wirespark_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE dieplates SET wirespark_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE dieplates SET finishing_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE dieplates SET finishing_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE dieplates SET packing_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE dieplates SET packing_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE job_table SET scrap_notes = '$noteString' WHERE work_order = '$workOrder'");
    }

    if ($backer == "1"){
        $table = "backers";
        $noteString = "Backer scrapped on $formatDate - tracking replacement.";
        $mysqli->query("UPDATE backers SET design_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE backers SET design_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE backers SET model_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE backers SET model_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE backers SET prog_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE backers SET prog_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE backers SET turning_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE backers SET turning_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE backers SET soft_mac_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE backers SET soft_mac_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE backers SET heat_treat_send = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE backers SET heat_treat_back = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE backers SET hard_mac_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE backers SET hard_mac_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE backers SET ramspark_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE backers SET ramspark_finish =  '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE backers SET section_mill_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE backers SET section_mill_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE backers SET wirespark_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE backers SET wirespark_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE backers SET finishing_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE backers SET finishing_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE backers SET packing_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE backers SET packing_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE job_table SET scrap_notes = '$noteString' WHERE work_order = '$workOrder'");
    }

    if ($bolster == "1"){
        $table = "bolsters";
        $noteString = "Bolster scrapped on $formatDate - tracking replacement.";
        $mysqli->query("UPDATE bolsters SET design_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE bolsters SET design_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE bolsters SET model_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE bolsters SET model_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE bolsters SET prog_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE bolsters SET prog_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE bolsters SET turning_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE bolsters SET turning_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE bolsters SET soft_mac_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE bolsters SET soft_mac_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE bolsters SET heat_treat_send = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE bolsters SET heat_treat_back = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE bolsters SET hard_mac_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE bolsters SET hard_mac_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE bolsters SET ramspark_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE bolsters SET ramspark_finish =  '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE bolsters SET section_mill_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE bolsters SET section_mill_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE bolsters SET wirespark_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE bolsters SET wirespark_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE bolsters SET finishing_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE bolsters SET finishing_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE bolsters SET packing_start = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE bolsters SET packing_finish = '$reset' WHERE work_order = '$workOrder'");
        $mysqli->query("UPDATE job_table SET scrap_notes = '$noteString' WHERE work_order = '$workOrder'");
    }

    $sql = "SELECT die_number FROM job_table WHERE work_order = '$workOrder'";
    $result = $mysqli->query($sql);

    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
          $dieNo = $row["die_number"];
        }
      } else {
        echo "0 results";
      }

    $date = date("d/m/Y");

    $mysqli->query("INSERT INTO scrap (work_order, die_number, component, scrap_date, staff_member, notes) VALUES ('$workOrder', '$dieNo', '$component', '$date', '$staff', '$notes')");

    $qStatus = "Ongoing";
    $reset = "'-'";

   


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
            <h1 class="added">Scrap Logged</h1>
        </div>
        <div class="foot-container" id="foot-container"></div>
    </body>
</html>

<?php include "database_disconnect.php";?>