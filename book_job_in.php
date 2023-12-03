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
            <!-- <button id="remove">Remove</button>
            <button id="populate">All Dies</button>
            <button id="flat">Filter: Flat Dies</button>
            <button id="hollow">Filter: Hollow Dies</button>
            <button id="ongoing">Filter: Ongoing</button>
            <button id="complete">Filter: Complete</button>
            <button id="search">Search by W/O</button> -->
        </div>
        <div class="col-header-container" id="col-header-container">
            <div class="nav-bar-container">
            </div>
        </div>
        <div class="content-container" id='content-container'>
        <form action="book_to_database.php" method="GET">
            <label for="w_o">Work Order Number:</label><br>
            <input type="text" id="w_o" name="w_o" ><br>
            <label for="dieNo">Die Number:</label><br>
            <input type="text" id="dieNo" name="dieNo" ><br><br>

            <label for="customer">Customer:</label><br>
            <input type="text" id="customer" name="customer" ><br>
            <label for="dia">Diameter/stack:</label><br>
            <input type="text" id="dia" name="dia" ><br>

            <br>

            <p>Job Type:</p>
            <input type="radio" id="hollow" name="type" value="Hollow">
            <label for="hollow">Hollow</label><br>
            <input type="radio" id="flat" name="type" value="Flat">
            <label for="flat">Flat</label><br>  
            <input type="radio" id="bolster" name="type" value="Bolster">
            <label for="bolster">Bolster</label><br>
            
            <br>

            <!-- <p>Required Components:</p>
            <input type="checkbox" id="lip" name="lip" value="1">
            <label for="lip"> Lip Required</label><br>
            <input type="checkbox" id="mandrel" name="mandrel" value="1">
            <label for="mandrel"> Mandrel Required</label><br>
            <input type="checkbox" id="dieplate" name="dieplate" value="1">
            <label for="dieplate"> Dieplate Required</label><br>
            <input type="checkbox" id="backer" name="backer" value="1">
            <label for="backer"> Backer Required</label><br>
            <input type="checkbox" id="bolster" name="bolster" value="1">
            <label for="bolster"> Bolster Required</label><br> -->

            <br>

            <!-- <br>
            <p>Method:</p>
            <input type="checkbox" id="mandrelMill" name="mandrelMill" value="1">
            <label for="mandrelMill"> Mandrel Finish Mill Core</label><br>
            <input type="checkbox" id="dieMill" name="dieMill" value="1">
            <label for="dieMill"> Die Finish Mill Section</label><br> -->

            <br>



            <input type="submit" value="Submit">
        </form> 
        </div>
        <div class="foot-container" id='foot-container'>
        <h3 class="my-5"><?php echo htmlspecialchars($_SESSION["username"]); ?></h3>
        </div>
        <script src='book.js'></script>

    </body>
</html>