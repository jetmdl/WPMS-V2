let infoArray = [];
let infoDict = {};
let lipArray = [];
let lipDict = {};
let partDict = {};
let mandArray = [];
let mandDict = {};
let dieArray = [];
let dieDict = {};
let backerArray = [];
let backerDict = {};
let bolArray = [];
let bolDict = {};
let nextArray = [];
let nextDict = {};
let newJobArray = {};
let partArray = [];
let scrapArray = [];
let scrapDict = {};

getDatabase();
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function demo() {
    // console.log('Taking a break...');
    await sleep(500);
    // console.log('Two seconds later, showing sleep in a loop...');
  
    // Sleep in loop
    for (let i = 0; i < 2; i++) {
      if (i === 3)
        await sleep(500);
    //   console.log(i);
    }
    //insertOngoingElements();
}
demo();
 
function getDatabase(){
    infoxhp = new XMLHttpRequest();
    infoxhp.open('GET', 'get_job_table.php', true);
    infoxhp.send();
    infoxhp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText);
            for (i in data){
                infoArray = [];

                infoArray.push(data[i].die_number);
                infoArray.push(data[i].job_type);
                infoArray.push(data[i].job_diameter);
                infoArray.push(data[i].job_customer);
                infoArray.push(data[i].job_status);
                infoArray.push(data[i].lip_required);
                infoArray.push(data[i].mand_required);
                infoArray.push(data[i].die_required);
                infoArray.push(data[i].backer_required);
                infoArray.push(data[i].bolster_required);
                infoArray.push(data[i].next_stage);
                infoArray.push(data[i].scrap_notes);
                infoArray.push(data[i].part_required);
                infoArray.push(data[i].no_scrap_components);

                infoDict[data[i].work_order] = infoArray;
            }
        }
    };

    partxhp = new XMLHttpRequest();
    partxhp.open('GET', 'get_part_table.php', true);
    partxhp.send();
    partxhp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText);
            for (i in data){
                partArray = [];

                partArray.push(data[i].design_start);
                partArray.push(data[i].design_finish);
                partArray.push(data[i].model_start);
                partArray.push(data[i].model_finish);
                partArray.push(data[i].prog_start);
                partArray.push(data[i].prog_finish);
                partArray.push(data[i].turning_start);
                partArray.push(data[i].turning_finish);
                partArray.push(data[i].soft_mac_start);
                partArray.push(data[i].soft_mac_finish);
                partArray.push(data[i].heat_treat_send);
                partArray.push(data[i].heat_treat_back);
                partArray.push(data[i].hard_mac_start);
                partArray.push(data[i].hard_mac_finish);
                partArray.push(data[i].ramspark_start);
                partArray.push(data[i].ramspark_finish);
                partArray.push(data[i].section_mill_start);
                partArray.push(data[i].section_mill_finish);
                partArray.push(data[i].wirespark_start);
                partArray.push(data[i].wirespark_finish);
                partArray.push(data[i].finishing_start);
                partArray.push(data[i].finishing_finish);
                partArray.push(data[i].packing_start);
                partArray.push(data[i].packing_finish);

                partDict[data[i].work_order] = partArray;
                
            }
        }
    };

    lipxhp = new XMLHttpRequest();
    lipxhp.open('GET', 'get_lip_table.php', true);
    lipxhp.send();
    lipxhp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText);
            for (i in data){
                lipArray = [];

                lipArray.push(data[i].design_start);
                lipArray.push(data[i].design_finish);
                lipArray.push(data[i].model_start);
                lipArray.push(data[i].model_finish);
                lipArray.push(data[i].prog_start);
                lipArray.push(data[i].prog_finish);
                lipArray.push(data[i].turning_start);
                lipArray.push(data[i].turning_finish);
                lipArray.push(data[i].soft_mac_start);
                lipArray.push(data[i].soft_mac_finish);
                lipArray.push(data[i].heat_treat_send);
                lipArray.push(data[i].heat_treat_back);
                lipArray.push(data[i].hard_mac_start);
                lipArray.push(data[i].hard_mac_finish);
                lipArray.push(data[i].ramspark_start);
                lipArray.push(data[i].ramspark_finish);
                lipArray.push(data[i].section_mill_start);
                lipArray.push(data[i].section_mill_finish);
                lipArray.push(data[i].wirespark_start);
                lipArray.push(data[i].wirespark_finish);
                lipArray.push(data[i].finishing_start);
                lipArray.push(data[i].finishing_finish);
                lipArray.push(data[i].packing_start);
                lipArray.push(data[i].packing_finish);

                lipDict[data[i].work_order] = lipArray;
            }
        }
    };

    mandxhp = new XMLHttpRequest();
    mandxhp.open('GET', 'get_mand_table.php', true);
    mandxhp.send();
    mandxhp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText);
            for (i in data){
                mandArray = [];

                mandArray.push(data[i].design_start);
                mandArray.push(data[i].design_finish);
                mandArray.push(data[i].model_start);
                mandArray.push(data[i].model_finish);
                mandArray.push(data[i].prog_start);
                mandArray.push(data[i].prog_finish);
                mandArray.push(data[i].turning_start);
                mandArray.push(data[i].turning_finish);
                mandArray.push(data[i].soft_mac_start);
                mandArray.push(data[i].soft_mac_finish);
                mandArray.push(data[i].heat_treat_send);
                mandArray.push(data[i].heat_treat_back);
                mandArray.push(data[i].hard_mac_start);
                mandArray.push(data[i].hard_mac_finish);
                mandArray.push(data[i].ramspark_start);
                mandArray.push(data[i].ramspark_finish);
                mandArray.push(data[i].section_mill_start);
                mandArray.push(data[i].section_mill_finish);
                mandArray.push(data[i].wirespark_start);
                mandArray.push(data[i].wirespark_finish);
                mandArray.push(data[i].finishing_start);
                mandArray.push(data[i].finishing_finish);
                mandArray.push(data[i].packing_start);
                mandArray.push(data[i].packing_finish);

                mandDict[data[i].work_order] = mandArray;
            }
        }
    };

    diexhp = new XMLHttpRequest();
    diexhp.open('GET', 'get_die_table.php', true);
    diexhp.send();
    diexhp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText);
            for (i in data){
                dieArray = [];

                dieArray.push(data[i].design_start);
                dieArray.push(data[i].design_finish);
                dieArray.push(data[i].model_start);
                dieArray.push(data[i].model_finish);
                dieArray.push(data[i].prog_start);
                dieArray.push(data[i].prog_finish);
                dieArray.push(data[i].turning_start);
                dieArray.push(data[i].turning_finish);
                dieArray.push(data[i].soft_mac_start);
                dieArray.push(data[i].soft_mac_finish);
                dieArray.push(data[i].heat_treat_send);
                dieArray.push(data[i].heat_treat_back);
                dieArray.push(data[i].hard_mac_start);
                dieArray.push(data[i].hard_mac_finish);
                dieArray.push(data[i].ramspark_start);
                dieArray.push(data[i].ramspark_finish);
                dieArray.push(data[i].section_mill_start);
                dieArray.push(data[i].section_mill_finish);
                dieArray.push(data[i].wirespark_start);
                dieArray.push(data[i].wirespark_finish);
                dieArray.push(data[i].finishing_start);
                dieArray.push(data[i].finishing_finish);
                dieArray.push(data[i].packing_start);
                dieArray.push(data[i].packing_finish);

                dieDict[data[i].work_order] = dieArray;
            }
        }
    };

    backerxhp = new XMLHttpRequest();
    backerxhp.open('GET', 'get_backer_table.php', true);
    backerxhp.send();
    backerxhp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText);
            for (i in data){
                backerArray = [];

                backerArray.push(data[i].design_start);
                backerArray.push(data[i].design_finish);
                backerArray.push(data[i].model_start);
                backerArray.push(data[i].model_finish);
                backerArray.push(data[i].prog_start);
                backerArray.push(data[i].prog_finish);
                backerArray.push(data[i].turning_start);
                backerArray.push(data[i].turning_finish);
                backerArray.push(data[i].soft_mac_start);
                backerArray.push(data[i].soft_mac_finish);
                backerArray.push(data[i].heat_treat_send);
                backerArray.push(data[i].heat_treat_back);
                backerArray.push(data[i].hard_mac_start);
                backerArray.push(data[i].hard_mac_finish);
                backerArray.push(data[i].ramspark_start);
                backerArray.push(data[i].ramspark_finish);
                backerArray.push(data[i].section_mill_start);
                backerArray.push(data[i].section_mill_finish);
                backerArray.push(data[i].wirespark_start);
                backerArray.push(data[i].wirespark_finish);
                backerArray.push(data[i].finishing_start);
                backerArray.push(data[i].finishing_finish);
                backerArray.push(data[i].packing_start);
                backerArray.push(data[i].packing_finish);

                backerDict[data[i].work_order] = backerArray;
            }
        }
    };

    bolxhp = new XMLHttpRequest();
    bolxhp.open('GET', 'get_bolster_table.php', true);
    bolxhp.send();
    bolxhp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText);
            for (i in data){
                bolArray = [];

                bolArray.push(data[i].design_start);
                bolArray.push(data[i].design_finish);
                bolArray.push(data[i].model_start);
                bolArray.push(data[i].model_finish);
                bolArray.push(data[i].prog_start);
                bolArray.push(data[i].prog_finish);
                bolArray.push(data[i].turning_start);
                bolArray.push(data[i].turning_finish);
                bolArray.push(data[i].soft_mac_start);
                bolArray.push(data[i].soft_mac_finish);
                bolArray.push(data[i].heat_treat_send);
                bolArray.push(data[i].heat_treat_back);
                bolArray.push(data[i].hard_mac_start);
                bolArray.push(data[i].hard_mac_finish);
                bolArray.push(data[i].ramspark_start);
                bolArray.push(data[i].ramspark_finish);
                bolArray.push(data[i].section_mill_start);
                bolArray.push(data[i].section_mill_finish);
                bolArray.push(data[i].wirespark_start);
                bolArray.push(data[i].wirespark_finish);
                bolArray.push(data[i].finishing_start);
                bolArray.push(data[i].finishing_finish);
                bolArray.push(data[i].packing_start);
                bolArray.push(data[i].packing_finish);

                bolDict[data[i].work_order] = bolArray;
            }
        }
    };

    nextxhp = new XMLHttpRequest();
    nextxhp.open('GET', 'get_next_table.php', true);
    nextxhp.send();
    nextxhp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText);
            for (i in data){
                nextArray = [];

                nextArray.push(data[i].lip);
                nextArray.push(data[i].mandrel);
                nextArray.push(data[i].dieplate);
                nextArray.push(data[i].backer);
                nextArray.push(data[i].bolster);

                nextDict[data[i].work_order] = nextArray;
            }
        }
    };

    scrapxhp = new XMLHttpRequest();
    scrapxhp.open('GET', 'get_scrap_table.php', true);
    scrapxhp.send();
    scrapxhp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText);
            for (i in data){
                scrapArray = [];

                //scrapArray.push(data[i].id);
                scrapArray.push(data[i].work_order);
                scrapArray.push(data[i].die_number);
                scrapArray.push(data[i].component);
                scrapArray.push(data[i].scrap_date);
                scrapArray.push(data[i].staff_member);
                scrapArray.push(data[i].notes);

                //console.log(scrapArray);

                scrapDict[data[i].ID] = scrapArray;

            }
        }
    };

}

