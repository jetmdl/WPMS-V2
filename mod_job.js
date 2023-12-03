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
createBookForm();

// add search form to content container
//let book = document.getElementById('book-scrap');
//book.addEventListener('click', function() {createBookForm()});

function createBookForm() {
    removeElements();

    // Create container for form
    let new_div = document.createElement('div');
    let newClass ='bookContainer';
    new_div.className = newClass;
    new_div.id = 'bookContainer';
    document.getElementById('content-container').appendChild(new_div);

    // Work order number

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

    // Die number

    //Create title for the form
    let new_dieSearch_header = document.createElement('p');
    let dieSearchHeaderClass = 'formHeader';
    new_dieSearch_header.className = dieSearchHeaderClass;
    document.getElementById('bookContainer').appendChild(new_dieSearch_header);

    //Populate and append the form title. 
    dieNoHeaderString = 'Die Number: '; 
    new_dieSearch_header.appendChild(document.createTextNode(dieNoHeaderString));
 
    // Create value field to type in staff member
    let dieNoInput = document.createElement('input');
    dieNoInput.setAttribute('type', 'text');
    dieNoInput.setAttribute('name', 'input');
    dieNoInput.setAttribute('placeholder', 'Die Number');
    dieNoInput.id = 'dieNoInput';

    document.getElementById('bookContainer').appendChild(dieNoInput);
    document.getElementById('bookContainer').appendChild(br.cloneNode());
    document.getElementById('bookContainer').appendChild(br.cloneNode());

    // Diameter

    //Create title for the form
    let diameter_header = document.createElement('p');
    let diameterHeaderClass = 'formHeader';
    diameter_header.className = diameterHeaderClass;
    document.getElementById('bookContainer').appendChild(diameter_header);

    //Populate and append the form title. 
    dieNoHeaderString = 'Diameter: '; 
    diameter_header.appendChild(document.createTextNode(dieNoHeaderString));
 
    // Create value field to type in staff member
    let diameterInput = document.createElement('input');
    diameterInput.setAttribute('type', 'text');
    diameterInput.setAttribute('name', 'input');
    diameterInput.setAttribute('placeholder', 'Diameter');
    diameterInput.id = 'diameterInput';

    document.getElementById('bookContainer').appendChild(diameterInput);
    document.getElementById('bookContainer').appendChild(br.cloneNode());
    document.getElementById('bookContainer').appendChild(br.cloneNode());
   
    // Customer

    //Create title for the form
    let customer_header = document.createElement('p');
    let customerHeaderClass = 'formHeader';
    customer_header.className = customerHeaderClass;
    document.getElementById('bookContainer').appendChild(customer_header);

    //Populate and append the form title. 
    dieNoHeaderString = 'Customer: '; 
    customer_header.appendChild(document.createTextNode(dieNoHeaderString));
 
    // Create value field to type in staff member
    let customerInput = document.createElement('input');
    customerInput.setAttribute('type', 'text');
    customerInput.setAttribute('name', 'input');
    customerInput.setAttribute('placeholder', 'Customer');
    customerInput.id = 'customerInput';

    document.getElementById('bookContainer').appendChild(customerInput);
    document.getElementById('bookContainer').appendChild(br.cloneNode());
    document.getElementById('bookContainer').appendChild(br.cloneNode());
    document.getElementById('bookContainer').appendChild(br.cloneNode());
    document.getElementById('bookContainer').appendChild(br.cloneNode());


    // Create a shitload of checkboxes
    let valueInputLip = document.createElement('input'); //LIP
    valueInputLip.setAttribute('type', 'checkbox');
    valueInputLip.setAttribute('class', 'messageCheckbox');
    valueInputLip.setAttribute('name', 'Lip');
    valueInputLip.setAttribute('value', 'lip_required');
    valueInputLip.id = 'lip_check';
    let lipLabel = document.createElement('label');
    lipLabel.htmlFor = 'lip_check';
    lipLabel.appendChild(document.createTextNode('Lip        '));
    document.getElementById('bookContainer').appendChild(valueInputLip);
    document.getElementById('bookContainer').appendChild(lipLabel);
    document.getElementById('bookContainer').appendChild(br);
    document.getElementById('bookContainer').appendChild(br.cloneNode());

    let valueInputMand = document.createElement('input'); //MAND
    valueInputMand.setAttribute('type', 'checkbox');
    valueInputMand.setAttribute('class', 'messageCheckbox');
    valueInputMand.setAttribute('name', 'Mandrel');
    valueInputMand.setAttribute('value', 'mandrel_required');
    valueInputMand.id = 'mandrel_check';
    let mandLabel = document.createElement('label');
    mandLabel.htmlFor = 'mand_check';
    mandLabel.appendChild(document.createTextNode('Mand        '));
    document.getElementById('bookContainer').appendChild(valueInputMand);
    document.getElementById('bookContainer').appendChild(mandLabel);
    document.getElementById('bookContainer').appendChild(br);
    document.getElementById('bookContainer').appendChild(br.cloneNode());

    let valueInputDie = document.createElement('input'); //DIE
    valueInputDie.setAttribute('type', 'checkbox');
    valueInputDie.setAttribute('class', 'messageCheckbox');
    valueInputDie.setAttribute('name', 'Dieplate');
    valueInputDie.setAttribute('value', 'die_required');
    valueInputDie.id = 'die_check';
    let dieLabel = document.createElement('label');
    dieLabel.htmlFor = 'die_check';
    dieLabel.appendChild(document.createTextNode('Dieplate        '));
    document.getElementById('bookContainer').appendChild(valueInputDie);
    document.getElementById('bookContainer').appendChild(dieLabel);
    document.getElementById('bookContainer').appendChild(br);
    document.getElementById('bookContainer').appendChild(br.cloneNode());

    let valueInputBack = document.createElement('input'); //Backer
    valueInputBack.setAttribute('type', 'checkbox');
    valueInputBack.setAttribute('class', 'messageCheckbox');
    valueInputBack.setAttribute('name', 'Backer');
    valueInputBack.setAttribute('value', 'backer_required');
    valueInputBack.id = 'backer_check';
    let backabel = document.createElement('label');
    backabel.htmlFor = 'backer_check';
    backabel.appendChild(document.createTextNode('Backer        '));
    document.getElementById('bookContainer').appendChild(valueInputBack);
    document.getElementById('bookContainer').appendChild(backabel);
    document.getElementById('bookContainer').appendChild(br);
    document.getElementById('bookContainer').appendChild(br.cloneNode());

    let valueInputBol = document.createElement('input'); //Backer
    valueInputBol.setAttribute('type', 'checkbox');
    valueInputBol.setAttribute('class', 'messageCheckbox');
    valueInputBol.setAttribute('name', 'Bolster');
    valueInputBol.setAttribute('value', 'bolster_required');
    valueInputBol.id = 'bolster_check';
    let bolLabel = document.createElement('label');
    bolLabel.htmlFor = 'bolster_check';
    bolLabel.appendChild(document.createTextNode('Bolster        '));
    document.getElementById('bookContainer').appendChild(valueInputBol);
    document.getElementById('bookContainer').appendChild(bolLabel);
    document.getElementById('bookContainer').appendChild(br);
    document.getElementById('bookContainer').appendChild(br.cloneNode());

    // Create a button and an event listner that passes the values contained in the form to function that updates the correct dictionary. 
    document.getElementById('bookContainer').appendChild(br.cloneNode());
    let listSearchActionButton = document.createElement('button');
    listSearchActionButton.appendChild(document.createTextNode('Submit'));
    listSearchActionButton.addEventListener('click', function() {createBookString(document.getElementById('searchInput').value, document.getElementById('dieNoInput').value, document.getElementById('diameterInput').value, document.getElementById('customerInput').value, document.getElementById('lip_check').value, document.getElementById('mandrel_check').value, document.getElementById('die_check').value, document.getElementById('backer_check').value, document.getElementById('bolster_check').value)});
    document.getElementById('bookContainer').appendChild(listSearchActionButton);

    function createBookString(aWorkOrder, aDieNo, aDiameter, aCustomer, aLip, aMand, aDie, aBacker, aBolster){
        //removeElements();

        if (aDieNo == "") {
            aDieNo = 'no';
        }

        if (aDiameter == "") {
            aDiameter = 'no';
        }

        if (aCustomer == "") {
            aCustomer = 'no';
        }

        if (document.getElementById('lip_check').checked) {
            aLip = 'yes';
        } else {
            aLip = 'no';
        }

        if (document.getElementById('mandrel_check').checked) {
            aMand = 'yes';
        } else {
            aMand = 'no';
        }
    
        if (document.getElementById('die_check').checked) {
            aDie = 'yes';
        } else {
            aDie = 'no';
        }

        if (document.getElementById('backer_check').checked) {
            aBacker = 'yes';
        } else {
            aBacker = 'no';
        }

        if (document.getElementById('bolster_check').checked) {
            aBolster = 'yes';
        } else {
            aBolster = 'no';
        }

        componentString =   'w_o='       + aWorkOrder +
        '&die_no='    + aDieNo +
        '&diameter='        + aDiameter +
        '&customer='        + aCustomer +
        '&lip='        + aLip +
        '&mandrel='        + aMand +
        '&dieplate='        + aDie +
        '&backer='        + aBacker +
        '&bolster='     + aBolster;

        console.log(componentString);
        
        //callPHP(componentString,'mod_job_book.php?'+componentString);
    
    }
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
