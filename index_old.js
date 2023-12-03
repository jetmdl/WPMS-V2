// Test Data Dictionary 
var jobArray = [
    '36100 - SM5500-1 - Hollow - 220x150 - Ongoing',
    '36101 - SM5500-2 - Hollow - 220x150 - Ongoing',
    '36102 - SM5500-3 - Hollow - 220x150 - Ongoing',
    '36103 - SM5500-4 - Hollow - 220x150 - Ongoing',
    '36104 - SM5500-5 - Hollow - 220x150 - Ongoing',
    '36105 - SM5500-6 - Hollow - 220x150 - Ongoing',
    '36106 - SM5500-7 - Hollow - 220x150 - Ongoing',
    '36107 - SM5500-8 - Hollow - 220x150 - Ongoing',
    '36108 - SM5500-9 - Hollow - 220x150 - Ongoing',
    '36109 - SM5500-10 - Hollow - 220x150 - Ongoing',
    '36110 - SM5500-11 - Hollow - 220x150 - Ongoing',
    '36111 - SM5500-12 - Hollow - 220x150 - Ongoing',
    '36112 - SM5500-13 - Hollow - 220x150 - Ongoing',
    '36113 - SM5500-14 - Hollow - 220x150 - Ongoing',
    '36114 - SM5500-15 - Hollow - 220x150 - Ongoing',
    '36115 - SM5500-16 - Hollow - 220x150 - Ongoing',
    '36116 - SM5500-17 - Hollow - 220x150 - Ongoing',
    '36117 - SM5500-18 - Hollow - 220x150 - Ongoing',
    '36118 - SM5500-19 - Hollow - 220x150 - Ongoing',
    '36119 - SM5500-20 - Hollow - 220x150 - Ongoing',
    '36120 - SM2000-1 - Flat - 220x150 - Ongoing',
    '36121 - SM5500-2 - Flat - 220x150 - Ongoing',
    '36122 - SM5500-3 - Flat - 220x150 - Ongoing',
    '36123 - SM5500-4 - Flat - 220x150 - Ongoing',
    '36124 - SM5500-5 - Flat - 220x150 - Ongoing',
    '36125 - SM5500-6 - Flat - 220x150 - Ongoing',
    '36126 - SM5500-7 - Flat - 220x150 - Ongoing',
    '36127 - SM5500-8 - Flat - 220x150 - Ongoing',
    '36128 - SM5500-9 - Flat - 220x150 - Ongoing',
    '36129 - SM5500-10 - Flat - 220x150 - Ongoing',
    '36130 - SM5500-1 - Hollow - 220x150 - Ongoing',
    '36131 - SM5500-1 - Hollow - 220x150 - Ongoing',
    '36132 - SM5500-1 - Hollow - 220x150 - Ongoing',
    '36133 - SM5500-1 - Hollow - 220x150 - Ongoing',
    '36134 - SM5500-1 - Hollow - 220x150 - Ongoing',
    '36135 - SM5500-1 - Hollow - 220x150 - Ongoing',
    '36136 - SM5500-1 - Hollow - 220x150 - Ongoing',
    '36137 - SM5500-1 - Hollow - 220x150 - Ongoing',
    '36138 - SM5500-1 - Hollow - 220x150 - Ongoing',
    '36139 - SM5500-1 - Hollow - 220x150 - Ongoing',
    '36140 - SM5500-1 - Hollow - 220x150 - Ongoing',
    '36141 - SM5500-1 - Hollow - 220x150 - Ongoing',
    '36142 - SM5500-1 - Hollow - 220x150 - Ongoing',
    '36143 - SM5500-1 - Hollow - 220x150 - Ongoing',
    '36144 - SM5500-1 - Hollow - 220x150 - Ongoing',
    '36145 - SM5500-1 - Hollow - 220x150 - Ongoing',
    '36146 - SM5500-1 - Hollow - 220x150 - Ongoing',
    '36147 - SM5500-1 - Hollow - 220x150 - Ongoing',
    '36148 - SM5500-1 - Hollow - 220x150 - Ongoing',
    '36149 - SM5500-1 - Hollow - 220x150 - Ongoing',
    '36150 - SM5500-1 - Hollow - 220x150 - Ongoing'
]

insertAllElements();
getNumberOfJobs();

// Get length of job dictionary
function getNumberOfJobs(){
    return(jobArray.length);
}

// remove all divs from the content container
var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeElements);

function removeElements(){
    const el = document.getElementById('content-container');
    while(el.firstChild) el.removeChild(el.firstChild);
}

// add full amount of divs to content container
var populateButton = document.getElementById('populate');
populateButton.addEventListener('click', insertAllElements);

function insertAllElements(){
    removeElements();
    var amount = getNumberOfJobs();
    for(var i = 0; i < amount; i++){
        var idname = 'job';
        idname += i;
        var new_div = document.createElement("div");
        let newClass ='';
        if(i%2 == 0){
            newClass = "job-light";
        }
        else{
            newClass = "job-dark";
        }
        new_div.className = newClass;        
        new_div.id = idname;
        document.getElementById('content-container').appendChild(new_div);
        let jobString = jobArray[i];
        let textnode = document.createTextNode(jobString);
        document.getElementById(idname).appendChild(textnode);
    }  
    addJobListeners();
}

function addJobListeners(){
    var clickedIdLight = document.getElementsByClassName('job-light');
    for (var i = 0; i < clickedIdLight.length; i++){
        clickedIdLight[i].addEventListener('click', getClickedId);
    }
    var clickedIdDark = document.getElementsByClassName('job-dark');
    for (var i = 0; i < clickedIdDark.length; i++){
        clickedIdDark[i].addEventListener('click', getClickedId);
    }
}

function getClickedId(){
    console.log(this.id);
}