// Get length of infoDict
function getNumberOfJobs(){
    let count = 0;
    for (let i in infoDict) {
        if (infoDict.hasOwnProperty(i)){
            count++;
        }
    }
    return(count);
}

//Creates an array of keys for infoDict dict
function createKeyArray(){
    let keyArray = [];
    for (let key in infoDict){
        keyArray.push(key);
        return(keyArray);
    }
}

// remove all divs from the content container
function removeElements(){
    const el = document.getElementById('content-container');
    while(el.firstChild) el.removeChild(el.firstChild);
}

function removeColHeaders(){
    const el = document.getElementById('col-header-container');
    while(el.firstChild) el.removeChild(el.firstChild);
}

function createColHeaders(){
    removeColHeaders();
    let list = document.createElement('ul');
    list.id = 'job-nav-bar';
    list.className = 'job-nav-bar';
    let woHeader = document.createElement('li');
    woHeader.appendChild(document.createTextNode('Scrap ID'));
    list.appendChild(woHeader);
    let dieHeader = document.createElement('li');
    dieHeader.appendChild(document.createTextNode('Work Order'));
    list.appendChild(dieHeader);
    let typeHeader = document.createElement('li');
    typeHeader.appendChild(document.createTextNode('Die No'));
    list.appendChild(typeHeader);
    let diaHeader = document.createElement('li');
    diaHeader.appendChild(document.createTextNode('Component'));
    list.appendChild(diaHeader);
    let custHeader = document.createElement('li');
    custHeader.appendChild(document.createTextNode('Date'));
    list.appendChild(custHeader);
    let contDiv = document.createElement('div');
    contDiv.class = 'nav-bar-container';
    contDiv.appendChild(list);
    document.getElementById('col-header-container').appendChild(contDiv);
}

