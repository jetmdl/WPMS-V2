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
                    <li><a href='job_search.html'>Job Search</a></li>
                    <li><a href='wip.html'>WIP Tracker</a></li>
                    <li><a href='steel.html'>Steel Inventory</a></li>  
                    <li><a href='book_job_in.php'>Book In</a></li>  
                    <li><a href='log_scrap.php'>Log Scrap</a></li>                  
                    <li><a href='index.html'>Log Out</a></li>
                </ul>
            </nav>
        </div>
        <div class="menu-container">
        </div>
        <div class="content-container" id='content-container'>
            <div class="searchContainer">
                <h3>Enter Work Order Number</h3>
                <input id="searchInput" type="text"/>
                <button id="searchButton">Search</button>
            </div>
            
        </div>
        <div class="foot-container"></div>
    <!-- <script src='index.js'></script> -->
    </body>
</html>