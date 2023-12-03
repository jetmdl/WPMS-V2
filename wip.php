<?php
// Initialize the session
session_start();
 
// Check if the user is logged in, if not then redirect him to login page
if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
    header("location: index.php");
    exit;
}
$_user = "Logged in as: "
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
        <div class="menu-container" id="menu-container">
            <!-- <button id="remove">Remove</button> -->
            <button id="populate">All Dies</button>
            <button id="flat">Filter: Flat Dies</button>
            <button id="hollow">Filter: Hollow Dies</button>
            <button id="ongoing">Filter: Ongoing</button>
            <button id="complete">Filter: Complete</button>
            <button id="Multi-Sign-off">Multi-Sign-off</button>
            <button id="search">Search</button>
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
        <div class="foot-container" id="foot-container">
        <h3 class="my-5"><?php echo htmlspecialchars($_SESSION["username"]); ?></h3>
        <!--<h3 class="my-5">Version 2.1.1 - Now with 43% more incomprehensible spaghetti code!</h3>-->
        </div>
    <script src='wip.js'></script>
    </body>
</html>