// add all elements to content container
//let populateButton = document.getElementById('populate');
//populateButton.addEventListener('click', insertAllElements);

function checkAuth(){

    let userDict = {
        'james':'JT',
        'paul_w':'PW',
        'pete':'PeC',
        'derek':'DS',
        'russell_g':'RG',
        'paul_c':'PC',
        'mel':'MV',
        'jamie':'JM',
        'mark':'MD',
        'chubb':'TR',
        'scott': 'SM',
        'brian_j': 'BJ',
        'dene': 'DSu',
        'john':'JS', 
        'rob_l':'RL',
        'chris_t':'CT',
        'brian_p':'BP',
        'clive':'CC',
        'warren':'WP',
        'piotr':'PS',
        'bailey':'BA',
        'ryan':'RD',
        'russell_j':'RJ',
        'keenan':'KW',
        'jack':'JD',
        'joe':'JR',
        'tom':'TD',
        'harvey':'HW',
        'kyle':'KW',
        'adelajd':'AR'
    }

    console.log(document.getElementById('foot-container').innerText);
    let initial = userDict[document.getElementById('foot-container').innerText];

    console.log(initial);

    let authorisedUsers = ['JT', 'PW', 'PeC', 'PC', 'BJ', 'SM'];
    let i = 0;
    let authorised = false;

    while (i < authorisedUsers.length) {
        if(initial == (authorisedUsers[i])){
            authorised = true;
        }
        i++;
    }

    if(authorised == false){
        removeElements();
        let new_warning_message = document.createElement('h3');
        //let warningMessage = 'formHeader';
        //new_warning_message.className = warningMessage;
        document.getElementById('content-container').appendChild(new_warning_message);
    
        //Populate and append the form title. 
        warningMessage = 'You do not have permission to access this page '; 
        new_warning_message.appendChild(document.createTextNode(warningMessage));
        // Create line break
        let br = document.createElement('br');
        document.getElementById('content-container').appendChild(br.cloneNode());
    }
}

