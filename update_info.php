<?php include "database_connect.php";?>


<?php
    $workOrder = $_GET['workOrder'];
    $job_status = $_GET['job_status'];



    $mysqli->query("UPDATE job_table SET job_status = '$job_status' WHERE work_order = '$workOrder'");



?>

<?php include "database_disconnect.php";?>