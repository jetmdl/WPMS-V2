<?php
// Initialize the session
session_start();
 
// Unset all of the session variables
$_SESSION = array();
 
// Destroy the session.
session_destroy();
 
// Redirect to login page
header("location: index.php");
exit;
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
                    <li><a href='log_scrap.php'>Log Scrap</a></li>    
                    <li><a href='mod_job.php'>Modify Job</a></li>        
                    <li><a href='logout.php'>Log Out</a></li>
                </ul>
            </nav>
        </div>
        <div class="menu-container">
            <!-- <button id="remove">Remove</button> -->
            <button id="populate">All Dies</button>
            <button id="flat">Filter: Flat Dies</button>
            <button id="hollow">Filter: Hollow Dies</button>
            <button id="ongoing">Filter: Ongoing</button>
            <button id="complete">Filter: Complete</button>
            <button id="search">Search by W/O</button>
        </div>
        <div class="col-header-container" id="col-header-container">
            <div class="nav-bar-container">
                <ul class="job-nav-bar">
                    <li>Work Order</li>
                    <li>Die No</li>
                    <li>Type</li>    
                    <li>Diameter</li>
                    <li>Customer</li>                   
                </ul>
            </div>
        </div>
        <div class="content-container" id='content-container'>
        </div>
        <div class="foot-container" id="foot-container"></div>
    <script src='wip.js'></script>
    </body>
</html>