function removeElements(){
    const el = document.getElementById('content-container');
    while(el.firstChild) el.removeChild(el.firstChild);
}

checkAuth();

// add search form to content container
let book = document.getElementById('book-scrap');
book.addEventListener('click', function() {createBookForm()});

function createBookForm() {
    removeElements();

    // Create container for form
    let new_div = document.createElement('div');
    let newClass ='bookContainer';
    new_div.className = newClass;
    new_div.id = 'bookContainer';
    document.getElementById('content-container').appendChild(new_div);

    //Create title for the form
    let new_header = document.createElement('p');
    let headerClass = 'formHeader';
    new_header.className = headerClass;
    document.getElementById('bookContainer').appendChild(new_header);

    //Populate and append the form title. 
    headerString = 'Enter Work Order Number: '; 
    new_header.appendChild(document.createTextNode(headerString));
    // Create line break
    let br = document.createElement('br');
    //document.getElementById('bookContainer').appendChild(br.cloneNode());

    // Create value field to type in work order number
    let valueInput = document.createElement('input');
    valueInput.setAttribute('type', 'text');
    valueInput.setAttribute('name', 'input');
    valueInput.setAttribute('placeholder', 'Work Order Number');
    valueInput.id = 'searchInput';

    document.getElementById('bookContainer').appendChild(valueInput);
    document.getElementById('bookContainer').appendChild(br.cloneNode());

    //Create title for the form
    let new_dieSearch_header = document.createElement('p');
    let dieSearchHeaderClass = 'formHeader';
    new_dieSearch_header.className = dieSearchHeaderClass;
    document.getElementById('bookContainer').appendChild(new_dieSearch_header);

    //Populate and append the form title. 
    dieSearchHeaderString = 'Staff Member: '; 
    new_dieSearch_header.appendChild(document.createTextNode(dieSearchHeaderString));
    // Create line break
    //let br = document.createElement('br');
    //document.getElementById('bookContainer').appendChild(br.cloneNode());

    // Create value field to type in staff member
    let staffMemberInput = document.createElement('input');
    staffMemberInput.setAttribute('type', 'text');
    staffMemberInput.setAttribute('name', 'input');
    staffMemberInput.setAttribute('placeholder', 'Staff Member');
    staffMemberInput.id = 'staffMemberInput';

    document.getElementById('bookContainer').appendChild(staffMemberInput);
    document.getElementById('bookContainer').appendChild(br.cloneNode());
    document.getElementById('bookContainer').appendChild(br.cloneNode());


    //Create title for the form
    let comp_select_header = document.createElement('p');
    let listHeaderClass = 'formHeader';
    comp_select_header.className = listHeaderClass;
    document.getElementById('bookContainer').appendChild(comp_select_header);

    //Populate and append the form title. 
    listSearchHeaderString = 'Select component: '; 
    comp_select_header.appendChild(document.createTextNode(listSearchHeaderString));

    var componentList = ['Lip', 'Mandrel', 'Dieplate', 'Backer', 'Bolster']

    var selectList = document.createElement("select");
    selectList.id = "componentSelect";
    document.getElementById('bookContainer').appendChild(selectList);
    document.getElementById('bookContainer').appendChild(br.cloneNode());
    document.getElementById('bookContainer').appendChild(br.cloneNode());

    for (var i = 0; i < componentList.length; i++) {
        var option = document.createElement("option");
        option.value = componentList[i];
        option.text = componentList[i];
        selectList.appendChild(option);
    }

        //Create title for the form
        let noteHeader = document.createElement('p');
        let noteClass = 'formHeader';
        noteHeader.className = noteClass;
        document.getElementById('bookContainer').appendChild(noteHeader);
    
        //Populate and append the form title. 
        noteString = 'Notes: '; 
        noteHeader.appendChild(document.createTextNode(noteString));
        // Create line break
    
        // Create value field to type in staff member
        let noteInput = document.createElement('textarea');
        noteInput.maxLength = "5000";
        noteInput.cols = "30";
        noteInput.rows = "5";
        noteInput.id = 'noteInput';
    
        document.getElementById('bookContainer').appendChild(noteInput);

    //document.getElementById('bookContainer').appendChild(listSearchValueInput);

    // Create a button and an event listner that passes the values contained in the form to function that updates the correct dictionary. 
    document.getElementById('bookContainer').appendChild(br.cloneNode());
    let listSearchActionButton = document.createElement('button');
    listSearchActionButton.appendChild(document.createTextNode('Submit'));
    listSearchActionButton.addEventListener('click', function() {createBookString(document.getElementById('searchInput').value, document.getElementById('staffMemberInput').value, document.getElementById('componentSelect').value, document.getElementById('noteInput').value)});
    document.getElementById('bookContainer').appendChild(listSearchActionButton);
}

