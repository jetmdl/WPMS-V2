<?php
// Initialize the session
session_start();
 
// Check if the user is logged in, if not then redirect him to login page
if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
    header("location: index.php");
    exit;
}
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
            <button id="h11">Filter: H11</button>
            <button id="h13">Filter: H13</button>
            <button id="s2714">Filter: 2714</button>
        </div>
        <div class="col-header-container">
            <div class="nav-bar-container">
                <ul class="nav-bar">
                    <li>Die Diameter</li>
                    <li>Bar Diameter</li>
                    <li>Current Stock</li>                    
                </ul>
            </div>
        </div>
        <div class="content-container" id='content-container'>
        </div>
        <div class="foot-container" id='foot-container'>
        <h3 class="my-5"><?php echo htmlspecialchars($_SESSION["username"]); ?></h3>
        </div>
        <iframe name="hiddenFrame" width="0" height="0" style="display: none;"></iframe>
    <script src='steel.js'></script>
    </body>
</html>