function createBookString(aWorkOrder, aStaff, aComponent, aNoteString){
    removeElements();
    componentString =   'w_o='       + aWorkOrder +
                        '&component='    + aComponent +
                        '&staff='        + aStaff +
                        '&notes='     + aNoteString;
    
    callPHP(componentString,'scrap_to_database.php?'+componentString);

}

function callPHP(params, aurl) {
    var httpc = new XMLHttpRequest(); // simplified for clarity
    var url = aurl;
    httpc.open("GET", url, true); // sending as POST

    httpc.onreadystatechange = function() { //Call a function when the state changes.
        if(httpc.readyState == 4 && httpc.status == 200) { // complete and no errors
            // alert(httpc.responseText); // some processing here, or whatever you want to do with the response
        }
    };
    httpc.send(params);
}

// add search form to content container
let search = document.getElementById('scrap-record');
search.addEventListener('click', function() {createSearchForm()});

function createSearchForm() {
    getDatabase();
    removeElements();

    // Create container for form
    let new_div = document.createElement('div');
    let newClass ='searchContainer';
    new_div.className = newClass;
    new_div.id = 'searchContainer';
    document.getElementById('content-container').appendChild(new_div);

    //Create title for the form
    let new_header = document.createElement('h3');
    let headerClass = 'formHeader';
    new_header.className = headerClass;
    document.getElementById('searchContainer').appendChild(new_header);

    //Populate and append the form title. 
    headerString = 'Enter Work Order Number: '; 
    new_header.appendChild(document.createTextNode(headerString));
    // Create line break
    let br = document.createElement('br');
    document.getElementById('searchContainer').appendChild(br.cloneNode());

    // Create value field for selected option
    let valueInput = document.createElement('input');
    valueInput.setAttribute('type', 'text');
    valueInput.setAttribute('name', 'input');
    valueInput.setAttribute('placeholder', 'Work Order Number');
    valueInput.id = 'searchInput';

    document.getElementById('searchContainer').appendChild(valueInput);

    // Create a button and an event listner that passes the values contained in the form to function that updates the correct dictionary. 
    document.getElementById('searchContainer').appendChild(br.cloneNode());
    let actionButton = document.createElement('button');
    actionButton.appendChild(document.createTextNode('Submit'));
    actionButton.addEventListener('click', function() {insertSearchedToDoElements(document.getElementById('searchInput').value)});
    document.getElementById('searchContainer').appendChild(actionButton);
}

//everything below this point needs to be modified to use the scrap index as a primary key instead of the work order

function validateSearch(anId){
    let found = false;
    for (let key in scrapDict){
        if (anId == scrapDict[key][0]){
            console.log(scrapDict[key]);
            console.log(key);
            insertSearchedToDoElements(key);
            found = true;
            break;
        }
    }
    if (found == false){
        alert("Work Order Not found");
    }
    
}

// Get length of infoDict
function getNumberOfJobs(){
    let count = 0;
    for (let i in scrapDict) {
        if (scrapDict.hasOwnProperty(i)){
            count++;
        }
    }
    return(count);
}

function insertSearchedToDoElements(aWO){
    getDatabase();
    removeElements();
    // removeColHeaders();
    createColHeaders();

    // Create container element for the list to appear in. 
    let new_div = document.createElement('div');
    let newClass ='jobListContainer';
    new_div.className = newClass;
    new_div.id = 'jobListContainer';
    document.getElementById('content-container').appendChild(new_div);

    let amount = getNumberOfJobs();
    let keyArray = [];
    let aKey = '';
    for (let key in scrapDict){
        keyArray.push(key);
    }
    let a = 0;
    for(let i = 0; i < amount; i++){
        aKey = keyArray[i];
        stringToSearch = scrapDict[aKey][0];
        if (stringToSearch == aWO){
            a++;
            let new_div = document.createElement('div');
            let newClass ='';
            if(a%2 == 0){
                newClass = 'job-light';
            }
            else{
                newClass = 'job-dark';
            }
            new_div.className = newClass;        
            new_div.id = aKey;
            document.getElementById('jobListContainer').appendChild(new_div);

            // Create 'Column' divs for each element in an entry.  
            let WOCont = document.createElement('div'); // Work Order
            WOCont.className = 'jobInfoCont';
            WOCont.id = aKey + 'WOCont';
            document.getElementById(aKey).appendChild(WOCont);
            let textnode1 = document.createTextNode(aKey);
            document.getElementById(aKey + 'WOCont').appendChild(textnode1);

            let dieNoCont = document.createElement('div'); // Die No
            dieNoCont.className = 'jobInfoCont';
            dieNoCont.id = aKey + 'dieNoCont';
            document.getElementById(aKey).appendChild(dieNoCont);
            let textnode2 = document.createTextNode(scrapDict[aKey][0]);
            document.getElementById(aKey + 'dieNoCont').appendChild(textnode2);

            let jobTypeCont = document.createElement('div'); // Type
            jobTypeCont.className = 'jobInfoCont';
            jobTypeCont.id = aKey + 'jobTypeCont';
            document.getElementById(aKey).appendChild(jobTypeCont);
            let textnode3 = document.createTextNode(scrapDict[aKey][1]);
            document.getElementById(aKey + 'jobTypeCont').appendChild(textnode3); 

            let jobDiaCont = document.createElement('div'); // Diameter
            jobDiaCont.className = 'jobInfoCont';
            jobDiaCont.id = aKey + 'jobDiaCont';
            document.getElementById(aKey).appendChild(jobDiaCont);
            let textnode4 = document.createTextNode(scrapDict[aKey][2]);
            document.getElementById(aKey + 'jobDiaCont').appendChild(textnode4); 

            let jobCustCont = document.createElement('div'); // Customer
            jobCustCont.className = 'jobInfoCont';
            jobCustCont.id = aKey + 'jobCustCont';
            document.getElementById(aKey).appendChild(jobCustCont);
            let textnode5 = document.createTextNode(scrapDict[aKey][3]);
            document.getElementById(aKey + 'jobCustCont').appendChild(textnode5); 
       }
    }  
    addJobListeners();
}

//add event listners to divs so that they return ids when clicked
function addJobListeners(){
    let clickedIdLight = document.getElementsByClassName('job-light');
    for (let i = 0; i < clickedIdLight.length; i++){
        clickedIdLight[i].addEventListener('click', getClickedId);
    }
    let clickedIdDark = document.getElementsByClassName('job-dark');
    for (let i = 0; i < clickedIdDark.length; i++){
        clickedIdDark[i].addEventListener('click', getClickedId);
    }
}

function getClickedId(){
    createReport(this.id);
    console.log(this.id);
}

function createReport(anID){
    removeElements();
    removeColHeaders();

    // Create container for form
    let new_div = document.createElement('div');
    let newClass ='searchContainer';
    new_div.className = newClass;
    new_div.id = 'searchContainer';
    document.getElementById('content-container').appendChild(new_div);

    //SCRAP ID

    //Create title for the form
    let ID_header = document.createElement('h3');
    let IDClass = 'formHeader';
    ID_header.className = IDClass;
    document.getElementById('searchContainer').appendChild(ID_header);

    //Populate and append the form title. ID_header
    headerString = "Scrap ID = " + anID; 
    ID_header.appendChild(document.createTextNode(headerString));
    // Create line break
    let br = document.createElement('br');
    document.getElementById('searchContainer').appendChild(br.cloneNode());

    //WORK ORDER

    //Create title for the form
    let WO_header = document.createElement('h3');
    let WOClass = 'formHeader';
    WO_header.className = WOClass;
    document.getElementById('searchContainer').appendChild(WO_header);

    //Populate and append the form title. ID_header
    headerString = "Work Order = " + scrapDict[anID][0]; 
    WO_header.appendChild(document.createTextNode(headerString));
    // Create line break
    //let br = document.createElement('br');
    document.getElementById('searchContainer').appendChild(br.cloneNode());    

    //DIE NUMBER

    //Create title for the form
    let Die_header = document.createElement('h3');
    let DieClass = 'formHeader';
    Die_header.className = DieClass;
    document.getElementById('searchContainer').appendChild(Die_header);

    //Populate and append the form title. ID_header
    headerString = "Die Number = " + scrapDict[anID][1]; 
    Die_header.appendChild(document.createTextNode(headerString));
    // Create line break
    //let br = document.createElement('br');
    document.getElementById('searchContainer').appendChild(br.cloneNode());   

    //COMPONENT

    //Create title for the form
    let Comp_header = document.createElement('h3');
    let CompClass = 'formHeader';
    Comp_header.className = CompClass;
    document.getElementById('searchContainer').appendChild(Comp_header);

    //Populate and append the form title. ID_header
    headerString = "Component = " + scrapDict[anID][2]; 
    Comp_header.appendChild(document.createTextNode(headerString));
    // Create line break
    //let br = document.createElement('br');
    document.getElementById('searchContainer').appendChild(br.cloneNode());  

    //DATE

    //Create title for the form
    let Date_header = document.createElement('h3');
    let dateClass = 'formHeader';
    Date_header.className = dateClass;
    document.getElementById('searchContainer').appendChild(Date_header);

    //Populate and append the form title. ID_header
    headerString = "Date = " + scrapDict[anID][3]; 
    Date_header.appendChild(document.createTextNode(headerString));
    // Create line break
    //let br = document.createElement('br');
    document.getElementById('searchContainer').appendChild(br.cloneNode()); 

    //STAFF

    //Create title for the form
    let Staff_header = document.createElement('h3');
    let staffClass = 'formHeader';
    Staff_header.className = staffClass;
    document.getElementById('searchContainer').appendChild(Staff_header);

    //Populate and append the form title. ID_header
    headerString = "Staff Member = " + scrapDict[anID][4]; 
    Staff_header.appendChild(document.createTextNode(headerString));
    // Create line break
    //let br = document.createElement('br');
    document.getElementById('searchContainer').appendChild(br.cloneNode()); 

    //Notes

    //Create title for the form
    let Notes_header = document.createElement('h3');
    let notesClass = 'formHeader';
    Notes_header.className = notesClass;
    document.getElementById('searchContainer').appendChild(Notes_header);

    //Populate and append the form title. ID_header
    headerString = "Notes = " + scrapDict[anID][5]; 
    Notes_header.appendChild(document.createTextNode(headerString));
    // Create line break
    //let br = document.createElement('br');
    document.getElementById('searchContainer').appendChild(br.cloneNode()); 
}