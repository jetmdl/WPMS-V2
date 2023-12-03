
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

let lipSoftArray = [];
let lipSoftDict = {};
let mandSoftArray = [];
let mandSoftDict = {};
let dieSoftArray = [];
let dieSoftDict = {};
let backerSoftArray = [];
let backerSoftDict = {};
let bolSoftArray = [];
let bolSoftDict = {};

let lipHardArray = [];
let lipHardDict = {};
let mandHardArray = [];
let mandHardDict = {};
let dieHardArray = [];
let dieHardDict = {};

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
    insertOngoingElements();
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

    lipsoftxhp = new XMLHttpRequest();
    lipsoftxhp.open('GET', 'get_lip_soft_table.php', true);
    lipsoftxhp.send();
    lipsoftxhp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText);
            for (i in data){
                lipSoftArray = [];

                lipSoftArray.push(data[i].lip_front_start);
                lipSoftArray.push(data[i].lip_front_finish);
                lipSoftArray.push(data[i].lip_back_start);
                lipSoftArray.push(data[i].lip_back_finish);
                lipSoftArray.push(data[i].lip_front_machine);
                lipSoftArray.push(data[i].lip_back_machine);
                lipSoftArray.push(data[i].mac_status);

                lipSoftDict[data[i].work_order] = lipSoftArray;
            }
        }
    };

    mandsoftxhp = new XMLHttpRequest();
    mandsoftxhp.open('GET', 'get_mand_soft_table.php', true);
    mandsoftxhp.send();
    mandsoftxhp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText);
            for (i in data){
                mandSoftArray = [];

                mandSoftArray.push(data[i].port_front_start);
                mandSoftArray.push(data[i].port_front_finish);
                mandSoftArray.push(data[i].port_back_start);
                mandSoftArray.push(data[i].port_back_finish);
                mandSoftArray.push(data[i].port_front_machine);
                mandSoftArray.push(data[i].port_back_machine);
                mandSoftArray.push(data[i].mac_status);

                mandSoftDict[data[i].work_order] = mandSoftArray;
            }
        }
    };

    diesoftxhp = new XMLHttpRequest();
    diesoftxhp.open('GET', 'get_die_soft_table.php', true);
    diesoftxhp.send();
    diesoftxhp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText);
            for (i in data){
                dieSoftArray = [];

                dieSoftArray.push(data[i].die_bearing_start);
                dieSoftArray.push(data[i].die_bearing_finish);
                dieSoftArray.push(data[i].die_backmill_start);
                dieSoftArray.push(data[i].die_backmill_finish);
                dieSoftArray.push(data[i].die_bearing_machine);
                dieSoftArray.push(data[i].die_backmill_machine);
                dieSoftArray.push(data[i].mac_status);

                dieSoftDict[data[i].work_order] = dieSoftArray;
            }
        }
    };

    backersoftxhp = new XMLHttpRequest();
    backersoftxhp.open('GET', 'get_backer_soft_table.php', true);
    backersoftxhp.send();
    backersoftxhp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText);
            for (i in data){
                backerSoftArray = [];

                backerSoftArray.push(data[i].backer_front_start);
                backerSoftArray.push(data[i].backer_front_finish);
                backerSoftArray.push(data[i].backer_back_start);
                backerSoftArray.push(data[i].backer_back_finish);
                backerSoftArray.push(data[i].backer_front_machine);
                backerSoftArray.push(data[i].backer_back_machine);
                backerSoftArray.push(data[i].mac_status);

                backerSoftDict[data[i].work_order] = backerSoftArray;
            }
        }
    };

    bolsoftxhp = new XMLHttpRequest();
    bolsoftxhp.open('GET', 'get_bol_soft_table.php', true);
    bolsoftxhp.send();
    bolsoftxhp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText);
            for (i in data){
                bolSoftArray = [];

                bolSoftArray.push(data[i].bol_front_start);
                bolSoftArray.push(data[i].bol_front_finish);
                bolSoftArray.push(data[i].bol_back_start);
                bolSoftArray.push(data[i].bol_back_finish);
                bolSoftArray.push(data[i].bol_front_machine);
                bolSoftArray.push(data[i].bol_back_machine);
                bolSoftArray.push(data[i].mac_status);

                bolSoftDict[data[i].work_order] = bolSoftArray;
            }
        }
    };

    liphardxhp = new XMLHttpRequest();
    liphardxhp.open('GET', 'get_lip_hard_table.php', true);
    liphardxhp.send();
    liphardxhp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText);
            for (i in data){
                lipHardArray = [];

                lipHardArray.push(data[i].lip_front_start);
                lipHardArray.push(data[i].lip_front_finish);
                lipHardArray.push(data[i].lip_back_start);
                lipHardArray.push(data[i].lip_back_finish);
                lipHardArray.push(data[i].lip_front_machine);
                lipHardArray.push(data[i].lip_back_machine);
                lipHardArray.push(data[i].mac_status);

                lipHardDict[data[i].work_order] = lipHardArray;
            }
        }
    };

    mandhardxhp = new XMLHttpRequest();
    mandhardxhp.open('GET', 'get_mand_hard_table.php', true);
    mandhardxhp.send();
    mandhardxhp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText);
            for (i in data){
                mandHardArray = [];

                mandHardArray.push(data[i].port_hard_start);
                mandHardArray.push(data[i].port_hard_finish);
                mandHardArray.push(data[i].port_polish_start);
                mandHardArray.push(data[i].port_polish_finish);
                mandHardArray.push(data[i].port_hard_machine);
                mandHardArray.push(data[i].port_polish_machine);
                mandHardArray.push(data[i].mac_status);

                mandHardDict[data[i].work_order] = mandHardArray;
            }
        }
    };

    diehardxhp = new XMLHttpRequest();
    diehardxhp.open('GET', 'get_die_hard_table.php', true);
    diehardxhp.send();
    diehardxhp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText);
            for (i in data){
                dieHardArray = [];

                dieHardArray.push(data[i].die_front_start);
                dieHardArray.push(data[i].die_front_finish);
                dieHardArray.push(data[i].die_back_start);
                dieHardArray.push(data[i].die_back_finish);
                dieHardArray.push(data[i].die_front_machine);
                dieHardArray.push(data[i].die_back_machine);
                dieHardArray.push(data[i].mac_status);

                dieHardDict[data[i].work_order] = dieHardArray;
            }
        }
    };

    console.log("mand:");
    console.log(mandHardDict)


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
    woHeader.appendChild(document.createTextNode('Work Order'));
    list.appendChild(woHeader);
    let dieHeader = document.createElement('li');
    dieHeader.appendChild(document.createTextNode('Die No'));
    list.appendChild(dieHeader);
    let typeHeader = document.createElement('li');
    typeHeader.appendChild(document.createTextNode('Type'));
    list.appendChild(typeHeader);
    let diaHeader = document.createElement('li');
    diaHeader.appendChild(document.createTextNode('Diameter'));
    list.appendChild(diaHeader);
    let custHeader = document.createElement('li');
    custHeader.appendChild(document.createTextNode('Customer'));
    list.appendChild(custHeader);
    let contDiv = document.createElement('div');
    contDiv.class = 'nav-bar-container';
    contDiv.appendChild(list);
    document.getElementById('col-header-container').appendChild(contDiv);
}

// add all elements to content container
let populateButton = document.getElementById('populate');
populateButton.addEventListener('click', insertAllElements);

function insertAllElements(){
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
    for (key in infoDict){
        keyArray.push(key);
    }
    let a = 0;
    for(let i = 0; i < amount; i++){
        a++;
        aKey = keyArray[i];
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
        let textnode2 = document.createTextNode(infoDict[aKey][0]);
        document.getElementById(aKey + 'dieNoCont').appendChild(textnode2);

        let jobTypeCont = document.createElement('div'); // Type
        jobTypeCont.className = 'jobInfoCont';
        jobTypeCont.id = aKey + 'jobTypeCont';
        document.getElementById(aKey).appendChild(jobTypeCont);
        let textnode3 = document.createTextNode(infoDict[aKey][1]);
        document.getElementById(aKey + 'jobTypeCont').appendChild(textnode3); 

        let jobDiaCont = document.createElement('div'); // Diameter
        jobDiaCont.className = 'jobInfoCont';
        jobDiaCont.id = aKey + 'jobDiaCont';
        document.getElementById(aKey).appendChild(jobDiaCont);
        let textnode4 = document.createTextNode(infoDict[aKey][2]);
        document.getElementById(aKey + 'jobDiaCont').appendChild(textnode4); 

        let jobCustCont = document.createElement('div'); // customer
        jobCustCont.className = 'jobInfoCont';
        jobCustCont.id = aKey + 'jobCustCont';
        document.getElementById(aKey).appendChild(jobCustCont);
        let textnode5 = document.createTextNode(infoDict[aKey][3]);
        document.getElementById(aKey + 'jobCustCont').appendChild(textnode5); 
    }  
    addJobListeners();
}

// add flat die elements to content container
let flatButton = document.getElementById('flat');
flatButton.addEventListener('click', insertFlatElements);

function insertFlatElements(){
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
    for (let key in infoDict){
        keyArray.push(key);
    }
    let a = 0;
    for(let i = 0; i < amount; i++){
        aKey = keyArray[i];
        if (infoDict[aKey][1] == 'Flat'){
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
            let textnode2 = document.createTextNode(infoDict[aKey][0]);
            document.getElementById(aKey + 'dieNoCont').appendChild(textnode2);

            let jobTypeCont = document.createElement('div'); // Type
            jobTypeCont.className = 'jobInfoCont';
            jobTypeCont.id = aKey + 'jobTypeCont';
            document.getElementById(aKey).appendChild(jobTypeCont);
            let textnode3 = document.createTextNode(infoDict[aKey][1]);
            document.getElementById(aKey + 'jobTypeCont').appendChild(textnode3); 

            let jobDiaCont = document.createElement('div'); // Diameter
            jobDiaCont.className = 'jobInfoCont';
            jobDiaCont.id = aKey + 'jobDiaCont';
            document.getElementById(aKey).appendChild(jobDiaCont);
            let textnode4 = document.createTextNode(infoDict[aKey][2]);
            document.getElementById(aKey + 'jobDiaCont').appendChild(textnode4); 

            let jobCustCont = document.createElement('div'); // Customer
            jobCustCont.className = 'jobInfoCont';
            jobCustCont.id = aKey + 'jobCustCont';
            document.getElementById(aKey).appendChild(jobCustCont);
            let textnode5 = document.createTextNode(infoDict[aKey][3]);
            document.getElementById(aKey + 'jobCustCont').appendChild(textnode5); 
       }
    }  
    addJobListeners();
}

// add hollow die elements to content container
let hollowButton = document.getElementById('hollow');
hollowButton.addEventListener('click', insertHollowElements);

function insertHollowElements(){
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
    for (let key in infoDict){
        keyArray.push(key);
    }
    let a = 0;
    for(let i = 0; i < amount; i++){
        aKey = keyArray[i];
        if (infoDict[aKey][1] == 'Hollow'){
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
            let textnode2 = document.createTextNode(infoDict[aKey][0]);
            document.getElementById(aKey + 'dieNoCont').appendChild(textnode2);

            let jobTypeCont = document.createElement('div'); // Type
            jobTypeCont.className = 'jobInfoCont';
            jobTypeCont.id = aKey + 'jobTypeCont';
            document.getElementById(aKey).appendChild(jobTypeCont);
            let textnode3 = document.createTextNode(infoDict[aKey][1]);
            document.getElementById(aKey + 'jobTypeCont').appendChild(textnode3); 

            let jobDiaCont = document.createElement('div'); // Diameter
            jobDiaCont.className = 'jobInfoCont';
            jobDiaCont.id = aKey + 'jobDiaCont';
            document.getElementById(aKey).appendChild(jobDiaCont);
            let textnode4 = document.createTextNode(infoDict[aKey][2]);
            document.getElementById(aKey + 'jobDiaCont').appendChild(textnode4); 

            let jobCustCont = document.createElement('div'); // Customer
            jobCustCont.className = 'jobInfoCont';
            jobCustCont.id = aKey + 'jobCustCont';
            document.getElementById(aKey).appendChild(jobCustCont);
            let textnode5 = document.createTextNode(infoDict[aKey][3]);
            document.getElementById(aKey + 'jobCustCont').appendChild(textnode5); 
       }
    }  
    addJobListeners();
}

// add ongoing die elements to content container
let ongoingButton = document.getElementById('ongoing');
ongoingButton.addEventListener('click', insertOngoingElements);

function insertOngoingElements(){
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
    for (let key in infoDict){
        keyArray.push(key);
    }
    let a = 0;
    for(let i = 0; i < amount; i++){
        aKey = keyArray[i];
        if (infoDict[aKey][4] == 'Ongoing'){
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

            let dieNoCont = document.createElement('div'); // Die no
            dieNoCont.className = 'jobInfoCont';
            dieNoCont.id = aKey + 'dieNoCont';
            document.getElementById(aKey).appendChild(dieNoCont);
            let textnode2 = document.createTextNode(infoDict[aKey][0]);
            document.getElementById(aKey + 'dieNoCont').appendChild(textnode2);

            let jobTypeCont = document.createElement('div'); // Type
            jobTypeCont.className = 'jobInfoCont';
            jobTypeCont.id = aKey + 'jobTypeCont';
            document.getElementById(aKey).appendChild(jobTypeCont);
            let textnode3 = document.createTextNode(infoDict[aKey][1]);
            document.getElementById(aKey + 'jobTypeCont').appendChild(textnode3); 

            let jobDiaCont = document.createElement('div'); // Diameter
            jobDiaCont.className = 'jobInfoCont';
            jobDiaCont.id = aKey + 'jobDiaCont';
            document.getElementById(aKey).appendChild(jobDiaCont);
            let textnode4 = document.createTextNode(infoDict[aKey][2]);
            document.getElementById(aKey + 'jobDiaCont').appendChild(textnode4); 

            let jobCustCont = document.createElement('div'); // Customer
            jobCustCont.className = 'jobInfoCont';
            jobCustCont.id = aKey + 'jobCustCont';
            document.getElementById(aKey).appendChild(jobCustCont);
            let textnode5 = document.createTextNode(infoDict[aKey][3]);
            document.getElementById(aKey + 'jobCustCont').appendChild(textnode5); 
       }
    }  
    addJobListeners();
}

// add complete die elements to content container
let completeButton = document.getElementById('complete');
completeButton.addEventListener('click', insertCompleteElements);

function insertCompleteElements(){
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
    for (let key in infoDict){
        keyArray.push(key);
    }
    let a = 0;
    for(let i = 0; i < amount; i++){
        aKey = keyArray[i];
        if (infoDict[aKey][4] == 'Complete'){
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

            let dieNoCont = document.createElement('div'); // Die no
            dieNoCont.className = 'jobInfoCont';
            dieNoCont.id = aKey + 'dieNoCont';
            document.getElementById(aKey).appendChild(dieNoCont);
            let textnode2 = document.createTextNode(infoDict[aKey][0]);
            document.getElementById(aKey + 'dieNoCont').appendChild(textnode2);

            let jobTypeCont = document.createElement('div'); // Type
            jobTypeCont.className = 'jobInfoCont';
            jobTypeCont.id = aKey + 'jobTypeCont';
            document.getElementById(aKey).appendChild(jobTypeCont);
            let textnode3 = document.createTextNode(infoDict[aKey][1]);
            document.getElementById(aKey + 'jobTypeCont').appendChild(textnode3); 

            let jobDiaCont = document.createElement('div'); // Diameter
            jobDiaCont.className = 'jobInfoCont';
            jobDiaCont.id = aKey + 'jobDiaCont';
            document.getElementById(aKey).appendChild(jobDiaCont);
            let textnode4 = document.createTextNode(infoDict[aKey][2]);
            document.getElementById(aKey + 'jobDiaCont').appendChild(textnode4); 

            let jobCustCont = document.createElement('div'); // Customer
            jobCustCont.className = 'jobInfoCont';
            jobCustCont.id = aKey + 'jobCustCont';
            document.getElementById(aKey).appendChild(jobCustCont);
            let textnode5 = document.createTextNode(infoDict[aKey][3]);
            document.getElementById(aKey + 'jobCustCont').appendChild(textnode5); 
       }
    }  
    addJobListeners();
}

function insertSearchedDieElements(aDieNumber){
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
    for (let key in infoDict){
        keyArray.push(key);
    }
    let a = 0;
    for(let i = 0; i < amount; i++){
        aKey = keyArray[i];
        stringToSearch = infoDict[aKey][0];
        if (stringToSearch.includes(aDieNumber)){
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
            let textnode2 = document.createTextNode(infoDict[aKey][0]);
            document.getElementById(aKey + 'dieNoCont').appendChild(textnode2);

            let jobTypeCont = document.createElement('div'); // Type
            jobTypeCont.className = 'jobInfoCont';
            jobTypeCont.id = aKey + 'jobTypeCont';
            document.getElementById(aKey).appendChild(jobTypeCont);
            let textnode3 = document.createTextNode(infoDict[aKey][1]);
            document.getElementById(aKey + 'jobTypeCont').appendChild(textnode3); 

            let jobDiaCont = document.createElement('div'); // Diameter
            jobDiaCont.className = 'jobInfoCont';
            jobDiaCont.id = aKey + 'jobDiaCont';
            document.getElementById(aKey).appendChild(jobDiaCont);
            let textnode4 = document.createTextNode(infoDict[aKey][2]);
            document.getElementById(aKey + 'jobDiaCont').appendChild(textnode4); 

            let jobCustCont = document.createElement('div'); // Customer
            jobCustCont.className = 'jobInfoCont';
            jobCustCont.id = aKey + 'jobCustCont';
            document.getElementById(aKey).appendChild(jobCustCont);
            let textnode5 = document.createTextNode(infoDict[aKey][3]);
            document.getElementById(aKey + 'jobCustCont').appendChild(textnode5); 
       }
    }  
    addJobListeners();
}

function insertSearchedToDoElements(aDieNumber){
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
    for (let key in infoDict){
        keyArray.push(key);
    }
    let a = 0;
    for(let i = 0; i < amount; i++){
        aKey = keyArray[i];
        stringToSearch = infoDict[aKey][0];
        if (stringToSearch.includes(aDieNumber)){
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
            let textnode2 = document.createTextNode(infoDict[aKey][0]);
            document.getElementById(aKey + 'dieNoCont').appendChild(textnode2);

            let jobTypeCont = document.createElement('div'); // Type
            jobTypeCont.className = 'jobInfoCont';
            jobTypeCont.id = aKey + 'jobTypeCont';
            document.getElementById(aKey).appendChild(jobTypeCont);
            let textnode3 = document.createTextNode(infoDict[aKey][1]);
            document.getElementById(aKey + 'jobTypeCont').appendChild(textnode3); 

            let jobDiaCont = document.createElement('div'); // Diameter
            jobDiaCont.className = 'jobInfoCont';
            jobDiaCont.id = aKey + 'jobDiaCont';
            document.getElementById(aKey).appendChild(jobDiaCont);
            let textnode4 = document.createTextNode(infoDict[aKey][2]);
            document.getElementById(aKey + 'jobDiaCont').appendChild(textnode4); 

            let jobCustCont = document.createElement('div'); // Customer
            jobCustCont.className = 'jobInfoCont';
            jobCustCont.id = aKey + 'jobCustCont';
            document.getElementById(aKey).appendChild(jobCustCont);
            let textnode5 = document.createTextNode(infoDict[aKey][3]);
            document.getElementById(aKey + 'jobCustCont').appendChild(textnode5); 
       }
    }  
    addJobListeners();
}

function insertDeptToDoElements(aDept, aComponent){
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

    console.log(aDept);

    let startCase = '';
    let endCase = '';
    let startCaseIndex = 0;
    let endCaseIndex = 0

    if(aDept == 'Turning'){
        startCase = 'prog_finish';
        endCase = 'turning_finish';
        startCaseIndex = 5;
        endCaseIndex = 7;
    }
    else if(aDept == 'Soft Machine'){
        startCase = 'turning_finish';
        endCase = 'soft_mac_finish';
        startCaseIndex = 7;
        endCaseIndex = 9;
    }
    else if(aDept == 'Hard Machine'){
        startCase = 'soft_mac_finish';
        endCase = 'hard_mac_finish';
        startCaseIndex = 9;
        endCaseIndex = 13;
    }
    else if(aDept == 'Ramspark'){
        startCase = 'hard_mac_finish';
        endCase = 'ramspark_finish';
        startCaseIndex = 13;
        endCaseIndex = 15;
    }
    else if(aDept == 'Wirespark'){
        startCase = 'hard_mac_finish';
        endCase = 'wirespark_finish';
        startCaseIndex = 13;
        endCaseIndex = 19;
    }
    else if(aDept == 'Finishing'){
        startCase = 'wirespark_finish';
        endCase = 'finishing_finish';
        startCaseIndex = 19;
        endCaseIndex = 21;
    }

    let amount = getNumberOfJobs();
    let keyArray = [];
    let aKey = '';
    let addToResult = false;
    let noOfComponents = 0;
    let noOfEndcases = 0;
    for (let key in infoDict){
        keyArray.push(key);
    }
    let a = 0;
    for(let i = 0; i < amount; i++){
        aKey = keyArray[i];
        stringToSearch = infoDict[aKey][0];
        addToResult = false;
        noOfComponents = 0;
        noOfEndcases = 0;

        console.log(aKey);
        
        if(aComponent == 'Lip'){
            if(infoDict[aKey][5] == '1'){ //Check for lip
                console.log("lip exists");
                noOfComponents++;
                if(lipDict[aKey][startCaseIndex] != '-'){ //Check for startcase
                    addToResult = true;
                    console.log("Lip startcase met");
                }
                if(lipDict[aKey][endCaseIndex] != '-'){//Check for endcase
                    noOfEndcases++;
                    addToResult = false;
                    console.log("Lip endcase met");
                }
            }
        }
        if(aComponent == 'Mandrel'){
            if(infoDict[aKey][6] == '1'){ //Check for Mandrel
                console.log("mand exists");
                noOfComponents++;
                console.log()
                if(mandDict[aKey][startCaseIndex] != '-'){ //Check for startcase
                    addToResult = true;
                    console.log("mandrel startcase met");
                }
                if(mandDict[aKey][endCaseIndex] != '-'){//Check for endcase
                    noOfEndcases++;
                    addToResult = false;
                    console.log("mand endcase met");
                }
            }
        }
        if(aComponent == 'Dieplate'){
            if(infoDict[aKey][7] == '1'){ //Check for Dieplate
                console.log("die exists");
                noOfComponents++;
                if(dieDict[aKey][startCaseIndex] != '-'){ //Check for startcase
                    addToResult = true;
                    console.log("die startcase met");
                }
                if(dieDict[aKey][endCaseIndex] != '-'){//Check for endcase
                    noOfEndcases++;
                    addToResult = false;
                    console.log("die endcase met");
                }
            }
        }
        if(aComponent == 'Backer'){
            if(infoDict[aKey][8] == '1'){ //Check for Backer
                console.log("backer exists");
                noOfComponents++;
                if(backerDict[aKey][startCaseIndex] != '-'){ //Check for startcase
                    addToResult = true;
                    console.log("backer startcase met");
                }
                if(backerDict[aKey][endCaseIndex] != '-'){//Check for endcase
                    noOfEndcases++;
                    addToResult = false;
                    console.log("backer endcase met");
                }
            }
        }
        if(aComponent == 'Bolster'){
            if(infoDict[aKey][9] == '1'){ //Check for Bolster
                console.log("bol exists");
                noOfComponents++;
                if(bolDict[aKey][startCaseIndex] != '-'){ //Check for startcase
                    addToResult = true;
                    console.log("bolster startcase met");
                }
                if(bolDict[aKey][endCaseIndex] != '-'){//Check for endcase
                    noOfEndcases++;
                    addToResult = false;
                    console.log("bolster endcase met");
                }
            }
        }

        //if(noOfEndcases == noOfComponents){
        //    addToResult = false;
        //}

        console.log('Summary: ');
        console.log(noOfComponents);
        console.log(noOfEndcases);
        console.log(addToResult);
        console.log("-");

        if (addToResult == true){
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
            let textnode2 = document.createTextNode(infoDict[aKey][0]);
            document.getElementById(aKey + 'dieNoCont').appendChild(textnode2);

            let jobTypeCont = document.createElement('div'); // Type
            jobTypeCont.className = 'jobInfoCont';
            jobTypeCont.id = aKey + 'jobTypeCont';
            document.getElementById(aKey).appendChild(jobTypeCont);
            let textnode3 = document.createTextNode(infoDict[aKey][1]);
            document.getElementById(aKey + 'jobTypeCont').appendChild(textnode3); 

            let jobDiaCont = document.createElement('div'); // Diameter
            jobDiaCont.className = 'jobInfoCont';
            jobDiaCont.id = aKey + 'jobDiaCont';
            document.getElementById(aKey).appendChild(jobDiaCont);
            let textnode4 = document.createTextNode(infoDict[aKey][2]);
            document.getElementById(aKey + 'jobDiaCont').appendChild(textnode4); 

            let jobCustCont = document.createElement('div'); // Customer
            jobCustCont.className = 'jobInfoCont';
            jobCustCont.id = aKey + 'jobCustCont';
            document.getElementById(aKey).appendChild(jobCustCont);
            let textnode5 = document.createTextNode(infoDict[aKey][3]);
            document.getElementById(aKey + 'jobCustCont').appendChild(textnode5); 
       }
    }  
    addJobListeners();
}

//TO DO - Make function that creates filtered array based on atributes.

// add search form to content container
let search = document.getElementById('search');
search.addEventListener('click', function() {createSearchForm()});

function createSearchForm() {
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
    actionButton.addEventListener('click', function() {validateSearch(document.getElementById('searchInput').value)});
    document.getElementById('searchContainer').appendChild(actionButton);

    //Create title for the form
    let new_dieSearch_header = document.createElement('h3');
    let dieSearchHeaderClass = 'formHeader';
    new_dieSearch_header.className = dieSearchHeaderClass;
    document.getElementById('searchContainer').appendChild(new_dieSearch_header);

    //Populate and append the form title. 
    dieSearchHeaderString = 'Enter Die Number: '; 
    new_dieSearch_header.appendChild(document.createTextNode(dieSearchHeaderString));
    // Create line break
    //let br = document.createElement('br');
    document.getElementById('searchContainer').appendChild(br.cloneNode());

    // Create value field for selected option
    let dieSearchValueInput = document.createElement('input');
    dieSearchValueInput.setAttribute('type', 'text');
    dieSearchValueInput.setAttribute('name', 'input');
    dieSearchValueInput.setAttribute('placeholder', 'Die Number');
    dieSearchValueInput.id = 'dieNoSearchInput';

    document.getElementById('searchContainer').appendChild(dieSearchValueInput);

    // Create a button and an event listner that passes the values contained in the form to function that updates the correct dictionary. 
    document.getElementById('searchContainer').appendChild(br.cloneNode());
    let dieSearchActionButton = document.createElement('button');
    dieSearchActionButton.appendChild(document.createTextNode('Submit'));
    dieSearchActionButton.addEventListener('click', function() {insertSearchedDieElements(document.getElementById('dieNoSearchInput').value)});
    document.getElementById('searchContainer').appendChild(dieSearchActionButton);

    //Create title for the form
    let new_list_dieSearch_header = document.createElement('h3');
    let listSearchHeaderClass = 'formHeader';
    new_list_dieSearch_header.className = listSearchHeaderClass;
    document.getElementById('searchContainer').appendChild(new_list_dieSearch_header);

    //Populate and append the form title. 
    listSearchHeaderString = 'Select Department and component to see process to-do list: '; 
    new_list_dieSearch_header.appendChild(document.createTextNode(listSearchHeaderString));
    // Create line break
    //let br = document.createElement('br');
    document.getElementById('searchContainer').appendChild(br.cloneNode());

    var departmentList = ['Turning', 'Soft Machine', 'Hard Machine', 'Ramspark', 'Wirespark', 'Finishing']

    var selectList = document.createElement("select");
    selectList.id = "deptSelect";
    document.getElementById('searchContainer').appendChild(selectList);

    for (var i = 0; i < departmentList.length; i++) {
        var option = document.createElement("option");
        option.value = departmentList[i];
        option.text = departmentList[i];
        selectList.appendChild(option);
    }

    //Populate and append the form title. 
    //listSearchHeaderString = 'Select Component: '; 
    //new_list_dieSearch_header.appendChild(document.createTextNode(listSearchHeaderString));
    // Create line break
    //let br = document.createElement('br');
    document.getElementById('searchContainer').appendChild(br.cloneNode());

    var componentList = ['Lip', 'Mandrel', 'Dieplate', 'Backer', 'Bolster']

    var selectList = document.createElement("select");
    selectList.id = "componentSelect";
    document.getElementById('searchContainer').appendChild(selectList);

    for (var i = 0; i < componentList.length; i++) {
        var option = document.createElement("option");
        option.value = componentList[i];
        option.text = componentList[i];
        selectList.appendChild(option);
    }

    //document.getElementById('searchContainer').appendChild(listSearchValueInput);

    // Create a button and an event listner that passes the values contained in the form to function that updates the correct dictionary. 
    document.getElementById('searchContainer').appendChild(br.cloneNode());
    let listSearchActionButton = document.createElement('button');
    listSearchActionButton.appendChild(document.createTextNode('Submit'));
    listSearchActionButton.addEventListener('click', function() {insertDeptToDoElements(document.getElementById('deptSelect').value, document.getElementById('componentSelect').value)});
    document.getElementById('searchContainer').appendChild(listSearchActionButton);
}

function validateSearch(anId){
    let found = false;
    for (let key in infoDict){
        if (anId == key){
            createJobTable(key);
            found = true;
            break;
        }
    }
    if (found == false){
        alert("Work Order Not found");
    }
    
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
    createJobTable(this.id);
}

function addDateStamp(anId){

    macSignOff(anId);

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

    if (document.getElementById(anId).innerText == '-'){
        const el = document.getElementById(anId);
        while(el.firstChild) el.removeChild(el.firstChild);

        let initial = userDict[document.getElementById('foot-container').innerText];
        //console.log(document.getElementById('foot-container').innerText);
        //console.log(userDict[document.getElementById('foot-container').innerText]);
        //console.log(initial);
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        let currentDate = new Date();
        let time = currentDate.getHours() + ":" + currentDate.getMinutes();

        today = String(dd + '.' + mm + '-' + time + '-' + initial);
        //console.log(today);
        // today = String(dd + '/' + mm + '/' + yyyy);
        let newTextNode = document.createTextNode(today);
        document.getElementById(anId).appendChild(newTextNode);
    }
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

    let initial = userDict[document.getElementById('foot-container').innerText];

    let authorisedUsers = ['JT', 'PW', 'PeC', 'PC', 'BJ', 'SM'];
    let i = 0;
    let authorised = false;

    while (i < authorisedUsers.length) {
        if(initial == (authorisedUsers[i])){
            authorised = true;
        }
        i++;
    }

    if(!authorised){
        removeElements();
        let new_warning_message = document.createElement('h3');
        let warningMessage = 'formHeader';
        new_warning_message.className = warningMessage;
        document.getElementById('content-container').appendChild(new_warning_message);
    
        //Populate and append the form title. 
        warningMessage = 'You do not have permission to access this page '; 
        new_warning_message.appendChild(document.createTextNode(warningMessage));
        // Create line break
        //let br = document.createElement('br');
        document.getElementById('content-container').appendChild(br.cloneNode());
    }
}

let currentWo = '';

function createJobTable(anId){
    removeColHeaders();
    removeElements();

    currentWo = anId;

    //Deactivate filter buttons when table is being displayed
    const showAll = document.getElementById('populate');   
    showAll.disabled = true;

    const showFlat = document.getElementById('flat');   
    showFlat.disabled = true;

    const showHollow = document.getElementById('hollow');   
    showHollow.disabled = true;

    const showOngoing = document.getElementById('ongoing');   
    showOngoing.disabled = true;

    const showComplete = document.getElementById('complete');   
    showComplete.disabled = true;

    const showSearch = document.getElementById('search');   
    showSearch.disabled = true;
    
    [].forEach.call(document.querySelectorAll('.nav-bar'), function (el) {
        el.style.visibility = 'hidden';
      });


    // Add headers to show what job is being edited
    let headString = 'WO: ' + anId + ' -- DIE: ' + infoDict[anId][0] + ' -- CUSTOMER: ' + infoDict[anId][3];
    let jobHeader = document.createElement('h3');
    document.getElementById('col-header-container').appendChild(jobHeader);
    let ntn = document.createTextNode(headString)
    jobHeader.appendChild(ntn);

    // Create required number of rows.
    let numberOfRows = 8;
    for (let i = 0; i <numberOfRows; i++){
        let rowId = 'row' + i;
        let rowClass = 'rowClass';
        let newRow = document.createElement('div');
        newRow.className = rowClass;
        newRow.id = rowId;
        document.getElementById('content-container').appendChild(newRow);
    }

    // Fill rows with columns.
        // Header cols:
        let newCol = document.createElement('div'); // Empty padding Div
        newCol.id = 'paddingCol1';
        newCol.className = 'paddingCol';
        document.getElementById('row0').appendChild(newCol);

        newCol = document.createElement('div');
        newCol.id = 'designCol';
        newCol.className = 'headerCol';
        document.getElementById('row0').appendChild(newCol);
        let colString = 'Design';
        let newTextNode = document.createTextNode(colString);
        document.getElementById('designCol').appendChild(newTextNode);

        newCol = document.createElement('div');
        newCol.id = 'modellingCol';
        newCol.className = 'headerCol';
        document.getElementById('row0').appendChild(newCol);
        colString = 'Modelling';
        newTextNode = document.createTextNode(colString);
        document.getElementById('modellingCol').appendChild(newTextNode);

        newCol = document.createElement('div');
        newCol.id = 'programCol';
        newCol.className = 'headerCol';
        document.getElementById('row0').appendChild(newCol);
        colString = 'Programming';
        newTextNode = document.createTextNode(colString);
        document.getElementById('programCol').appendChild(newTextNode);

        newCol = document.createElement('div');
        newCol.id = 'turningCol';
        newCol.className = 'headerCol';
        document.getElementById('row0').appendChild(newCol);
        colString = 'Turning';
        newTextNode = document.createTextNode(colString);
        document.getElementById('turningCol').appendChild(newTextNode);

        newCol = document.createElement('div');
        newCol.id = 'softCol';
        newCol.className = 'headerCol';
        document.getElementById('row0').appendChild(newCol);
        colString = 'Soft Machine';
        newTextNode = document.createTextNode(colString);
        document.getElementById('softCol').appendChild(newTextNode);

        newCol = document.createElement('div');
        newCol.id = 'heatCol';
        newCol.className = 'headerCol';
        document.getElementById('row0').appendChild(newCol);
        colString = 'Heat Treat';
        newTextNode = document.createTextNode(colString);
        document.getElementById('heatCol').appendChild(newTextNode);

        newCol = document.createElement('div');
        newCol.id = 'hardCol';
        newCol.className = 'headerCol';
        document.getElementById('row0').appendChild(newCol);
        colString = 'Hard Machine';
        newTextNode = document.createTextNode(colString);
        document.getElementById('hardCol').appendChild(newTextNode);

        newCol = document.createElement('div');
        newCol.id = 'ramCol';
        newCol.className = 'headerCol';
        document.getElementById('row0').appendChild(newCol);
        colString = 'RamSpark';
        newTextNode = document.createTextNode(colString);
        document.getElementById('ramCol').appendChild(newTextNode);

        newCol = document.createElement('div');
        newCol.id = 'sectionCol';
        newCol.className = 'headerCol';
        document.getElementById('row0').appendChild(newCol);
        colString = 'Section Mill';
        newTextNode = document.createTextNode(colString);
        document.getElementById('sectionCol').appendChild(newTextNode);

        newCol = document.createElement('div');
        newCol.id = 'wireCol';
        newCol.className = 'headerCol';
        document.getElementById('row0').appendChild(newCol);
        colString = 'WireSpark';
        newTextNode = document.createTextNode(colString);
        document.getElementById('wireCol').appendChild(newTextNode);

        newCol = document.createElement('div');
        newCol.id = 'finishCol';
        newCol.className = 'headerCol';
        document.getElementById('row0').appendChild(newCol);
        colString = 'Finishing';
        newTextNode = document.createTextNode(colString);
        document.getElementById('finishCol').appendChild(newTextNode);

        newCol = document.createElement('div');
        newCol.id = 'packCol';
        newCol.className = 'headerCol';
        document.getElementById('row0').appendChild(newCol);
        colString = 'Packaged';
        newTextNode = document.createTextNode(colString);
        document.getElementById('packCol').appendChild(newTextNode);

                // Subheader cols:
                newCol = document.createElement('div'); // Empty padding Div
                newCol.id = 'paddingCol2';
                newCol.className = 'paddingCol';
                document.getElementById('row1').appendChild(newCol);

                newCol = document.createElement('div');
                newCol.id = 'designStart';
                newCol.className = 'subheaderColLight';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Start';
                newTextNode = document.createTextNode(colString);
                document.getElementById('designStart').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'designFin';
                newCol.className = 'subheaderCol';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Finish';
                newTextNode = document.createTextNode(colString);
                document.getElementById('designFin').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'modelStart';
                newCol.className = 'subheaderColLight';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Start';
                newTextNode = document.createTextNode(colString);
                document.getElementById('modelStart').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'modelFin';
                newCol.className = 'subheaderCol';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Finish';
                newTextNode = document.createTextNode(colString);
                document.getElementById('modelFin').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'programStart';
                newCol.className = 'subheaderColLight';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Start';
                newTextNode = document.createTextNode(colString);
                document.getElementById('programStart').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'programFin';
                newCol.className = 'subheaderCol';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Finish';
                newTextNode = document.createTextNode(colString);
                document.getElementById('programFin').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'turnStart';
                newCol.className = 'subheaderColLight';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Start';
                newTextNode = document.createTextNode(colString);
                document.getElementById('turnStart').appendChild(newTextNode);
        
                newCol = document.createElement('div');
                newCol.id = 'turnFin';
                newCol.className = 'subheaderCol';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Finish';
                newTextNode = document.createTextNode(colString);
                document.getElementById('turnFin').appendChild(newTextNode);
        
                newCol = document.createElement('div');
                newCol.id = 'softStart';
                newCol.className = 'subheaderColLight';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Start';
                newTextNode = document.createTextNode(colString);
                document.getElementById('softStart').appendChild(newTextNode);
        
                newCol = document.createElement('div');
                newCol.id = 'softFin';
                newCol.className = 'subheaderCol';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Finish';
                newTextNode = document.createTextNode(colString);
                document.getElementById('softFin').appendChild(newTextNode);
        
                newCol = document.createElement('div');
                newCol.id = 'heatStart';
                newCol.className = 'subheaderColLight';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Start';
                newTextNode = document.createTextNode(colString);
                document.getElementById('heatStart').appendChild(newTextNode);
        
                newCol = document.createElement('div');
                newCol.id = 'heatFin';
                newCol.className = 'subheaderCol';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Finish';
                newTextNode = document.createTextNode(colString);
                document.getElementById('heatFin').appendChild(newTextNode);
        
                newCol = document.createElement('div');
                newCol.id = 'hardStart';
                newCol.className = 'subheaderColLight';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Start';
                newTextNode = document.createTextNode(colString);
                document.getElementById('hardStart').appendChild(newTextNode);
        
                newCol = document.createElement('div');
                newCol.id = 'hardFin';
                newCol.className = 'subheaderCol';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Finish';
                newTextNode = document.createTextNode(colString);
                document.getElementById('hardFin').appendChild(newTextNode);
        
                newCol = document.createElement('div');
                newCol.id = 'ramStart';
                newCol.className = 'subheaderColLight';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Start';
                newTextNode = document.createTextNode(colString);
                document.getElementById('ramStart').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'ramFin';
                newCol.className = 'subheaderCol';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Finish';
                newTextNode = document.createTextNode(colString);
                document.getElementById('ramFin').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'sectionStart';
                newCol.className = 'subheaderColLight';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Start';
                newTextNode = document.createTextNode(colString);
                document.getElementById('sectionStart').appendChild(newTextNode);      

                newCol = document.createElement('div');
                newCol.id = 'sectionFin';
                newCol.className = 'subheaderCol';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Finish';
                newTextNode = document.createTextNode(colString);
                document.getElementById('sectionFin').appendChild(newTextNode); 

                newCol = document.createElement('div');
                newCol.id = 'wireStart';
                newCol.className = 'subheaderColLight';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Start';
                newTextNode = document.createTextNode(colString);
                document.getElementById('wireStart').appendChild(newTextNode); 
                
                newCol = document.createElement('div');
                newCol.id = 'wireFin';
                newCol.className = 'subheaderCol';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Finish';
                newTextNode = document.createTextNode(colString);
                document.getElementById('wireFin').appendChild(newTextNode);                 

                newCol = document.createElement('div');
                newCol.id = 'finStart';
                newCol.className = 'subheaderColLight';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Start';
                newTextNode = document.createTextNode(colString);
                document.getElementById('finStart').appendChild(newTextNode);      

                newCol = document.createElement('div');
                newCol.id = 'finFin';
                newCol.className = 'subheaderCol';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Finish';
                newTextNode = document.createTextNode(colString);
                document.getElementById('finFin').appendChild(newTextNode); 

                newCol = document.createElement('div');
                newCol.id = 'packStart';
                newCol.className = 'subheaderColLight';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Start';
                newTextNode = document.createTextNode(colString);
                document.getElementById('packStart').appendChild(newTextNode); 
                
                newCol = document.createElement('div');
                newCol.id = 'packFin';
                newCol.className = 'subheaderCol';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Finish';
                newTextNode = document.createTextNode(colString);
                document.getElementById('packFin').appendChild(newTextNode);    

                let nextcolID = '2';

                if (infoDict[anId][5] == 1){ // LIP.
                    let nextcol = 'row' + nextcolID;
                    // Subheader cols:
                    newCol = document.createElement('div'); // Empty padding Div
                    newCol.id = 'rowHead1';
                    newCol.className = 'rowHead';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = 'LIP';
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('rowHead1').appendChild(newTextNode);

                    newCol = document.createElement('div');
                    newCol.id = 'lipDesignStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = String(lipDict[anId][0]);
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('lipDesignStart').appendChild(newTextNode);
                    document.getElementById('lipDesignStart').addEventListener('click', function(){addDateStamp('lipDesignStart')});
                    if(document.getElementById('lipDesignStart').innerText != '-' && document.getElementById('lipDesignStart').innerText != 'N/A'){document.getElementById('lipDesignStart').addEventListener('click', function(){removeDateStamp('lipDesignStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'lipDesignFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = lipDict[anId][1];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('lipDesignFin').appendChild(newTextNode);
                    if(document.getElementById('lipDesignStart').innerText != '-'){document.getElementById('lipDesignFin').addEventListener('click', function(){addDateStamp('lipDesignFin')})};
                    if(document.getElementById('lipDesignFin').innerText != '-' && document.getElementById('lipDesignFin').innerText != 'N/A'){document.getElementById('lipDesignFin').addEventListener('click', function(){removeDateStamp('lipDesignFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'lipModelStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = lipDict[anId][2];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('lipModelStart').appendChild(newTextNode);
                    if(document.getElementById('lipDesignFin').innerText != '-'){document.getElementById('lipModelStart').addEventListener('click', function(){addDateStamp('lipModelStart')})};
                    if(document.getElementById('lipModelStart').innerText != '-' && document.getElementById('lipModelStart').innerText != 'N/A'){document.getElementById('lipModelStart').addEventListener('click', function(){removeDateStamp('lipModelStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'lipModelFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = lipDict[anId][3];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('lipModelFin').appendChild(newTextNode);
                    if(document.getElementById('lipModelStart').innerText != '-'){document.getElementById('lipModelFin').addEventListener('click', function(){addDateStamp('lipModelFin')})};
                    if(document.getElementById('lipModelFin').innerText != '-' && document.getElementById('lipModelFin').innerText != 'N/A'){document.getElementById('lipModelFin').addEventListener('click', function(){removeDateStamp('lipModelFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'lipProgStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = lipDict[anId][4];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('lipProgStart').appendChild(newTextNode);
                    if(document.getElementById('lipModelFin').innerText != '-'){document.getElementById('lipProgStart').addEventListener('click', function(){addDateStamp('lipProgStart')})};
                    if(document.getElementById('lipProgStart').innerText != '-' && document.getElementById('lipProgStart').innerText != 'N/A'){document.getElementById('lipProgStart').addEventListener('click', function(){removeDateStamp('lipProgStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'lipProgFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = lipDict[anId][5];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('lipProgFin').appendChild(newTextNode);
                    if(document.getElementById('lipProgStart').innerText != '-'){document.getElementById('lipProgFin').addEventListener('click', function(){addDateStamp('lipProgFin')})};
                    if(document.getElementById('lipProgFin').innerText != '-' && document.getElementById('lipProgFin').innerText != 'N/A'){document.getElementById('lipProgFin').addEventListener('click', function(){removeDateStamp('lipProgFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'lipTurnStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = lipDict[anId][6];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('lipTurnStart').appendChild(newTextNode);
                    if(document.getElementById('lipProgFin').innerText != '-'){document.getElementById('lipTurnStart').addEventListener('click', function(){addDateStamp('lipTurnStart')})};
                    if(document.getElementById('lipTurnStart').innerText != '-' && document.getElementById('lipTurnStart').innerText != 'N/A'){document.getElementById('lipTurnStart').addEventListener('click', function(){removeDateStamp('lipTurnStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'lipTurnFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = lipDict[anId][7];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('lipTurnFin').appendChild(newTextNode);
                    if(document.getElementById('lipTurnStart').innerText != '-'){document.getElementById('lipTurnFin').addEventListener('click', function(){addDateStamp('lipTurnFin')})};
                    if(document.getElementById('lipTurnFin').innerText != '-' && document.getElementById('lipTurnFin').innerText != 'N/A'){document.getElementById('lipTurnFin').addEventListener('click', function(){removeDateStamp('lipTurnFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'lipSoftStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    //colString = lipDict[anId][8];
                    colString = lipSoftDict[anId][6];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('lipSoftStart').appendChild(newTextNode);
                    //if(document.getElementById('lipTurnFin').innerText != '-'){document.getElementById('lipSoftStart').addEventListener('click', function(){addDateStamp('lipSoftStart')})};
                    if(document.getElementById('lipTurnFin').innerText != '-'){document.getElementById('lipSoftStart').addEventListener('click', function(){createLipSoftTable(anId)})};
                    //if(document.getElementById('lipSoftStart').innerText != '-' && document.getElementById('lipSoftStart').innerText != 'N/A'){document.getElementById('lipSoftStart').addEventListener('click', function(){removeDateStamp('lipSoftStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'lipSoftFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    //colString = lipDict[anId][9];
                    colString = lipSoftDict[anId][6];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('lipSoftFin').appendChild(newTextNode);
                    if(document.getElementById('lipSoftStart').innerText != '-'){document.getElementById('lipSoftFin').addEventListener('click', function(){addDateStamp('lipSoftFin')})};
                    //if(document.getElementById('lipDesignFin').innerText != '-' && document.getElementById('lipDesignFin').innerText != 'N/A'){document.getElementById('lipDesignFin').addEventListener('click', function(){removeDateStamp('lipDesignFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'lipHeatStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = lipDict[anId][10];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('lipHeatStart').appendChild(newTextNode);
                    if(document.getElementById('lipSoftFin').innerText != '-'){document.getElementById('lipHeatStart').addEventListener('click', function(){addDateStamp('lipHeatStart')})};
                    if(document.getElementById('lipHeatStart').innerText != '-' && document.getElementById('lipHeatStart').innerText != 'N/A'){document.getElementById('lipHeatStart').addEventListener('click', function(){removeDateStamp('lipHeatStart')})};
                    
                    newCol = document.createElement('div');
                    newCol.id = 'lipHeatFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = lipDict[anId][11];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('lipHeatFin').appendChild(newTextNode);
                    if(document.getElementById('lipHeatStart').innerText != '-'){document.getElementById('lipHeatFin').addEventListener('click', function(){addDateStamp('lipHeatFin')})};
                    if(document.getElementById('lipHeatFin').innerText != '-' && document.getElementById('lipHeatFin').innerText != 'N/A'){document.getElementById('lipHeatFin').addEventListener('click', function(){removeDateStamp('lipHeatFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'lipHardStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    //colString = lipDict[anId][12];
                    if(lipDict[anId][12] == 'N/A'){
                        colString = 'N/A';
                    }else{
                        colString = lipHardDict[anId][6];
                    }
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('lipHardStart').appendChild(newTextNode);
                    //if(document.getElementById('lipHeatFin').innerText != '-'){document.getElementById('lipHardStart').addEventListener('click', function(){addDateStamp('lipHardStart')})};
                    if(document.getElementById('lipHeatFin').innerText != '-'){document.getElementById('lipHardStart').addEventListener('click', function(){createLipHardTable(anId)})};
                    //if(document.getElementById('lipHardStart').innerText != '-' && document.getElementById('lipHardStart').innerText != 'N/A'){document.getElementById('lipHardStart').addEventListener('click', function(){removeDateStamp('lipHardStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'lipHardFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    //colString = lipDict[anId][13];
                    if(lipDict[anId][12] == 'N/A'){
                        colString = 'N/A';
                    }else{
                        colString = lipHardDict[anId][6];
                    }
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('lipHardFin').appendChild(newTextNode);
                    if(document.getElementById('lipHardStart').innerText != '-'){document.getElementById('lipHardFin').addEventListener('click', function(){addDateStamp('lipHardFin')})};
                    //if(document.getElementById('lipHardFin').innerText != '-' && document.getElementById('lipHardFin').innerText != 'N/A'){document.getElementById('lipHardFin').addEventListener('click', function(){removeDateStamp('lipHardFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'lipRamStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = 'N/A';
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('lipRamStart').appendChild(newTextNode);
                    // document.getElementById('lipRamStart').addEventListener('click', function(){addDateStamp('lipRamStart')});

                    newCol = document.createElement('div');
                    newCol.id = 'lipRamFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = 'N/A';
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('lipRamFin').appendChild(newTextNode);
                    // document.getElementById('lipRamFin').addEventListener('click', function(){addDateStamp('lipRamFin')});

                    newCol = document.createElement('div');
                    newCol.id = 'lipSectionStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = 'N/A';
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('lipSectionStart').appendChild(newTextNode);  
                    // document.getElementById('lipSectionStart').addEventListener('click', function(){addDateStamp('lipSectionStart')});    

                    newCol = document.createElement('div');
                    newCol.id = 'lipSectionFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = 'N/A';
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('lipSectionFin').appendChild(newTextNode); 
                    // document.getElementById('lipSectionFin').addEventListener('click', function(){addDateStamp('lipSectionFin')});

                    newCol = document.createElement('div');
                    newCol.id = 'lipWireStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = 'N/A';
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('lipWireStart').appendChild(newTextNode); 
                    //if(document.getElementById('lipHardFin').innerText != '-'){document.getElementById('lipWireStart').addEventListener('click', function(){addDateStamp('lipWireStart')})};
                    
                    newCol = document.createElement('div');
                    newCol.id = 'lipWireFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = 'N/A';
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('lipWireFin').appendChild(newTextNode);     
                    // document.getElementById('lipWireFin').addEventListener('click', function(){addDateStamp('lipWireFin')});            

                    newCol = document.createElement('div');
                    newCol.id = 'lipFinStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = lipDict[anId][20];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('lipFinStart').appendChild(newTextNode);  
                    if(document.getElementById('lipHardFin').innerText != '-'){document.getElementById('lipFinStart').addEventListener('click', function(){addDateStamp('lipFinStart')})};    
                    if(document.getElementById('lipFinStart').innerText != '-' && document.getElementById('lipFinStart').innerText != 'N/A'){document.getElementById('lipFinStart').addEventListener('click', function(){removeDateStamp('lipFinStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'lipFinFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = lipDict[anId][21];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('lipFinFin').appendChild(newTextNode); 
                    if(document.getElementById('lipFinStart').innerText != '-'){document.getElementById('lipFinFin').addEventListener('click', function(){addDateStamp('lipFinFin')})};
                    if(document.getElementById('lipFinFin').innerText != '-' && document.getElementById('lipFinFin').innerText != 'N/A'){document.getElementById('lipFinFin').addEventListener('click', function(){removeDateStamp('lipFinFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'lipPackStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = lipDict[anId][22];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('lipPackStart').appendChild(newTextNode); 
                    if(document.getElementById('lipFinFin').innerText != '-'){document.getElementById('lipPackStart').addEventListener('click', function(){addDateStamp('lipPackStart')})};
                    if(document.getElementById('lipPackStart').innerText != '-' && document.getElementById('lipPackStart').innerText != 'N/A'){document.getElementById('lipPackStart').addEventListener('click', function(){removeDateStamp('lipPackStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'lipPackFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = lipDict[anId][23];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('lipPackFin').appendChild(newTextNode);  
                    if(document.getElementById('lipPackStart').innerText != '-'){document.getElementById('lipPackFin').addEventListener('click', function(){addDateStamp('lipPackFin')})}; 
                    if(document.getElementById('lipPackFin').innerText != '-' && document.getElementById('lipPackFin').innerText != 'N/A'){document.getElementById('lipPackFin').addEventListener('click', function(){removeDateStamp('lipPackFin')})};

                    nextcolID++;
                }

                if (infoDict[anId][6] == 1){ // MANDREL.
                    let nextcol = 'row' + nextcolID;
                    // Subheader cols:
                    newCol = document.createElement('div'); // Empty padding Div
                    newCol.id = 'rowHead2';
                    newCol.className = 'rowHead';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = 'MANDREL';
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('rowHead2').appendChild(newTextNode);

                    newCol = document.createElement('div');
                    newCol.id = 'mandDesignStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = String(mandDict[anId][0]);
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('mandDesignStart').appendChild(newTextNode);
                    document.getElementById('mandDesignStart').addEventListener('click', function(){addDateStamp('mandDesignStart')});
                    if(document.getElementById('mandDesignStart').innerText != '-' && document.getElementById('mandDesignStart').innerText != 'N/A'){document.getElementById('mandDesignStart').addEventListener('click', function(){removeDateStamp('mandDesignStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'mandDesignFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = mandDict[anId][1];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('mandDesignFin').appendChild(newTextNode);
                    if(document.getElementById('mandDesignStart').innerText != '-'){document.getElementById('mandDesignFin').addEventListener('click', function(){addDateStamp('mandDesignFin')})};
                    if(document.getElementById('mandDesignFin').innerText != '-' && document.getElementById('mandDesignFin').innerText != 'N/A'){document.getElementById('mandDesignFin').addEventListener('click', function(){removeDateStamp('mandDesignFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'mandModelStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = mandDict[anId][2];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('mandModelStart').appendChild(newTextNode);
                    if(document.getElementById('mandDesignFin').innerText != '-'){document.getElementById('mandModelStart').addEventListener('click', function(){addDateStamp('mandModelStart')})};
                    if(document.getElementById('mandModelStart').innerText != '-' && document.getElementById('mandModelStart').innerText != 'N/A'){document.getElementById('mandModelStart').addEventListener('click', function(){removeDateStamp('mandModelStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'mandModelFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = mandDict[anId][3];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('mandModelFin').appendChild(newTextNode);
                    if(document.getElementById('mandModelStart').innerText != '-'){document.getElementById('mandModelFin').addEventListener('click', function(){addDateStamp('mandModelFin')})};
                    if(document.getElementById('mandModelFin').innerText != '-' && document.getElementById('mandModelFin').innerText != 'N/A'){document.getElementById('mandModelFin').addEventListener('click', function(){removeDateStamp('mandModelFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'mandProgStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = mandDict[anId][4];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('mandProgStart').appendChild(newTextNode);
                    if(document.getElementById('mandModelFin').innerText != '-'){document.getElementById('mandProgStart').addEventListener('click', function(){addDateStamp('mandProgStart')})};
                    if(document.getElementById('mandProgStart').innerText != '-' && document.getElementById('mandProgStart').innerText != 'N/A'){document.getElementById('mandProgStart').addEventListener('click', function(){removeDateStamp('mandProgStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'mandProgFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = mandDict[anId][5];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('mandProgFin').appendChild(newTextNode);
                    if(document.getElementById('mandProgStart').innerText != '-'){document.getElementById('mandProgFin').addEventListener('click', function(){addDateStamp('mandProgFin')})};
                    if(document.getElementById('mandProgFin').innerText != '-' && document.getElementById('mandProgFin').innerText != 'N/A'){document.getElementById('mandProgFin').addEventListener('click', function(){removeDateStamp('mandProgFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'mandTurnStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = mandDict[anId][6];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('mandTurnStart').appendChild(newTextNode);
                    if(document.getElementById('mandProgFin').innerText != '-'){document.getElementById('mandTurnStart').addEventListener('click', function(){addDateStamp('mandTurnStart')})};
                    if(document.getElementById('mandTurnStart').innerText != '-' && document.getElementById('mandTurnStart').innerText != 'N/A'){document.getElementById('mandTurnStart').addEventListener('click', function(){removeDateStamp('mandTurnStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'mandTurnFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = mandDict[anId][7];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('mandTurnFin').appendChild(newTextNode);
                    if(document.getElementById('mandTurnStart').innerText != '-'){document.getElementById('mandTurnFin').addEventListener('click', function(){addDateStamp('mandTurnFin')})};
                    if(document.getElementById('mandTurnFin').innerText != '-' && document.getElementById('mandTurnFin').innerText != 'N/A'){document.getElementById('mandTurnFin').addEventListener('click', function(){removeDateStamp('mandTurnFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'mandSoftStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    //colString = mandDict[anId][8];
                    colString = mandSoftDict[anId][6];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('mandSoftStart').appendChild(newTextNode);
                    //if(document.getElementById('mandTurnFin').innerText != '-'){document.getElementById('mandSoftStart').addEventListener('click', function(){addDateStamp('mandSoftStart')})};
                    if(document.getElementById('mandTurnFin').innerText != '-'){document.getElementById('mandSoftStart').addEventListener('click', function(){createMandrelSoftTable(anId)})};
                    //if(document.getElementById('mandSoftStart').innerText != '-' && document.getElementById('mandSoftStart').innerText != 'N/A'){document.getElementById('mandSoftStart').addEventListener('click', function(){removeDateStamp('mandSoftStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'mandSoftFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    //colString = mandDict[anId][9];
                    colString = mandSoftDict[anId][6];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('mandSoftFin').appendChild(newTextNode);
                    if(document.getElementById('mandSoftStart').innerText != '-'){document.getElementById('mandSoftFin').addEventListener('click', function(){addDateStamp('mandSoftFin')})};
                    //if(document.getElementById('mandSoftFin').innerText != '-' && document.getElementById('lipDesignFin').innerText != 'N/A'){document.getElementById('lipDesignFin').addEventListener('click', function(){removeDateStamp('lipDesignFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'mandHeatStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = mandDict[anId][10];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('mandHeatStart').appendChild(newTextNode);
                    if(document.getElementById('mandSoftFin').innerText != '-'){document.getElementById('mandHeatStart').addEventListener('click', function(){addDateStamp('mandHeatStart')})};
                    if(document.getElementById('mandHeatStart').innerText != '-' && document.getElementById('mandHeatStart').innerText != 'N/A'){document.getElementById('mandHeatStart').addEventListener('click', function(){removeDateStamp('mandHeatStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'mandHeatFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = mandDict[anId][11];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('mandHeatFin').appendChild(newTextNode);
                    if(document.getElementById('mandHeatStart').innerText != '-'){document.getElementById('mandHeatFin').addEventListener('click', function(){addDateStamp('mandHeatFin')})};
                    if(document.getElementById('mandHeatFin').innerText != '-' && document.getElementById('mandHeatFin').innerText != 'N/A'){document.getElementById('mandHeatFin').addEventListener('click', function(){removeDateStamp('mandHeatFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'mandHardStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    //colString = mandDict[anId][12];
                    colString = mandHardDict[anId][6];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('mandHardStart').appendChild(newTextNode);
                    //if(document.getElementById('mandHeatFin').innerText != '-'){document.getElementById('mandHardStart').addEventListener('click', function(){addDateStamp('mandHardStart')})};
                    if(document.getElementById('mandHeatFin').innerText != '-'){document.getElementById('mandHardStart').addEventListener('click', function(){createMandrelHardTable(anId)})};
                    //if(document.getElementById('mandHardStart').innerText != '-' && document.getElementById('mandHardStart').innerText != 'N/A'){document.getElementById('mandHardStart').addEventListener('click', function(){removeDateStamp('mandHardStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'mandHardFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    //colString = mandDict[anId][13];
                    colString = mandHardDict[anId][6];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('mandHardFin').appendChild(newTextNode);
                    if(document.getElementById('mandHardStart').innerText != '-'){document.getElementById('mandHardFin').addEventListener('click', function(){addDateStamp('mandHardFin')})};
                    //if(document.getElementById('mandHardFin').innerText != '-' && document.getElementById('mandHardFin').innerText != 'N/A'){document.getElementById('mandHardFin').addEventListener('click', function(){removeDateStamp('mandHardFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'mandRamStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = mandDict[anId][14];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('mandRamStart').appendChild(newTextNode);
                    if(document.getElementById('mandHardFin').innerText != '-'){document.getElementById('mandRamStart').addEventListener('click', function(){addDateStamp('mandRamStart')})};
                    if(document.getElementById('mandRamStart').innerText != '-' && document.getElementById('mandRamStart').innerText != 'N/A'){document.getElementById('mandRamStart').addEventListener('click', function(){removeDateStamp('mandRamStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'mandRamFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = mandDict[anId][15];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('mandRamFin').appendChild(newTextNode);
                    if(document.getElementById('mandRamStart').innerText != '-'){document.getElementById('mandRamFin').addEventListener('click', function(){addDateStamp('mandRamFin')})};
                    if(document.getElementById('mandRamFin').innerText != '-' && document.getElementById('mandRamFin').innerText != 'N/A'){document.getElementById('mandRamFin').addEventListener('click', function(){removeDateStamp('mandRamFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'mandSectionStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = mandDict[anId][16];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('mandSectionStart').appendChild(newTextNode);  
                    if(document.getElementById('mandRamFin').innerText != '-'){document.getElementById('mandSectionStart').addEventListener('click', function(){addDateStamp('mandSectionStart')})};    
                    if(document.getElementById('mandSectionStart').innerText != '-' && document.getElementById('mandSectionStart').innerText != 'N/A'){document.getElementById('mandSectionStart').addEventListener('click', function(){removeDateStamp('mandSectionStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'mandSectionFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = mandDict[anId][17];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('mandSectionFin').appendChild(newTextNode); 
                    if(document.getElementById('mandSectionStart').innerText != '-'){document.getElementById('mandSectionFin').addEventListener('click', function(){addDateStamp('mandSectionFin')})};
                    if(document.getElementById('mandSectionFin').innerText != '-' && document.getElementById('mandSectionFin').innerText != 'N/A'){document.getElementById('mandSectionFin').addEventListener('click', function(){removeDateStamp('mandSectionFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'mandWireStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = 'N/A';
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('mandWireStart').appendChild(newTextNode); 
                    // document.getElementById('mandWireStart').addEventListener('click', function(){addDateStamp('mandWireStart')});
                    
                    newCol = document.createElement('div');
                    newCol.id = 'mandWireFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = 'N/A';
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('mandWireFin').appendChild(newTextNode);     
                    // document.getElementById('mandWireFin').addEventListener('click', function(){addDateStamp('mandWireFin')});            

                    newCol = document.createElement('div');
                    newCol.id = 'mandFinStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = mandDict[anId][20];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('mandFinStart').appendChild(newTextNode);  
                    if(document.getElementById('mandSectionFin').innerText != '-'){document.getElementById('mandFinStart').addEventListener('click', function(){addDateStamp('mandFinStart')})};    
                    if(document.getElementById('mandFinStart').innerText != '-' && document.getElementById('mandFinStart').innerText != 'N/A'){document.getElementById('mandFinStart').addEventListener('click', function(){removeDateStamp('mandFinStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'mandFinFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = mandDict[anId][21];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('mandFinFin').appendChild(newTextNode); 
                    if(document.getElementById('mandFinStart').innerText != '-'){document.getElementById('mandFinFin').addEventListener('click', function(){addDateStamp('mandFinFin')})};
                    if(document.getElementById('mandFinFin').innerText != '-' && document.getElementById('mandFinFin').innerText != 'N/A'){document.getElementById('mandFinFin').addEventListener('click', function(){removeDateStamp('mandFinFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'mandPackStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = mandDict[anId][22];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('mandPackStart').appendChild(newTextNode); 
                    if(document.getElementById('mandFinFin').innerText != '-'){document.getElementById('mandPackStart').addEventListener('click', function(){addDateStamp('mandPackStart')})};
                    if(document.getElementById('mandPackStart').innerText != '-' && document.getElementById('mandPackStart').innerText != 'N/A'){document.getElementById('mandPackStart').addEventListener('click', function(){removeDateStamp('mandPackStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'mandPackFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = mandDict[anId][23];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('mandPackFin').appendChild(newTextNode);  
                    if(document.getElementById('mandPackStart').innerText != '-'){document.getElementById('mandPackFin').addEventListener('click', function(){addDateStamp('mandPackFin')})}; 
                    if(document.getElementById('mandPackFin').innerText != '-' && document.getElementById('mandPackFin').innerText != 'N/A'){document.getElementById('mandPackFin').addEventListener('click', function(){removeDateStamp('mandPackFin')})};

                    nextcolID++;
                }

                if (infoDict[anId][7] == 1){ // DIEPLATE.
                    let nextcol = 'row' + nextcolID;
                    // Subheader cols:
                    newCol = document.createElement('div'); // Empty padding Div
                    newCol.id = 'rowHead3';
                    newCol.className = 'rowHead';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = 'DIEPLATE';
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('rowHead3').appendChild(newTextNode);

                    newCol = document.createElement('div');
                    newCol.id = 'dieDesignStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = String(dieDict[anId][0]);
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('dieDesignStart').appendChild(newTextNode);
                    document.getElementById('dieDesignStart').addEventListener('click', function(){addDateStamp('dieDesignStart')});
                    if(document.getElementById('dieDesignStart').innerText != '-' && document.getElementById('dieDesignStart').innerText != 'N/A'){document.getElementById('dieDesignStart').addEventListener('click', function(){removeDateStamp('dieDesignStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'dieDesignFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = dieDict[anId][1];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('dieDesignFin').appendChild(newTextNode);
                    if(document.getElementById('dieDesignStart').innerText != '-'){document.getElementById('dieDesignFin').addEventListener('click', function(){addDateStamp('dieDesignFin')})};
                    if(document.getElementById('dieDesignFin').innerText != '-' && document.getElementById('dieDesignFin').innerText != 'N/A'){document.getElementById('dieDesignFin').addEventListener('click', function(){removeDateStamp('dieDesignFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'dieModelStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = dieDict[anId][2];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('dieModelStart').appendChild(newTextNode);
                    if(document.getElementById('dieDesignFin').innerText != '-'){document.getElementById('dieModelStart').addEventListener('click', function(){addDateStamp('dieModelStart')})};
                    if(document.getElementById('dieModelStart').innerText != '-' && document.getElementById('dieModelStart').innerText != 'N/A'){document.getElementById('dieModelStart').addEventListener('click', function(){removeDateStamp('dieModelStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'dieModelFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = dieDict[anId][3];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('dieModelFin').appendChild(newTextNode);
                    if(document.getElementById('dieModelStart').innerText != '-'){document.getElementById('dieModelFin').addEventListener('click', function(){addDateStamp('dieModelFin')})};
                    if(document.getElementById('dieModelFin').innerText != '-' && document.getElementById('dieModelFin').innerText != 'N/A'){document.getElementById('dieModelFin').addEventListener('click', function(){removeDateStamp('dieModelFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'dieProgStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = dieDict[anId][4];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('dieProgStart').appendChild(newTextNode);
                    if(document.getElementById('dieModelFin').innerText != '-'){document.getElementById('dieProgStart').addEventListener('click', function(){addDateStamp('dieProgStart')})};
                    if(document.getElementById('dieProgStart').innerText != '-' && document.getElementById('dieProgStart').innerText != 'N/A'){document.getElementById('dieProgStart').addEventListener('click', function(){removeDateStamp('dieProgStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'dieProgFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = dieDict[anId][5];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('dieProgFin').appendChild(newTextNode);
                    if(document.getElementById('dieProgStart').innerText != '-'){document.getElementById('dieProgFin').addEventListener('click', function(){addDateStamp('dieProgFin')})};
                    if(document.getElementById('dieProgFin').innerText != '-' && document.getElementById('dieProgFin').innerText != 'N/A'){document.getElementById('dieProgFin').addEventListener('click', function(){removeDateStamp('dieProgFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'dieTurnStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = dieDict[anId][6];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('dieTurnStart').appendChild(newTextNode);
                    if(document.getElementById('dieProgFin').innerText != '-'){document.getElementById('dieTurnStart').addEventListener('click', function(){addDateStamp('dieTurnStart')})};
                    if(document.getElementById('dieTurnStart').innerText != '-' && document.getElementById('dieTurnStart').innerText != 'N/A'){document.getElementById('dieTurnStart').addEventListener('click', function(){removeDateStamp('dieTurnStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'dieTurnFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = dieDict[anId][7];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('dieTurnFin').appendChild(newTextNode);
                    if(document.getElementById('dieTurnStart').innerText != '-'){document.getElementById('dieTurnFin').addEventListener('click', function(){addDateStamp('dieTurnFin')})};
                    if(document.getElementById('dieTurnFin').innerText != '-' && document.getElementById('dieTurnFin').innerText != 'N/A'){document.getElementById('dieTurnFin').addEventListener('click', function(){removeDateStamp('dieTurnFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'dieSoftStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    //colString = dieDict[anId][8];
                    colString = dieSoftDict[anId][6];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('dieSoftStart').appendChild(newTextNode);
                    //if(document.getElementById('dieTurnFin').innerText != '-'){document.getElementById('dieSoftStart').addEventListener('click', function(){addDateStamp('dieSoftStart')})};
                    if(document.getElementById('dieTurnFin').innerText != '-'){document.getElementById('dieSoftStart').addEventListener('click', function(){createDieSoftTable(anId)})};
                    //if(document.getElementById('lipDesignFin').innerText != '-' && document.getElementById('lipDesignFin').innerText != 'N/A'){document.getElementById('lipDesignFin').addEventListener('click', function(){removeDateStamp('lipDesignFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'dieSoftFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    //colString = dieDict[anId][9];
                    colString = dieSoftDict[anId][6];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('dieSoftFin').appendChild(newTextNode);
                    if(document.getElementById('dieSoftStart').innerText != '-'){document.getElementById('dieSoftFin').addEventListener('click', function(){addDateStamp('dieSoftFin')})};
                    //if(document.getElementById('lipDesignFin').innerText != '-' && document.getElementById('lipDesignFin').innerText != 'N/A'){document.getElementById('lipDesignFin').addEventListener('click', function(){removeDateStamp('lipDesignFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'dieHeatStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = dieDict[anId][10];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('dieHeatStart').appendChild(newTextNode);
                    if(document.getElementById('dieSoftFin').innerText != '-'){document.getElementById('dieHeatStart').addEventListener('click', function(){addDateStamp('dieHeatStart')})};
                    if(document.getElementById('dieHeatStart').innerText != '-' && document.getElementById('dieHeatStart').innerText != 'N/A'){document.getElementById('dieHeatStart').addEventListener('click', function(){removeDateStamp('dieHeatStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'dieHeatFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = dieDict[anId][11];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('dieHeatFin').appendChild(newTextNode);
                    if(document.getElementById('dieHeatStart').innerText != '-'){document.getElementById('dieHeatFin').addEventListener('click', function(){addDateStamp('dieHeatFin')})};
                    if(document.getElementById('dieHeatFin').innerText != '-' && document.getElementById('dieHeatFin').innerText != 'N/A'){document.getElementById('dieHeatFin').addEventListener('click', function(){removeDateStamp('dieHeatFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'dieHardStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    //colString = dieDict[anId][12];
                    colString = dieHardDict[anId][6];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('dieHardStart').appendChild(newTextNode);
                    //if(document.getElementById('dieHeatFin').innerText != '-'){document.getElementById('dieHardStart').addEventListener('click', function(){addDateStamp('dieHardStart')})};
                    if(document.getElementById('dieHeatFin').innerText != '-'){document.getElementById('dieHardStart').addEventListener('click', function(){createDieHardTable(anId)})};
                    //if(document.getElementById('dieHardStart').innerText != '-' && document.getElementById('dieHardStart').innerText != 'N/A'){document.getElementById('dieHardStart').addEventListener('click', function(){removeDateStamp('dieHardStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'dieHardFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    //colString = dieDict[anId][13];
                    colString = dieHardDict[anId][6];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('dieHardFin').appendChild(newTextNode);
                    if(document.getElementById('dieHardStart').innerText != '-'){document.getElementById('dieHardFin').addEventListener('click', function(){addDateStamp('dieHardFin')})};
                    //if(document.getElementById('dieHardFin').innerText != '-' && document.getElementById('dieHardFin').innerText != 'N/A'){document.getElementById('dieHardFin').addEventListener('click', function(){removeDateStamp('dieHardFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'dieRamStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = 'N/A';
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('dieRamStart').appendChild(newTextNode);
                    // document.getElementById('dieRamStart').addEventListener('click', function(){addDateStamp('dieRamStart')});

                    newCol = document.createElement('div');
                    newCol.id = 'dieRamFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = 'N/A';
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('dieRamFin').appendChild(newTextNode);
                    // document.getElementById('dieRamFin').addEventListener('click', function(){addDateStamp('dieRamFin')});

                    newCol = document.createElement('div');
                    newCol.id = 'dieSectionStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = dieDict[anId][16];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('dieSectionStart').appendChild(newTextNode);  
                    if(document.getElementById('dieHardFin').innerText != '-'){document.getElementById('dieSectionStart').addEventListener('click', function(){addDateStamp('dieSectionStart')})};    
                    if(document.getElementById('dieSectionStart').innerText != '-' && document.getElementById('dieSectionStart').innerText != 'N/A'){document.getElementById('dieSectionStart').addEventListener('click', function(){removeDateStamp('dieSectionStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'dieSectionFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = dieDict[anId][17];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('dieSectionFin').appendChild(newTextNode); 
                    if(document.getElementById('dieSectionStart').innerText != '-'){document.getElementById('dieSectionFin').addEventListener('click', function(){addDateStamp('dieSectionFin')})};
                    if(document.getElementById('dieSectionFin').innerText != '-' && document.getElementById('dieSectionFin').innerText != 'N/A'){document.getElementById('dieSectionFin').addEventListener('click', function(){removeDateStamp('dieSectionFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'dieWireStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = dieDict[anId][18];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('dieWireStart').appendChild(newTextNode); 
                    if(document.getElementById('dieSectionFin').innerText != '-'){document.getElementById('dieWireStart').addEventListener('click', function(){addDateStamp('dieWireStart')})};
                    if(document.getElementById('dieWireStart').innerText != '-' && document.getElementById('dieWireStart').innerText != 'N/A'){document.getElementById('dieWireStart').addEventListener('click', function(){removeDateStamp('dieWireStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'dieWireFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = dieDict[anId][19];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('dieWireFin').appendChild(newTextNode);     
                    if(document.getElementById('dieWireStart').innerText != '-'){document.getElementById('dieWireFin').addEventListener('click', function(){addDateStamp('dieWireFin')})};            
                    if(document.getElementById('dieWireFin').innerText != '-' && document.getElementById('dieWireFin').innerText != 'N/A'){document.getElementById('dieWireFin').addEventListener('click', function(){removeDateStamp('dieWireFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'dieFinStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = dieDict[anId][20];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('dieFinStart').appendChild(newTextNode);  
                    if(document.getElementById('dieWireFin').innerText != '-'){document.getElementById('dieFinStart').addEventListener('click', function(){addDateStamp('dieFinStart')})};    
                    if(document.getElementById('dieFinStart').innerText != '-' && document.getElementById('dieFinStart').innerText != 'N/A'){document.getElementById('dieFinStart').addEventListener('click', function(){removeDateStamp('dieFinStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'dieFinFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = dieDict[anId][21];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('dieFinFin').appendChild(newTextNode); 
                    if(document.getElementById('dieFinStart').innerText != '-'){document.getElementById('dieFinFin').addEventListener('click', function(){addDateStamp('dieFinFin')})};
                    if(document.getElementById('dieFinFin').innerText != '-' && document.getElementById('dieFinFin').innerText != 'N/A'){document.getElementById('dieFinFin').addEventListener('click', function(){removeDateStamp('dieFinFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'diePackStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = dieDict[anId][22];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('diePackStart').appendChild(newTextNode); 
                    if(document.getElementById('dieFinFin').innerText != '-'){document.getElementById('diePackStart').addEventListener('click', function(){addDateStamp('diePackStart')})};
                    if(document.getElementById('diePackStart').innerText != '-' && document.getElementById('diePackStart').innerText != 'N/A'){document.getElementById('diePackStart').addEventListener('click', function(){removeDateStamp('diePackStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'diePackFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = dieDict[anId][23];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('diePackFin').appendChild(newTextNode);  
                    if(document.getElementById('diePackStart').innerText != '-'){document.getElementById('diePackFin').addEventListener('click', function(){addDateStamp('diePackFin')})}; 
                    if(document.getElementById('diePackFin').innerText != '-' && document.getElementById('diePackFin').innerText != 'N/A'){document.getElementById('diePackFin').addEventListener('click', function(){removeDateStamp('diePackFin')})};

                    nextcolID++;
                }
            
                if (infoDict[anId][8] == 1){ // BACKER.
                    let nextcol = 'row' + nextcolID;
                    // Subheader cols:
                    newCol = document.createElement('div'); // Empty padding Div
                    newCol.id = 'rowHead4';
                    newCol.className = 'rowHead';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = 'BACKER';
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('rowHead4').appendChild(newTextNode);

                    newCol = document.createElement('div');
                    newCol.id = 'backDesignStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = String(backerDict[anId][0]);
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('backDesignStart').appendChild(newTextNode);
                    document.getElementById('backDesignStart').addEventListener('click', function(){addDateStamp('backDesignStart')});
                    if(document.getElementById('backDesignStart').innerText != '-' && document.getElementById('backDesignStart').innerText != 'N/A'){document.getElementById('backDesignStart').addEventListener('click', function(){removeDateStamp('backDesignStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'backDesignFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = backerDict[anId][1];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('backDesignFin').appendChild(newTextNode);
                    if(document.getElementById('backDesignStart').innerText != '-'){document.getElementById('backDesignFin').addEventListener('click', function(){addDateStamp('backDesignFin')})};
                    if(document.getElementById('backDesignFin').innerText != '-' && document.getElementById('backDesignFin').innerText != 'N/A'){document.getElementById('backDesignFin').addEventListener('click', function(){removeDateStamp('backDesignFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'backModelStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = backerDict[anId][2];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('backModelStart').appendChild(newTextNode);
                    if(document.getElementById('backDesignFin').innerText != '-'){document.getElementById('backModelStart').addEventListener('click', function(){addDateStamp('backModelStart')})};
                    if(document.getElementById('backModelStart').innerText != '-' && document.getElementById('backModelStart').innerText != 'N/A'){document.getElementById('backModelStart').addEventListener('click', function(){removeDateStamp('backModelStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'backModelFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = backerDict[anId][3];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('backModelFin').appendChild(newTextNode);
                    if(document.getElementById('backModelStart').innerText != '-'){document.getElementById('backModelFin').addEventListener('click', function(){addDateStamp('backModelFin')})};
                    if(document.getElementById('backModelFin').innerText != '-' && document.getElementById('backModelFin').innerText != 'N/A'){document.getElementById('backModelFin').addEventListener('click', function(){removeDateStamp('backModelFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'backProgStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = backerDict[anId][4];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('backProgStart').appendChild(newTextNode);
                    if(document.getElementById('backModelFin').innerText != '-'){document.getElementById('backProgStart').addEventListener('click', function(){addDateStamp('backProgStart')})};
                    if(document.getElementById('backProgStart').innerText != '-' && document.getElementById('backProgStart').innerText != 'N/A'){document.getElementById('backProgStart').addEventListener('click', function(){removeDateStamp('backProgStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'backProgFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = backerDict[anId][5];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('backProgFin').appendChild(newTextNode);
                    if(document.getElementById('backProgStart').innerText != '-'){document.getElementById('backProgFin').addEventListener('click', function(){addDateStamp('backProgFin')})};
                    if(document.getElementById('backProgFin').innerText != '-' && document.getElementById('backProgFin').innerText != 'N/A'){document.getElementById('backProgFin').addEventListener('click', function(){removeDateStamp('backProgFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'backTurnStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = backerDict[anId][6];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('backTurnStart').appendChild(newTextNode);
                    if(document.getElementById('backProgFin').innerText != '-'){document.getElementById('backTurnStart').addEventListener('click', function(){addDateStamp('backTurnStart')})};
                    if(document.getElementById('backTurnStart').innerText != '-' && document.getElementById('backTurnStart').innerText != 'N/A'){document.getElementById('backTurnStart').addEventListener('click', function(){removeDateStamp('backTurnStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'backTurnFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = backerDict[anId][7];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('backTurnFin').appendChild(newTextNode);
                    if(document.getElementById('backTurnStart').innerText != '-'){document.getElementById('backTurnFin').addEventListener('click', function(){addDateStamp('backTurnFin')})};
                    if(document.getElementById('backTurnFin').innerText != '-' && document.getElementById('backTurnFin').innerText != 'N/A'){document.getElementById('backTurnFin').addEventListener('click', function(){removeDateStamp('backTurnFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'backSoftStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    //colString = backerDict[anId][8];
                    colString = backerSoftDict[anId][6];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('backSoftStart').appendChild(newTextNode);
                    //if(document.getElementById('backTurnFin').innerText != '-'){document.getElementById('backSoftStart').addEventListener('click', function(){addDateStamp('backSoftStart')})};
                    if(document.getElementById('backTurnFin').innerText != '-'){document.getElementById('backSoftStart').addEventListener('click', function(){createBackerSoftTable(anId)})};
                    //if(document.getElementById('backSoftStart').innerText != '-' && document.getElementById('backSoftStart').innerText != 'N/A'){document.getElementById('backSoftStart').addEventListener('click', function(){removeDateStamp('backSoftStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'backSoftFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    //colString = backerDict[anId][9];
                    colString = backerSoftDict[anId][6];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('backSoftFin').appendChild(newTextNode);
                    if(document.getElementById('backSoftStart').innerText != '-'){document.getElementById('backSoftFin').addEventListener('click', function(){addDateStamp('backSoftFin')})};
                    //if(document.getElementById('backSoftFin').innerText != '-' && document.getElementById('backSoftFin').innerText != 'N/A'){document.getElementById('backSoftFin').addEventListener('click', function(){removeDateStamp('backSoftFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'backHeatStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = backerDict[anId][10];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('backHeatStart').appendChild(newTextNode);
                    if(document.getElementById('backSoftFin').innerText != '-'){document.getElementById('backHeatStart').addEventListener('click', function(){addDateStamp('backHeatStart')})};
                    if(document.getElementById('backHeatStart').innerText != '-' && document.getElementById('backHeatStart').innerText != 'N/A'){document.getElementById('backHeatStart').addEventListener('click', function(){removeDateStamp('backHeatStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'backHeatFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = backerDict[anId][11];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('backHeatFin').appendChild(newTextNode);
                    if(document.getElementById('backHeatStart').innerText != '-'){document.getElementById('backHeatFin').addEventListener('click', function(){addDateStamp('backHeatFin')})};
                    if(document.getElementById('backHeatFin').innerText != '-' && document.getElementById('backHeatFin').innerText != 'N/A'){document.getElementById('backHeatFin').addEventListener('click', function(){removeDateStamp('backHeatFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'backHardStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    //colString = backerDict[anId][12];
                    colString = 'N/A';
                    //colString = backerHardDict[anId][6];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('backHardStart').appendChild(newTextNode);
                    //if(document.getElementById('backHeatFin').innerText != '-'){document.getElementById('backHardStart').addEventListener('click', function(){addDateStamp('backHardStart')})};
                    //if(document.getElementById('backHeatFin').innerText != '-'){document.getElementById('backHardStart').addEventListener('click', function(){createBackerHardTable(anId)})};
                    //if(document.getElementById('lipDesignFin').innerText != '-' && document.getElementById('lipDesignFin').innerText != 'N/A'){document.getElementById('lipDesignFin').addEventListener('click', function(){removeDateStamp('lipDesignFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'backHardFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    //colString = backerDict[anId][13];
                    colString = 'N/A';
                    //colString = backerHardDict[anId][6];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('backHardFin').appendChild(newTextNode);
                    //if(document.getElementById('backHardStart').innerText != '-'){document.getElementById('backHardFin').addEventListener('click', function(){addDateStamp('backHardFin')})};
                    //if(document.getElementById('lipDesignFin').innerText != '-' && document.getElementById('lipDesignFin').innerText != 'N/A'){document.getElementById('lipDesignFin').addEventListener('click', function(){removeDateStamp('lipDesignFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'backRamStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = 'N/A';
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('backRamStart').appendChild(newTextNode);
                    // document.getElementById('backRamStart').addEventListener('click', function(){addDateStamp('backRamStart')});

                    newCol = document.createElement('div');
                    newCol.id = 'backRamFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = 'N/A';
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('backRamFin').appendChild(newTextNode);
                    // document.getElementById('backRamFin').addEventListener('click', function(){addDateStamp('backRamFin')});

                    newCol = document.createElement('div');
                    newCol.id = 'backSectionStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = 'N/A';
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('backSectionStart').appendChild(newTextNode);  
                    // document.getElementById('backSectionStart').addEventListener('click', function(){addDateStamp('backSectionStart')});    

                    newCol = document.createElement('div');
                    newCol.id = 'backSectionFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = 'N/A';
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('backSectionFin').appendChild(newTextNode); 
                    // document.getElementById('backSectionFin').addEventListener('click', function(){addDateStamp('backSectionFin')});

                    newCol = document.createElement('div');
                    newCol.id = 'backWireStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = 'N/A';
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('backWireStart').appendChild(newTextNode); 
                    // document.getElementById('backWireStart').addEventListener('click', function(){addDateStamp('backWireStart')});
                    
                    newCol = document.createElement('div');
                    newCol.id = 'backWireFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = 'N/A';
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('backWireFin').appendChild(newTextNode);     
                    // document.getElementById('backWireFin').addEventListener('click', function(){addDateStamp('backWireFin')});            

                    newCol = document.createElement('div');
                    newCol.id = 'backFinStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = backerDict[anId][20];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('backFinStart').appendChild(newTextNode);  
                    if(document.getElementById('backHardFin').innerText != '-'){document.getElementById('backFinStart').addEventListener('click', function(){addDateStamp('backFinStart')})};    
                    if(document.getElementById('backFinStart').innerText != '-' && document.getElementById('backFinStart').innerText != 'N/A'){document.getElementById('backFinStart').addEventListener('click', function(){removeDateStamp('backFinStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'backFinFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = backerDict[anId][21];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('backFinFin').appendChild(newTextNode); 
                    if(document.getElementById('backFinStart').innerText != '-'){document.getElementById('backFinFin').addEventListener('click', function(){addDateStamp('backFinFin')})};
                    if(document.getElementById('backFinFin').innerText != '-' && document.getElementById('backFinFin').innerText != 'N/A'){document.getElementById('backFinFin').addEventListener('click', function(){removeDateStamp('backFinFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'backPackStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = backerDict[anId][22];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('backPackStart').appendChild(newTextNode); 
                    if(document.getElementById('backFinFin').innerText != '-'){document.getElementById('backPackStart').addEventListener('click', function(){addDateStamp('backPackStart')})};
                    if(document.getElementById('backPackStart').innerText != '-' && document.getElementById('backPackStart').innerText != 'N/A'){document.getElementById('backPackStart').addEventListener('click', function(){removeDateStamp('backPackStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'backPackFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = backerDict[anId][23];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('backPackFin').appendChild(newTextNode);  
                    if(document.getElementById('backPackStart').innerText != '-'){document.getElementById('backPackFin').addEventListener('click', function(){addDateStamp('backPackFin')})}; 
                    if(document.getElementById('backPackFin').innerText != '-' && document.getElementById('backPackFin').innerText != 'N/A'){document.getElementById('backPackFin').addEventListener('click', function(){removeDateStamp('backPackFin')})};

                    nextcolID++;
                }

                if (infoDict[anId][9] == 1){ // BOLSTER.
                    let nextcol = 'row' + nextcolID;
                    // Subheader cols:
                    newCol = document.createElement('div'); // Empty padding Div
                    newCol.id = 'rowHead5';
                    newCol.className = 'rowHead';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = 'BOLSTER';
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('rowHead5').appendChild(newTextNode);

                    newCol = document.createElement('div');
                    newCol.id = 'bolDesignStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = String(bolDict[anId][0]);
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('bolDesignStart').appendChild(newTextNode);
                    document.getElementById('bolDesignStart').addEventListener('click', function(){addDateStamp('bolDesignStart')});
                    if(document.getElementById('bolDesignStart').innerText != '-' && document.getElementById('bolDesignStart').innerText != 'N/A'){document.getElementById('bolDesignStart').addEventListener('click', function(){removeDateStamp('bolDesignStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'bolDesignFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = bolDict[anId][1];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('bolDesignFin').appendChild(newTextNode);
                    if(document.getElementById('bolDesignStart').innerText != '-'){document.getElementById('bolDesignFin').addEventListener('click', function(){addDateStamp('bolDesignFin')})};
                    if(document.getElementById('bolDesignFin').innerText != '-' && document.getElementById('bolDesignFin').innerText != 'N/A'){document.getElementById('bolDesignFin').addEventListener('click', function(){removeDateStamp('bolDesignFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'bolModelStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = bolDict[anId][2];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('bolModelStart').appendChild(newTextNode);
                    if(document.getElementById('bolDesignFin').innerText != '-'){document.getElementById('bolModelStart').addEventListener('click', function(){addDateStamp('bolModelStart')})};
                    if(document.getElementById('bolModelStart').innerText != '-' && document.getElementById('bolModelStart').innerText != 'N/A'){document.getElementById('bolModelStart').addEventListener('click', function(){removeDateStamp('bolModelStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'bolModelFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = bolDict[anId][3];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('bolModelFin').appendChild(newTextNode);
                    if(document.getElementById('bolModelStart').innerText != '-'){document.getElementById('bolModelFin').addEventListener('click', function(){addDateStamp('bolModelFin')})};
                    if(document.getElementById('bolModelFin').innerText != '-' && document.getElementById('bolModelFin').innerText != 'N/A'){document.getElementById('bolModelFin').addEventListener('click', function(){removeDateStamp('bolModelFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'bolProgStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = bolDict[anId][4];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('bolProgStart').appendChild(newTextNode);
                    if(document.getElementById('bolModelFin').innerText != '-'){document.getElementById('bolProgStart').addEventListener('click', function(){addDateStamp('bolProgStart')})};
                    if(document.getElementById('bolProgStart').innerText != '-' && document.getElementById('bolProgStart').innerText != 'N/A'){document.getElementById('bolProgStart').addEventListener('click', function(){removeDateStamp('bolProgStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'bolProgFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = bolDict[anId][5];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('bolProgFin').appendChild(newTextNode);
                    if(document.getElementById('bolProgStart').innerText != '-'){document.getElementById('bolProgFin').addEventListener('click', function(){addDateStamp('bolProgFin')})};
                    if(document.getElementById('bolProgFin').innerText != '-' && document.getElementById('bolProgFin').innerText != 'N/A'){document.getElementById('bolProgFin').addEventListener('click', function(){removeDateStamp('bolProgFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'bolTurnStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = bolDict[anId][6];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('bolTurnStart').appendChild(newTextNode);
                    if(document.getElementById('bolProgFin').innerText != '-'){document.getElementById('bolTurnStart').addEventListener('click', function(){addDateStamp('bolTurnStart')})};
                    if(document.getElementById('bolTurnStart').innerText != '-' && document.getElementById('bolTurnStart').innerText != 'N/A'){document.getElementById('bolTurnStart').addEventListener('click', function(){removeDateStamp('bolTurnStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'bolTurnFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = bolDict[anId][7];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('bolTurnFin').appendChild(newTextNode);
                    if(document.getElementById('bolTurnStart').innerText != '-'){document.getElementById('bolTurnFin').addEventListener('click', function(){addDateStamp('bolTurnFin')})};
                    if(document.getElementById('bolTurnFin').innerText != '-' && document.getElementById('bolTurnFin').innerText != 'N/A'){document.getElementById('bolTurnFin').addEventListener('click', function(){removeDateStamp('bolTurnFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'bolSoftStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = bolDict[anId][8];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('bolSoftStart').appendChild(newTextNode);
                    if(document.getElementById('bolTurnFin').innerText != '-'){document.getElementById('bolSoftStart').addEventListener('click', function(){addDateStamp('bolSoftStart')})};
                    if(document.getElementById('bolSoftStart').innerText != '-' && document.getElementById('bolSoftStart').innerText != 'N/A'){document.getElementById('bolSoftStart').addEventListener('click', function(){removeDateStamp('bolSoftStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'bolSoftFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = bolDict[anId][9];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('bolSoftFin').appendChild(newTextNode);
                    if(document.getElementById('bolSoftStart').innerText != '-'){document.getElementById('bolSoftFin').addEventListener('click', function(){addDateStamp('bolSoftFin')})};
                    if(document.getElementById('bolSoftFin').innerText != '-' && document.getElementById('bolSoftFin').innerText != 'N/A'){document.getElementById('bolSoftFin').addEventListener('click', function(){removeDateStamp('bolSoftFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'bolHeatStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = bolDict[anId][10];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('bolHeatStart').appendChild(newTextNode);
                    if(document.getElementById('bolSoftFin').innerText != '-'){document.getElementById('bolHeatStart').addEventListener('click', function(){addDateStamp('bolHeatStart')})};
                    if(document.getElementById('bolHeatStart').innerText != '-' && document.getElementById('bolHeatStart').innerText != 'N/A'){document.getElementById('bolHeatStart').addEventListener('click', function(){removeDateStamp('bolHeatStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'bolHeatFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = bolDict[anId][11];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('bolHeatFin').appendChild(newTextNode);
                    if(document.getElementById('bolHeatStart').innerText != '-'){document.getElementById('bolHeatFin').addEventListener('click', function(){addDateStamp('bolHeatFin')})};
                    if(document.getElementById('bolHeatFin').innerText != '-' && document.getElementById('bolHeatFin').innerText != 'N/A'){document.getElementById('bolHeatFin').addEventListener('click', function(){removeDateStamp('bolHeatFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'bolHardStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    //colString = bolDict[anId][12];
                    colString = 'N/A';
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('bolHardStart').appendChild(newTextNode);
                    //if(document.getElementById('bolHeatFin').innerText != '-'){document.getElementById('bolHardStart').addEventListener('click', function(){addDateStamp('bolHardStart')})};
                    //if(document.getElementById('bolHardStart').innerText != '-' && document.getElementById('bolHardStart').innerText != 'N/A'){document.getElementById('bolHardStart').addEventListener('click', function(){removeDateStamp('bolHardStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'bolHardFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    //colString = bolDict[anId][13];
                    colString = 'N/A';
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('bolHardFin').appendChild(newTextNode);
                    //if(document.getElementById('bolHardStart').innerText != '-'){document.getElementById('bolHardFin').addEventListener('click', function(){addDateStamp('bolHardFin')})};
                    //if(document.getElementById('lipDesignFin').innerText != '-' && document.getElementById('lipDesignFin').innerText != 'N/A'){document.getElementById('lipDesignFin').addEventListener('click', function(){removeDateStamp('lipDesignFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'bolRamStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = 'N/A';
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('bolRamStart').appendChild(newTextNode);
                    // document.getElementById('bolRamStart').addEventListener('click', function(){addDateStamp('bolRamStart')});

                    newCol = document.createElement('div');
                    newCol.id = 'bolRamFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = 'N/A';
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('bolRamFin').appendChild(newTextNode);
                    // document.getElementById('bolRamFin').addEventListener('click', function(){addDateStamp('bolRamFin')});

                    newCol = document.createElement('div');
                    newCol.id = 'bolSectionStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = 'N/A';
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('bolSectionStart').appendChild(newTextNode);  
                    // document.getElementById('bolSectionStart').addEventListener('click', function(){addDateStamp('bolSectionStart')});    

                    newCol = document.createElement('div');
                    newCol.id = 'bolSectionFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = 'N/A';
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('bolSectionFin').appendChild(newTextNode); 
                    // document.getElementById('bolSectionFin').addEventListener('click', function(){addDateStamp('bolSectionFin')});

                    newCol = document.createElement('div');
                    newCol.id = 'bolWireStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = 'N/A';
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('bolWireStart').appendChild(newTextNode); 
                    // document.getElementById('bolWireStart').addEventListener('click', function(){addDateStamp('bolWireStart')});
                    
                    newCol = document.createElement('div');
                    newCol.id = 'bolWireFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = 'N/A';
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('bolWireFin').appendChild(newTextNode);     
                    // document.getElementById('bolWireFin').addEventListener('click', function(){addDateStamp('bolWireFin')});            

                    newCol = document.createElement('div');
                    newCol.id = 'bolFinStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = bolDict[anId][20];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('bolFinStart').appendChild(newTextNode);  
                    if(document.getElementById('bolHardFin').innerText != '-'){document.getElementById('bolFinStart').addEventListener('click', function(){addDateStamp('bolFinStart')})};    
                    if(document.getElementById('bolFinStart').innerText != '-' && document.getElementById('bolFinStart').innerText != 'N/A'){document.getElementById('bolFinStart').addEventListener('click', function(){removeDateStamp('bolFinStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'bolFinFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = bolDict[anId][21];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('bolFinFin').appendChild(newTextNode); 
                    if(document.getElementById('bolFinStart').innerText != '-'){document.getElementById('bolFinFin').addEventListener('click', function(){addDateStamp('bolFinFin')})};
                    if(document.getElementById('bolFinFin').innerText != '-' && document.getElementById('bolFinFin').innerText != 'N/A'){document.getElementById('bolFinFin').addEventListener('click', function(){removeDateStamp('bolFinFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'bolPackStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = bolDict[anId][22];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('bolPackStart').appendChild(newTextNode); 
                    if(document.getElementById('bolFinFin').innerText != '-'){document.getElementById('bolPackStart').addEventListener('click', function(){addDateStamp('bolPackStart')})};
                    if(document.getElementById('bolPackStart').innerText != '-' && document.getElementById('bolPackStart').innerText != 'N/A'){document.getElementById('bolPackStart').addEventListener('click', function(){removeDateStamp('bolPackStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'bolPackFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = bolDict[anId][23];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('bolPackFin').appendChild(newTextNode);  
                    if(document.getElementById('bolPackStart').innerText != '-'){document.getElementById('bolPackFin').addEventListener('click', function(){addDateStamp('bolPackFin')})}; 
                    if(document.getElementById('bolPackFin').innerText != '-' && document.getElementById('bolPackFin').innerText != 'N/A'){document.getElementById('bolPackFin').addEventListener('click', function(){removeDateStamp('bolPackFin')})};

                    nextcolID++;
                }    
                if (infoDict[anId][12] == 1){ // PART.
                    let nextcol = 'row' + nextcolID;
                    // Subheader cols:
                    newCol = document.createElement('div'); // Empty padding Div
                    newCol.id = 'rowHead6';
                    newCol.className = 'rowHead';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = 'PART';
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('rowHead6').appendChild(newTextNode);

                    newCol = document.createElement('div');
                    newCol.id = 'partDesignStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    //console.log(partDict[anId][0]);
                    //console.log('here');
                    colString = String(partDict[anId][0]);
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('partDesignStart').appendChild(newTextNode);
                    document.getElementById('partDesignStart').addEventListener('click', function(){addDateStamp('partDesignStart')});
                    if(document.getElementById('partDesignStart').innerText != '-' && document.getElementById('partDesignStart').innerText != 'N/A'){document.getElementById('partDesignStart').addEventListener('click', function(){removeDateStamp('partDesignStart')})};

                    newCol = document.createElement('div');
                    newCol.id = 'partDesignFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = partDict[anId][1];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('partDesignFin').appendChild(newTextNode);
                    if(document.getElementById('partDesignStart').innerText != '-'){document.getElementById('partDesignFin').addEventListener('click', function(){addDateStamp('partDesignFin')})};
                    if(document.getElementById('partDesignFin').innerText != '-' && document.getElementById('partDesignFin').innerText != 'N/A'){document.getElementById('partDesignFin').addEventListener('click', function(){removeDateStamp('partDesignFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'partModelStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = partDict[anId][2];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('partModelStart').appendChild(newTextNode);
                    if(document.getElementById('partDesignFin').innerText != '-'){document.getElementById('partModelStart').addEventListener('click', function(){addDateStamp('partModelStart')})};
                    //if(document.getElementById('lipDesignFin').innerText != '-' && document.getElementById('lipDesignFin').innerText != 'N/A'){document.getElementById('lipDesignFin').addEventListener('click', function(){removeDateStamp('lipDesignFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'partModelFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = partDict[anId][3];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('partModelFin').appendChild(newTextNode);
                    if(document.getElementById('partModelStart').innerText != '-'){document.getElementById('partModelFin').addEventListener('click', function(){addDateStamp('partModelFin')})};
                    //if(document.getElementById('lipDesignFin').innerText != '-' && document.getElementById('lipDesignFin').innerText != 'N/A'){document.getElementById('lipDesignFin').addEventListener('click', function(){removeDateStamp('lipDesignFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'partProgStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = partDict[anId][4];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('partProgStart').appendChild(newTextNode);
                    if(document.getElementById('partModelFin').innerText != '-'){document.getElementById('partProgStart').addEventListener('click', function(){addDateStamp('partProgStart')})};
                    //if(document.getElementById('lipDesignFin').innerText != '-' && document.getElementById('lipDesignFin').innerText != 'N/A'){document.getElementById('lipDesignFin').addEventListener('click', function(){removeDateStamp('lipDesignFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'partProgFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = partDict[anId][5];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('partProgFin').appendChild(newTextNode);
                    if(document.getElementById('partProgStart').innerText != '-'){document.getElementById('partProgFin').addEventListener('click', function(){addDateStamp('partProgFin')})};
                    //if(document.getElementById('lipDesignFin').innerText != '-' && document.getElementById('lipDesignFin').innerText != 'N/A'){document.getElementById('lipDesignFin').addEventListener('click', function(){removeDateStamp('lipDesignFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'partTurnStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = partDict[anId][6];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('partTurnStart').appendChild(newTextNode);
                    if(document.getElementById('partProgFin').innerText != '-'){document.getElementById('partTurnStart').addEventListener('click', function(){addDateStamp('partTurnStart')})};
                    //if(document.getElementById('lipDesignFin').innerText != '-' && document.getElementById('lipDesignFin').innerText != 'N/A'){document.getElementById('lipDesignFin').addEventListener('click', function(){removeDateStamp('lipDesignFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'partTurnFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = partDict[anId][7];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('partTurnFin').appendChild(newTextNode);
                    if(document.getElementById('partTurnStart').innerText != '-'){document.getElementById('partTurnFin').addEventListener('click', function(){addDateStamp('partTurnFin')})};
                    //if(document.getElementById('lipDesignFin').innerText != '-' && document.getElementById('lipDesignFin').innerText != 'N/A'){document.getElementById('lipDesignFin').addEventListener('click', function(){removeDateStamp('lipDesignFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'partSoftStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = partDict[anId][8];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('partSoftStart').appendChild(newTextNode);
                    if(document.getElementById('partTurnFin').innerText != '-'){document.getElementById('partSoftStart').addEventListener('click', function(){addDateStamp('partSoftStart')})};
                    //if(document.getElementById('lipDesignFin').innerText != '-' && document.getElementById('lipDesignFin').innerText != 'N/A'){document.getElementById('lipDesignFin').addEventListener('click', function(){removeDateStamp('lipDesignFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'partSoftFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = partDict[anId][9];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('partSoftFin').appendChild(newTextNode);
                    if(document.getElementById('partSoftStart').innerText != '-'){document.getElementById('partSoftFin').addEventListener('click', function(){addDateStamp('partSoftFin')})};
                    //if(document.getElementById('lipDesignFin').innerText != '-' && document.getElementById('lipDesignFin').innerText != 'N/A'){document.getElementById('lipDesignFin').addEventListener('click', function(){removeDateStamp('lipDesignFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'partHeatStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = partDict[anId][10];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('partHeatStart').appendChild(newTextNode);
                    if(document.getElementById('partSoftFin').innerText != '-'){document.getElementById('partHeatStart').addEventListener('click', function(){addDateStamp('partHeatStart')})};
                    //if(document.getElementById('lipDesignFin').innerText != '-' && document.getElementById('lipDesignFin').innerText != 'N/A'){document.getElementById('lipDesignFin').addEventListener('click', function(){removeDateStamp('lipDesignFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'partHeatFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = partDict[anId][11];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('partHeatFin').appendChild(newTextNode);
                    if(document.getElementById('partHeatStart').innerText != '-'){document.getElementById('partHeatFin').addEventListener('click', function(){addDateStamp('partHeatFin')})};
                    //if(document.getElementById('lipDesignFin').innerText != '-' && document.getElementById('lipDesignFin').innerText != 'N/A'){document.getElementById('lipDesignFin').addEventListener('click', function(){removeDateStamp('lipDesignFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'partHardStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = partDict[anId][12];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('partHardStart').appendChild(newTextNode);
                    if(document.getElementById('partHeatFin').innerText != '-'){document.getElementById('partHardStart').addEventListener('click', function(){addDateStamp('partHardStart')})};
                    //if(document.getElementById('lipDesignFin').innerText != '-' && document.getElementById('lipDesignFin').innerText != 'N/A'){document.getElementById('lipDesignFin').addEventListener('click', function(){removeDateStamp('lipDesignFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'partHardFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = partDict[anId][13];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('partHardFin').appendChild(newTextNode);
                    if(document.getElementById('partHardStart').innerText != '-'){document.getElementById('partHardFin').addEventListener('click', function(){addDateStamp('partHardFin')})};
                    //if(document.getElementById('lipDesignFin').innerText != '-' && document.getElementById('lipDesignFin').innerText != 'N/A'){document.getElementById('lipDesignFin').addEventListener('click', function(){removeDateStamp('lipDesignFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'partRamStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = 'N/A';
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('partRamStart').appendChild(newTextNode);
                    // document.getElementById('lipRamStart').addEventListener('click', function(){addDateStamp('lipRamStart')});

                    newCol = document.createElement('div');
                    newCol.id = 'partRamFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = 'N/A';
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('partRamFin').appendChild(newTextNode);
                    // document.getElementById('lipRamFin').addEventListener('click', function(){addDateStamp('lipRamFin')});

                    newCol = document.createElement('div');
                    newCol.id = 'partSectionStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = 'N/A';
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('partSectionStart').appendChild(newTextNode);  
                    // document.getElementById('lipSectionStart').addEventListener('click', function(){addDateStamp('lipSectionStart')});    

                    newCol = document.createElement('div');
                    newCol.id = 'partSectionFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = 'N/A';
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('partSectionFin').appendChild(newTextNode); 
                    // document.getElementById('lipSectionFin').addEventListener('click', function(){addDateStamp('lipSectionFin')});

                    newCol = document.createElement('div');
                    newCol.id = 'partWireStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = 'N/A';
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('partWireStart').appendChild(newTextNode); 
                    //if(document.getElementById('lipHardFin').innerText != '-'){document.getElementById('lipWireStart').addEventListener('click', function(){addDateStamp('lipWireStart')})};
                    
                    newCol = document.createElement('div');
                    newCol.id = 'partWireFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = 'N/A';
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('partWireFin').appendChild(newTextNode);     
                    // document.getElementById('lipWireFin').addEventListener('click', function(){addDateStamp('lipWireFin')});            

                    newCol = document.createElement('div');
                    newCol.id = 'partFinStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = partDict[anId][20];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('partFinStart').appendChild(newTextNode);  
                    if(document.getElementById('partHardFin').innerText != '-'){document.getElementById('partFinStart').addEventListener('click', function(){addDateStamp('partFinStart')})};    
                    //if(document.getElementById('lipDesignFin').innerText != '-' && document.getElementById('lipDesignFin').innerText != 'N/A'){document.getElementById('lipDesignFin').addEventListener('click', function(){removeDateStamp('lipDesignFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'partFinFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = partDict[anId][21];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('partFinFin').appendChild(newTextNode); 
                    if(document.getElementById('partFinStart').innerText != '-'){document.getElementById('partFinFin').addEventListener('click', function(){addDateStamp('partFinFin')})};
                    //if(document.getElementById('lipDesignFin').innerText != '-' && document.getElementById('lipDesignFin').innerText != 'N/A'){document.getElementById('lipDesignFin').addEventListener('click', function(){removeDateStamp('lipDesignFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'partPackStart';
                    newCol.className = 'progCheckLight';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = partDict[anId][22];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('partPackStart').appendChild(newTextNode); 
                    if(document.getElementById('partFinFin').innerText != '-'){document.getElementById('partPackStart').addEventListener('click', function(){addDateStamp('partPackStart')})};
                    //if(document.getElementById('lipDesignFin').innerText != '-' && document.getElementById('lipDesignFin').innerText != 'N/A'){document.getElementById('lipDesignFin').addEventListener('click', function(){removeDateStamp('lipDesignFin')})};

                    newCol = document.createElement('div');
                    newCol.id = 'partPackFin';
                    newCol.className = 'progCheck';
                    document.getElementById(nextcol).appendChild(newCol);
                    colString = partDict[anId][23];
                    newTextNode = document.createTextNode(colString);
                    document.getElementById('partPackFin').appendChild(newTextNode);  
                    if(document.getElementById('partPackStart').innerText != '-'){document.getElementById('partPackFin').addEventListener('click', function(){addDateStamp('partPackFin')})}; 
                    //if(document.getElementById('lipDesignFin').innerText != '-' && document.getElementById('lipDesignFin').innerText != 'N/A'){document.getElementById('lipDesignFin').addEventListener('click', function(){removeDateStamp('lipDesignFin')})};

                    nextcolID++;
                }
                
    if(infoDict[currentWo][11] != null){
        let scrapNote = document.createElement('p');
        scrapNote.appendChild(document.createTextNode(infoDict[currentWo][11]));
        document.getElementById('content-container').appendChild(scrapNote);
    }

    // Create container for buttons
    let new_div = document.createElement('div');
    let newClass ='progressUpdateButtonsContainer';
    new_div.className = newClass;
    new_div.id = 'progressUpdateButtonsContainer';
    document.getElementById('content-container').appendChild(new_div);   
    
    // Create a buttons and event listners
    // let saveButton = document.createElement('button');

    let nabr = document.createElement('br');
    //document.getElementById('addComponentContainer').appendChild(nabr.cloneNode());

    if(infoDict[currentWo][5] == 1 && document.getElementById('lipDesignFin').innerText != '-' && document.getElementById('lipProgStart').innerText === '-' && (document.getElementById('lipModelFin').innerText === '-')){
        //create buttons to N/A Lip
        let NAlipButton = document.createElement('button');
        NAlipButton.appendChild(document.createTextNode('Lip - no model req.'));
        NAlipButton.addEventListener('click', function(){NAlip()});
        document.getElementById('content-container').appendChild(NAlipButton);
        //let nabr = document.createElement('br');
        document.getElementById('content-container').appendChild(nabr.cloneNode());

        function NAlip (){
            //mark lip model start and model finish as 'N/A'

            //Remove current contents of the sign-off boxes
            const startSignOffBox = document.getElementById('lipModelStart');
            while(startSignOffBox.firstChild) startSignOffBox.removeChild(startSignOffBox.firstChild);
            const finSignOffBox = document.getElementById('lipModelFin');
            while(finSignOffBox.firstChild) finSignOffBox.removeChild(finSignOffBox.firstChild);
    
            //Add new content to sign-off boxes
            let noApp = "N/A";
            let newTextNode = document.createTextNode(noApp);
            document.getElementById('lipModelStart').appendChild(newTextNode);
            let noApp2 = "N/A";
            let newTextNode2 = document.createTextNode(noApp2);
            document.getElementById('lipModelFin').appendChild(newTextNode2);
        }
    }

    if(infoDict[currentWo][6] == 1 && document.getElementById('mandDesignFin').innerText != '-' && document.getElementById('mandProgStart').innerText === '-' && (document.getElementById('mandModelFin').innerText === '-')){
        //create buttons to N/A mand
        let NAmandButton = document.createElement('button');
        NAmandButton.appendChild(document.createTextNode('Mand - No Model Req.'));
        NAmandButton.addEventListener('click', function(){NAmand()});
        document.getElementById('content-container').appendChild(NAmandButton);
        //let nabr = document.createElement('br')
        document.getElementById('content-container').appendChild(nabr.cloneNode());

        function NAmand (){
            //mark mandrel model start and model finish as 'N/A'

            //Remove current contents of the sign-off boxes
            const startSignOffBox = document.getElementById('mandModelStart');
            while(startSignOffBox.firstChild) startSignOffBox.removeChild(startSignOffBox.firstChild);
            const finSignOffBox = document.getElementById('mandModelFin');
            while(finSignOffBox.firstChild) finSignOffBox.removeChild(finSignOffBox.firstChild);
    
            //Add new content to sign-off boxes
            let noApp = "N/A";
            let newTextNode = document.createTextNode(noApp);
            document.getElementById('mandModelStart').appendChild(newTextNode);
            let noApp2 = "N/A";
            let newTextNode2 = document.createTextNode(noApp2);
            document.getElementById('mandModelFin').appendChild(newTextNode2);
        }
    }

    if(infoDict[currentWo][7] == 1 && document.getElementById('dieDesignFin').innerText != '-' && document.getElementById('dieProgStart').innerText === '-' && (document.getElementById('dieModelFin').innerText === '-')){
        //create buttons to N/A die
        let NAdieButton = document.createElement('button');
        NAdieButton.appendChild(document.createTextNode('Die - No Model Req.'));
        NAdieButton.addEventListener('click', function(){NAdie()});
        document.getElementById('content-container').appendChild(NAdieButton);
        //let nabr = document.createElement('br')
        document.getElementById('content-container').appendChild(nabr.cloneNode());

        function NAdie (){
            //mark Die model start and model finish as 'N/A'

            //Remove current contents of the sign-off boxes
            const startSignOffBox = document.getElementById('dieModelStart');
            while(startSignOffBox.firstChild) startSignOffBox.removeChild(startSignOffBox.firstChild);
            const finSignOffBox = document.getElementById('dieModelFin');
            while(finSignOffBox.firstChild) finSignOffBox.removeChild(finSignOffBox.firstChild);
    
            //Add new content to sign-off boxes
            let noApp = "N/A";
            let newTextNode = document.createTextNode(noApp);
            document.getElementById('dieModelStart').appendChild(newTextNode);
            let noApp2 = "N/A";
            let newTextNode2 = document.createTextNode(noApp2);
            document.getElementById('dieModelFin').appendChild(newTextNode2);
        }
    }

    if(infoDict[currentWo][8] == 1 && document.getElementById('backDesignFin').innerText != '-' && document.getElementById('backProgStart').innerText === '-' && (document.getElementById('backModelFin').innerText === '-')){
        //create buttons to N/A backer
        let NAbackButton = document.createElement('button');
        NAbackButton.appendChild(document.createTextNode('Backer - No Model Req.'));
        NAbackButton.addEventListener('click', function(){NAback()});
        document.getElementById('content-container').appendChild(NAbackButton);
        //let nabr = document.createElement('br')
        document.getElementById('content-container').appendChild(nabr.cloneNode());

        function NAback (){
            //mark backer model start and model finish as 'N/A'

            //Remove current contents of the sign-off boxes
            const startSignOffBox = document.getElementById('backModelStart');
            while(startSignOffBox.firstChild) startSignOffBox.removeChild(startSignOffBox.firstChild);
            const finSignOffBox = document.getElementById('backModelFin');
            while(finSignOffBox.firstChild) finSignOffBox.removeChild(finSignOffBox.firstChild);
    
            //Add new content to sign-off boxes
            let noApp = "N/A";
            let newTextNode = document.createTextNode(noApp);
            document.getElementById('backModelStart').appendChild(newTextNode);
            let noApp2 = "N/A";
            let newTextNode2 = document.createTextNode(noApp2);
            document.getElementById('backModelFin').appendChild(newTextNode2);
        }
    }

    if(infoDict[currentWo][9] == 1 && document.getElementById('bolDesignFin').innerText != '-' && document.getElementById('bolProgStart').innerText === '-' && (document.getElementById('bolModelFin').innerText === '-')){
        //create buttons to N/A bolster
        let NAbolButton = document.createElement('button');
        NAbolButton.appendChild(document.createTextNode('Bolster - No Model Req.'));
        NAbolButton.addEventListener('click', function(){NAbol()});
        document.getElementById('content-container').appendChild(NAbolButton);
        //let nabr = document.createElement('br')
        document.getElementById('content-container').appendChild(nabr.cloneNode());

        function NAbol (){
            //mark bolster model start and model finish as 'N/A'

            //Remove current contents of the sign-off boxes
            const startSignOffBox = document.getElementById('bolModelStart');
            while(startSignOffBox.firstChild) startSignOffBox.removeChild(startSignOffBox.firstChild);
            const finSignOffBox = document.getElementById('bolModelFin');
            while(finSignOffBox.firstChild) finSignOffBox.removeChild(finSignOffBox.firstChild);
    
            //Add new content to sign-off boxes
            let noApp = "N/A";
            let newTextNode = document.createTextNode(noApp);
            document.getElementById('bolModelStart').appendChild(newTextNode);
            let noApp2 = "N/A";
            let newTextNode2 = document.createTextNode(noApp2);
            document.getElementById('bolModelFin').appendChild(newTextNode2);
        }
    }


    document.getElementById('content-container').appendChild(nabr.cloneNode());


    if(infoDict[currentWo][7] == 1 && document.getElementById('dieModelFin').innerText != '-' && document.getElementById('dieTurnStart').innerText === '-'){
        //create buttons to mill die section
        let NADieMillButton = document.createElement('button');
        NADieMillButton.appendChild(document.createTextNode('Die - Mill section finish'));
        NADieMillButton.addEventListener('click', function(){NADieMill()});
        document.getElementById('content-container').appendChild(NADieMillButton);
        //let nabr = document.createElement('br');
        document.getElementById('content-container').appendChild(nabr.cloneNode());

        function NADieMill (){
            //mark lip model start and model finish as 'N/A'

            //Remove current contents of the sign-off boxes
            const startSignOffBox = document.getElementById('dieSectionStart');
            while(startSignOffBox.firstChild) startSignOffBox.removeChild(startSignOffBox.firstChild);
            const finSignOffBox = document.getElementById('dieSectionFin');
            while(finSignOffBox.firstChild) finSignOffBox.removeChild(finSignOffBox.firstChild);
    
            //Add new content to sign-off boxes
            let noApp = "-";
            let newTextNode = document.createTextNode(noApp);
            document.getElementById('dieSectionStart').appendChild(newTextNode);
            let noApp2 = "-";
            let newTextNode2 = document.createTextNode(noApp2);
            document.getElementById('dieSectionFin').appendChild(newTextNode2);
        }
    }

    if(infoDict[currentWo][6] == 1 && document.getElementById('mandModelFin').innerText != '-' && document.getElementById('mandTurnStart').innerText === '-'){
        //create buttons to mill mand section
        let NAmandMillButton = document.createElement('button');
        NAmandMillButton.appendChild(document.createTextNode('Mand - Mill section finish'));
        NAmandMillButton.addEventListener('click', function(){NAmandMill()});
        document.getElementById('content-container').appendChild(NAmandMillButton);
        //let nabr = document.createElement('br')
        document.getElementById('content-container').appendChild(nabr.cloneNode());

        function NAmandMill (){
            //mark mandrel model start and model finish as 'N/A'

            //Remove current contents of the sign-off boxes
            const startSignOffBox = document.getElementById('mandSectionStart');
            while(startSignOffBox.firstChild) startSignOffBox.removeChild(startSignOffBox.firstChild);
            const finSignOffBox = document.getElementById('mandSectionFin');
            while(finSignOffBox.firstChild) finSignOffBox.removeChild(finSignOffBox.firstChild);
    
            //Add new content to sign-off boxes
            let noApp = "-";
            let newTextNode = document.createTextNode(noApp);
            document.getElementById('mandSectionStart').appendChild(newTextNode);
            let noApp2 = "-";
            let newTextNode2 = document.createTextNode(noApp2);
            document.getElementById('mandSectionFin').appendChild(newTextNode2);
        }
    }

    if(infoDict[currentWo][5] == 1 && document.getElementById('lipModelFin').innerText != '-' && document.getElementById('lipTurnStart').innerText === '-'){
        //create buttons to disable lip hard
        let NALipMillButton = document.createElement('button');
        NALipMillButton.appendChild(document.createTextNode('Lip - Hard Machine - N/A'));
        NALipMillButton.addEventListener('click', function(){NALipMill()});
        document.getElementById('content-container').appendChild(NALipMillButton);
        //let nabr = document.createElement('br')
        document.getElementById('content-container').appendChild(nabr.cloneNode());

        function NALipMill (){
            //mark Lip model hard start and finish as 'N/A'

            //Remove current contents of the sign-off boxes
            const startSignOffBox = document.getElementById('lipHardStart');
            while(startSignOffBox.firstChild) startSignOffBox.removeChild(startSignOffBox.firstChild);
            const finSignOffBox = document.getElementById('lipHardFin');
            while(finSignOffBox.firstChild) finSignOffBox.removeChild(finSignOffBox.firstChild);
    
            //Add new content to sign-off boxes
            let noApp = "N/A";
            let newTextNode = document.createTextNode(noApp);
            document.getElementById('lipHardStart').appendChild(newTextNode);
            let noApp2 = "N/A";
            let newTextNode2 = document.createTextNode(noApp2);
            document.getElementById('lipHardFin').appendChild(newTextNode2);
        }
    }

    document.getElementById('content-container').appendChild(nabr.cloneNode());

    if(infoDict[currentWo][6] == 1 && document.getElementById('mandModelFin').innerText != '-' && document.getElementById('mandTurnStart').innerText === '-' && document.getElementById('mandRamFin').innerText != "N/A"){
        //create buttons to N/A mand spark
        let NAmandSparkButton = document.createElement('button');
        NAmandSparkButton.appendChild(document.createTextNode('Mand - No Ramspark Req.'));
        NAmandSparkButton.addEventListener('click', function(){NAmandSpark()});
        document.getElementById('content-container').appendChild(NAmandSparkButton);
        //let nabr = document.createElement('br')
        document.getElementById('content-container').appendChild(nabr.cloneNode());

        function NAmandSpark (){
            //mark mandrel model start and model finish as 'N/A'

            //Remove current contents of the sign-off boxes
            const startSignOffBox = document.getElementById('mandRamStart');
            while(startSignOffBox.firstChild) startSignOffBox.removeChild(startSignOffBox.firstChild);
            const finSignOffBox = document.getElementById('mandRamFin');
            while(finSignOffBox.firstChild) finSignOffBox.removeChild(finSignOffBox.firstChild);
    
            //Add new content to sign-off boxes
            let noApp = "N/A";
            let newTextNode = document.createTextNode(noApp);
            document.getElementById('mandRamStart').appendChild(newTextNode);
            let noApp2 = "N/A";
            let newTextNode2 = document.createTextNode(noApp2);
            document.getElementById('mandRamFin').appendChild(newTextNode2);
        }
    }

    document.getElementById('content-container').appendChild(nabr.cloneNode());

    let discardButton = document.createElement('button');
    let exitButton = document.createElement('button');
    // saveButton.appendChild(document.createTextNode('Save changes'));
    discardButton.appendChild(document.createTextNode('Discard Changes'));
    exitButton.appendChild(document.createTextNode('Save & Exit'));
    // saveButton.addEventListener('click', function(){saveTableValues()});
    discardButton.addEventListener('click', function(){discardTableValues()});
    exitButton.addEventListener('click', function(){saveTableValues()});
    // exitButton.addEventListener('click', function(){insertAllElements()});
    // document.getElementById('content-container').appendChild(saveButton);    
    document.getElementById('content-container').appendChild(discardButton);
    document.getElementById('content-container').appendChild(exitButton);
}

function saveTableValues(){

    //demo();

    const showAll = document.getElementById('populate');   
    showAll.disabled = false;

    const showFlat = document.getElementById('flat');   
    showFlat.disabled = false;

    const showHollow = document.getElementById('hollow');   
    showHollow.disabled = false;

    const showOngoing = document.getElementById('ongoing');   
    showOngoing.disabled = false;

    const showComplete = document.getElementById('complete');   
    showComplete.disabled = false;

    const showSearch = document.getElementById('search');   
    showSearch.disabled = false;

    [].forEach.call(document.querySelectorAll('.nav-bar'), function (el) {
        el.style.visibility = 'visible';
      });

    let noOfComponents = 0;
    let noOfComplete = 0;

        if(infoDict[currentWo][12] == 1){
        noOfComponents++;
        partDict[currentWo][0] = String(document.getElementById('partDesignStart').innerText);
        partDict[currentWo][1] = document.getElementById('partDesignFin').innerText;
        partDict[currentWo][2] = document.getElementById('partModelStart').innerText;
        partDict[currentWo][3] = document.getElementById('partModelFin').innerText;
        partDict[currentWo][4] = document.getElementById('partProgStart').innerText;
        partDict[currentWo][5] = document.getElementById('partProgFin').innerText;
        partDict[currentWo][6] = document.getElementById('partTurnStart').innerText;
        partDict[currentWo][7] = document.getElementById('partTurnFin').innerText;
        partDict[currentWo][8] = document.getElementById('partSoftStart').innerText;
        partDict[currentWo][9] = document.getElementById('partSoftFin').innerText;
        partDict[currentWo][10] = document.getElementById('partHeatStart').innerText;
        partDict[currentWo][11] = document.getElementById('partHeatFin').innerText;
        partDict[currentWo][12] = document.getElementById('partHardStart').innerText;
        partDict[currentWo][13] = document.getElementById('partHardFin').innerText;
        partDict[currentWo][14] = document.getElementById('partRamStart').innerText;
        partDict[currentWo][15] = document.getElementById('partRamFin').innerText;
        partDict[currentWo][16] = document.getElementById('partSectionStart').innerText;
        partDict[currentWo][17] = document.getElementById('partSectionFin').innerText;
        partDict[currentWo][18] = document.getElementById('partWireStart').innerText;
        partDict[currentWo][19] = document.getElementById('partWireFin').innerText;
        partDict[currentWo][20] = document.getElementById('partFinStart').innerText;
        partDict[currentWo][21] = document.getElementById('partFinFin').innerText;
        partDict[currentWo][22] = document.getElementById('partPackStart').innerText;
        partDict[currentWo][23] = document.getElementById('partPackFin').innerText;
        if (partDict[currentWo][23] != '-'){
            noOfComplete++;
        }
    }

    if(infoDict[currentWo][5] == 1){
        noOfComponents++;
        lipDict[currentWo][0] = String(document.getElementById('lipDesignStart').innerText);
        lipDict[currentWo][1] = document.getElementById('lipDesignFin').innerText;
        lipDict[currentWo][2] = document.getElementById('lipModelStart').innerText;
        lipDict[currentWo][3] = document.getElementById('lipModelFin').innerText;
        lipDict[currentWo][4] = document.getElementById('lipProgStart').innerText;
        lipDict[currentWo][5] = document.getElementById('lipProgFin').innerText;
        lipDict[currentWo][6] = document.getElementById('lipTurnStart').innerText;
        lipDict[currentWo][7] = document.getElementById('lipTurnFin').innerText;
        lipDict[currentWo][8] = document.getElementById('lipSoftStart').innerText;
        lipDict[currentWo][9] = document.getElementById('lipSoftFin').innerText;
        lipDict[currentWo][10] = document.getElementById('lipHeatStart').innerText;
        lipDict[currentWo][11] = document.getElementById('lipHeatFin').innerText;
        lipDict[currentWo][12] = document.getElementById('lipHardStart').innerText;
        lipDict[currentWo][13] = document.getElementById('lipHardFin').innerText;
        lipDict[currentWo][14] = document.getElementById('lipRamStart').innerText;
        lipDict[currentWo][15] = document.getElementById('lipRamFin').innerText;
        lipDict[currentWo][16] = document.getElementById('lipSectionStart').innerText;
        lipDict[currentWo][17] = document.getElementById('lipSectionFin').innerText;
        lipDict[currentWo][18] = document.getElementById('lipWireStart').innerText;
        lipDict[currentWo][19] = document.getElementById('lipWireFin').innerText;
        lipDict[currentWo][20] = document.getElementById('lipFinStart').innerText;
        lipDict[currentWo][21] = document.getElementById('lipFinFin').innerText;
        lipDict[currentWo][22] = document.getElementById('lipPackStart').innerText;
        lipDict[currentWo][23] = document.getElementById('lipPackFin').innerText;
        if (lipDict[currentWo][23] != '-'){
            noOfComplete++;
        }
    }

    if(infoDict[currentWo][6] == 1){
        noOfComponents++;
        mandDict[currentWo][0] = document.getElementById('mandDesignStart').innerText;
        mandDict[currentWo][1] = document.getElementById('mandDesignFin').innerText;
        mandDict[currentWo][2] = document.getElementById('mandModelStart').innerText;
        mandDict[currentWo][3] = document.getElementById('mandModelFin').innerText;
        mandDict[currentWo][4] = document.getElementById('mandProgStart').innerText;
        mandDict[currentWo][5] = document.getElementById('mandProgFin').innerText;
        mandDict[currentWo][6] = document.getElementById('mandTurnStart').innerText;
        mandDict[currentWo][7] = document.getElementById('mandTurnFin').innerText;
        mandDict[currentWo][8] = document.getElementById('mandSoftStart').innerText;
        mandDict[currentWo][9] = document.getElementById('mandSoftFin').innerText;
        mandDict[currentWo][10] = document.getElementById('mandHeatStart').innerText;
        mandDict[currentWo][11] = document.getElementById('mandHeatFin').innerText;
        mandDict[currentWo][12] = document.getElementById('mandHardStart').innerText;
        mandDict[currentWo][13] = document.getElementById('mandHardFin').innerText;
        mandDict[currentWo][14] = document.getElementById('mandRamStart').innerText;
        mandDict[currentWo][15] = document.getElementById('mandRamFin').innerText;
        mandDict[currentWo][16] = document.getElementById('mandSectionStart').innerText;
        mandDict[currentWo][17] = document.getElementById('mandSectionFin').innerText;
        mandDict[currentWo][18] = document.getElementById('mandWireStart').innerText;
        mandDict[currentWo][19] = document.getElementById('mandWireFin').innerText;
        mandDict[currentWo][20] = document.getElementById('mandFinStart').innerText;
        mandDict[currentWo][21] = document.getElementById('mandFinFin').innerText;
        mandDict[currentWo][22] = document.getElementById('mandPackStart').innerText;
        mandDict[currentWo][23] = document.getElementById('mandPackFin').innerText;
        if (mandDict[currentWo][23] != '-'){
            noOfComplete++;
        }
    }

    if(infoDict[currentWo][7] == 1){
        noOfComponents++;
        dieDict[currentWo][0] = document.getElementById('dieDesignStart').innerText;
        dieDict[currentWo][1] = document.getElementById('dieDesignFin').innerText;
        dieDict[currentWo][2] = document.getElementById('dieModelStart').innerText;
        dieDict[currentWo][3] = document.getElementById('dieModelFin').innerText;
        dieDict[currentWo][4] = document.getElementById('dieProgStart').innerText;
        dieDict[currentWo][5] = document.getElementById('dieProgFin').innerText;
        dieDict[currentWo][6] = document.getElementById('dieTurnStart').innerText;
        dieDict[currentWo][7] = document.getElementById('dieTurnFin').innerText;
        dieDict[currentWo][8] = document.getElementById('dieSoftStart').innerText;
        dieDict[currentWo][9] = document.getElementById('dieSoftFin').innerText;
        dieDict[currentWo][10] = document.getElementById('dieHeatStart').innerText;
        dieDict[currentWo][11] = document.getElementById('dieHeatFin').innerText;
        dieDict[currentWo][12] = document.getElementById('dieHardStart').innerText;
        dieDict[currentWo][13] = document.getElementById('dieHardFin').innerText;
        dieDict[currentWo][14] = document.getElementById('dieRamStart').innerText;
        dieDict[currentWo][15] = document.getElementById('dieRamFin').innerText;
        dieDict[currentWo][16] = document.getElementById('dieSectionStart').innerText;
        dieDict[currentWo][17] = document.getElementById('dieSectionFin').innerText;
        dieDict[currentWo][18] = document.getElementById('dieWireStart').innerText;
        dieDict[currentWo][19] = document.getElementById('dieWireFin').innerText;
        dieDict[currentWo][20] = document.getElementById('dieFinStart').innerText;
        dieDict[currentWo][21] = document.getElementById('dieFinFin').innerText;
        dieDict[currentWo][22] = document.getElementById('diePackStart').innerText;
        dieDict[currentWo][23] = document.getElementById('diePackFin').innerText;
        if (dieDict[currentWo][23] != '-'){
            noOfComplete++;
        }
    }

    if(infoDict[currentWo][8] == 1){
        noOfComponents++;
        backerDict[currentWo][0] = document.getElementById('backDesignStart').innerText;
        backerDict[currentWo][1] = document.getElementById('backDesignFin').innerText;
        backerDict[currentWo][2] = document.getElementById('backModelStart').innerText;
        backerDict[currentWo][3] = document.getElementById('backModelFin').innerText;
        backerDict[currentWo][4] = document.getElementById('backProgStart').innerText;
        backerDict[currentWo][5] = document.getElementById('backProgFin').innerText;
        backerDict[currentWo][6] = document.getElementById('backTurnStart').innerText;
        backerDict[currentWo][7] = document.getElementById('backTurnFin').innerText;
        backerDict[currentWo][8] = document.getElementById('backSoftStart').innerText;
        backerDict[currentWo][9] = document.getElementById('backSoftFin').innerText;
        backerDict[currentWo][10] = document.getElementById('backHeatStart').innerText;
        backerDict[currentWo][11] = document.getElementById('backHeatFin').innerText;
        backerDict[currentWo][12] = document.getElementById('backHardStart').innerText;
        backerDict[currentWo][13] = document.getElementById('backHardFin').innerText;
        backerDict[currentWo][14] = document.getElementById('backRamStart').innerText;
        backerDict[currentWo][15] = document.getElementById('backRamFin').innerText;
        backerDict[currentWo][16] = document.getElementById('backSectionStart').innerText;
        backerDict[currentWo][17] = document.getElementById('backSectionFin').innerText;
        backerDict[currentWo][18] = document.getElementById('backWireStart').innerText;
        backerDict[currentWo][19] = document.getElementById('backWireFin').innerText;
        backerDict[currentWo][20] = document.getElementById('backFinStart').innerText;
        backerDict[currentWo][21] = document.getElementById('backFinFin').innerText;
        backerDict[currentWo][22] = document.getElementById('backPackStart').innerText;
        backerDict[currentWo][23] = document.getElementById('backPackFin').innerText;
        if (backerDict[currentWo][23] != '-'){
            noOfComplete++;
        }
    }

    if(infoDict[currentWo][9] == 1){
        noOfComponents++;
        bolDict[currentWo][0] = document.getElementById('bolDesignStart').innerText;
        bolDict[currentWo][1] = document.getElementById('bolDesignFin').innerText;
        bolDict[currentWo][2] = document.getElementById('bolModelStart').innerText;
        bolDict[currentWo][3] = document.getElementById('bolModelFin').innerText;
        bolDict[currentWo][4] = document.getElementById('bolProgStart').innerText;
        bolDict[currentWo][5] = document.getElementById('bolProgFin').innerText;
        bolDict[currentWo][6] = document.getElementById('bolTurnStart').innerText;
        bolDict[currentWo][7] = document.getElementById('bolTurnFin').innerText;
        bolDict[currentWo][8] = document.getElementById('bolSoftStart').innerText;
        bolDict[currentWo][9] = document.getElementById('bolSoftFin').innerText;
        bolDict[currentWo][10] = document.getElementById('bolHeatStart').innerText;
        bolDict[currentWo][11] = document.getElementById('bolHeatFin').innerText;
        bolDict[currentWo][12] = document.getElementById('bolHardStart').innerText;
        bolDict[currentWo][13] = document.getElementById('bolHardFin').innerText;
        bolDict[currentWo][14] = document.getElementById('bolRamStart').innerText;
        bolDict[currentWo][15] = document.getElementById('bolRamFin').innerText;
        bolDict[currentWo][16] = document.getElementById('bolSectionStart').innerText;
        bolDict[currentWo][17] = document.getElementById('bolSectionFin').innerText;
        bolDict[currentWo][18] = document.getElementById('bolWireStart').innerText;
        bolDict[currentWo][19] = document.getElementById('bolWireFin').innerText;
        bolDict[currentWo][20] = document.getElementById('bolFinStart').innerText;
        bolDict[currentWo][21] = document.getElementById('bolFinFin').innerText;
        bolDict[currentWo][22] = document.getElementById('bolPackStart').innerText;
        bolDict[currentWo][23] = document.getElementById('bolPackFin').innerText;
        if (bolDict[currentWo][23] != '-'){
            noOfComplete++;
        }
    }

    partString = 'DesignStart='  + partDict[currentWo][0] +
                '&DesignFin='  + partDict[currentWo][1] +
                '&ModelStart='  + partDict[currentWo][2] +
                '&ModelFin='  + partDict[currentWo][3] +
                '&ProgStart='  + partDict[currentWo][4] +
                '&ProgFin='  + partDict[currentWo][5] +
                '&TurnStart='  + partDict[currentWo][6] + 
                '&TurnFin=' + partDict[currentWo][7] + 
                '&SoftStart='+ partDict[currentWo][8] + 
                '&SoftFin=' + partDict[currentWo][9] + 
                '&HeatStart=' + partDict[currentWo][10] + 
                '&HeatFin=' + partDict[currentWo][11] + 
                '&HardStart=' + partDict[currentWo][12] + 
                '&HardFin=' + partDict[currentWo][13] + 
                '&RamStart=' + partDict[currentWo][14] +
                '&RamFin=' + partDict[currentWo][15] +
                '&SectionStart=' + partDict[currentWo][16] +
                '&SectionFin=' + partDict[currentWo][17] +
                '&WireStart=' + partDict[currentWo][18] +
                '&WireFin=' + partDict[currentWo][19] +
                '&FinStart=' + partDict[currentWo][20] +
                '&FinFin=' + partDict[currentWo][21] +
                '&PackStart=' + partDict[currentWo][22] +
                '&PackFin=' + partDict[currentWo][23] +
                '&workOrder=' + currentWo;

    lipString = 'DesignStart='  + lipDict[currentWo][0] +
                '&DesignFin='  + lipDict[currentWo][1] +
                '&ModelStart='  + lipDict[currentWo][2] +
                '&ModelFin='  + lipDict[currentWo][3] +
                '&ProgStart='  + lipDict[currentWo][4] +
                '&ProgFin='  + lipDict[currentWo][5] +
                '&TurnStart='  + lipDict[currentWo][6] + 
                '&TurnFin=' + lipDict[currentWo][7] + 
                '&SoftStart='+ lipDict[currentWo][8] + 
                '&SoftFin=' + lipDict[currentWo][9] + 
                '&HeatStart=' + lipDict[currentWo][10] + 
                '&HeatFin=' + lipDict[currentWo][11] + 
                '&HardStart=' + lipDict[currentWo][12] + 
                '&HardFin=' + lipDict[currentWo][13] + 
                '&RamStart=' + lipDict[currentWo][14] +
                '&RamFin=' + lipDict[currentWo][15] +
                '&SectionStart=' + lipDict[currentWo][16] +
                '&SectionFin=' + lipDict[currentWo][17] +
                '&WireStart=' + lipDict[currentWo][18] +
                '&WireFin=' + lipDict[currentWo][19] +
                '&FinStart=' + lipDict[currentWo][20] +
                '&FinFin=' + lipDict[currentWo][21] +
                '&PackStart=' + lipDict[currentWo][22] +
                '&PackFin=' + lipDict[currentWo][23] +
                '&workOrder=' + currentWo;

    mandString = 'DesignStart='  + mandDict[currentWo][0] +
                '&DesignFin='  + mandDict[currentWo][1] +
                '&ModelStart='  + mandDict[currentWo][2] +
                '&ModelFin='  + mandDict[currentWo][3] +
                '&ProgStart='  + mandDict[currentWo][4] +
                '&ProgFin='  + mandDict[currentWo][5] +
                '&TurnStart='  + mandDict[currentWo][6] + 
                '&TurnFin=' + mandDict[currentWo][7] + 
                '&SoftStart='+ mandDict[currentWo][8] + 
                '&SoftFin=' + mandDict[currentWo][9] + 
                '&HeatStart=' + mandDict[currentWo][10] + 
                '&HeatFin=' + mandDict[currentWo][11] + 
                '&HardStart=' + mandDict[currentWo][12] + 
                '&HardFin=' + mandDict[currentWo][13] + 
                '&RamStart=' + mandDict[currentWo][14] +
                '&RamFin=' + mandDict[currentWo][15] +
                '&SectionStart=' + mandDict[currentWo][16] +
                '&SectionFin=' + mandDict[currentWo][17] +
                '&WireStart=' + mandDict[currentWo][18] +
                '&WireFin=' + mandDict[currentWo][19] +
                '&FinStart=' + mandDict[currentWo][20] +
                '&FinFin=' + mandDict[currentWo][21] +
                '&PackStart=' + mandDict[currentWo][22] +
                '&PackFin=' + mandDict[currentWo][23] +
                '&workOrder=' + currentWo;

    backString = 'DesignStart='  + backerDict[currentWo][0] +
                '&DesignFin='  + backerDict[currentWo][1] +
                '&ModelStart='  + backerDict[currentWo][2] +
                '&ModelFin='  + backerDict[currentWo][3] +
                '&ProgStart='  + backerDict[currentWo][4] +
                '&ProgFin='  + backerDict[currentWo][5] +
                '&TurnStart='  + backerDict[currentWo][6] + 
                '&TurnFin=' + backerDict[currentWo][7] + 
                '&SoftStart='+ backerDict[currentWo][8] + 
                '&SoftFin=' + backerDict[currentWo][9] + 
                '&HeatStart=' + backerDict[currentWo][10] + 
                '&HeatFin=' + backerDict[currentWo][11] + 
                '&HardStart=' + backerDict[currentWo][12] + 
                '&HardFin=' + backerDict[currentWo][13] + 
                '&RamStart=' + backerDict[currentWo][14] +
                '&RamFin=' + backerDict[currentWo][15] +
                '&SectionStart=' + backerDict[currentWo][16] +
                '&SectionFin=' + backerDict[currentWo][17] +
                '&WireStart=' + backerDict[currentWo][18] +
                '&WireFin=' + backerDict[currentWo][19] +
                '&FinStart=' + backerDict[currentWo][20] +
                '&FinFin=' + backerDict[currentWo][21] +
                '&PackStart=' + backerDict[currentWo][22] +
                '&PackFin=' + backerDict[currentWo][23] +
                '&workOrder=' + currentWo;

    dieString = 'DesignStart='  + dieDict[currentWo][0] +
                '&DesignFin='  + dieDict[currentWo][1] +
                '&ModelStart='  + dieDict[currentWo][2] +
                '&ModelFin='  + dieDict[currentWo][3] +
                '&ProgStart='  + dieDict[currentWo][4] +
                '&ProgFin='  + dieDict[currentWo][5] +
                '&TurnStart='  + dieDict[currentWo][6] + 
                '&TurnFin=' + dieDict[currentWo][7] + 
                '&SoftStart='+ dieDict[currentWo][8] + 
                '&SoftFin=' + dieDict[currentWo][9] + 
                '&HeatStart=' + dieDict[currentWo][10] + 
                '&HeatFin=' + dieDict[currentWo][11] + 
                '&HardStart=' + dieDict[currentWo][12] + 
                '&HardFin=' + dieDict[currentWo][13] + 
                '&RamStart=' + dieDict[currentWo][14] +
                '&RamFin=' + dieDict[currentWo][15] +
                '&SectionStart=' + dieDict[currentWo][16] +
                '&SectionFin=' + dieDict[currentWo][17] +
                '&WireStart=' + dieDict[currentWo][18] +
                '&WireFin=' + dieDict[currentWo][19] +
                '&FinStart=' + dieDict[currentWo][20] +
                '&FinFin=' + dieDict[currentWo][21] +
                '&PackStart=' + dieDict[currentWo][22] +
                '&PackFin=' + dieDict[currentWo][23] +
                '&workOrder=' + currentWo;

    bolString = 'DesignStart='  + bolDict[currentWo][0] +
                '&DesignFin='  + bolDict[currentWo][1] +
                '&ModelStart='  + bolDict[currentWo][2] +
                '&ModelFin='  + bolDict[currentWo][3] +
                '&ProgStart='  + bolDict[currentWo][4] +
                '&ProgFin='  + bolDict[currentWo][5] +
                '&TurnStart='  + bolDict[currentWo][6] + 
                '&TurnFin=' + bolDict[currentWo][7] + 
                '&SoftStart='+ bolDict[currentWo][8] + 
                '&SoftFin=' + bolDict[currentWo][9] + 
                '&HeatStart=' + bolDict[currentWo][10] + 
                '&HeatFin=' + bolDict[currentWo][11] + 
                '&HardStart=' + bolDict[currentWo][12] + 
                '&HardFin=' + bolDict[currentWo][13] + 
                '&RamStart=' + bolDict[currentWo][14] +
                '&RamFin=' + bolDict[currentWo][15] +
                '&SectionStart=' + bolDict[currentWo][16] +
                '&SectionFin=' + bolDict[currentWo][17] +
                '&WireStart=' + bolDict[currentWo][18] +
                '&WireFin=' + bolDict[currentWo][19] +
                '&FinStart=' + bolDict[currentWo][20] +
                '&FinFin=' + bolDict[currentWo][21] +
                '&PackStart=' + bolDict[currentWo][22] +
                '&PackFin=' + bolDict[currentWo][23] +
                '&workOrder=' + bolDict;
 
    //console.log(partString);
    //console.log(mandString);
    //console.log(dieString);
    //console.log(backString);
    //console.log(bolString);

    // set status to complete if number of 'package finished' elements is the same as the number of components
    if (noOfComplete == noOfComponents){
        //console.log('complete');
        callPHP('complete', 'update_info.php?workOrder='+currentWo+'&job_status=Complete');
    }

    callPHP(partString,'update_part.php?'+partString); 
    callPHP(lipString,'update_lip.php?'+lipString);   
    callPHP(mandString,'update_mandrel.php?'+mandString);
    callPHP(dieString,'update_die.php?'+dieString);
    callPHP(backString,'update_backer.php?'+backString);
    callPHP(bolString,'update_bolster.php?'+bolString);

    getDatabase();
    
    if(infoDict[currentWo][12] == 1 && document.getElementById('partDesignFin').innerText != '-' && document.getElementById('partModelStart').innerText === '-'){
        removeElements();


        // Create container for form
        let new_div = document.createElement('div');
        let newClass ='addComponentContainer';
        new_div.className = newClass;
        new_div.id = 'addComponentContainer';
        document.getElementById('content-container').appendChild(new_div);
    
        //Create title for the form
        let new_header = document.createElement('h3');
        let headerClass = 'formHeader';
        new_header.className = headerClass;
        document.getElementById('addComponentContainer').appendChild(new_header);
    
        //Populate and append the form title. 
        headerString = 'Select required components: '; 
        new_header.appendChild(document.createTextNode(headerString));
        // Create line break
        let br = document.createElement('br');
        //document.getElementById('addComponentContainer').appendChild(br.cloneNode());
    
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
        document.getElementById('addComponentContainer').appendChild(valueInputLip);
        document.getElementById('addComponentContainer').appendChild(lipLabel);
        document.getElementById('addComponentContainer').appendChild(br);
        document.getElementById('addComponentContainer').appendChild(br.cloneNode());
  
        let valueInputMand = document.createElement('input'); //MAND
        valueInputMand.setAttribute('type', 'checkbox');
        valueInputMand.setAttribute('class', 'messageCheckbox');
        valueInputMand.setAttribute('name', 'Mandrel');
        valueInputMand.setAttribute('value', 'mandrel_required');
        valueInputMand.id = 'mandrel_check';
        let mandLabel = document.createElement('label');
        mandLabel.htmlFor = 'mand_check';
        mandLabel.appendChild(document.createTextNode('Mand        '));
        document.getElementById('addComponentContainer').appendChild(valueInputMand);
        document.getElementById('addComponentContainer').appendChild(mandLabel);
        document.getElementById('addComponentContainer').appendChild(br);
        document.getElementById('addComponentContainer').appendChild(br.cloneNode());

        let valueInputDie = document.createElement('input'); //DIE
        valueInputDie.setAttribute('type', 'checkbox');
        valueInputDie.setAttribute('class', 'messageCheckbox');
        valueInputDie.setAttribute('name', 'Dieplate');
        valueInputDie.setAttribute('value', 'die_required');
        valueInputDie.id = 'die_check';
        let dieLabel = document.createElement('label');
        dieLabel.htmlFor = 'die_check';
        dieLabel.appendChild(document.createTextNode('Dieplate        '));
        document.getElementById('addComponentContainer').appendChild(valueInputDie);
        document.getElementById('addComponentContainer').appendChild(dieLabel);
        document.getElementById('addComponentContainer').appendChild(br);
        document.getElementById('addComponentContainer').appendChild(br.cloneNode());
    
        let valueInputBack = document.createElement('input'); //Backer
        valueInputBack.setAttribute('type', 'checkbox');
        valueInputBack.setAttribute('class', 'messageCheckbox');
        valueInputBack.setAttribute('name', 'Backer');
        valueInputBack.setAttribute('value', 'backer_required');
        valueInputBack.id = 'backer_check';
        let backabel = document.createElement('label');
        backabel.htmlFor = 'backer_check';
        backabel.appendChild(document.createTextNode('Backer        '));
        document.getElementById('addComponentContainer').appendChild(valueInputBack);
        document.getElementById('addComponentContainer').appendChild(backabel);
        document.getElementById('addComponentContainer').appendChild(br);
        document.getElementById('addComponentContainer').appendChild(br.cloneNode());

        let valueInputBol = document.createElement('input'); //Backer
        valueInputBol.setAttribute('type', 'checkbox');
        valueInputBol.setAttribute('class', 'messageCheckbox');
        valueInputBol.setAttribute('name', 'Bolster');
        valueInputBol.setAttribute('value', 'bolster_required');
        valueInputBol.id = 'bolster_check';
        let bolLabel = document.createElement('label');
        bolLabel.htmlFor = 'bolster_check';
        bolLabel.appendChild(document.createTextNode('Bolster        '));
        document.getElementById('addComponentContainer').appendChild(valueInputBol);
        document.getElementById('addComponentContainer').appendChild(bolLabel);
        document.getElementById('addComponentContainer').appendChild(br);
        document.getElementById('addComponentContainer').appendChild(br.cloneNode());
        
    
        // Create a button and an event listner that passes the values contained in the form to function that updates the correct dictionary. 
        document.getElementById('addComponentContainer').appendChild(br.cloneNode());
        let actionButton = document.createElement('button');
        actionButton.appendChild(document.createTextNode('Submit'));
        actionButton.addEventListener('click', createComponentString);
        document.getElementById('addComponentContainer').appendChild(actionButton);

        function createComponentString(){
            demo();
            let AClipReq = 0;
            let ACmandReq = 0;
            let ACdieReq = 0;
            let ACbackReq = 0;
            let ACbolReq = 0;
            var checkedValue = null; 
            var inputElements = document.getElementsByClassName('messageCheckbox');
            for(var i=0; inputElements[i]; ++i){
                if(inputElements[i].checked){
                    checkedValue = inputElements[i].value;
                    if (checkedValue === 'lip_required' ){
                        AClipReq = 1;
                    }
                    if (checkedValue === 'mandrel_required' ){
                        ACmandReq = 1;
                    }
                    if (checkedValue === 'die_required' ){
                        ACdieReq = 1;
                    }
                    if (checkedValue === 'backer_required' ){
                        ACbackReq = 1;
                    }
                    if (checkedValue === 'bolster_required' ){
                        ACbolReq = 1;
                    }
                }
            }

            componentString = 'lip_required='       + AClipReq +
                            '&mandrel_required='    + ACmandReq +
                            '&die_required='        + ACdieReq +
                            '&backer_required='     + ACbackReq +
                            '&bolster_required='    + ACbolReq +
                            '&design_start='        + partDict[currentWo][0] +
                            '&design_finish='       + partDict[currentWo][1] +
                            '&workOrder='           + currentWo;
            
            //console.log(componentString);

            console.log(partDict[currentWo][0]);
            console.log(partDict[currentWo][1]);
            demo();
            callPHP(componentString,'update_comp.php?'+componentString);
            setTimeout(function() { insertOngoingElements(); }, 500);
        }  
    }else{
        setTimeout(function() { insertOngoingElements(); }, 500);
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

function discardTableValues(){
    removeElements();
    createJobTable(currentWo);
}

function createLipSoftTable(anId){
    removeColHeaders();
    removeElements();

    currentWo = anId;

    //Deactivate filter buttons when table is being displayed
    const showAll = document.getElementById('populate');   
    showAll.disabled = true;

    const showFlat = document.getElementById('flat');   
    showFlat.disabled = true;

    const showHollow = document.getElementById('hollow');   
    showHollow.disabled = true;

    const showOngoing = document.getElementById('ongoing');   
    showOngoing.disabled = true;

    const showComplete = document.getElementById('complete');   
    showComplete.disabled = true;

    const showSearch = document.getElementById('search');   
    showSearch.disabled = true;
    
    [].forEach.call(document.querySelectorAll('.nav-bar'), function (el) {
        el.style.visibility = 'hidden';
      });


    // Add headers to show what job is being edited
    let headString = 'WO: ' + anId + ' -- DIE: ' + infoDict[anId][0] + ' -- CUSTOMER: ' + infoDict[anId][3];
    let jobHeader = document.createElement('h3');
    document.getElementById('col-header-container').appendChild(jobHeader);
    let ntn = document.createTextNode(headString)
    jobHeader.appendChild(ntn);

    // Create required number of rows.
    let numberOfRows = 8;
    for (let i = 0; i <numberOfRows; i++){
        let rowId = 'row' + i;
        let rowClass = 'rowClass';
        let newRow = document.createElement('div');
        newRow.className = rowClass;
        newRow.id = rowId;
        document.getElementById('content-container').appendChild(newRow);
    }

    // Fill rows with columns.
        // Header cols:
        let newCol = document.createElement('div'); // Empty padding Div
        newCol.id = 'paddingCol1';
        newCol.className = 'paddingCol';
        document.getElementById('row0').appendChild(newCol);

        newCol = document.createElement('div');
        newCol.id = 'lipFrontCol';
        newCol.className = 'headerCol';
        document.getElementById('row0').appendChild(newCol);
        let colString = 'Lip-Front';
        let newTextNode = document.createTextNode(colString);
        document.getElementById('lipFrontCol').appendChild(newTextNode);

        newCol = document.createElement('div');
        newCol.id = 'lipBackCol';
        newCol.className = 'headerCol';
        document.getElementById('row0').appendChild(newCol);
        colString = 'Lip-Back';
        newTextNode = document.createTextNode(colString);
        document.getElementById('lipBackCol').appendChild(newTextNode);


                // Subheader cols:
                newCol = document.createElement('div'); // Empty padding Div
                newCol.id = 'paddingCol2';
                newCol.className = 'paddingCol';
                document.getElementById('row1').appendChild(newCol);

                newCol = document.createElement('div');
                newCol.id = 'FrontStart';
                newCol.className = 'subheaderColLight';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Start';
                newTextNode = document.createTextNode(colString);
                document.getElementById('FrontStart').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'FrontFin';
                newCol.className = 'subheaderCol';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Finish';
                newTextNode = document.createTextNode(colString);
                document.getElementById('FrontFin').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'BackStart';
                newCol.className = 'subheaderColLight';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Start';
                newTextNode = document.createTextNode(colString);
                document.getElementById('BackStart').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'BackFin';
                newCol.className = 'subheaderCol';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Finish';
                newTextNode = document.createTextNode(colString);
                document.getElementById('BackFin').appendChild(newTextNode);
                
                console.log(lipSoftDict);
                let nextcolID = '2';
                let nextcol = 'row' + nextcolID;

                // Subheader cols:
                newCol = document.createElement('div'); // Empty padding Div
                newCol.id = 'rowHead2';
                newCol.className = 'rowHead';
                document.getElementById(nextcol).appendChild(newCol);
                colString = 'LIP';
                newTextNode = document.createTextNode(colString);
                document.getElementById('rowHead2').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'lipFrontStart';
                newCol.className = 'progCheckLight';
                document.getElementById(nextcol).appendChild(newCol);
                colString = String(lipSoftDict[anId][0]);
                //colString = '-';
                newTextNode = document.createTextNode(colString);
                document.getElementById('lipFrontStart').appendChild(newTextNode);
                document.getElementById('lipFrontStart').addEventListener('click', function(){addDateStamp('lipFrontStart')});
                if(document.getElementById('lipFrontStart').innerText != '-' && document.getElementById('lipFrontStart').innerText != 'N/A'){document.getElementById('lipFrontStart').addEventListener('click', function(){removeDateStamp('lipFrontStart')})};
                
                newCol = document.createElement('div');
                newCol.id = 'lipFrontFin';
                newCol.className = 'progCheck';
                document.getElementById(nextcol).appendChild(newCol);
                colString = lipSoftDict[anId][1];
                //colString = '-';
                newTextNode = document.createTextNode(colString);
                document.getElementById('lipFrontFin').appendChild(newTextNode);
                if(document.getElementById('lipFrontStart').innerText != '-'){document.getElementById('lipFrontFin').addEventListener('click', function(){addDateStamp('lipFrontFin')})};
                if(document.getElementById('lipFrontFin').innerText != '-' && document.getElementById('lipFrontFin').innerText != 'N/A'){document.getElementById('lipFrontFin').addEventListener('click', function(){removeDateStamp('lipFrontFin')})};

                newCol = document.createElement('div');
                newCol.id = 'lipBackStart';
                newCol.className = 'progCheckLight';
                document.getElementById(nextcol).appendChild(newCol);
                colString = lipSoftDict[anId][2];
                //colString = '-';
                newTextNode = document.createTextNode(colString);
                document.getElementById('lipBackStart').appendChild(newTextNode);
                document.getElementById('lipBackStart').addEventListener('click', function(){addDateStamp('lipBackStart')});
                if(document.getElementById('lipBackStart').innerText != '-' && document.getElementById('lipBackStart').innerText != 'N/A'){document.getElementById('lipBackStart').addEventListener('click', function(){removeDateStamp('lipBackStart')})};

                newCol = document.createElement('div');
                newCol.id = 'lipBackFin';
                newCol.className = 'progCheck';
                document.getElementById(nextcol).appendChild(newCol);
                colString = lipSoftDict[anId][3];
                //colString = '-';
                newTextNode = document.createTextNode(colString);
                document.getElementById('lipBackFin').appendChild(newTextNode);
                if(document.getElementById('lipBackStart').innerText != '-'){document.getElementById('lipBackFin').addEventListener('click', function(){addDateStamp('lipBackFin')})};
                if(document.getElementById('lipBackFin').innerText != '-' && document.getElementById('lipBackFin').innerText != 'N/A'){document.getElementById('lipBackFin').addEventListener('click', function(){removeDateStamp('lipBackFin')})};

                nextcolID++;
                nextcol = 'row' + nextcolID;
                        // CNC Table.
        // Header cols:
        newCol = document.createElement('div'); // Empty padding Div
        newCol.id = 'paddingCol3';
        newCol.className = 'paddingCol';
        document.getElementById(nextcol).appendChild(newCol);

        newCol = document.createElement('div');
        newCol.id = 'NCCol1';
        newCol.className = 'headerCol';
        document.getElementById(nextcol).appendChild(newCol);
        colString = 'CNC';
        newTextNode = document.createTextNode(colString);
        document.getElementById('NCCol1').appendChild(newTextNode);


        nextcolID++;
        nextcol = 'row' + nextcolID;
                // Subheader cols:
                newCol = document.createElement('div'); // Empty padding Div
                newCol.id = 'paddingCol2';
                newCol.className = 'paddingCol';
                document.getElementById(nextcol).appendChild(newCol);

                newCol = document.createElement('div');
                newCol.id = 'frontNCH';
                newCol.className = 'subheaderColLight';
                document.getElementById(nextcol).appendChild(newCol);
                colString = 'Lip Front';
                newTextNode = document.createTextNode(colString);
                document.getElementById('frontNCH').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'backNCH';
                newCol.className = 'subheaderCol';
                document.getElementById(nextcol).appendChild(newCol);
                colString = 'Lip Back';
                newTextNode = document.createTextNode(colString);
                document.getElementById('backNCH').appendChild(newTextNode);


                nextcolID++;
                
                nextcol = 'row' + nextcolID;
                // Subheader cols:
                newCol = document.createElement('div'); // Empty padding Div
                newCol.id = 'rowHead4';
                newCol.className = 'rowHead';
                document.getElementById(nextcol).appendChild(newCol);
                colString = 'CNC ID';
                newTextNode = document.createTextNode(colString);
                document.getElementById('rowHead4').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'frontNC';
                newCol.className = 'progCheckLight';
                document.getElementById(nextcol).appendChild(newCol);
                colString = String(lipSoftDict[anId][4]);
                //colString = '-';
                newTextNode = document.createTextNode(colString);
                document.getElementById('frontNC').appendChild(newTextNode);
                //document.getElementById('bolFrontStart').addEventListener('click', function(){addDateStamp('bolFrontStart')});

                newCol = document.createElement('div');
                newCol.id = 'backNC';
                newCol.className = 'progCheck';
                document.getElementById(nextcol).appendChild(newCol);
                colString = lipSoftDict[anId][5];
                //colString = '-';
                newTextNode = document.createTextNode(colString);
                document.getElementById('backNC').appendChild(newTextNode);
                //if(document.getElementById('bolFrontStart').innerText != '-'){document.getElementById('bolFrontFin').addEventListener('click', function(){addDateStamp('bolFrontFin')})};
                
                nextcolID++;
                
                
    //if(infoDict[currentWo][11] != null){
    //    let scrapNote = document.createElement('p');
    //    scrapNote.appendChild(document.createTextNode(infoDict[currentWo][11]));
    //    document.getElementById('content-container').appendChild(scrapNote);
    //}

    // Create container for buttons
    let new_div = document.createElement('div');
    let newClass ='progressUpdateButtonsContainer';
    new_div.className = newClass;
    new_div.id = 'progressUpdateButtonsContainer';
    document.getElementById('content-container').appendChild(new_div);   
    
    // Create a buttons and event listners
    // let saveButton = document.createElement('button');

    let nabr = document.createElement('br');
    //document.getElementById('addComponentContainer').appendChild(nabr.cloneNode());

    document.getElementById('content-container').appendChild(nabr.cloneNode());

    let discardButton = document.createElement('button');
    let exitButton = document.createElement('button');
    // saveButton.appendChild(document.createTextNode('Save changes'));
    discardButton.appendChild(document.createTextNode('Discard Changes'));
    exitButton.appendChild(document.createTextNode('Save & Exit'));
    // saveButton.addEventListener('click', function(){saveTableValues()});
    discardButton.addEventListener('click', function(){discardSoftLipTableValues()});
    exitButton.addEventListener('click', function(){savesoftLipTableValues()});
    // exitButton.addEventListener('click', function(){insertAllElements()});
    // document.getElementById('content-container').appendChild(saveButton);    
    document.getElementById('content-container').appendChild(discardButton);
    document.getElementById('content-container').appendChild(exitButton);
}

function discardSoftLipTableValues(){
    removeElements();
    createLipSoftTable(currentWo);
}

function savesoftLipTableValues(){

    //demo();

    const showAll = document.getElementById('populate');   
    showAll.disabled = false;

    const showFlat = document.getElementById('flat');   
    showFlat.disabled = false;

    const showHollow = document.getElementById('hollow');   
    showHollow.disabled = false;

    const showOngoing = document.getElementById('ongoing');   
    showOngoing.disabled = false;

    const showComplete = document.getElementById('complete');   
    showComplete.disabled = false;

    const showSearch = document.getElementById('search');   
    showSearch.disabled = false;

    [].forEach.call(document.querySelectorAll('.nav-bar'), function (el) {
        el.style.visibility = 'visible';
      });

    let noOfComponents = 0;
    let noOfComplete = 0;

    lipSoftDict[currentWo][0] = document.getElementById('lipFrontStart').innerText;
    lipSoftDict[currentWo][1] = document.getElementById('lipFrontFin').innerText;
    lipSoftDict[currentWo][2] = document.getElementById('lipBackStart').innerText;
    lipSoftDict[currentWo][3] = document.getElementById('lipBackFin').innerText;
    //if (mandDict[currentWo][23] != '-'){
    //    noOfComplete++;
    //}

    lipString = 'lipFrontStart='  + lipSoftDict[currentWo][0] +
                '&lipFrontFin='  + lipSoftDict[currentWo][1] +
                '&lipBackStart='  + lipSoftDict[currentWo][2] +
                '&lipBackFin='  + lipSoftDict[currentWo][3] +
                '&workOrder=' + currentWo;

    // set status to complete if number of 'package finished' elements is the same as the number of components
    //if (noOfComplete == noOfComponents){
    //    //console.log('complete');
    //    callPHP('complete', 'update_info.php?workOrder='+currentWo+'&job_status=Complete');
    //}
    getDatabase();
    //demo();
    callPHP(lipString,'lip_soft.php?'+lipString); 
    createJobTable(currentWo);
}

function createMandrelSoftTable(anId){
    removeColHeaders();
    removeElements();

    currentWo = anId;

    //Deactivate filter buttons when table is being displayed
    const showAll = document.getElementById('populate');   
    showAll.disabled = true;

    const showFlat = document.getElementById('flat');   
    showFlat.disabled = true;

    const showHollow = document.getElementById('hollow');   
    showHollow.disabled = true;

    const showOngoing = document.getElementById('ongoing');   
    showOngoing.disabled = true;

    const showComplete = document.getElementById('complete');   
    showComplete.disabled = true;

    const showSearch = document.getElementById('search');   
    showSearch.disabled = true;
    
    [].forEach.call(document.querySelectorAll('.nav-bar'), function (el) {
        el.style.visibility = 'hidden';
      });


    // Add headers to show what job is being edited
    let headString = 'WO: ' + anId + ' -- DIE: ' + infoDict[anId][0] + ' -- CUSTOMER: ' + infoDict[anId][3];
    let jobHeader = document.createElement('h3');
    document.getElementById('col-header-container').appendChild(jobHeader);
    let ntn = document.createTextNode(headString)
    jobHeader.appendChild(ntn);

    // Create required number of rows.
    let numberOfRows = 8;
    for (let i = 0; i <numberOfRows; i++){
        let rowId = 'row' + i;
        let rowClass = 'rowClass';
        let newRow = document.createElement('div');
        newRow.className = rowClass;
        newRow.id = rowId;
        document.getElementById('content-container').appendChild(newRow);
    }

    // Fill rows with columns.
        // Header cols:
        let newCol = document.createElement('div'); // Empty padding Div
        newCol.id = 'paddingCol1';
        newCol.className = 'paddingCol';
        document.getElementById('row0').appendChild(newCol);

        newCol = document.createElement('div');
        newCol.id = 'portFrontCol';
        newCol.className = 'headerCol';
        document.getElementById('row0').appendChild(newCol);
        let colString = 'Port-Front';
        let newTextNode = document.createTextNode(colString);
        document.getElementById('portFrontCol').appendChild(newTextNode);

        newCol = document.createElement('div');
        newCol.id = 'portBackCol';
        newCol.className = 'headerCol';
        document.getElementById('row0').appendChild(newCol);
        colString = 'Port-Back';
        newTextNode = document.createTextNode(colString);
        document.getElementById('portBackCol').appendChild(newTextNode);


                // Subheader cols:
                newCol = document.createElement('div'); // Empty padding Div
                newCol.id = 'paddingCol2';
                newCol.className = 'paddingCol';
                document.getElementById('row1').appendChild(newCol);

                newCol = document.createElement('div');
                newCol.id = 'portFrontStart';
                newCol.className = 'subheaderColLight';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Start';
                newTextNode = document.createTextNode(colString);
                document.getElementById('portFrontStart').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'portFrontFin';
                newCol.className = 'subheaderCol';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Finish';
                newTextNode = document.createTextNode(colString);
                document.getElementById('portFrontFin').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'portBackStart';
                newCol.className = 'subheaderColLight';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Start';
                newTextNode = document.createTextNode(colString);
                document.getElementById('portBackStart').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'portBackFin';
                newCol.className = 'subheaderCol';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Finish';
                newTextNode = document.createTextNode(colString);
                document.getElementById('portBackFin').appendChild(newTextNode);

                let nextcolID = '2';
                console.log(mandSoftDict);
                
                let nextcol = 'row' + nextcolID;
                // Subheader cols:
                newCol = document.createElement('div'); // Empty padding Div
                newCol.id = 'rowHead2';
                newCol.className = 'rowHead';
                document.getElementById(nextcol).appendChild(newCol);
                colString = 'MANDREL';
                newTextNode = document.createTextNode(colString);
                document.getElementById('rowHead2').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'mandPortFrontStart';
                newCol.className = 'progCheckLight';
                document.getElementById(nextcol).appendChild(newCol);
                colString = String(mandSoftDict[anId][0]);
                //colString = '-';
                newTextNode = document.createTextNode(colString);
                document.getElementById('mandPortFrontStart').appendChild(newTextNode);
                document.getElementById('mandPortFrontStart').addEventListener('click', function(){addDateStamp('mandPortFrontStart')});
                if(document.getElementById('mandPortFrontStart').innerText != '-' && document.getElementById('mandPortFrontStart').innerText != 'N/A'){document.getElementById('mandPortFrontStart').addEventListener('click', function(){removeDateStamp('mandPortFrontStart')})};

                newCol = document.createElement('div');
                newCol.id = 'mandPortFrontFin';
                newCol.className = 'progCheck';
                document.getElementById(nextcol).appendChild(newCol);
                colString = mandSoftDict[anId][1];
                //colString = '-';
                newTextNode = document.createTextNode(colString);
                document.getElementById('mandPortFrontFin').appendChild(newTextNode);
                if(document.getElementById('mandPortFrontStart').innerText != '-'){document.getElementById('mandPortFrontFin').addEventListener('click', function(){addDateStamp('mandPortFrontFin')})};
                if(document.getElementById('mandPortFrontFin').innerText != '-' && document.getElementById('mandPortFrontFin').innerText != 'N/A'){document.getElementById('mandPortFrontFin').addEventListener('click', function(){removeDateStamp('mandPortFrontFin')})};
                
                newCol = document.createElement('div');
                newCol.id = 'mandPortBackStart';
                newCol.className = 'progCheckLight';
                document.getElementById(nextcol).appendChild(newCol);
                colString = mandSoftDict[anId][2];
                //colString = '-';
                newTextNode = document.createTextNode(colString);
                document.getElementById('mandPortBackStart').appendChild(newTextNode);
                document.getElementById('mandPortBackStart').addEventListener('click', function(){addDateStamp('mandPortBackStart')});
                if(document.getElementById('mandPortBackStart').innerText != '-' && document.getElementById('mandPortBackStart').innerText != 'N/A'){document.getElementById('mandPortBackStart').addEventListener('click', function(){removeDateStamp('mandPortBackStart')})};

                newCol = document.createElement('div');
                newCol.id = 'mandPortBackFin';
                newCol.className = 'progCheck';
                document.getElementById(nextcol).appendChild(newCol);
                colString = mandSoftDict[anId][3];
                //colString = '-';
                newTextNode = document.createTextNode(colString);
                document.getElementById('mandPortBackFin').appendChild(newTextNode);
                if(document.getElementById('mandPortBackStart').innerText != '-'){document.getElementById('mandPortBackFin').addEventListener('click', function(){addDateStamp('mandPortBackFin')})};
                if(document.getElementById('mandPortBackFin').innerText != '-' && document.getElementById('mandPortBackFin').innerText != 'N/A'){document.getElementById('mandPortBackFin').addEventListener('click', function(){removeDateStamp('mandPortBackFin')})};

                nextcolID++;
                nextcol = 'row' + nextcolID;
                        // CNC Table.
        // Header cols:
        newCol = document.createElement('div'); // Empty padding Div
        newCol.id = 'paddingCol3';
        newCol.className = 'paddingCol';
        document.getElementById(nextcol).appendChild(newCol);

        newCol = document.createElement('div');
        newCol.id = 'NCCol1';
        newCol.className = 'headerCol';
        document.getElementById(nextcol).appendChild(newCol);
        colString = 'CNC';
        newTextNode = document.createTextNode(colString);
        document.getElementById('NCCol1').appendChild(newTextNode);


        nextcolID++;
        nextcol = 'row' + nextcolID;
                // Subheader cols:
                newCol = document.createElement('div'); // Empty padding Div
                newCol.id = 'paddingCol2';
                newCol.className = 'paddingCol';
                document.getElementById(nextcol).appendChild(newCol);

                newCol = document.createElement('div');
                newCol.id = 'frontNCH';
                newCol.className = 'subheaderColLight';
                document.getElementById(nextcol).appendChild(newCol);
                colString = 'Port Front';
                newTextNode = document.createTextNode(colString);
                document.getElementById('frontNCH').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'backNCH';
                newCol.className = 'subheaderCol';
                document.getElementById(nextcol).appendChild(newCol);
                colString = 'Port Back';
                newTextNode = document.createTextNode(colString);
                document.getElementById('backNCH').appendChild(newTextNode);


                nextcolID++;
                
                nextcol = 'row' + nextcolID;
                // Subheader cols:
                newCol = document.createElement('div'); // Empty padding Div
                newCol.id = 'rowHead4';
                newCol.className = 'rowHead';
                document.getElementById(nextcol).appendChild(newCol);
                colString = 'CNC ID';
                newTextNode = document.createTextNode(colString);
                document.getElementById('rowHead4').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'frontNC';
                newCol.className = 'progCheckLight';
                document.getElementById(nextcol).appendChild(newCol);
                colString = String(mandSoftDict[anId][4]);
                //colString = '-';
                newTextNode = document.createTextNode(colString);
                document.getElementById('frontNC').appendChild(newTextNode);
                //document.getElementById('bolFrontStart').addEventListener('click', function(){addDateStamp('bolFrontStart')});

                newCol = document.createElement('div');
                newCol.id = 'backNC';
                newCol.className = 'progCheck';
                document.getElementById(nextcol).appendChild(newCol);
                colString = mandSoftDict[anId][5];
                //colString = '-';
                newTextNode = document.createTextNode(colString);
                document.getElementById('backNC').appendChild(newTextNode);
                //if(document.getElementById('bolFrontStart').innerText != '-'){document.getElementById('bolFrontFin').addEventListener('click', function(){addDateStamp('bolFrontFin')})};
                
                nextcolID++;
                
                
    //if(infoDict[currentWo][11] != null){
    //    let scrapNote = document.createElement('p');
    //    scrapNote.appendChild(document.createTextNode(infoDict[currentWo][11]));
    //    document.getElementById('content-container').appendChild(scrapNote);
    //}

    // Create container for buttons
    let new_div = document.createElement('div');
    let newClass ='progressUpdateButtonsContainer';
    new_div.className = newClass;
    new_div.id = 'progressUpdateButtonsContainer';
    document.getElementById('content-container').appendChild(new_div);   
    
    // Create a buttons and event listners
    // let saveButton = document.createElement('button');

    let nabr = document.createElement('br');
    //document.getElementById('addComponentContainer').appendChild(nabr.cloneNode());

    document.getElementById('content-container').appendChild(nabr.cloneNode());

    let discardButton = document.createElement('button');
    let exitButton = document.createElement('button');
    // saveButton.appendChild(document.createTextNode('Save changes'));
    discardButton.appendChild(document.createTextNode('Discard Changes'));
    exitButton.appendChild(document.createTextNode('Save & Exit'));
    // saveButton.addEventListener('click', function(){saveTableValues()});
    discardButton.addEventListener('click', function(){discardSoftMandTableValues()});
    exitButton.addEventListener('click', function(){savesoftMandTableValues()});
    // exitButton.addEventListener('click', function(){insertAllElements()});
    // document.getElementById('content-container').appendChild(saveButton);    
    document.getElementById('content-container').appendChild(discardButton);
    document.getElementById('content-container').appendChild(exitButton);
}

function discardSoftMandTableValues(){
    removeElements();
    createMandrelSoftTable(currentWo);
}

function savesoftMandTableValues(){

    //demo();

    const showAll = document.getElementById('populate');   
    showAll.disabled = false;

    const showFlat = document.getElementById('flat');   
    showFlat.disabled = false;

    const showHollow = document.getElementById('hollow');   
    showHollow.disabled = false;

    const showOngoing = document.getElementById('ongoing');   
    showOngoing.disabled = false;

    const showComplete = document.getElementById('complete');   
    showComplete.disabled = false;

    const showSearch = document.getElementById('search');   
    showSearch.disabled = false;

    [].forEach.call(document.querySelectorAll('.nav-bar'), function (el) {
        el.style.visibility = 'visible';
      });

    let noOfComponents = 0;
    let noOfComplete = 0;

    mandSoftDict[currentWo][0] = document.getElementById('mandPortFrontStart').innerText;
    mandSoftDict[currentWo][1] = document.getElementById('mandPortFrontFin').innerText;
    mandSoftDict[currentWo][2] = document.getElementById('mandPortBackStart').innerText;
    mandSoftDict[currentWo][3] = document.getElementById('mandPortBackFin').innerText;
    //if (mandDict[currentWo][23] != '-'){
    //    noOfComplete++;
    //}

    mandString = 'mandPortFrontStart='  + mandSoftDict[currentWo][0] +
                '&mandPortFrontFin='  + mandSoftDict[currentWo][1] +
                '&mandPortBackStart='  + mandSoftDict[currentWo][2] +
                '&mandPortBackFin='  + mandSoftDict[currentWo][3] +
                '&workOrder=' + currentWo;

    // set status to complete if number of 'package finished' elements is the same as the number of components
    //if (noOfComplete == noOfComponents){
    //    //console.log('complete');
    //    callPHP('complete', 'update_info.php?workOrder='+currentWo+'&job_status=Complete');
    //}
    getDatabase();
    //demo();
    callPHP(mandString,'mand_soft.php?'+mandString); 
    createJobTable(currentWo);
}

function createDieSoftTable(anId){
    removeColHeaders();
    removeElements();

    currentWo = anId;

    //Deactivate filter buttons when table is being displayed
    const showAll = document.getElementById('populate');   
    showAll.disabled = true;

    const showFlat = document.getElementById('flat');   
    showFlat.disabled = true;

    const showHollow = document.getElementById('hollow');   
    showHollow.disabled = true;

    const showOngoing = document.getElementById('ongoing');   
    showOngoing.disabled = true;

    const showComplete = document.getElementById('complete');   
    showComplete.disabled = true;

    const showSearch = document.getElementById('search');   
    showSearch.disabled = true;
    
    [].forEach.call(document.querySelectorAll('.nav-bar'), function (el) {
        el.style.visibility = 'hidden';
      });


    // Add headers to show what job is being edited
    let headString = 'WO: ' + anId + ' -- DIE: ' + infoDict[anId][0] + ' -- CUSTOMER: ' + infoDict[anId][3];
    let jobHeader = document.createElement('h3');
    document.getElementById('col-header-container').appendChild(jobHeader);
    let ntn = document.createTextNode(headString)
    jobHeader.appendChild(ntn);

    // Create required number of rows.
    let numberOfRows = 8;
    for (let i = 0; i <numberOfRows; i++){
        let rowId = 'row' + i;
        let rowClass = 'rowClass';
        let newRow = document.createElement('div');
        newRow.className = rowClass;
        newRow.id = rowId;
        document.getElementById('content-container').appendChild(newRow);
    }

    // Fill rows with columns.
        // Header cols:
        let newCol = document.createElement('div'); // Empty padding Div
        newCol.id = 'paddingCol1';
        newCol.className = 'paddingCol';
        document.getElementById('row0').appendChild(newCol);

        newCol = document.createElement('div');
        newCol.id = 'portFrontCol';
        newCol.className = 'headerCol';
        document.getElementById('row0').appendChild(newCol);
        let colString = 'Die Bearing';
        let newTextNode = document.createTextNode(colString);
        document.getElementById('portFrontCol').appendChild(newTextNode);

        newCol = document.createElement('div');
        newCol.id = 'portBackCol';
        newCol.className = 'headerCol';
        document.getElementById('row0').appendChild(newCol);
        colString = 'Backmill';
        newTextNode = document.createTextNode(colString);
        document.getElementById('portBackCol').appendChild(newTextNode);


                // Subheader cols:
                newCol = document.createElement('div'); // Empty padding Div
                newCol.id = 'paddingCol2';
                newCol.className = 'paddingCol';
                document.getElementById('row1').appendChild(newCol);

                newCol = document.createElement('div');
                newCol.id = 'BearingStart';
                newCol.className = 'subheaderColLight';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Start';
                newTextNode = document.createTextNode(colString);
                document.getElementById('BearingStart').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'BearingFin';
                newCol.className = 'subheaderCol';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Finish';
                newTextNode = document.createTextNode(colString);
                document.getElementById('BearingFin').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'backMillStart';
                newCol.className = 'subheaderColLight';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Start';
                newTextNode = document.createTextNode(colString);
                document.getElementById('backMillStart').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'backMillFin';
                newCol.className = 'subheaderCol';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Finish';
                newTextNode = document.createTextNode(colString);
                document.getElementById('backMillFin').appendChild(newTextNode);

                let nextcolID = '2';
                console.log(mandSoftDict);
                
                let nextcol = 'row' + nextcolID;
                // Subheader cols:
                newCol = document.createElement('div'); // Empty padding Div
                newCol.id = 'rowHead2';
                newCol.className = 'rowHead';
                document.getElementById(nextcol).appendChild(newCol);
                colString = 'DIEPLATE';
                newTextNode = document.createTextNode(colString);
                document.getElementById('rowHead2').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'dieBearingStart';
                newCol.className = 'progCheckLight';
                document.getElementById(nextcol).appendChild(newCol);
                if (infoDict[anId][1] == 'Hollow'){
                    colString = String(dieSoftDict[anId][0]);
                }
                if(infoDict[anId][1] == 'Flat'){
                    colString = 'N/A';
                }
                //colString = '-';
                newTextNode = document.createTextNode(colString);
                document.getElementById('dieBearingStart').appendChild(newTextNode);
                document.getElementById('dieBearingStart').addEventListener('click', function(){addDateStamp('dieBearingStart')});
                if (infoDict[anId][1] == 'Hollow'){
                    document.getElementById('dieBearingStart').addEventListener('click', function(){addDateStamp('dieBearingStart')});
                    if(document.getElementById('dieBearingStart').innerText != '-' && document.getElementById('dieBearingStart').innerText != 'N/A'){document.getElementById('dieBearingStart').addEventListener('click', function(){removeDateStamp('dieBearingStart')})};
                }


                newCol = document.createElement('div');
                newCol.id = 'dieBearingFin';
                newCol.className = 'progCheck';
                document.getElementById(nextcol).appendChild(newCol);
                if (infoDict[anId][1] == 'Hollow'){
                    colString = String(dieSoftDict[anId][1]);
                }
                if(infoDict[anId][1] == 'Flat'){
                    colString = 'N/A';
                }
                //colString = '-';
                newTextNode = document.createTextNode(colString);
                document.getElementById('dieBearingFin').appendChild(newTextNode);
                if (infoDict[anId][1] == 'Hollow'){
                    if(document.getElementById('dieBearingStart').innerText != '-'){document.getElementById('dieBearingFin').addEventListener('click', function(){addDateStamp('dieBearingFin')})};
                    if(document.getElementById('dieBearingFin').innerText != '-' && document.getElementById('dieBearingFin').innerText != 'N/A'){document.getElementById('dieBearingFin').addEventListener('click', function(){removeDateStamp('dieBearingFin')})};
                }

                newCol = document.createElement('div');
                newCol.id = 'dieBackmillStart';
                newCol.className = 'progCheckLight';
                document.getElementById(nextcol).appendChild(newCol);
                colString = dieSoftDict[anId][2];
                //colString = '-';
                newTextNode = document.createTextNode(colString);
                document.getElementById('dieBackmillStart').appendChild(newTextNode);
                document.getElementById('dieBackmillStart').addEventListener('click', function(){addDateStamp('dieBackmillStart')});
                if(document.getElementById('dieBackmillStart').innerText != '-' && document.getElementById('dieBackmillStart').innerText != 'N/A'){document.getElementById('dieBackmillStart').addEventListener('click', function(){removeDateStamp('dieBackmillStart')})};
                
                newCol = document.createElement('div');
                newCol.id = 'dieBackmillFin';
                newCol.className = 'progCheck';
                document.getElementById(nextcol).appendChild(newCol);
                colString = dieSoftDict[anId][3];
                //colString = '-';
                newTextNode = document.createTextNode(colString);
                document.getElementById('dieBackmillFin').appendChild(newTextNode);
                if(document.getElementById('dieBackmillStart').innerText != '-'){document.getElementById('dieBackmillFin').addEventListener('click', function(){addDateStamp('dieBackmillFin')})};
                if(document.getElementById('dieBackmillFin').innerText != '-' && document.getElementById('dieBackmillFin').innerText != 'N/A'){document.getElementById('dieBackmillFin').addEventListener('click', function(){removeDateStamp('dieBackmillFin')})};

                nextcolID++;
                nextcol = 'row' + nextcolID;
        // CNC Table.
        // Header cols:
        newCol = document.createElement('div'); // Empty padding Div
        newCol.id = 'paddingCol3';
        newCol.className = 'paddingCol';
        document.getElementById(nextcol).appendChild(newCol);

        newCol = document.createElement('div');
        newCol.id = 'NCCol1';
        newCol.className = 'headerCol';
        document.getElementById(nextcol).appendChild(newCol);
        colString = 'CNC';
        newTextNode = document.createTextNode(colString);
        document.getElementById('NCCol1').appendChild(newTextNode);


        nextcolID++;
        nextcol = 'row' + nextcolID;
                // Subheader cols:
                newCol = document.createElement('div'); // Empty padding Div
                newCol.id = 'paddingCol2';
                newCol.className = 'paddingCol';
                document.getElementById(nextcol).appendChild(newCol);

                newCol = document.createElement('div');
                newCol.id = 'frontNCH';
                newCol.className = 'subheaderColLight';
                document.getElementById(nextcol).appendChild(newCol);
                colString = 'Die Front';
                newTextNode = document.createTextNode(colString);
                document.getElementById('frontNCH').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'backNCH';
                newCol.className = 'subheaderCol';
                document.getElementById(nextcol).appendChild(newCol);
                colString = 'Die Back';
                newTextNode = document.createTextNode(colString);
                document.getElementById('backNCH').appendChild(newTextNode);


                nextcolID++;
                
                nextcol = 'row' + nextcolID;
                // Subheader cols:
                newCol = document.createElement('div'); // Empty padding Div
                newCol.id = 'rowHead4';
                newCol.className = 'rowHead';
                document.getElementById(nextcol).appendChild(newCol);
                colString = 'CNC ID';
                newTextNode = document.createTextNode(colString);
                document.getElementById('rowHead4').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'frontNC';
                newCol.className = 'progCheckLight';
                document.getElementById(nextcol).appendChild(newCol);
                colString = String(dieSoftDict[anId][4]);
                //colString = '-';
                newTextNode = document.createTextNode(colString);
                document.getElementById('frontNC').appendChild(newTextNode);
                //document.getElementById('bolFrontStart').addEventListener('click', function(){addDateStamp('bolFrontStart')});

                newCol = document.createElement('div');
                newCol.id = 'backNC';
                newCol.className = 'progCheck';
                document.getElementById(nextcol).appendChild(newCol);
                colString = dieSoftDict[anId][5];
                //colString = '-';
                newTextNode = document.createTextNode(colString);
                document.getElementById('backNC').appendChild(newTextNode);
                //if(document.getElementById('bolFrontStart').innerText != '-'){document.getElementById('bolFrontFin').addEventListener('click', function(){addDateStamp('bolFrontFin')})};
                
                nextcolID++;


                
                
    //if(infoDict[currentWo][11] != null){
    //    let scrapNote = document.createElement('p');
    //    scrapNote.appendChild(document.createTextNode(infoDict[currentWo][11]));
    //    document.getElementById('content-container').appendChild(scrapNote);
    //}

    // Create container for buttons
    let new_div = document.createElement('div');
    let newClass ='progressUpdateButtonsContainer';
    new_div.className = newClass;
    new_div.id = 'progressUpdateButtonsContainer';
    document.getElementById('content-container').appendChild(new_div);   
    
    // Create a buttons and event listners
    // let saveButton = document.createElement('button');

    let nabr = document.createElement('br');
    //document.getElementById('addComponentContainer').appendChild(nabr.cloneNode());

    document.getElementById('content-container').appendChild(nabr.cloneNode());

    let discardButton = document.createElement('button');
    let exitButton = document.createElement('button');
    // saveButton.appendChild(document.createTextNode('Save changes'));
    discardButton.appendChild(document.createTextNode('Discard Changes'));
    exitButton.appendChild(document.createTextNode('Save & Exit'));
    // saveButton.addEventListener('click', function(){saveTableValues()});
    discardButton.addEventListener('click', function(){discardSoftDieTableValues()});
    exitButton.addEventListener('click', function(){savesoftDieTableValues()});
    // exitButton.addEventListener('click', function(){insertAllElements()});
    // document.getElementById('content-container').appendChild(saveButton);    
    document.getElementById('content-container').appendChild(discardButton);
    document.getElementById('content-container').appendChild(exitButton);
}

function discardSoftDieTableValues(){
    removeElements();
    createDieSoftTable(currentWo);
}

function savesoftDieTableValues(){

    //demo();

    const showAll = document.getElementById('populate');   
    showAll.disabled = false;

    const showFlat = document.getElementById('flat');   
    showFlat.disabled = false;

    const showHollow = document.getElementById('hollow');   
    showHollow.disabled = false;

    const showOngoing = document.getElementById('ongoing');   
    showOngoing.disabled = false;

    const showComplete = document.getElementById('complete');   
    showComplete.disabled = false;

    const showSearch = document.getElementById('search');   
    showSearch.disabled = false;

    [].forEach.call(document.querySelectorAll('.nav-bar'), function (el) {
        el.style.visibility = 'visible';
      });

    let noOfComponents = 0;
    let noOfComplete = 0;

    dieSoftDict[currentWo][0] = document.getElementById('dieBearingStart').innerText;
    dieSoftDict[currentWo][1] = document.getElementById('dieBearingFin').innerText;
    dieSoftDict[currentWo][2] = document.getElementById('dieBackmillStart').innerText;
    dieSoftDict[currentWo][3] = document.getElementById('dieBackmillFin').innerText;
    //if (mandDict[currentWo][23] != '-'){
    //    noOfComplete++;
    //}

    dieString = 'dieBearingStart='  + dieSoftDict[currentWo][0] +
                '&dieBearingFin='  + dieSoftDict[currentWo][1] +
                '&dieBackmillStart='  + dieSoftDict[currentWo][2] +
                '&dieBackmillFin='  + dieSoftDict[currentWo][3] +
                '&workOrder=' + currentWo;

    // set status to complete if number of 'package finished' elements is the same as the number of components
    //if (noOfComplete == noOfComponents){
    //    //console.log('complete');
    //    callPHP('complete', 'update_info.php?workOrder='+currentWo+'&job_status=Complete');
    //}
    getDatabase();
    //demo();
    callPHP(dieString,'die_soft.php?'+dieString); 
    createJobTable(currentWo);
}

function createBackerSoftTable(anId){
    removeColHeaders();
    removeElements();

    currentWo = anId;

    //Deactivate filter buttons when table is being displayed
    const showAll = document.getElementById('populate');   
    showAll.disabled = true;

    const showFlat = document.getElementById('flat');   
    showFlat.disabled = true;

    const showHollow = document.getElementById('hollow');   
    showHollow.disabled = true;

    const showOngoing = document.getElementById('ongoing');   
    showOngoing.disabled = true;

    const showComplete = document.getElementById('complete');   
    showComplete.disabled = true;

    const showSearch = document.getElementById('search');   
    showSearch.disabled = true;
    
    [].forEach.call(document.querySelectorAll('.nav-bar'), function (el) {
        el.style.visibility = 'hidden';
      });


    // Add headers to show what job is being edited
    let headString = 'WO: ' + anId + ' -- DIE: ' + infoDict[anId][0] + ' -- CUSTOMER: ' + infoDict[anId][3];
    let jobHeader = document.createElement('h3');
    document.getElementById('col-header-container').appendChild(jobHeader);
    let ntn = document.createTextNode(headString)
    jobHeader.appendChild(ntn);

    // Create required number of rows.
    let numberOfRows = 8;
    for (let i = 0; i <numberOfRows; i++){
        let rowId = 'row' + i;
        let rowClass = 'rowClass';
        let newRow = document.createElement('div');
        newRow.className = rowClass;
        newRow.id = rowId;
        document.getElementById('content-container').appendChild(newRow);
    }

    // Fill rows with columns.
        // Header cols:
        let newCol = document.createElement('div'); // Empty padding Div
        newCol.id = 'paddingCol1';
        newCol.className = 'paddingCol';
        document.getElementById('row0').appendChild(newCol);

        newCol = document.createElement('div');
        newCol.id = 'portFrontCol';
        newCol.className = 'headerCol';
        document.getElementById('row0').appendChild(newCol);
        let colString = 'Backer Front';
        let newTextNode = document.createTextNode(colString);
        document.getElementById('portFrontCol').appendChild(newTextNode);

        newCol = document.createElement('div');
        newCol.id = 'portBackCol';
        newCol.className = 'headerCol';
        document.getElementById('row0').appendChild(newCol);
        colString = 'Backer Back';
        newTextNode = document.createTextNode(colString);
        document.getElementById('portBackCol').appendChild(newTextNode);


                // Subheader cols:
                newCol = document.createElement('div'); // Empty padding Div
                newCol.id = 'paddingCol2';
                newCol.className = 'paddingCol';
                document.getElementById('row1').appendChild(newCol);

                newCol = document.createElement('div');
                newCol.id = 'frontStart';
                newCol.className = 'subheaderColLight';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Start';
                newTextNode = document.createTextNode(colString);
                document.getElementById('frontStart').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'frontFin';
                newCol.className = 'subheaderCol';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Finish';
                newTextNode = document.createTextNode(colString);
                document.getElementById('frontFin').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'backStart';
                newCol.className = 'subheaderColLight';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Start';
                newTextNode = document.createTextNode(colString);
                document.getElementById('backStart').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'backFin';
                newCol.className = 'subheaderCol';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Finish';
                newTextNode = document.createTextNode(colString);
                document.getElementById('backFin').appendChild(newTextNode);

                let nextcolID = '2';
                console.log(mandSoftDict);
                
                let nextcol = 'row' + nextcolID;
                // Subheader cols:
                newCol = document.createElement('div'); // Empty padding Div
                newCol.id = 'rowHead2';
                newCol.className = 'rowHead';
                document.getElementById(nextcol).appendChild(newCol);
                colString = 'BACKER';
                newTextNode = document.createTextNode(colString);
                document.getElementById('rowHead2').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'backerFrontStart';
                newCol.className = 'progCheckLight';
                document.getElementById(nextcol).appendChild(newCol);
                colString = String(backerSoftDict[anId][0]);
                //colString = '-';
                newTextNode = document.createTextNode(colString);
                document.getElementById('backerFrontStart').appendChild(newTextNode);
                document.getElementById('backerFrontStart').addEventListener('click', function(){addDateStamp('backerFrontStart')});
                if(document.getElementById('backerFrontStart').innerText != '-' && document.getElementById('backerFrontStart').innerText != 'N/A'){document.getElementById('backerFrontStart').addEventListener('click', function(){removeDateStamp('backerFrontStart')})};


                newCol = document.createElement('div');
                newCol.id = 'backerFrontFin';
                newCol.className = 'progCheck';
                document.getElementById(nextcol).appendChild(newCol);
                colString = backerSoftDict[anId][1];
                //colString = '-';
                newTextNode = document.createTextNode(colString);
                document.getElementById('backerFrontFin').appendChild(newTextNode);
                if(document.getElementById('backerFrontStart').innerText != '-'){document.getElementById('backerFrontFin').addEventListener('click', function(){addDateStamp('backerFrontFin')})};
                if(document.getElementById('backerFrontFin').innerText != '-' && document.getElementById('backerFrontFin').innerText != 'N/A'){document.getElementById('backerFrontFin').addEventListener('click', function(){removeDateStamp('backerFrontFin')})};

                newCol = document.createElement('div');
                newCol.id = 'backerBackStart';
                newCol.className = 'progCheckLight';
                document.getElementById(nextcol).appendChild(newCol);
                colString = backerSoftDict[anId][2];
                //colString = '-';
                newTextNode = document.createTextNode(colString);
                document.getElementById('backerBackStart').appendChild(newTextNode);
                document.getElementById('backerBackStart').addEventListener('click', function(){addDateStamp('backerBackStart')});
                if(document.getElementById('backerBackStart').innerText != '-' && document.getElementById('backerBackStart').innerText != 'N/A'){document.getElementById('backerBackStart').addEventListener('click', function(){removeDateStamp('backerBackStart')})};

                newCol = document.createElement('div');
                newCol.id = 'backerBackFin';
                newCol.className = 'progCheck';
                document.getElementById(nextcol).appendChild(newCol);
                colString = backerSoftDict[anId][3];
                //colString = '-';
                newTextNode = document.createTextNode(colString);
                document.getElementById('backerBackFin').appendChild(newTextNode);
                if(document.getElementById('backerBackStart').innerText != '-'){document.getElementById('backerBackFin').addEventListener('click', function(){addDateStamp('backerBackFin')})};
                if(document.getElementById('backerBackFin').innerText != '-' && document.getElementById('backerBackFin').innerText != 'N/A'){document.getElementById('backerBackFin').addEventListener('click', function(){removeDateStamp('backerBackFin')})};

                nextcolID++;
                nextcol = 'row' + nextcolID;
        // CNC Table.
        // Header cols:
        newCol = document.createElement('div'); // Empty padding Div
        newCol.id = 'paddingCol3';
        newCol.className = 'paddingCol';
        document.getElementById(nextcol).appendChild(newCol);

        newCol = document.createElement('div');
        newCol.id = 'NCCol1';
        newCol.className = 'headerCol';
        document.getElementById(nextcol).appendChild(newCol);
        colString = 'CNC';
        newTextNode = document.createTextNode(colString);
        document.getElementById('NCCol1').appendChild(newTextNode);


        nextcolID++;
        nextcol = 'row' + nextcolID;
                // Subheader cols:
                newCol = document.createElement('div'); // Empty padding Div
                newCol.id = 'paddingCol2';
                newCol.className = 'paddingCol';
                document.getElementById(nextcol).appendChild(newCol);

                newCol = document.createElement('div');
                newCol.id = 'frontNCH';
                newCol.className = 'subheaderColLight';
                document.getElementById(nextcol).appendChild(newCol);
                colString = 'Bac Front';
                newTextNode = document.createTextNode(colString);
                document.getElementById('frontNCH').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'backNCH';
                newCol.className = 'subheaderCol';
                document.getElementById(nextcol).appendChild(newCol);
                colString = 'Bac Back';
                newTextNode = document.createTextNode(colString);
                document.getElementById('backNCH').appendChild(newTextNode);


                nextcolID++;
                
                nextcol = 'row' + nextcolID;
                // Subheader cols:
                newCol = document.createElement('div'); // Empty padding Div
                newCol.id = 'rowHead4';
                newCol.className = 'rowHead';
                document.getElementById(nextcol).appendChild(newCol);
                colString = 'CNC ID';
                newTextNode = document.createTextNode(colString);
                document.getElementById('rowHead4').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'frontNC';
                newCol.className = 'progCheckLight';
                document.getElementById(nextcol).appendChild(newCol);
                colString = String(backerSoftDict[anId][4]);
                //colString = '-';
                newTextNode = document.createTextNode(colString);
                document.getElementById('frontNC').appendChild(newTextNode);
                //document.getElementById('bolFrontStart').addEventListener('click', function(){addDateStamp('bolFrontStart')});

                newCol = document.createElement('div');
                newCol.id = 'backNC';
                newCol.className = 'progCheck';
                document.getElementById(nextcol).appendChild(newCol);
                colString = backerSoftDict[anId][5];
                //colString = '-';
                newTextNode = document.createTextNode(colString);
                document.getElementById('backNC').appendChild(newTextNode);
                //if(document.getElementById('bolFrontStart').innerText != '-'){document.getElementById('bolFrontFin').addEventListener('click', function(){addDateStamp('bolFrontFin')})};
                
                nextcolID++;

                if(dieHardDict[anId][2] === 'N/A' ){
                    //create buttons to mill die section
                    let NABackMillButton = document.createElement('button');
                    NABackMillButton.appendChild(document.createTextNode('Hard Backmill req.'));
                    NABackMillButton.addEventListener('click', function(){NABackDieMill()});
                    document.getElementById('content-container').appendChild(NABackMillButton);
                    let hnabr = document.createElement('br');
                    document.getElementById('content-container').appendChild(hnabr.cloneNode());
            
                    function NABackDieMill (){
                        //mark lip model start and model finish as 'N/A'
            
                        //Remove current contents of the sign-off boxes
                        const startSignOffBox = document.getElementById('backerFrontStart');
                        while(startSignOffBox.firstChild) startSignOffBox.removeChild(startSignOffBox.firstChild);
                        const finSignOffBox = document.getElementById('backerFrontFin');
                        while(finSignOffBox.firstChild) finSignOffBox.removeChild(finSignOffBox.firstChild);
                
                        //Add new content to sign-off boxes
                        let noApp = "N/A";
                        let newTextNode = document.createTextNode(noApp);
                        document.getElementById('backerFrontStart').appendChild(newTextNode);
                        let noApp2 = "N/A";
                        let newTextNode2 = document.createTextNode(noApp2);
                        document.getElementById('backerFrontFin').appendChild(newTextNode2);
                    }
                }

                
                
    //if(infoDict[currentWo][11] != null){
    //    let scrapNote = document.createElement('p');
    //    scrapNote.appendChild(document.createTextNode(infoDict[currentWo][11]));
    //    document.getElementById('content-container').appendChild(scrapNote);
    //}

    // Create container for buttons
    let new_div = document.createElement('div');
    let newClass ='progressUpdateButtonsContainer';
    new_div.className = newClass;
    new_div.id = 'progressUpdateButtonsContainer';
    document.getElementById('content-container').appendChild(new_div);   
    
    // Create a buttons and event listners
    // let saveButton = document.createElement('button');

    let nabr = document.createElement('br');
    //document.getElementById('addComponentContainer').appendChild(nabr.cloneNode());

    document.getElementById('content-container').appendChild(nabr.cloneNode());

    let discardButton = document.createElement('button');
    let exitButton = document.createElement('button');
    // saveButton.appendChild(document.createTextNode('Save changes'));
    discardButton.appendChild(document.createTextNode('Discard Changes'));
    exitButton.appendChild(document.createTextNode('Save & Exit'));
    // saveButton.addEventListener('click', function(){saveTableValues()});
    discardButton.addEventListener('click', function(){discardSoftBackerTableValues()});
    exitButton.addEventListener('click', function(){savesoftBackerTableValues()});
    // exitButton.addEventListener('click', function(){insertAllElements()});
    // document.getElementById('content-container').appendChild(saveButton);    
    document.getElementById('content-container').appendChild(discardButton);
    document.getElementById('content-container').appendChild(exitButton);
}

function discardSoftBackerTableValues(){
    removeElements();
    createBackerSoftTable(currentWo);
}

function savesoftBackerTableValues(){

    //demo();

    const showAll = document.getElementById('populate');   
    showAll.disabled = false;

    const showFlat = document.getElementById('flat');   
    showFlat.disabled = false;

    const showHollow = document.getElementById('hollow');   
    showHollow.disabled = false;

    const showOngoing = document.getElementById('ongoing');   
    showOngoing.disabled = false;

    const showComplete = document.getElementById('complete');   
    showComplete.disabled = false;

    const showSearch = document.getElementById('search');   
    showSearch.disabled = false;

    [].forEach.call(document.querySelectorAll('.nav-bar'), function (el) {
        el.style.visibility = 'visible';
      });

    let noOfComponents = 0;
    let noOfComplete = 0;

    backerSoftDict[currentWo][0] = document.getElementById('backerFrontStart').innerText;
    backerSoftDict[currentWo][1] = document.getElementById('backerFrontFin').innerText;
    backerSoftDict[currentWo][2] = document.getElementById('backerBackStart').innerText;
    backerSoftDict[currentWo][3] = document.getElementById('backerBackFin').innerText;
    //if (mandDict[currentWo][23] != '-'){
    //    noOfComplete++;
    //}

    backerString = 'backerFrontStart='  + backerSoftDict[currentWo][0] +
                '&backerFrontFin='  + backerSoftDict[currentWo][1] +
                '&backerBackStart='  + backerSoftDict[currentWo][2] +
                '&backerBackFin='  + backerSoftDict[currentWo][3] +
                '&workOrder=' + currentWo;

    // set status to complete if number of 'package finished' elements is the same as the number of components
    //if (noOfComplete == noOfComponents){
    //    //console.log('complete');
    //    callPHP('complete', 'update_info.php?workOrder='+currentWo+'&job_status=Complete');
    //}
    getDatabase();
    //demo();
    callPHP(backerString,'backer_soft.php?'+backerString); 
    createJobTable(currentWo);
}

function createBolSoftTable(anId){
    removeColHeaders();
    removeElements();

    currentWo = anId;

    //Deactivate filter buttons when table is being displayed
    const showAll = document.getElementById('populate');   
    showAll.disabled = true;

    const showFlat = document.getElementById('flat');   
    showFlat.disabled = true;

    const showHollow = document.getElementById('hollow');   
    showHollow.disabled = true;

    const showOngoing = document.getElementById('ongoing');   
    showOngoing.disabled = true;

    const showComplete = document.getElementById('complete');   
    showComplete.disabled = true;

    const showSearch = document.getElementById('search');   
    showSearch.disabled = true;
    
    [].forEach.call(document.querySelectorAll('.nav-bar'), function (el) {
        el.style.visibility = 'hidden';
      });


    // Add headers to show what job is being edited
    let headString = 'WO: ' + anId + ' -- DIE: ' + infoDict[anId][0] + ' -- CUSTOMER: ' + infoDict[anId][3];
    let jobHeader = document.createElement('h3');
    document.getElementById('col-header-container').appendChild(jobHeader);
    let ntn = document.createTextNode(headString)
    jobHeader.appendChild(ntn);

    // Create required number of rows.
    let numberOfRows = 8;
    for (let i = 0; i <numberOfRows; i++){
        let rowId = 'row' + i;
        let rowClass = 'rowClass';
        let newRow = document.createElement('div');
        newRow.className = rowClass;
        newRow.id = rowId;
        document.getElementById('content-container').appendChild(newRow);
    }

    // Fill rows with columns.
        // Header cols:
        let newCol = document.createElement('div'); // Empty padding Div
        newCol.id = 'paddingCol1';
        newCol.className = 'paddingCol';
        document.getElementById('row0').appendChild(newCol);

        newCol = document.createElement('div');
        newCol.id = 'portFrontCol';
        newCol.className = 'headerCol';
        document.getElementById('row0').appendChild(newCol);
        let colString = 'Bolster Front';
        let newTextNode = document.createTextNode(colString);
        document.getElementById('portFrontCol').appendChild(newTextNode);

        newCol = document.createElement('div');
        newCol.id = 'portBackCol';
        newCol.className = 'headerCol';
        document.getElementById('row0').appendChild(newCol);
        colString = 'Bolster Back';
        newTextNode = document.createTextNode(colString);
        document.getElementById('portBackCol').appendChild(newTextNode);


                // Subheader cols:
                newCol = document.createElement('div'); // Empty padding Div
                newCol.id = 'paddingCol2';
                newCol.className = 'paddingCol';
                document.getElementById('row1').appendChild(newCol);

                newCol = document.createElement('div');
                newCol.id = 'frontStart';
                newCol.className = 'subheaderColLight';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Start';
                newTextNode = document.createTextNode(colString);
                document.getElementById('frontStart').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'frontFin';
                newCol.className = 'subheaderCol';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Finish';
                newTextNode = document.createTextNode(colString);
                document.getElementById('frontFin').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'backStart';
                newCol.className = 'subheaderColLight';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Start';
                newTextNode = document.createTextNode(colString);
                document.getElementById('backStart').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'backFin';
                newCol.className = 'subheaderCol';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Finish';
                newTextNode = document.createTextNode(colString);
                document.getElementById('backFin').appendChild(newTextNode);

                let nextcolID = '2';
                console.log(mandSoftDict);
                
                let nextcol = 'row' + nextcolID;
                // Subheader cols:
                newCol = document.createElement('div'); // Empty padding Div
                newCol.id = 'rowHead2';
                newCol.className = 'rowHead';
                document.getElementById(nextcol).appendChild(newCol);
                colString = 'BOLSTER';
                newTextNode = document.createTextNode(colString);
                document.getElementById('rowHead2').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'bolFrontStart';
                newCol.className = 'progCheckLight';
                document.getElementById(nextcol).appendChild(newCol);
                colString = String(bolSoftDict[anId][0]);
                //colString = '-';
                newTextNode = document.createTextNode(colString);
                document.getElementById('bolFrontStart').appendChild(newTextNode);
                document.getElementById('bolFrontStart').addEventListener('click', function(){addDateStamp('bolFrontStart')});
                if(document.getElementById('bolFrontStart').innerText != '-' && document.getElementById('bolFrontStart').innerText != 'N/A'){document.getElementById('bolFrontStart').addEventListener('click', function(){removeDateStamp('bolFrontStart')})};

                newCol = document.createElement('div');
                newCol.id = 'bolFrontFin';
                newCol.className = 'progCheck';
                document.getElementById(nextcol).appendChild(newCol);
                colString = bolSoftDict[anId][1];
                //colString = '-';
                newTextNode = document.createTextNode(colString);
                document.getElementById('bolFrontFin').appendChild(newTextNode);
                if(document.getElementById('bolFrontStart').innerText != '-'){document.getElementById('bolFrontFin').addEventListener('click', function(){addDateStamp('bolFrontFin')})};
                if(document.getElementById('bolFrontFin').innerText != '-' && document.getElementById('bolFrontFin').innerText != 'N/A'){document.getElementById('bolFrontFin').addEventListener('click', function(){removeDateStamp('bolFrontFin')})};

                newCol = document.createElement('div');
                newCol.id = 'bolBackStart';
                newCol.className = 'progCheckLight';
                document.getElementById(nextcol).appendChild(newCol);
                colString = bolSoftDict[anId][2];
                //colString = '-';
                newTextNode = document.createTextNode(colString);
                document.getElementById('bolBackStart').appendChild(newTextNode);
                document.getElementById('bolBackStart').addEventListener('click', function(){addDateStamp('bolBackStart')});
                if(document.getElementById('bolBackStart').innerText != '-' && document.getElementById('bolBackStart').innerText != 'N/A'){document.getElementById('bolBackStart').addEventListener('click', function(){removeDateStamp('bolBackStart')})};

                newCol = document.createElement('div');
                newCol.id = 'bolBackFin';
                newCol.className = 'progCheck';
                document.getElementById(nextcol).appendChild(newCol);
                colString = bolSoftDict[anId][3];
                //colString = '-';
                newTextNode = document.createTextNode(colString);
                document.getElementById('bolBackFin').appendChild(newTextNode);
                if(document.getElementById('bolBackStart').innerText != '-'){document.getElementById('bolBackFin').addEventListener('click', function(){addDateStamp('bolBackFin')})};
                if(document.getElementById('bolBackFin').innerText != '-' && document.getElementById('bolBackFin').innerText != 'N/A'){document.getElementById('bolBackFin').addEventListener('click', function(){removeDateStamp('bolBackFin')})};

                nextcolID++;
                nextcol = 'row' + nextcolID;
        // CNC Table.
        // Header cols:
        newCol = document.createElement('div'); // Empty padding Div
        newCol.id = 'paddingCol3';
        newCol.className = 'paddingCol';
        document.getElementById(nextcol).appendChild(newCol);

        newCol = document.createElement('div');
        newCol.id = 'NCCol1';
        newCol.className = 'headerCol';
        document.getElementById(nextcol).appendChild(newCol);
        colString = 'CNC';
        newTextNode = document.createTextNode(colString);
        document.getElementById('NCCol1').appendChild(newTextNode);


        nextcolID++;
        nextcol = 'row' + nextcolID;
                // Subheader cols:
                newCol = document.createElement('div'); // Empty padding Div
                newCol.id = 'paddingCol2';
                newCol.className = 'paddingCol';
                document.getElementById(nextcol).appendChild(newCol);

                newCol = document.createElement('div');
                newCol.id = 'frontNCH';
                newCol.className = 'subheaderColLight';
                document.getElementById(nextcol).appendChild(newCol);
                colString = 'Bol Front';
                newTextNode = document.createTextNode(colString);
                document.getElementById('frontNCH').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'backNCH';
                newCol.className = 'subheaderCol';
                document.getElementById(nextcol).appendChild(newCol);
                colString = 'Bol Back';
                newTextNode = document.createTextNode(colString);
                document.getElementById('backNCH').appendChild(newTextNode);


                nextcolID++;
                
                nextcol = 'row' + nextcolID;
                // Subheader cols:
                newCol = document.createElement('div'); // Empty padding Div
                newCol.id = 'rowHead4';
                newCol.className = 'rowHead';
                document.getElementById(nextcol).appendChild(newCol);
                colString = 'CNC ID';
                newTextNode = document.createTextNode(colString);
                document.getElementById('rowHead4').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'frontNC';
                newCol.className = 'progCheckLight';
                document.getElementById(nextcol).appendChild(newCol);
                colString = String(bolSoftDict[anId][4]);
                //colString = '-';
                newTextNode = document.createTextNode(colString);
                document.getElementById('frontNC').appendChild(newTextNode);
                //document.getElementById('bolFrontStart').addEventListener('click', function(){addDateStamp('bolFrontStart')});

                newCol = document.createElement('div');
                newCol.id = 'backNC';
                newCol.className = 'progCheck';
                document.getElementById(nextcol).appendChild(newCol);
                colString = bolSoftDict[anId][5];
                //colString = '-';
                newTextNode = document.createTextNode(colString);
                document.getElementById('backNC').appendChild(newTextNode);
                //if(document.getElementById('bolFrontStart').innerText != '-'){document.getElementById('bolFrontFin').addEventListener('click', function(){addDateStamp('bolFrontFin')})};
                
                nextcolID++;
                
                
    //if(infoDict[currentWo][11] != null){
    //    let scrapNote = document.createElement('p');
    //    scrapNote.appendChild(document.createTextNode(infoDict[currentWo][11]));
    //    document.getElementById('content-container').appendChild(scrapNote);
    //}

    // Create container for buttons
    let new_div = document.createElement('div');
    let newClass ='progressUpdateButtonsContainer';
    new_div.className = newClass;
    new_div.id = 'progressUpdateButtonsContainer';
    document.getElementById('content-container').appendChild(new_div);   
    
    // Create a buttons and event listners
    // let saveButton = document.createElement('button');

    let nabr = document.createElement('br');
    //document.getElementById('addComponentContainer').appendChild(nabr.cloneNode());

    document.getElementById('content-container').appendChild(nabr.cloneNode());

    let discardButton = document.createElement('button');
    let exitButton = document.createElement('button');
    // saveButton.appendChild(document.createTextNode('Save changes'));
    discardButton.appendChild(document.createTextNode('Discard Changes'));
    exitButton.appendChild(document.createTextNode('Save & Exit'));
    // saveButton.addEventListener('click', function(){saveTableValues()});
    discardButton.addEventListener('click', function(){discardSoftBolTableValues()});
    exitButton.addEventListener('click', function(){savesoftBolTableValues()});
    // exitButton.addEventListener('click', function(){insertAllElements()});
    // document.getElementById('content-container').appendChild(saveButton);    
    document.getElementById('content-container').appendChild(discardButton);
    document.getElementById('content-container').appendChild(exitButton);
}

function discardSoftBolTableValues(){
    removeElements();
    createBolSoftTable(currentWo);
}

function savesoftBolTableValues(){

    //demo();

    const showAll = document.getElementById('populate');   
    showAll.disabled = false;

    const showFlat = document.getElementById('flat');   
    showFlat.disabled = false;

    const showHollow = document.getElementById('hollow');   
    showHollow.disabled = false;

    const showOngoing = document.getElementById('ongoing');   
    showOngoing.disabled = false;

    const showComplete = document.getElementById('complete');   
    showComplete.disabled = false;

    const showSearch = document.getElementById('search');   
    showSearch.disabled = false;

    [].forEach.call(document.querySelectorAll('.nav-bar'), function (el) {
        el.style.visibility = 'visible';
      });

    let noOfComponents = 0;
    let noOfComplete = 0;

    bolSoftDict[currentWo][0] = document.getElementById('bolFrontStart').innerText;
    bolSoftDict[currentWo][1] = document.getElementById('bolFrontFin').innerText;
    bolSoftDict[currentWo][2] = document.getElementById('bolBackStart').innerText;
    bolSoftDict[currentWo][3] = document.getElementById('bolBackFin').innerText;
    //if (mandDict[currentWo][23] != '-'){
    //    noOfComplete++;
    //}

    bolString = 'bolFrontStart='  + bolSoftDict[currentWo][0] +
                '&bolFrontFin='  + bolSoftDict[currentWo][1] +
                '&bolBackStart='  + bolSoftDict[currentWo][2] +
                '&bolBackFin='  + bolSoftDict[currentWo][3] +
                '&workOrder=' + currentWo;

    // set status to complete if number of 'package finished' elements is the same as the number of components
    //if (noOfComplete == noOfComponents){
    //    //console.log('complete');
    //    callPHP('complete', 'update_info.php?workOrder='+currentWo+'&job_status=Complete');
    //}
    getDatabase();
    //demo();
    callPHP(bolString,'bol_soft.php?'+bolString); 
    createJobTable(currentWo);
}

function createMandrelHardTable(anId){
    removeColHeaders();
    removeElements();

    currentWo = anId;

    //Deactivate filter buttons when table is being displayed
    const showAll = document.getElementById('populate');   
    showAll.disabled = true;

    const showFlat = document.getElementById('flat');   
    showFlat.disabled = true;

    const showHollow = document.getElementById('hollow');   
    showHollow.disabled = true;

    const showOngoing = document.getElementById('ongoing');   
    showOngoing.disabled = true;

    const showComplete = document.getElementById('complete');   
    showComplete.disabled = true;

    const showSearch = document.getElementById('search');   
    showSearch.disabled = true;
    
    [].forEach.call(document.querySelectorAll('.nav-bar'), function (el) {
        el.style.visibility = 'hidden';
      });


    // Add headers to show what job is being edited
    let headString = 'WO: ' + anId + ' -- DIE: ' + infoDict[anId][0] + ' -- CUSTOMER: ' + infoDict[anId][3];
    let jobHeader = document.createElement('h3');
    document.getElementById('col-header-container').appendChild(jobHeader);
    let ntn = document.createTextNode(headString)
    jobHeader.appendChild(ntn);

    // Create required number of rows.
    let numberOfRows = 8;
    for (let i = 0; i <numberOfRows; i++){
        let rowId = 'row' + i;
        let rowClass = 'rowClass';
        let newRow = document.createElement('div');
        newRow.className = rowClass;
        newRow.id = rowId;
        document.getElementById('content-container').appendChild(newRow);
    }

    // Fill rows with columns.
        // Header cols:
        let newCol = document.createElement('div'); // Empty padding Div
        newCol.id = 'paddingCol1';
        newCol.className = 'paddingCol';
        document.getElementById('row0').appendChild(newCol);

        newCol = document.createElement('div');
        newCol.id = 'portFrontCol';
        newCol.className = 'headerCol';
        document.getElementById('row0').appendChild(newCol);
        let colString = 'Port-Hard';
        let newTextNode = document.createTextNode(colString);
        document.getElementById('portFrontCol').appendChild(newTextNode);

        newCol = document.createElement('div');
        newCol.id = 'portBackCol';
        newCol.className = 'headerCol';
        document.getElementById('row0').appendChild(newCol);
        colString = 'Port-Polish';
        newTextNode = document.createTextNode(colString);
        document.getElementById('portBackCol').appendChild(newTextNode);


                // Subheader cols:
                newCol = document.createElement('div'); // Empty padding Div
                newCol.id = 'paddingCol2';
                newCol.className = 'paddingCol';
                document.getElementById('row1').appendChild(newCol);

                newCol = document.createElement('div');
                newCol.id = 'hardStart';
                newCol.className = 'subheaderColLight';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Start';
                newTextNode = document.createTextNode(colString);
                document.getElementById('hardStart').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'hardFin';
                newCol.className = 'subheaderCol';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Finish';
                newTextNode = document.createTextNode(colString);
                document.getElementById('hardFin').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'polishStart';
                newCol.className = 'subheaderColLight';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Start';
                newTextNode = document.createTextNode(colString);
                document.getElementById('polishStart').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'polishFin';
                newCol.className = 'subheaderCol';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Finish';
                newTextNode = document.createTextNode(colString);
                document.getElementById('polishFin').appendChild(newTextNode);

                let nextcolID = '2';
                console.log(mandSoftDict);
                
                let nextcol = 'row' + nextcolID;
                // Subheader cols:
                newCol = document.createElement('div'); // Empty padding Div
                newCol.id = 'rowHead2';
                newCol.className = 'rowHead';
                document.getElementById(nextcol).appendChild(newCol);
                colString = 'MANDREL';
                newTextNode = document.createTextNode(colString);
                document.getElementById('rowHead2').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'mandHardStart';
                newCol.className = 'progCheckLight';
                document.getElementById(nextcol).appendChild(newCol);
                colString = String(mandHardDict[anId][0]);
                //colString = '-';
                newTextNode = document.createTextNode(colString);
                document.getElementById('mandHardStart').appendChild(newTextNode);
                document.getElementById('mandHardStart').addEventListener('click', function(){addDateStamp('mandHardStart')});
                if(document.getElementById('mandHardStart').innerText != '-' && document.getElementById('mandHardStart').innerText != 'N/A'){document.getElementById('mandHardStart').addEventListener('click', function(){removeDateStamp('mandHardStart')})};

                newCol = document.createElement('div');
                newCol.id = 'mandHardFin';
                newCol.className = 'progCheck';
                document.getElementById(nextcol).appendChild(newCol);
                colString = mandHardDict[anId][1];
                //colString = '-';
                newTextNode = document.createTextNode(colString);
                document.getElementById('mandHardFin').appendChild(newTextNode);
                if(document.getElementById('mandHardStart').innerText != '-'){document.getElementById('mandHardFin').addEventListener('click', function(){addDateStamp('mandHardFin')})};
                if(document.getElementById('mandHardFin').innerText != '-' && document.getElementById('mandHardFin').innerText != 'N/A'){document.getElementById('mandHardFin').addEventListener('click', function(){removeDateStamp('mandHardFin')})};

                newCol = document.createElement('div');
                newCol.id = 'mandPolishStart';
                newCol.className = 'progCheckLight';
                document.getElementById(nextcol).appendChild(newCol);
                colString = mandHardDict[anId][2];
                //colString = '-';
                newTextNode = document.createTextNode(colString);
                document.getElementById('mandPolishStart').appendChild(newTextNode);
                document.getElementById('mandPolishStart').addEventListener('click', function(){addDateStamp('mandPolishStart')});
                if(document.getElementById('mandPolishStart').innerText != '-' && document.getElementById('mandPolishStart').innerText != 'N/A'){document.getElementById('mandPolishStart').addEventListener('click', function(){removeDateStamp('mandPolishStart')})};

                newCol = document.createElement('div');
                newCol.id = 'mandPolishFin';
                newCol.className = 'progCheck';
                document.getElementById(nextcol).appendChild(newCol);
                colString = mandHardDict[anId][3];
                //colString = '-';
                newTextNode = document.createTextNode(colString);
                document.getElementById('mandPolishFin').appendChild(newTextNode);
                if(document.getElementById('mandPolishStart').innerText != '-'){document.getElementById('mandPolishFin').addEventListener('click', function(){addDateStamp('mandPolishFin')})};
                if(document.getElementById('mandPolishFin').innerText != '-' && document.getElementById('mandPolishFin').innerText != 'N/A'){document.getElementById('mandPolishFin').addEventListener('click', function(){removeDateStamp('mandPolishFin')})};

                nextcolID++;
                nextcol = 'row' + nextcolID;
        // CNC Table.
        // Header cols:
        newCol = document.createElement('div'); // Empty padding Div
        newCol.id = 'paddingCol3';
        newCol.className = 'paddingCol';
        document.getElementById(nextcol).appendChild(newCol);

        newCol = document.createElement('div');
        newCol.id = 'NCCol1';
        newCol.className = 'headerCol';
        document.getElementById(nextcol).appendChild(newCol);
        colString = 'CNC';
        newTextNode = document.createTextNode(colString);
        document.getElementById('NCCol1').appendChild(newTextNode);


        nextcolID++;
        nextcol = 'row' + nextcolID;
        // Subheader cols:
        newCol = document.createElement('div'); // Empty padding Div
        newCol.id = 'paddingCol2';
        newCol.className = 'paddingCol';
        document.getElementById(nextcol).appendChild(newCol);

        newCol = document.createElement('div');
        newCol.id = 'frontNCH';
        newCol.className = 'subheaderColLight';
        document.getElementById(nextcol).appendChild(newCol);
        colString = 'Mand Hard';
        newTextNode = document.createTextNode(colString);
        document.getElementById('frontNCH').appendChild(newTextNode);

        newCol = document.createElement('div');
        newCol.id = 'backNCH';
        newCol.className = 'subheaderCol';
        document.getElementById(nextcol).appendChild(newCol);
        colString = 'Port Polish';
        newTextNode = document.createTextNode(colString);
        document.getElementById('backNCH').appendChild(newTextNode);


        nextcolID++;
        
        nextcol = 'row' + nextcolID;
        // Subheader cols:
        newCol = document.createElement('div'); // Empty padding Div
        newCol.id = 'rowHead4';
        newCol.className = 'rowHead';
        document.getElementById(nextcol).appendChild(newCol);
        colString = 'CNC ID';
        newTextNode = document.createTextNode(colString);
        document.getElementById('rowHead4').appendChild(newTextNode);

        newCol = document.createElement('div');
        newCol.id = 'frontNC';
        newCol.className = 'progCheckLight';
        document.getElementById(nextcol).appendChild(newCol);
        colString = String(mandHardDict[anId][4]);
        //colString = '-';
        newTextNode = document.createTextNode(colString);
        document.getElementById('frontNC').appendChild(newTextNode);
        //document.getElementById('bolFrontStart').addEventListener('click', function(){addDateStamp('bolFrontStart')});

        newCol = document.createElement('div');
        newCol.id = 'backNC';
        newCol.className = 'progCheck';
        document.getElementById(nextcol).appendChild(newCol);
        colString = mandHardDict[anId][5];
        //colString = '-';
        newTextNode = document.createTextNode(colString);
        document.getElementById('backNC').appendChild(newTextNode);
        //if(document.getElementById('bolFrontStart').innerText != '-'){document.getElementById('bolFrontFin').addEventListener('click', function(){addDateStamp('bolFrontFin')})};
        
        nextcolID++;
                
    //if(infoDict[currentWo][11] != null){
    //    let scrapNote = document.createElement('p');
    //    scrapNote.appendChild(document.createTextNode(infoDict[currentWo][11]));
    //    document.getElementById('content-container').appendChild(scrapNote);
    //}

    // Create container for buttons
    let new_div = document.createElement('div');
    let newClass ='progressUpdateButtonsContainer';
    new_div.className = newClass;
    new_div.id = 'progressUpdateButtonsContainer';
    document.getElementById('content-container').appendChild(new_div);   
    
    // Create a buttons and event listners
    // let saveButton = document.createElement('button');

    let nabr = document.createElement('br');
    //document.getElementById('addComponentContainer').appendChild(nabr.cloneNode());

    document.getElementById('content-container').appendChild(nabr.cloneNode());

    let discardButton = document.createElement('button');
    let exitButton = document.createElement('button');
    // saveButton.appendChild(document.createTextNode('Save changes'));
    discardButton.appendChild(document.createTextNode('Discard Changes'));
    exitButton.appendChild(document.createTextNode('Save & Exit'));
    // saveButton.addEventListener('click', function(){saveTableValues()});
    discardButton.addEventListener('click', function(){discardHardMandTableValues()});
    exitButton.addEventListener('click', function(){saveHardMandTableValues()});
    // exitButton.addEventListener('click', function(){insertAllElements()});
    // document.getElementById('content-container').appendChild(saveButton);    
    document.getElementById('content-container').appendChild(discardButton);
    document.getElementById('content-container').appendChild(exitButton);
}

function discardHardMandTableValues(){
    removeElements();
    createMandrelHardTable(currentWo);
}

function saveHardMandTableValues(){

    //demo();

    const showAll = document.getElementById('populate');   
    showAll.disabled = false;

    const showFlat = document.getElementById('flat');   
    showFlat.disabled = false;

    const showHollow = document.getElementById('hollow');   
    showHollow.disabled = false;

    const showOngoing = document.getElementById('ongoing');   
    showOngoing.disabled = false;

    const showComplete = document.getElementById('complete');   
    showComplete.disabled = false;

    const showSearch = document.getElementById('search');   
    showSearch.disabled = false;

    [].forEach.call(document.querySelectorAll('.nav-bar'), function (el) {
        el.style.visibility = 'visible';
      });

    let noOfComponents = 0;
    let noOfComplete = 0;

    mandHardDict[currentWo][0] = document.getElementById('mandHardStart').innerText;
    mandHardDict[currentWo][1] = document.getElementById('mandHardFin').innerText;
    mandHardDict[currentWo][2] = document.getElementById('mandPolishStart').innerText;
    mandHardDict[currentWo][3] = document.getElementById('mandPolishFin').innerText;
    //if (mandDict[currentWo][23] != '-'){
    //    noOfComplete++;
    //}

    mandString = 'mandHardStart='  + mandHardDict[currentWo][0] +
                '&mandHardFin='  + mandHardDict[currentWo][1] +
                '&mandPolishStart='  + mandHardDict[currentWo][2] +
                '&mandPolishFin='  + mandHardDict[currentWo][3] +
                '&workOrder=' + currentWo;

    // set status to complete if number of 'package finished' elements is the same as the number of components
    //if (noOfComplete == noOfComponents){
    //    //console.log('complete');
    //    callPHP('complete', 'update_info.php?workOrder='+currentWo+'&job_status=Complete');
    //}
    getDatabase();
    //demo();
    callPHP(mandString,'mand_hard.php?'+mandString); 
    createJobTable(currentWo);
}

function createDieHardTable(anId){
    removeColHeaders();
    removeElements();

    currentWo = anId;

    //Deactivate filter buttons when table is being displayed
    const showAll = document.getElementById('populate');   
    showAll.disabled = true;

    const showFlat = document.getElementById('flat');   
    showFlat.disabled = true;

    const showHollow = document.getElementById('hollow');   
    showHollow.disabled = true;

    const showOngoing = document.getElementById('ongoing');   
    showOngoing.disabled = true;

    const showComplete = document.getElementById('complete');   
    showComplete.disabled = true;

    const showSearch = document.getElementById('search');   
    showSearch.disabled = true;
    
    [].forEach.call(document.querySelectorAll('.nav-bar'), function (el) {
        el.style.visibility = 'hidden';
      });


    // Add headers to show what job is being edited
    let headString = 'WO: ' + anId + ' -- DIE: ' + infoDict[anId][0] + ' -- CUSTOMER: ' + infoDict[anId][3];
    let jobHeader = document.createElement('h3');
    document.getElementById('col-header-container').appendChild(jobHeader);
    let ntn = document.createTextNode(headString)
    jobHeader.appendChild(ntn);

    // Create required number of rows.
    let numberOfRows = 8;
    for (let i = 0; i <numberOfRows; i++){
        let rowId = 'row' + i;
        let rowClass = 'rowClass';
        let newRow = document.createElement('div');
        newRow.className = rowClass;
        newRow.id = rowId;
        document.getElementById('content-container').appendChild(newRow);
    }

    // Fill rows with columns.
        // Header cols:
        let newCol = document.createElement('div'); // Empty padding Div
        newCol.id = 'paddingCol1';
        newCol.className = 'paddingCol';
        document.getElementById('row0').appendChild(newCol);

        newCol = document.createElement('div');
        newCol.id = 'portFrontCol';
        newCol.className = 'headerCol';
        document.getElementById('row0').appendChild(newCol);
        let colString = 'Die-Hard';
        let newTextNode = document.createTextNode(colString);
        document.getElementById('portFrontCol').appendChild(newTextNode);

        newCol = document.createElement('div');
        newCol.id = 'portBackCol';
        newCol.className = 'headerCol';
        document.getElementById('row0').appendChild(newCol);
        colString = 'B/mill-Hard';
        newTextNode = document.createTextNode(colString);
        document.getElementById('portBackCol').appendChild(newTextNode);


                // Subheader cols:
                newCol = document.createElement('div'); // Empty padding Div
                newCol.id = 'paddingCol2';
                newCol.className = 'paddingCol';
                document.getElementById('row1').appendChild(newCol);

                newCol = document.createElement('div');
                newCol.id = 'frontStart';
                newCol.className = 'subheaderColLight';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Start';
                newTextNode = document.createTextNode(colString);
                document.getElementById('frontStart').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'frontFin';
                newCol.className = 'subheaderCol';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Finish';
                newTextNode = document.createTextNode(colString);
                document.getElementById('frontFin').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'backStart';
                newCol.className = 'subheaderColLight';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Start';
                newTextNode = document.createTextNode(colString);
                document.getElementById('backStart').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'backFin';
                newCol.className = 'subheaderCol';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Finish';
                newTextNode = document.createTextNode(colString);
                document.getElementById('backFin').appendChild(newTextNode);

                let nextcolID = '2';
                console.log(mandSoftDict);
                
                let nextcol = 'row' + nextcolID;
                // Subheader cols:
                newCol = document.createElement('div'); // Empty padding Div
                newCol.id = 'rowHead2';
                newCol.className = 'rowHead';
                document.getElementById(nextcol).appendChild(newCol);
                colString = 'DIEPLATE';
                newTextNode = document.createTextNode(colString);
                document.getElementById('rowHead2').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'dieFrontStart';
                newCol.className = 'progCheckLight';
                document.getElementById(nextcol).appendChild(newCol);
                colString = String(dieHardDict[anId][0]);
                //colString = '-';
                newTextNode = document.createTextNode(colString);
                document.getElementById('dieFrontStart').appendChild(newTextNode);
                document.getElementById('dieFrontStart').addEventListener('click', function(){addDateStamp('dieFrontStart')});
                if(document.getElementById('dieFrontStart').innerText != '-' && document.getElementById('dieFrontStart').innerText != 'N/A'){document.getElementById('dieFrontStart').addEventListener('click', function(){removeDateStamp('dieFrontStart')})};

                newCol = document.createElement('div');
                newCol.id = 'dieFrontFin';
                newCol.className = 'progCheck';
                document.getElementById(nextcol).appendChild(newCol);
                colString = dieHardDict[anId][1];
                //colString = '-';
                newTextNode = document.createTextNode(colString);
                document.getElementById('dieFrontFin').appendChild(newTextNode);
                if(document.getElementById('dieFrontStart').innerText != '-'){document.getElementById('dieFrontFin').addEventListener('click', function(){addDateStamp('dieFrontFin')})};
                if(document.getElementById('dieFrontFin').innerText != '-' && document.getElementById('dieFrontFin').innerText != 'N/A'){document.getElementById('dieFrontFin').addEventListener('click', function(){removeDateStamp('dieFrontFin')})};

                newCol = document.createElement('div');
                newCol.id = 'dieBackStart';
                newCol.className = 'progCheckLight';
                document.getElementById(nextcol).appendChild(newCol);
                colString = dieHardDict[anId][2];
                //colString = '-';
                newTextNode = document.createTextNode(colString);
                document.getElementById('dieBackStart').appendChild(newTextNode);
                document.getElementById('dieBackStart').addEventListener('click', function(){addDateStamp('dieBackStart')});
                if(document.getElementById('dieBackStart').innerText != '-' && document.getElementById('dieBackStart').innerText != 'N/A'){document.getElementById('dieBackStart').addEventListener('click', function(){removeDateStamp('dieBackStart')})};

                newCol = document.createElement('div');
                newCol.id = 'dieBackFin';
                newCol.className = 'progCheck';
                document.getElementById(nextcol).appendChild(newCol);
                colString = dieHardDict[anId][3];
                //colString = '-';
                newTextNode = document.createTextNode(colString);
                document.getElementById('dieBackFin').appendChild(newTextNode);
                if(document.getElementById('dieBackStart').innerText != '-'){document.getElementById('dieBackFin').addEventListener('click', function(){addDateStamp('dieBackFin')})};
                if(document.getElementById('dieBackFin').innerText != '-' && document.getElementById('dieBackFin').innerText != 'N/A'){document.getElementById('dieBackFin').addEventListener('click', function(){removeDateStamp('dieBackFin')})};

                nextcolID++;
                nextcol = 'row' + nextcolID;
        // CNC Table.
        // Header cols:
        newCol = document.createElement('div'); // Empty padding Div
        newCol.id = 'paddingCol3';
        newCol.className = 'paddingCol';
        document.getElementById(nextcol).appendChild(newCol);

        newCol = document.createElement('div');
        newCol.id = 'NCCol1';
        newCol.className = 'headerCol';
        document.getElementById(nextcol).appendChild(newCol);
        colString = 'CNC';
        newTextNode = document.createTextNode(colString);
        document.getElementById('NCCol1').appendChild(newTextNode);


        nextcolID++;
        nextcol = 'row' + nextcolID;
        // Subheader cols:
        newCol = document.createElement('div'); // Empty padding Div
        newCol.id = 'paddingCol2';
        newCol.className = 'paddingCol';
        document.getElementById(nextcol).appendChild(newCol);

        newCol = document.createElement('div');
        newCol.id = 'frontNCH';
        newCol.className = 'subheaderColLight';
        document.getElementById(nextcol).appendChild(newCol);
        colString = 'Die Front';
        newTextNode = document.createTextNode(colString);
        document.getElementById('frontNCH').appendChild(newTextNode);

        newCol = document.createElement('div');
        newCol.id = 'backNCH';
        newCol.className = 'subheaderCol';
        document.getElementById(nextcol).appendChild(newCol);
        colString = 'Die Back';
        newTextNode = document.createTextNode(colString);
        document.getElementById('backNCH').appendChild(newTextNode);


        nextcolID++;
        
        nextcol = 'row' + nextcolID;
        // Subheader cols:
        newCol = document.createElement('div'); // Empty padding Div
        newCol.id = 'rowHead4';
        newCol.className = 'rowHead';
        document.getElementById(nextcol).appendChild(newCol);
        colString = 'CNC ID';
        newTextNode = document.createTextNode(colString);
        document.getElementById('rowHead4').appendChild(newTextNode);

        newCol = document.createElement('div');
        newCol.id = 'frontNC';
        newCol.className = 'progCheckLight';
        document.getElementById(nextcol).appendChild(newCol);
        colString = String(dieHardDict[anId][4]);
        //colString = '-';
        newTextNode = document.createTextNode(colString);
        document.getElementById('frontNC').appendChild(newTextNode);
        //document.getElementById('bolFrontStart').addEventListener('click', function(){addDateStamp('bolFrontStart')});

        newCol = document.createElement('div');
        newCol.id = 'backNC';
        newCol.className = 'progCheck';
        document.getElementById(nextcol).appendChild(newCol);
        colString = dieHardDict[anId][5];
        //colString = '-';
        newTextNode = document.createTextNode(colString);
        document.getElementById('backNC').appendChild(newTextNode);
        //if(document.getElementById('bolFrontStart').innerText != '-'){document.getElementById('bolFrontFin').addEventListener('click', function(){addDateStamp('bolFrontFin')})};
        
        nextcolID++;                

        if(dieHardDict[anId][2] === 'N/A' ){
            //create buttons to mill die section
            let NAHDieMillButton = document.createElement('button');
            NAHDieMillButton.appendChild(document.createTextNode('Hard Backmill req.'));
            NAHDieMillButton.addEventListener('click', function(){NAHardDieMill()});
            document.getElementById('content-container').appendChild(NAHDieMillButton);
            let hnabr = document.createElement('br');
            document.getElementById('content-container').appendChild(hnabr.cloneNode());
    
            function NAHardDieMill (){
                //mark lip model start and model finish as 'N/A'
    
                //Remove current contents of the sign-off boxes
                const startSignOffBox = document.getElementById('dieBackStart');
                while(startSignOffBox.firstChild) startSignOffBox.removeChild(startSignOffBox.firstChild);
                const finSignOffBox = document.getElementById('dieBackFin');
                while(finSignOffBox.firstChild) finSignOffBox.removeChild(finSignOffBox.firstChild);
        
                //Add new content to sign-off boxes
                let noApp = "-";
                let newTextNode = document.createTextNode(noApp);
                document.getElementById('dieBackStart').appendChild(newTextNode);
                let noApp2 = "-";
                let newTextNode2 = document.createTextNode(noApp2);
                document.getElementById('dieBackFin').appendChild(newTextNode2);
            }
        }
                
    //if(infoDict[currentWo][11] != null){
    //    let scrapNote = document.createElement('p');
    //    scrapNote.appendChild(document.createTextNode(infoDict[currentWo][11]));
    //    document.getElementById('content-container').appendChild(scrapNote);
    //}

    // Create container for buttons
    let new_div = document.createElement('div');
    let newClass ='progressUpdateButtonsContainer';
    new_div.className = newClass;
    new_div.id = 'progressUpdateButtonsContainer';
    document.getElementById('content-container').appendChild(new_div);   
    
    // Create a buttons and event listners
    // let saveButton = document.createElement('button');

    let nabr = document.createElement('br');
    //document.getElementById('addComponentContainer').appendChild(nabr.cloneNode());

    document.getElementById('content-container').appendChild(nabr.cloneNode());

    let discardButton = document.createElement('button');
    let exitButton = document.createElement('button');
    // saveButton.appendChild(document.createTextNode('Save changes'));
    discardButton.appendChild(document.createTextNode('Discard Changes'));
    exitButton.appendChild(document.createTextNode('Save & Exit'));
    // saveButton.addEventListener('click', function(){saveTableValues()});
    discardButton.addEventListener('click', function(){discardDieMandTableValues()});
    exitButton.addEventListener('click', function(){saveHardDieTableValues()});
    // exitButton.addEventListener('click', function(){insertAllElements()});
    // document.getElementById('content-container').appendChild(saveButton);    
    document.getElementById('content-container').appendChild(discardButton);
    document.getElementById('content-container').appendChild(exitButton);
}

function discardDieMandTableValues(){
    removeElements();
    createDieHardTable(currentWo);
}

function saveHardDieTableValues(){

    //demo();

    const showAll = document.getElementById('populate');   
    showAll.disabled = false;

    const showFlat = document.getElementById('flat');   
    showFlat.disabled = false;

    const showHollow = document.getElementById('hollow');   
    showHollow.disabled = false;

    const showOngoing = document.getElementById('ongoing');   
    showOngoing.disabled = false;

    const showComplete = document.getElementById('complete');   
    showComplete.disabled = false;

    const showSearch = document.getElementById('search');   
    showSearch.disabled = false;

    [].forEach.call(document.querySelectorAll('.nav-bar'), function (el) {
        el.style.visibility = 'visible';
      });

    let noOfComponents = 0;
    let noOfComplete = 0;

    dieHardDict[currentWo][0] = document.getElementById('dieFrontStart').innerText;
    dieHardDict[currentWo][1] = document.getElementById('dieFrontFin').innerText;
    dieHardDict[currentWo][2] = document.getElementById('dieBackStart').innerText;
    dieHardDict[currentWo][3] = document.getElementById('dieBackFin').innerText;
    //if (mandDict[currentWo][23] != '-'){
    //    noOfComplete++;
    //}

    dieString = 'dieFrontStart='  + dieHardDict[currentWo][0] +
                '&dieFrontFin='  + dieHardDict[currentWo][1] +
                '&dieBackStart='  + dieHardDict[currentWo][2] +
                '&dieBackFin='  + dieHardDict[currentWo][3] +
                '&workOrder=' + currentWo;

    // set status to complete if number of 'package finished' elements is the same as the number of components
    //if (noOfComplete == noOfComponents){
    //    //console.log('complete');
    //    callPHP('complete', 'update_info.php?workOrder='+currentWo+'&job_status=Complete');
    //}
    getDatabase();
    //demo();
    callPHP(dieString,'die_hard.php?'+dieString); 
    createJobTable(currentWo);
}

function createLipHardTable(anId){
    removeColHeaders();
    removeElements();

    currentWo = anId;

    //Deactivate filter buttons when table is being displayed
    const showAll = document.getElementById('populate');   
    showAll.disabled = true;

    const showFlat = document.getElementById('flat');   
    showFlat.disabled = true;

    const showHollow = document.getElementById('hollow');   
    showHollow.disabled = true;

    const showOngoing = document.getElementById('ongoing');   
    showOngoing.disabled = true;

    const showComplete = document.getElementById('complete');   
    showComplete.disabled = true;

    const showSearch = document.getElementById('search');   
    showSearch.disabled = true;
    
    [].forEach.call(document.querySelectorAll('.nav-bar'), function (el) {
        el.style.visibility = 'hidden';
      });


    // Add headers to show what job is being edited
    let headString = 'WO: ' + anId + ' -- DIE: ' + infoDict[anId][0] + ' -- CUSTOMER: ' + infoDict[anId][3];
    let jobHeader = document.createElement('h3');
    document.getElementById('col-header-container').appendChild(jobHeader);
    let ntn = document.createTextNode(headString)
    jobHeader.appendChild(ntn);

    // Create required number of rows.
    let numberOfRows = 8;
    for (let i = 0; i <numberOfRows; i++){
        let rowId = 'row' + i;
        let rowClass = 'rowClass';
        let newRow = document.createElement('div');
        newRow.className = rowClass;
        newRow.id = rowId;
        document.getElementById('content-container').appendChild(newRow);
    }

    // Fill rows with columns.
        // Header cols:
        let newCol = document.createElement('div'); // Empty padding Div
        newCol.id = 'paddingCol1';
        newCol.className = 'paddingCol';
        document.getElementById('row0').appendChild(newCol);

        //newCol = document.createElement('div');
        //newCol.id = 'lipFrontCol';
        //newCol.className = 'headerCol';
        //document.getElementById('row0').appendChild(newCol);
        //let colString = 'Lip-Front';
        //let newTextNode = document.createTextNode(colString);
        //document.getElementById('lipFrontCol').appendChild(newTextNode);

        newCol = document.createElement('div');
        newCol.id = 'lipBackCol';
        newCol.className = 'headerCol';
        document.getElementById('row0').appendChild(newCol);
        let colString = 'Lip-Back';
        let newTextNode = document.createTextNode(colString);
        document.getElementById('lipBackCol').appendChild(newTextNode);


                // Subheader cols:
                newCol = document.createElement('div'); // Empty padding Div
                newCol.id = 'paddingCol2';
                newCol.className = 'paddingCol';
                document.getElementById('row1').appendChild(newCol);

                //newCol = document.createElement('div');
                //newCol.id = 'FrontStart';
                //newCol.className = 'subheaderColLight';
                //document.getElementById('row1').appendChild(newCol);
                //colString = 'Start';
                //newTextNode = document.createTextNode(colString);
                //document.getElementById('FrontStart').appendChild(newTextNode);

                //newCol = document.createElement('div');
                //newCol.id = 'FrontFin';
                //newCol.className = 'subheaderCol';
                //document.getElementById('row1').appendChild(newCol);
                //colString = 'Finish';
                //newTextNode = document.createTextNode(colString);
                //document.getElementById('FrontFin').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'BackStart';
                newCol.className = 'subheaderColLight';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Start';
                newTextNode = document.createTextNode(colString);
                document.getElementById('BackStart').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'BackFin';
                newCol.className = 'subheaderCol';
                document.getElementById('row1').appendChild(newCol);
                colString = 'Finish';
                newTextNode = document.createTextNode(colString);
                document.getElementById('BackFin').appendChild(newTextNode);
                
                console.log(lipSoftDict);
                let nextcolID = '2';
                let nextcol = 'row' + nextcolID;

                // Subheader cols:
                newCol = document.createElement('div'); // Empty padding Div
                newCol.id = 'rowHead2';
                newCol.className = 'rowHead';
                document.getElementById(nextcol).appendChild(newCol);
                colString = 'LIP';
                newTextNode = document.createTextNode(colString);
                document.getElementById('rowHead2').appendChild(newTextNode);

                //newCol = document.createElement('div');
                //newCol.id = 'hlipFrontStart';
                //newCol.className = 'progCheckLight';
                //document.getElementById(nextcol).appendChild(newCol);
                //colString = String(lipHardDict[anId][0]);
                //colString = '-';
                //newTextNode = document.createTextNode(colString);
                //document.getElementById('hlipFrontStart').appendChild(newTextNode);
                //document.getElementById('hlipFrontStart').addEventListener('click', function(){addDateStamp('hlipFrontStart')});

                //newCol = document.createElement('div');
                //newCol.id = 'hlipFrontFin';
                //newCol.className = 'progCheck';
                //document.getElementById(nextcol).appendChild(newCol);
                //colString = lipHardDict[anId][1];
                //colString = '-';
                //newTextNode = document.createTextNode(colString);
                //document.getElementById('hlipFrontFin').appendChild(newTextNode);
                //if(document.getElementById('hlipFrontStart').innerText != '-'){document.getElementById('hlipFrontFin').addEventListener('click', function(){addDateStamp('hlipFrontFin')})};
                
                newCol = document.createElement('div');
                newCol.id = 'hlipBackStart';
                newCol.className = 'progCheckLight';
                document.getElementById(nextcol).appendChild(newCol);
                colString = lipHardDict[anId][2];
                //colString = '-';
                newTextNode = document.createTextNode(colString);
                document.getElementById('hlipBackStart').appendChild(newTextNode);
                document.getElementById('hlipBackStart').addEventListener('click', function(){addDateStamp('hlipBackStart')});
                if(document.getElementById('hlipBackStart').innerText != '-' && document.getElementById('hlipBackStart').innerText != 'N/A'){document.getElementById('hlipBackStart').addEventListener('click', function(){removeDateStamp('hlipBackStart')})};

                newCol = document.createElement('div');
                newCol.id = 'hlipBackFin';
                newCol.className = 'progCheck';
                document.getElementById(nextcol).appendChild(newCol);
                colString = lipHardDict[anId][3];
                //colString = '-';
                newTextNode = document.createTextNode(colString);
                document.getElementById('hlipBackFin').appendChild(newTextNode);
                if(document.getElementById('hlipBackStart').innerText != '-'){document.getElementById('hlipBackFin').addEventListener('click', function(){addDateStamp('hlipBackFin')})};
                if(document.getElementById('hlipBackFin').innerText != '-' && document.getElementById('hlipBackFin').innerText != 'N/A'){document.getElementById('hlipBackFin').addEventListener('click', function(){removeDateStamp('hlipBackFin')})};

                nextcolID++;
                nextcol = 'row' + nextcolID;
                        // CNC Table.
        // Header cols:
        newCol = document.createElement('div'); // Empty padding Div
        newCol.id = 'paddingCol3';
        newCol.className = 'paddingCol';
        document.getElementById(nextcol).appendChild(newCol);

        newCol = document.createElement('div');
        newCol.id = 'NCCol1';
        newCol.className = 'headerCol';
        document.getElementById(nextcol).appendChild(newCol);
        colString = 'CNC';
        newTextNode = document.createTextNode(colString);
        document.getElementById('NCCol1').appendChild(newTextNode);


        nextcolID++;
        nextcol = 'row' + nextcolID;
                // Subheader cols:
                newCol = document.createElement('div'); // Empty padding Div
                newCol.id = 'paddingCol2';
                newCol.className = 'paddingCol';
                document.getElementById(nextcol).appendChild(newCol);

                //newCol = document.createElement('div');
                //newCol.id = 'frontNCH';
                //newCol.className = 'subheaderColLight';
                //document.getElementById(nextcol).appendChild(newCol);
                //colString = 'Lip Front';
                //newTextNode = document.createTextNode(colString);
                //document.getElementById('frontNCH').appendChild(newTextNode);

                newCol = document.createElement('div');
                newCol.id = 'backNCH';
                newCol.className = 'subheaderCol';
                document.getElementById(nextcol).appendChild(newCol);
                colString = 'Lip Back';
                newTextNode = document.createTextNode(colString);
                document.getElementById('backNCH').appendChild(newTextNode);


                nextcolID++;
                
                nextcol = 'row' + nextcolID;
                // Subheader cols:
                newCol = document.createElement('div'); // Empty padding Div
                newCol.id = 'rowHead4';
                newCol.className = 'rowHead';
                document.getElementById(nextcol).appendChild(newCol);
                colString = 'CNC ID';
                newTextNode = document.createTextNode(colString);
                document.getElementById('rowHead4').appendChild(newTextNode);

                //newCol = document.createElement('div');
                //newCol.id = 'frontNC';
                //newCol.className = 'progCheckLight';
                //document.getElementById(nextcol).appendChild(newCol);
                //colString = String(lipHardDict[anId][4]);
                //colString = '-';
                //newTextNode = document.createTextNode(colString);
                //document.getElementById('frontNC').appendChild(newTextNode);
                //document.getElementById('bolFrontStart').addEventListener('click', function(){addDateStamp('bolFrontStart')});

                newCol = document.createElement('div');
                newCol.id = 'backNC';
                newCol.className = 'progCheck';
                document.getElementById(nextcol).appendChild(newCol);
                colString = lipHardDict[anId][5];
                //colString = '-';
                newTextNode = document.createTextNode(colString);
                document.getElementById('backNC').appendChild(newTextNode);
                //if(document.getElementById('bolFrontStart').innerText != '-'){document.getElementById('bolFrontFin').addEventListener('click', function(){addDateStamp('bolFrontFin')})};
                
                nextcolID++;
                
                
    //if(infoDict[currentWo][11] != null){
    //    let scrapNote = document.createElement('p');
    //    scrapNote.appendChild(document.createTextNode(infoDict[currentWo][11]));
    //    document.getElementById('content-container').appendChild(scrapNote);
    //}

    // Create container for buttons
    let new_div = document.createElement('div');
    let newClass ='progressUpdateButtonsContainer';
    new_div.className = newClass;
    new_div.id = 'progressUpdateButtonsContainer';
    document.getElementById('content-container').appendChild(new_div);   
    
    // Create a buttons and event listners
    // let saveButton = document.createElement('button');

    let nabr = document.createElement('br');
    //document.getElementById('addComponentContainer').appendChild(nabr.cloneNode());

    document.getElementById('content-container').appendChild(nabr.cloneNode());

    let discardButton = document.createElement('button');
    let exitButton = document.createElement('button');
    // saveButton.appendChild(document.createTextNode('Save changes'));
    discardButton.appendChild(document.createTextNode('Discard Changes'));
    exitButton.appendChild(document.createTextNode('Save & Exit'));
    // saveButton.addEventListener('click', function(){saveTableValues()});
    discardButton.addEventListener('click', function(){discardHardLipTableValues()});
    exitButton.addEventListener('click', function(){saveHardLipTableValues()});
    // exitButton.addEventListener('click', function(){insertAllElements()});
    // document.getElementById('content-container').appendChild(saveButton);    
    document.getElementById('content-container').appendChild(discardButton);
    document.getElementById('content-container').appendChild(exitButton);
}

function discardHardLipTableValues(){
    removeElements();
    createHardLipTable(currentWo);
}

function saveHardLipTableValues(){

    //demo();

    const showAll = document.getElementById('populate');   
    showAll.disabled = false;

    const showFlat = document.getElementById('flat');   
    showFlat.disabled = false;

    const showHollow = document.getElementById('hollow');   
    showHollow.disabled = false;

    const showOngoing = document.getElementById('ongoing');   
    showOngoing.disabled = false;

    const showComplete = document.getElementById('complete');   
    showComplete.disabled = false;

    const showSearch = document.getElementById('search');   
    showSearch.disabled = false;

    [].forEach.call(document.querySelectorAll('.nav-bar'), function (el) {
        el.style.visibility = 'visible';
      });

    let noOfComponents = 0;
    let noOfComplete = 0;

    lipHardDict[currentWo][0] = '-'; //document.getElementById('hlipFrontStart').innerText;
    lipHardDict[currentWo][1] = '-'; //document.getElementById('hlipFrontFin').innerText;
    lipHardDict[currentWo][2] = document.getElementById('hlipBackStart').innerText;
    lipHardDict[currentWo][3] = document.getElementById('hlipBackFin').innerText;
    //if (mandDict[currentWo][23] != '-'){
    //    noOfComplete++;
    //}

    lipString = 'lipFrontStart='  + lipHardDict[currentWo][0] +
                '&lipFrontFin='  + lipHardDict[currentWo][1] +
                '&lipBackStart='  + lipHardDict[currentWo][2] +
                '&lipBackFin='  + lipHardDict[currentWo][3] +
                '&workOrder=' + currentWo;

    // set status to complete if number of 'package finished' elements is the same as the number of components
    //if (noOfComplete == noOfComponents){
    //    //console.log('complete');
    //    callPHP('complete', 'update_info.php?workOrder='+currentWo+'&job_status=Complete');
    //}
    getDatabase();
    //demo();
    callPHP(lipString,'lip_hard.php?'+lipString); 
    createJobTable(currentWo);
}

function macSignOff(anId){

    let idMachineStatusDict = {
        'lipFrontStart' : ['lip', 'on'], //LIP
        'lipFrontFin': ['lip', 'off'],
        'lipBackStart': ['lip', 'on'],
        'lipBackFin': ['lip', 'off'], 
        'mandPortFrontStart': ['mandrel', 'on'], //MANDREL
        'mandPortFrontFin': ['mandrel', 'off'],
        'mandPortBackStart': ['mandrel', 'on'],
        'mandPortBackFin': ['mandrel', 'off'],
        'dieBearingStart': ['die', 'on'], //DIE
        'dieBearingFin': ['die', 'off'],
        'dieBackmillStart': ['die', 'on'],
        'dieBackmillFin': ['die', 'off'],
        'backerFrontStart': ['backer', 'on'], //BACKER
        'backerFrontFin': ['backer', 'off'],
        'backerBackStart': ['backer', 'on'],
        'backerBackFin': ['backer', 'off'],
        'bolFrontStart': ['bol', 'on'], //BOLSTER
        'bolFrontFin': ['bol', 'off'],
        'bolBackStart': ['bol', 'on'],
        'bolBackFin': ['bol', 'off'],
        'hlipFrontStart' : ['lip', 'on'], //LIP Hard
        'hlipFrontFin': ['lip', 'off'],
        'hlipBackStart': ['lip', 'on'],
        'hlipBackFin': ['lip', 'off'], 
        'mandHardStart': ['mandrel', 'on'], //MANDREL (HARD)
        'mandHardFin': ['mandrel', 'off'],
        'mandPolishStart': ['mandrel', 'on'],
        'mandPolishFin': ['mandrel', 'off'],
        'dieFrontStart': ['die', 'on'], //DIE (HARD)
        'dieFrontFin' : ['die', 'off'],
        'dieBackStart' : ['die', 'on'],
        'dieBackFin'  : ['die', 'off']
    };

    let idMachineBookDict = {
        'lipFrontStart' : ['lip_mac_soft', 'lip_front_machine'],
        'lipBackStart': ['lip_mac_soft', 'lip_back_machine'],
        'mandPortFrontStart': ['mandrel_mac_soft', 'port_front_machine'],
        'mandPortBackStart': ['mandrel_mac_soft', 'port_back_machine'],               
        'dieBearingStart': ['die_mac_soft', 'die_bearing_machine'],
        'dieBackmillStart': ['die_mac_soft', 'die_backmill_machine'],     
        'backerFrontStart': ['backer_mac_soft', 'backer_front_machine'],
        'backerBackStart': ['backer_mac_soft', 'backer_back_machine'],      
        'bolFrontStart': ['bol_mac_soft', 'bol_front_machine'],
        'bolBackStart': ['bol_mac_soft', 'bol_back_machine'],      
        'hlipFrontStart' : ['lip_mac_hard', 'lip_front_machine'],
        'hlipBackStart': ['lip_mac_hard', 'lip_back_machine'],
        'mandHardStart': ['mandrel_mac_hard', 'port_hard_machine'],
        'mandPolishStart': ['mandrel_mac_hard', 'port_polish_machine'],       
        'dieFrontStart': ['die_mac_hard', 'die_front_machine'],
        'dieBackStart' : ['die_mac_hard', 'die_back_machine'],
    };

    let CNC = '-';

    for (var key in idMachineStatusDict) {     
        if (idMachineStatusDict.hasOwnProperty(key)) {    
            if (key == anId){
                
                //If the ID is in the idMachineBookDict dictionary - add the CNC name to the process field in the component machining table
                for (var akey in idMachineBookDict) {     
                    if (idMachineBookDict.hasOwnProperty(akey)) {    
                        if (akey == anId){
                            CNC = prompt("Input CNC ID: ");
                            //alert(idMachineBookDict[akey]);
                            let macBookString = 
                            'table='  + idMachineBookDict[akey][0] +
                            '&field='  + idMachineBookDict[akey][1] +
                            '&cnc=' + CNC +
                            '&work_order='  + currentWo;
                            console.log(macBookString);

                            callPHP(macBookString,'machine_book.php?'+macBookString);

                            //book the name of the CNC returned from the user above to the field of the table returned from idMachineBookDict
                        }       
                    }
                }
                machineStatus(key, CNC);
            }       
        }
    }
}

function machineStatus(akey, aCNC){
    //Add the WO to the CNC table if the key equates to a "start", remove the WO from the CNC table if the key equates to a "finish".

    let idMachineStatusDict = {
        'lipFrontStart' : ['lip', 'on', lipSoftDict[currentWo][4]], //LIP
        'lipFrontFin': ['lip', 'off', lipSoftDict[currentWo][4]],
        'lipBackStart': ['lip', 'on', lipSoftDict[currentWo][5]],
        'lipBackFin': ['lip', 'off', lipSoftDict[currentWo][5]], 

        'mandPortFrontStart': ['mandrel', 'on', mandSoftDict[currentWo][4]], //MANDREL
        'mandPortFrontFin': ['mandrel', 'off', mandSoftDict[currentWo][4]],
        'mandPortBackStart': ['mandrel', 'on', mandSoftDict[currentWo][5]],
        'mandPortBackFin': ['mandrel', 'off', mandSoftDict[currentWo][5]],

        'dieBearingStart': ['die', 'on', dieSoftDict[currentWo][4]], //DIE
        'dieBearingFin': ['die', 'off', dieSoftDict[currentWo][4]],
        'dieBackmillStart': ['die', 'on', dieSoftDict[currentWo][5]],
        'dieBackmillFin': ['die', 'off', dieSoftDict[currentWo][5]],

        'backerFrontStart': ['backer', 'on', backerSoftDict[currentWo][4]], //BACKER
        'backerFrontFin': ['backer', 'off', backerSoftDict[currentWo][4]],
        'backerBackStart': ['backer', 'on', backerSoftDict[currentWo][5]],
        'backerBackFin': ['backer', 'off', backerSoftDict[currentWo][5]],

        'bolFrontStart': ['bol', 'on', bolSoftDict[currentWo][4]], //BOLSTER
        'bolFrontFin': ['bol', 'off', bolSoftDict[currentWo][4]],
        'bolBackStart': ['bol', 'on', bolSoftDict[currentWo][5]],
        'bolBackFin': ['bol', 'off', bolSoftDict[currentWo][5]],

        'mandHardStart': ['mandrel', 'on', mandHardDict[currentWo][4]], //MANDREL (HARD)
        'mandHardFin': ['mandrel', 'off', mandHardDict[currentWo][4]],
        'mandPolishStart': ['mandrel', 'on', mandHardDict[currentWo][5]],
        'mandPolishFin': ['mandrel', 'off', mandHardDict[currentWo][5]],

        'hlipFrontStart' : ['lip', 'on', lipHardDict[currentWo][4]], //LIP (HARD)
        'hlipFrontFin': ['lip', 'off', lipHardDict[currentWo][4]],
        'hlipBackStart': ['lip', 'on', lipHardDict[currentWo][5]],
        'hlipBackFin': ['lip', 'off', lipHardDict[currentWo][5]], 

        'dieFrontStart': ['die', 'on', dieHardDict[currentWo][4]], //DIE (HARD)
        'dieFrontFin' : ['die', 'off', dieHardDict[currentWo][4]],
        'dieBackStart' : ['die', 'on', dieHardDict[currentWo][5]],
        'dieBackFin'  : ['die', 'off', dieHardDict[currentWo][5]]
    };
    if (aCNC == '-'){
        console.log("Bookng " + currentWo + " component " + idMachineStatusDict[akey][0] + idMachineStatusDict[akey][1] + " machine " + idMachineStatusDict[akey][2]);
    }
    else{
        console.log("Bookng " + currentWo + " component " + idMachineStatusDict[akey][0] + idMachineStatusDict[akey][1] + " machine " + aCNC);
    }
    
}
 
function removeDateStamp(anId){

    let text = "Delete sign-off?";
    if (confirm(text) == true) {
        const el = document.getElementById(anId);
        while(el.firstChild) el.removeChild(el.firstChild);
        revert = '-';
        let newTextNode = document.createTextNode(revert);
        document.getElementById(anId).appendChild(newTextNode);
    } else {
      //Cancelled;
    }
}

// add hollow die elements to content container
let HTButton = document.getElementById('Multi-Sign-off');
HTButton.addEventListener('click', multiSignOff);

//global variables for the multi-signoff functions
let multiArray =[];
let multiDict = {};
let multiID = 0;
let signOffType = '';
let machineName = '';
let startFin

let workDict = {};
let workIndex = 0;
let tableName = '';
let columnName = '';
let lastProcess = '';
let okayToRender = false;

function multiSignOff(){
    getDatabase();
    removeElements();
    // removeColHeaders();
    createMSColHeaders();

    //Create series of search forms that result in the return of a sign-off process 

    var procList = ['Design Start', 
                    'Program start', 
                    'Program Finish', 
                    'Heat Treat Start', 
                    'Heat Treat Finish',
                    'Machine Start', 
                    'Machine Finish', 
                    'Wire Start',
                    'Wire Finish',
                    'Finishing Start', 
                    'Finishing Finish', 
                    'Packaging'];

    var selectList = document.createElement("select");
    selectList.id = "processSelect";
    document.getElementById('content-container').appendChild(selectList);

    for (var i = 0; i < procList.length; i++) {
        var option = document.createElement("option");
        option.value = procList[i];
        option.text = procList[i];
        selectList.appendChild(option);
    }

    // Create a button and an event listner that passes the values contained in the form to function that updates the correct dictionary. 
    //document.getElementById('content-container').appendChild(br.cloneNode());
    let listSearchActionButton = document.createElement('button');
    listSearchActionButton.appendChild(document.createTextNode('Submit'));
    listSearchActionButton.addEventListener('click', function() {checkForSecondList(document.getElementById('processSelect').value)});
    document.getElementById('content-container').appendChild(listSearchActionButton);

    function checkForSecondList(aProcess){
        console.log("Second List Function Called");
        removeElements();
        if(aProcess == 'Machine Start'){
            startFin = 'Start';
            console.log("Machine Process of type start");
        }
        else if(aProcess == 'Machine Finish'){
            startFin = 'Finish';
            console.log("Machine Process of type finish");
        }

        if(aProcess == 'Machine Start' || aProcess == 'Machine Finish'){
            var procList = ['Lip Front ' + startFin,
                            'Lip Back ' + startFin,
                            'Port Front ' + startFin,
                            'Port Back ' + startFin,               
                            'Die Bearing ' + startFin,
                            'Die Backmill ' + startFin,     
                            'Backer Front ' + startFin,
                            'Backer Back ' + startFin,      
                            'Bolster Front ' + startFin,
                            'Bolster Back ' + startFin,      
                            'Hard Lip Front '  + startFin,
                            'Hard Lip Back ' + startFin,
                            'Hard Mandrel ' + startFin,
                            'Port Polish ' + startFin,       
                            'Hard Die Front ' + startFin,
                            'Hard Die Back ' + startFin];

            var selectList = document.createElement("select");
            selectList.id = "processSelect";
            document.getElementById('content-container').appendChild(selectList);

            for (var i = 0; i < procList.length; i++) {
            var option = document.createElement("option");
            option.value = procList[i];
            option.text = procList[i];
            selectList.appendChild(option);
            }

            var macList = ['A',
                            'B',
                            'C',
                            'D',               
                            'E',
                            'F',     
                            'G',
                            'H',      
                            'I',
                            'J',      
                            'K',
                            'L',
                            'M',
                            'N',       
                            'O',
                            'P'];
    
                var smacList = document.createElement("select");
                smacList.id = "machineSelect";
                document.getElementById('content-container').appendChild(smacList);
    
                for (var i = 0; i < macList.length; i++) {
                var moption = document.createElement("option");
                moption.value = macList[i];
                moption.text = macList[i];
                smacList.appendChild(moption);
                }

            // Create a button and an event listner that passes the values contained in the form to function that updates the correct dictionary. 
            //document.getElementById('content-container').appendChild(br.cloneNode());
            let listMachineActionButton = document.createElement('button');
            listMachineActionButton.appendChild(document.createTextNode('Submit'));
            listMachineActionButton.addEventListener('click', function() {assignSignOffType(document.getElementById('processSelect').value, document.getElementById('machineSelect').value)});
            document.getElementById('content-container').appendChild(listMachineActionButton);

            function assignSignOffType(aType, aMachine){
                signOffType = aType;
                machineName = aMachine;
                console.log("Machine Process and machine name: ");
                console.log(aType);
                console.log(aMachine);
                renderColumns()
            }
        }
        else{
            signOffType = aProcess;
            console.log("Non-Machine Process: ");
            console.log(aProcess);
            renderColumns()
        }
    }

    function renderColumns(){
        if (signOffType == 'Design Start'){
            //Draw columns with just "part" Showing
            console.log("Part Only");

            workDict = partDict;
            workIndex = 0;
            tableName = 'part';
            columnName = 'design_start';

            // Columns for all components.
            let new_div = document.createElement('div');
            let newClass ='jobListContainer';
            new_div.className = newClass;
            new_div.id = 'jobListContainer';
            document.getElementById('content-container').appendChild(new_div);

            let amount = getNumberOfJobs();
            let keyArray = [];
            let aKey = '';
            for (let key in infoDict){
                keyArray.push(key);
            }
            let a = 0;
            for(let i = 0; i < amount; i++){
                aKey = keyArray[i];
                if (infoDict[aKey][4] == 'Ongoing'){
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

                    let partNoCont = document.createElement('div'); // Die no
                    partNoCont.className = 'jobInfoCont';
                    partNoCont.id = aKey + '-Part-Cont';
                    document.getElementById(aKey).appendChild(partNoCont);
                    //let textnode2 = document.createTextNode(infoDict[aKey][0]);
                    let textnode7 = document.createTextNode(workDict[aKey][0]);
                    document.getElementById(aKey + '-Part-Cont').appendChild(textnode7);

                    let dieNoCont = document.createElement('div'); // Die no
                    dieNoCont.className = 'jobInfoCont';
                    dieNoCont.id = aKey + '-Lip-Cont';
                    document.getElementById(aKey).appendChild(dieNoCont);
                    //let textnode2 = document.createTextNode(infoDict[aKey][0]);
                    let textnode2 = document.createTextNode('***');
                    document.getElementById(aKey + '-Lip-Cont').appendChild(textnode2);

                    let jobTypeCont = document.createElement('div'); // Type
                    jobTypeCont.className = 'jobInfoCont';
                    jobTypeCont.id = aKey + '-Mand-Cont';
                    document.getElementById(aKey).appendChild(jobTypeCont);
                    //let textnode3 = document.createTextNode(infoDict[aKey][1]);
                    let textnode3 = document.createTextNode('***');
                    document.getElementById(aKey + '-Mand-Cont').appendChild(textnode3); 

                    let jobDiaCont = document.createElement('div'); // Diameter
                    jobDiaCont.className = 'jobInfoCont';
                    jobDiaCont.id = aKey + '-Die-Cont';
                    document.getElementById(aKey).appendChild(jobDiaCont);
                    //let textnode4 = document.createTextNode(infoDict[aKey][2]);
                    let textnode4 = document.createTextNode('***');
                    document.getElementById(aKey + '-Die-Cont').appendChild(textnode4); 

                    let jobCustCont = document.createElement('div'); // Customer
                    jobCustCont.className = 'jobInfoCont';
                    jobCustCont.id = aKey + '-Backer-Cont';
                    document.getElementById(aKey).appendChild(jobCustCont);
                    //let textnode5 = document.createTextNode(infoDict[aKey][3]);
                    let textnode5 = document.createTextNode('***');
                    document.getElementById(aKey + '-Backer-Cont').appendChild(textnode5); 

                    let jobBackCont = document.createElement('div'); // Customer
                    jobBackCont.className = 'jobInfoCont';
                    jobBackCont.id = aKey + '-Bol-Cont';
                    document.getElementById(aKey).appendChild(jobBackCont);
                    //let textnode6 = document.createTextNode(infoDict[aKey][3]);
                    let textnode6 = document.createTextNode('***');
                    document.getElementById(aKey + '-Bol-Cont').appendChild(textnode6); 

                    addMultiJobListeners();
                }
            }  
        }
        else if (signOffType == 'Lip Front Start' 
                || signOffType == 'Lip Back Start' 
                || signOffType == 'Lip Front Finish' 
                || signOffType == 'Lip Back Finish'
                || signOffType == 'Hard Lip Front Start' 
                || signOffType == 'Hard Lip Back Start' 
                || signOffType == 'Hard Lip Front Finish' 
                || signOffType == 'Hard Lip Back Finish'){
            //Draw columns with just "lip" Showing - use for hard and soft machining processes. 
            console.log("Lip Only");

            if (signOffType == 'Lip Front Start'
                || signOffType == 'Lip Back Start' 
                || signOffType == 'Lip Front Finish' 
                || signOffType == 'Lip Back Finish'){

                workDict = lipSoftDict;
                tableName = 'lip_mac_soft';
                console.log("Lip soft");

                if (signOffType == 'Lip Front Start'){
                    columnName = 'lip_front_start';
                    workIndex = 0;
                    // lastProcess = 999;
                    //lastProcess =lipDict[aKey][7];
                    console.log("Lip front start");
                }
                else if (signOffType == 'Lip Front Finish'){
                    columnName = 'lip_front_finish';
                    workIndex = 1;
                    //lastProcess = 0;
                    //lastProcess = workDict[aKey][0];
                    console.log("Lip front fin");
                }
                else if (signOffType == 'Lip Back Start'){
                    columnName = 'lip_back_start';
                    workIndex = 2;
                    //lastProcess = 999;
                    //lastProcess =lipDict[aKey][7];
                    console.log("Lip back start");
                }
                else if (signOffType == 'Lip Back Finish'){
                    columnName = 'lip_back_finish';
                    workIndex = 3;
                    //lastProcess = 2;
                    //lastProcess = workDict[aKey][2];
                    console.log("Lip back fin");
                }
            }
            else if (signOffType == 'Hard Lip Front Start' 
                || signOffType == 'Hard Lip Back Start' 
                || signOffType == 'Hard Lip Front Finish' 
                || signOffType == 'Hard Lip Back Finish'){

                workDict = lipHardDict;
                tableName = 'lip_mac_hard';
                console.log("Lip hard");
                
                if (signOffType == 'Hard Lip Front Start'){
                    columnName = 'lip_front_start';
                    workIndex = 0;
                    //lastProcess = 999;
                    //lastProcess =lipDict[aKey][11];
                }
                else if (signOffType == 'Hard Lip Front Finish'){
                    columnName = 'lip_front_finish';
                    workIndex = 1;
                    //lastProcess = 0;
                    //lastProcess = workDict[aKey][0];
                }
                else if (signOffType == 'Hard Lip Back Start'){
                    columnName = 'lip_back_start';
                    workIndex = 2;
                    //lastProcess = 999;
                    //lastProcess =lipDict[aKey][11];
                }
                else if (signOffType == 'Hard Lip Back Finish'){
                    columnName = 'lip_back_finish';
                    workIndex = 3;
                    //lastProcess = 2;
                    //lastProcess = workDict[aKey][2];
                }
            }

            let new_div = document.createElement('div');
            let newClass ='jobListContainer';
            new_div.className = newClass;
            new_div.id = 'jobListContainer';
            document.getElementById('content-container').appendChild(new_div);

            let amount = getNumberOfJobs();
            let keyArray = [];
            let aKey = '';
            for (let key in infoDict){
                keyArray.push(key);
            }
            let a = 0;
            for(let i = 0; i < amount; i++){
                aKey = keyArray[i];

                if (signOffType == 'Lip Front Start'){
                    lastProcess =lipDict[aKey][7];
                }
                else if (signOffType == 'Lip Front Finish'){
                    lastProcess = workDict[aKey][0];
                }
                else if (signOffType == 'Lip Back Start'){
                    lastProcess =lipDict[aKey][7];
                }
                else if (signOffType == 'Lip Back Finish'){
                    lastProcess = workDict[aKey][2];
                }
                if (signOffType == 'Hard Lip Front Start'){
                    lastProcess =lipDict[aKey][11];
                }
                else if (signOffType == 'Hard Lip Front Finish'){
                    lastProcess = workDict[aKey][0];
                }
                else if (signOffType == 'Hard Lip Back Start'){
                    lastProcess =lipDict[aKey][11];
                }
                else if (signOffType == 'Hard Lip Back Finish'){
                    lastProcess = workDict[aKey][2];
                }

                if (workDict[aKey][lastProcess] != '-'){
                    okayToRender = true;
                }

                if (infoDict[aKey][4] == 'Ongoing' && infoDict[aKey][5] == 1 && okayToRender == true){
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

                    console.log("workIndex");
                    console.log(workIndex);
                    console.log(workDict);

                    // Create 'Column' divs for each element in an entry.  
                    let WOCont = document.createElement('div'); // Work Order
                    WOCont.className = 'jobInfoCont';
                    WOCont.id = aKey + 'WOCont';
                    document.getElementById(aKey).appendChild(WOCont);
                    let textnode1 = document.createTextNode(aKey);
                    document.getElementById(aKey + 'WOCont').appendChild(textnode1);

                    let dieNoCont = document.createElement('div'); // Die no
                    dieNoCont.className = 'jobInfoCont';
                    dieNoCont.id = aKey + '-Lip-Cont';
                    document.getElementById(aKey).appendChild(dieNoCont);
                    //let textnode2 = document.createTextNode(infoDict[aKey][0]);
                    let textnode2 = document.createTextNode(workDict[aKey][workIndex]);
                    document.getElementById(aKey + '-Lip-Cont').appendChild(textnode2);

                    let jobTypeCont = document.createElement('div'); // Type
                    jobTypeCont.className = 'jobInfoCont';
                    jobTypeCont.id = aKey + '-Mand-Cont';
                    document.getElementById(aKey).appendChild(jobTypeCont);
                    //let textnode3 = document.createTextNode(infoDict[aKey][1]);
                    let textnode3 = document.createTextNode('***');
                    document.getElementById(aKey + '-Mand-Cont').appendChild(textnode3); 

                    let jobDiaCont = document.createElement('div'); // Diameter
                    jobDiaCont.className = 'jobInfoCont';
                    jobDiaCont.id = aKey + '-Die-Cont';
                    document.getElementById(aKey).appendChild(jobDiaCont);
                    //let textnode4 = document.createTextNode(infoDict[aKey][2]);
                    let textnode4 = document.createTextNode('***');
                    document.getElementById(aKey + '-Die-Cont').appendChild(textnode4); 

                    let jobCustCont = document.createElement('div'); // Customer
                    jobCustCont.className = 'jobInfoCont';
                    jobCustCont.id = aKey + '-Backer-Cont';
                    document.getElementById(aKey).appendChild(jobCustCont);
                    //let textnode5 = document.createTextNode(infoDict[aKey][3]);
                    let textnode5 = document.createTextNode('***');
                    document.getElementById(aKey + '-Backer-Cont').appendChild(textnode5); 

                    let jobBackCont = document.createElement('div'); // Customer
                    jobBackCont.className = 'jobInfoCont';
                    jobBackCont.id = aKey + '-Bol-Cont';
                    document.getElementById(aKey).appendChild(jobBackCont);
                    //let textnode6 = document.createTextNode(infoDict[aKey][3]);
                    let textnode6 = document.createTextNode('***');
                    document.getElementById(aKey + '-Bol-Cont').appendChild(textnode6); 

                    addMultiJobListeners();
                }
                okayToRender = false;
            }  
        }
        else if (signOffType == 'Port Front Start' 
                || signOffType == 'Port Back Start' 
                || signOffType == 'Port Front Finish' 
                || signOffType == 'Port Back Finish' 
                || signOffType == 'Hard Mandrel Start'
                || signOffType == 'Hard Mandrel Finish'
                || signOffType == 'Port Polish Start'
                || signOffType == 'Port Polish Finish'){
                
            //Draw columns with just "mandrel" Showing - use for hard and soft machining processes. 
            console.log("Mandrel Only");

            if (signOffType == 'Port Front Start'
            || signOffType == 'Port Back Start' 
            || signOffType == 'Port Front Finish' 
            || signOffType == 'Port Back Finish'){

                workDict = mandSoftDict;
                tableName = 'mandrel_mac_soft';
                console.log("Mandrel soft");

                if (signOffType == 'Port Front Start'){
                    columnName = 'port_front_start';
                    workIndex = 0;
                    // lastProcess = 999;
                    //lastProcess = mandDict[aKey][7];
                    console.log("Port Front Start");
                }
                else if (signOffType == 'Port Back Start'){
                    columnName = 'port_back_start';
                    workIndex = 1;
                    //lastProcess = 0;
                    
                    //lastProcess = mandDict[aKey][7];
                    console.log("Port Back Start");
                }
                else if (signOffType == 'Port Front Finish'){
                    columnName = 'port_front_finish';
                    workIndex = 2;
                    //lastProcess = 999;
                    //lastProcess = workDict[aKey][0];
                    console.log("Port Front Finish");
                }
                else if (signOffType == 'Port Back Finish'){
                    columnName = 'port_back_finish';
                    workIndex = 3;
                    //lastProcess = 2;
                    //lastProcess = workDict[aKey][2];
                    console.log("Port Back Finish");
                }
        }
        else if (signOffType == 'Hard Mandrel Start' 
            || signOffType == 'Hard Mandrel Finish' 
            || signOffType == 'Port Polish Start' 
            || signOffType == 'Port Polish Finish'){

                workDict = mandHardDict;
                tableName = 'mandrel_mac_hard';
                console.log("Mandrel hard");
                
                if (signOffType == 'Hard Mandrel Start'){
                    columnName = 'port_hard_start';
                    workIndex = 0;
                    //lastProcess = 999;
                    //lastProcess =mandDict[aKey][11];
                }
                else if (signOffType == 'Hard Mandrel Finish'){   
                    columnName = 'port_hard_finish';
                    workIndex = 1;
                    //lastProcess = 0;
                    //lastProcess = workDict[aKey][0];
                }
                else if (signOffType == 'Port Polish Start'){
                    columnName = 'port_polish_start';
                    workIndex = 2;
                    //lastProcess = 999;
                    //lastProcess =mandDict[aKey][11];
                }
                else if (signOffType == 'Port Polish Finish'){
                    columnName = 'port_polish_finish';
                    workIndex = 3;
                    //lastProcess = 2;
                    //lastProcess = workDict[aKey][2];
                }
        }

        let new_div = document.createElement('div');
        let newClass ='jobListContainer';
        new_div.className = newClass;
        new_div.id = 'jobListContainer';
        document.getElementById('content-container').appendChild(new_div);

        let amount = getNumberOfJobs();
        let keyArray = [];
        let aKey = '';
        for (let key in infoDict){
            keyArray.push(key);
        }
        let a = 0;
        for(let i = 0; i < amount; i++){
            aKey = keyArray[i];

            if (signOffType == 'Port Front Start'){
                lastProcess = mandDict[aKey][7];
            }
            else if (signOffType == 'Port Back Start'){
                lastProcess = mandDict[aKey][7];
            }
            else if (signOffType == 'Port Front Finish'){
                lastProcess = workDict[aKey][0];
            }
            else if (signOffType == 'Port Back Finish'){
                lastProcess = workDict[aKey][2];
            }
            if (signOffType == 'Hard Mandrel Start'){
                lastProcess =mandDict[aKey][11];
            }
            else if (signOffType == 'Hard Mandrel Finish'){   
                lastProcess = workDict[aKey][0];
            }
            else if (signOffType == 'Port Polish Start'){
                lastProcess =mandDict[aKey][11];
            }
            else if (signOffType == 'Port Polish Finish'){
                lastProcess = workDict[aKey][2];
            }

            if (workDict[aKey][lastProcess] != '-'){
                okayToRender = true;
            }

            if (infoDict[aKey][4] == 'Ongoing' && infoDict[aKey][6] == 1 && okayToRender == true){
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

                console.log("workIndex");
                console.log(workIndex);
                console.log(workDict);

                // Create 'Column' divs for each element in an entry.  
                let WOCont = document.createElement('div'); // Work Order
                WOCont.className = 'jobInfoCont';
                WOCont.id = aKey + 'WOCont';
                document.getElementById(aKey).appendChild(WOCont);
                let textnode1 = document.createTextNode(aKey);
                document.getElementById(aKey + 'WOCont').appendChild(textnode1);

                let dieNoCont = document.createElement('div'); // Die no
                dieNoCont.className = 'jobInfoCont';
                dieNoCont.id = aKey + '-Lip-Cont';
                document.getElementById(aKey).appendChild(dieNoCont);
                //let textnode2 = document.createTextNode(infoDict[aKey][0]);
                //let textnode2 = document.createTextNode(workDict[aKey][workIndex]);
                let textnode2 = document.createTextNode('***');
                document.getElementById(aKey + '-Lip-Cont').appendChild(textnode2);

                let jobTypeCont = document.createElement('div'); // Type
                jobTypeCont.className = 'jobInfoCont';
                jobTypeCont.id = aKey + '-Mand-Cont';
                document.getElementById(aKey).appendChild(jobTypeCont);
                //let textnode3 = document.createTextNode(infoDict[aKey][1]);
                let textnode3 = document.createTextNode(workDict[aKey][workIndex]);
                document.getElementById(aKey + '-Mand-Cont').appendChild(textnode3); 

                let jobDiaCont = document.createElement('div'); // Diameter
                jobDiaCont.className = 'jobInfoCont';
                jobDiaCont.id = aKey + '-Die-Cont';
                document.getElementById(aKey).appendChild(jobDiaCont);
                //let textnode4 = document.createTextNode(infoDict[aKey][2]);
                let textnode4 = document.createTextNode('***');
                document.getElementById(aKey + '-Die-Cont').appendChild(textnode4); 

                let jobCustCont = document.createElement('div'); // Customer
                jobCustCont.className = 'jobInfoCont';
                jobCustCont.id = aKey + '-Backer-Cont';
                document.getElementById(aKey).appendChild(jobCustCont);
                //let textnode5 = document.createTextNode(infoDict[aKey][3]);
                let textnode5 = document.createTextNode('***');
                document.getElementById(aKey + '-Backer-Cont').appendChild(textnode5); 

                let jobBackCont = document.createElement('div'); // Customer
                jobBackCont.className = 'jobInfoCont';
                jobBackCont.id = aKey + '-Bol-Cont';
                document.getElementById(aKey).appendChild(jobBackCont);
                //let textnode6 = document.createTextNode(infoDict[aKey][3]);
                let textnode6 = document.createTextNode('***');
                document.getElementById(aKey + '-Bol-Cont').appendChild(textnode6); 

                addMultiJobListeners();
            }
            okayToRender = false;
        }  
        }
        else if (signOffType == 'Wire Start' 
                || signOffType == 'Wire Finish' 
                || signOffType == 'Die Bearing Start'
                || signOffType == 'Die Bearing Finish'
                || signOffType == 'Die Backmill Start'
                || signOffType == 'Die Backmill Finish'
                || signOffType == 'Hard Die Front Start'
                || signOffType == 'Hard Die Front Finish'
                || signOffType == 'Hard Die Back Start'
                || signOffType == 'Hard Die Back Finish'){
            //Draw columns with just "die" Showing - use for hard and soft machining processes. 
            console.log("Die Only");
            if (signOffType == 'Die Bearing Start'
            || signOffType == 'Die Bearing Finish' 
            || signOffType == 'Die Backmill Start' 
            || signOffType == 'Die Backmill Finish'){

                workDict = dieSoftDict;
                tableName = 'die_mac_soft';
                console.log("Die soft");

                if (signOffType == 'Die Bearing Start'){
                    columnName = 'die_bearing_start';
                    workIndex = 0;
                    // lastProcess = 999;
                    //lastProcess =dieDict[aKey][7];
                    console.log("Die Bearing Start");
                }
                else if (signOffType == 'Die Bearing Finish'){
                    columnName = 'die_bearing_finish';
                    workIndex = 1;
                    //lastProcess = 0;
                    //lastProcess = workDict[aKey][0];
                    console.log("Die Bearing Finish");
                }
                else if (signOffType == 'Die Backmill Start'){
                    columnName = 'die_backmill_start';
                    workIndex = 2;
                    //lastProcess = 999;
                    //lastProcess =dieDict[aKey][7];
                    console.log("Die Backmill Start");
                }
                else if (signOffType == 'Die Backmill Finish'){
                    columnName = 'die_backmill_finish';
                    workIndex = 3;
                    //lastProcess = 2;
                    //lastProcess = workDict[aKey][2];
                    console.log("Die Backmill Finish");
                }
            }
            else if (signOffType == 'Hard Die Front Start' 
                || signOffType == 'Hard Die Front Finish' 
                || signOffType == 'Hard Die Back Start' 
                || signOffType == 'Hard Die Back Finish'){

                workDict = dieHardDict;
                tableName = 'die_mac_hard';
                console.log("Die hard");
                
                if (signOffType == 'Hard Die Front Start'){
                    columnName = 'die_front_start';
                    workIndex = 0;
                    //lastProcess = 999;
                    //lastProcess =dieDict[aKey][11];
                }
                else if (signOffType == 'Hard Die Front Finish'){
                    columnName = 'die_front_finish';
                    workIndex = 1;
                    //lastProcess = 0;
                    //lastProcess = workDict[aKey][0];
                }
                else if (signOffType == 'Hard Die Back Start'){
                    columnName = 'die_back_start';
                    workIndex = 2;
                    //lastProcess = 999;
                    //lastProcess =dieDict[aKey][11];
                }
                else if (signOffType == 'Hard Die Back Finish'){
                    columnName = 'die_back_finish';
                    workIndex = 3;
                    //lastProcess = 2;
                    //lastProcess = workDict[aKey][2];
                }
            }
            //ToDo - do the same for the die wire processes. 

            let new_div = document.createElement('div');
            let newClass ='jobListContainer';
            new_div.className = newClass;
            new_div.id = 'jobListContainer';
            document.getElementById('content-container').appendChild(new_div);

            let amount = getNumberOfJobs();
            let keyArray = [];
            let aKey = '';
            for (let key in infoDict){
                keyArray.push(key);
            }
            let a = 0;
            for(let i = 0; i < amount; i++){
                aKey = keyArray[i];

                if (signOffType == 'Die Bearing Start'){
                    lastProcess =dieDict[aKey][7];
                }
                else if (signOffType == 'Die Bearing Finish'){
                    lastProcess = workDict[aKey][0];
                }
                else if (signOffType == 'Die Backmill Start'){
                    lastProcess =dieDict[aKey][7];
                }
                else if (signOffType == 'Die Backmill Finish'){
                    lastProcess = workDict[aKey][2];
                }
                if (signOffType == 'Hard Die Front Start'){
                    lastProcess =dieDict[aKey][11];
                }
                else if (signOffType == 'Hard Die Front Finish'){
                    lastProcess = workDict[aKey][0];
                }
                else if (signOffType == 'Hard Die Back Start'){
                    lastProcess =dieDict[aKey][11];
                }
                else if (signOffType == 'Hard Die Back Finish'){
                    lastProcess = workDict[aKey][2];
                }

                if (workDict[aKey][lastProcess] != '-'){
                    okayToRender = true;
                }

                if (infoDict[aKey][4] == 'Ongoing' && infoDict[aKey][7] == 1 && okayToRender == true){
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

                    console.log("workIndex");
                    console.log(workIndex);
                    console.log(workDict);

                    // Create 'Column' divs for each element in an entry.  
                    let WOCont = document.createElement('div'); // Work Order
                    WOCont.className = 'jobInfoCont';
                    WOCont.id = aKey + 'WOCont';
                    document.getElementById(aKey).appendChild(WOCont);
                    let textnode1 = document.createTextNode(aKey);
                    document.getElementById(aKey + 'WOCont').appendChild(textnode1);

                    let dieNoCont = document.createElement('div'); // Die no
                    dieNoCont.className = 'jobInfoCont';
                    dieNoCont.id = aKey + '-Lip-Cont';
                    document.getElementById(aKey).appendChild(dieNoCont);
                    //let textnode2 = document.createTextNode(infoDict[aKey][0]);
                    let textnode2 = document.createTextNode('***');
                    document.getElementById(aKey + '-Lip-Cont').appendChild(textnode2);

                    let jobTypeCont = document.createElement('div'); // Type
                    jobTypeCont.className = 'jobInfoCont';
                    jobTypeCont.id = aKey + '-Mand-Cont';
                    document.getElementById(aKey).appendChild(jobTypeCont);
                    //let textnode3 = document.createTextNode(infoDict[aKey][1]);
                    let textnode3 = document.createTextNode('***');
                    document.getElementById(aKey + '-Mand-Cont').appendChild(textnode3); 

                    let jobDiaCont = document.createElement('div'); // Diameter
                    jobDiaCont.className = 'jobInfoCont';
                    jobDiaCont.id = aKey + '-Die-Cont';
                    document.getElementById(aKey).appendChild(jobDiaCont);
                    //let textnode4 = document.createTextNode(infoDict[aKey][2]);
                    let textnode4 = document.createTextNode(workDict[aKey][workIndex]);
                    document.getElementById(aKey + '-Die-Cont').appendChild(textnode4); 

                    let jobCustCont = document.createElement('div'); // Customer
                    jobCustCont.className = 'jobInfoCont';
                    jobCustCont.id = aKey + '-Backer-Cont';
                    document.getElementById(aKey).appendChild(jobCustCont);
                    //let textnode5 = document.createTextNode(infoDict[aKey][3]);
                    let textnode5 = document.createTextNode('***');
                    document.getElementById(aKey + '-Backer-Cont').appendChild(textnode5); 

                    let jobBackCont = document.createElement('div'); // Customer
                    jobBackCont.className = 'jobInfoCont';
                    jobBackCont.id = aKey + '-Bol-Cont';
                    document.getElementById(aKey).appendChild(jobBackCont);
                    //let textnode6 = document.createTextNode(infoDict[aKey][3]);
                    let textnode6 = document.createTextNode('***');
                    document.getElementById(aKey + '-Bol-Cont').appendChild(textnode6); 

                    addMultiJobListeners();
                }
                okayToRender = false;
            }  
        }
        else if (signOffType == 'Backer Front Start' 
                || signOffType == 'Backer Back Start' 
                || signOffType == 'Backer Front Finish' 
                || signOffType == 'Backer Back Finish'){
            //Draw columns with just "backer" Showing - use for hard and soft machining processes.
            console.log("Backer Only");
            if (signOffType == 'Backer Front Start'
            || signOffType == 'Backer Front Finish' 
            || signOffType == 'Backer Back Start' 
            || signOffType == 'Backer Back Finish'){

                workDict = backerSoftDict;
                tableName = 'backer_mac_soft';
                console.log("Backer soft");

                if (signOffType == 'Backer Front Start'){
                    columnName = 'backer_front_start';
                    workIndex = 0;
                    // lastProcess = 999;
                    //lastProcess =backerDict[aKey][7];
                    console.log("Backer Front Start");
                }
                else if (signOffType == 'Backer Front Finish'){
                    columnName = 'backer_front_finish';
                    workIndex = 1;
                    //lastProcess = 0;
                    //lastProcess = workDict[aKey][0];
                    console.log("Backer Front Finish");
                }
                else if (signOffType == 'Backer Back Start'){
                    columnName = 'backer_back_start';
                    workIndex = 2;
                    //lastProcess = 999;
                    //lastProcess =backerDict[aKey][7];
                    console.log("Backer Back Start");
                }
                else if (signOffType == 'Backer Back Finish'){
                    columnName = 'backer_back_finish';
                    workIndex = 3;
                    //lastProcess = 2;
                    //lastProcess = workDict[aKey][2];
                    console.log("Backer Back Finish");
                }
            }

            let new_div = document.createElement('div');
            let newClass ='jobListContainer';
            new_div.className = newClass;
            new_div.id = 'jobListContainer';
            document.getElementById('content-container').appendChild(new_div);

            let amount = getNumberOfJobs();
            let keyArray = [];
            let aKey = '';
            for (let key in infoDict){
                keyArray.push(key);
            }
            let a = 0;
            for(let i = 0; i < amount; i++){
                aKey = keyArray[i];

                if (signOffType == 'Backer Front Start'){
                    lastProcess =backerDict[aKey][7];
                }
                else if (signOffType == 'Backer Front Finish'){
                    lastProcess = workDict[aKey][0];
                }
                else if (signOffType == 'Backer Back Start'){
                    lastProcess =backerDict[aKey][7];
                }
                else if (signOffType == 'Backer Back Finish'){
                    lastProcess = workDict[aKey][2];
                }

                if (workDict[aKey][lastProcess] != '-'){
                    okayToRender = true;
                }

                if (infoDict[aKey][4] == 'Ongoing' && infoDict[aKey][8] == 1 && okayToRender == true){
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

                    console.log("workIndex");
                    console.log(workIndex);
                    console.log(workDict);

                    // Create 'Column' divs for each element in an entry.  
                    let WOCont = document.createElement('div'); // Work Order
                    WOCont.className = 'jobInfoCont';
                    WOCont.id = aKey + 'WOCont';
                    document.getElementById(aKey).appendChild(WOCont);
                    let textnode1 = document.createTextNode(aKey);
                    document.getElementById(aKey + 'WOCont').appendChild(textnode1);

                    let dieNoCont = document.createElement('div'); // Die no
                    dieNoCont.className = 'jobInfoCont';
                    dieNoCont.id = aKey + '-Lip-Cont';
                    document.getElementById(aKey).appendChild(dieNoCont);
                    //let textnode2 = document.createTextNode(infoDict[aKey][0]);
                    let textnode2 = document.createTextNode('***');
                    document.getElementById(aKey + '-Lip-Cont').appendChild(textnode2);

                    let jobTypeCont = document.createElement('div'); // Type
                    jobTypeCont.className = 'jobInfoCont';
                    jobTypeCont.id = aKey + '-Mand-Cont';
                    document.getElementById(aKey).appendChild(jobTypeCont);
                    //let textnode3 = document.createTextNode(infoDict[aKey][1]);
                    let textnode3 = document.createTextNode('***');
                    document.getElementById(aKey + '-Mand-Cont').appendChild(textnode3); 

                    let jobDiaCont = document.createElement('div'); // Diameter
                    jobDiaCont.className = 'jobInfoCont';
                    jobDiaCont.id = aKey + '-Die-Cont';
                    document.getElementById(aKey).appendChild(jobDiaCont);
                    //let textnode4 = document.createTextNode(infoDict[aKey][2]);
                    //let textnode4 = document.createTextNode(workDict[aKey][workIndex]);
                    let textnode4 = document.createTextNode('***');
                    document.getElementById(aKey + '-Die-Cont').appendChild(textnode4); 

                    let jobCustCont = document.createElement('div'); // Customer
                    jobCustCont.className = 'jobInfoCont';
                    jobCustCont.id = aKey + '-Backer-Cont';
                    document.getElementById(aKey).appendChild(jobCustCont);
                    //let textnode5 = document.createTextNode(infoDict[aKey][3]);
                    let textnode5 = document.createTextNode(workDict[aKey][workIndex]);
                    document.getElementById(aKey + '-Backer-Cont').appendChild(textnode5); 

                    let jobBackCont = document.createElement('div'); // Customer
                    jobBackCont.className = 'jobInfoCont';
                    jobBackCont.id = aKey + '-Bol-Cont';
                    document.getElementById(aKey).appendChild(jobBackCont);
                    //let textnode6 = document.createTextNode(infoDict[aKey][3]);
                    let textnode6 = document.createTextNode('***');
                    document.getElementById(aKey + '-Bol-Cont').appendChild(textnode6); 

                    addMultiJobListeners();
                }
                okayToRender = false;
            }  
        }
        else if (signOffType == 'Bolster Front Start' 
        || signOffType == 'Bolster Back Start' 
        || signOffType == 'Bolster Front Finish' 
        || signOffType == 'Bolster Back Finish'){
            //Draw columns with just "bolster" Showing - use for hard and soft machining processes.
            console.log("Bolster Only");
            if (signOffType == 'Bolster Front Start'
            || signOffType == 'Bolster Front Finish' 
            || signOffType == 'Bolster Back Start' 
            || signOffType == 'Bolster Back Finish'){

                workDict = bolSoftDict;
                tableName = 'bol_mac_soft';
                console.log("Bolster soft");

                if (signOffType == 'Bolster Front Start'){
                    columnName = 'backer_front_start';
                    workIndex = 0;
                    // lastProcess = 999;
                    //lastProcess =bolDict[aKey][7];
                    console.log("Bolster Front Start");
                }
                else if (signOffType == 'Bolster Front Finish'){
                    columnName = 'backer_front_finish';
                    workIndex = 1;
                    //lastProcess = 0;
                    //lastProcess = workDict[aKey][0];
                    console.log("Bolster Front Finish");
                }
                else if (signOffType == 'Bolster Back Start'){
                    columnName = 'backer_back_start';
                    workIndex = 2;
                    //lastProcess = 999;
                    //lastProcess =bolDict[aKey][7];
                    console.log("Bolster Back Start");
                }
                else if (signOffType == 'Bolster Back Finish'){
                    columnName = 'backer_back_finish';
                    workIndex = 3;
                    //lastProcess = 2;
                    //lastProcess = workDict[aKey][2];
                    console.log("Bolster Back Finish");
                }
            }

            let new_div = document.createElement('div');
            let newClass ='jobListContainer';
            new_div.className = newClass;
            new_div.id = 'jobListContainer';
            document.getElementById('content-container').appendChild(new_div);

            let amount = getNumberOfJobs();
            let keyArray = [];
            let aKey = '';
            for (let key in infoDict){
                keyArray.push(key);
            }
            let a = 0;
            for(let i = 0; i < amount; i++){
                aKey = keyArray[i];

                if (signOffType == 'Bolster Front Start'){
                    lastProcess =bolDict[aKey][7];
                }
                else if (signOffType == 'Bolster Front Finish'){
                    lastProcess = workDict[aKey][0];
                }
                else if (signOffType == 'Bolster Back Start'){
                    lastProcess =bolDict[aKey][7];
                }
                else if (signOffType == 'Bolster Back Finish'){
                    lastProcess = workDict[aKey][2];
                }

                if (workDict[aKey][lastProcess] != '-'){
                    okayToRender = true;
                }

                if (infoDict[aKey][4] == 'Ongoing' && infoDict[aKey][9] == 1 && okayToRender == true){
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

                    console.log("workIndex");
                    console.log(workIndex);
                    console.log(workDict);

                    // Create 'Column' divs for each element in an entry.  
                    let WOCont = document.createElement('div'); // Work Order
                    WOCont.className = 'jobInfoCont';
                    WOCont.id = aKey + 'WOCont';
                    document.getElementById(aKey).appendChild(WOCont);
                    let textnode1 = document.createTextNode(aKey);
                    document.getElementById(aKey + 'WOCont').appendChild(textnode1);

                    let dieNoCont = document.createElement('div'); // Die no
                    dieNoCont.className = 'jobInfoCont';
                    dieNoCont.id = aKey + '-Lip-Cont';
                    document.getElementById(aKey).appendChild(dieNoCont);
                    //let textnode2 = document.createTextNode(infoDict[aKey][0]);
                    let textnode2 = document.createTextNode('***');
                    document.getElementById(aKey + '-Lip-Cont').appendChild(textnode2);

                    let jobTypeCont = document.createElement('div'); // Type
                    jobTypeCont.className = 'jobInfoCont';
                    jobTypeCont.id = aKey + '-Mand-Cont';
                    document.getElementById(aKey).appendChild(jobTypeCont);
                    //let textnode3 = document.createTextNode(infoDict[aKey][1]);
                    let textnode3 = document.createTextNode('***');
                    document.getElementById(aKey + '-Mand-Cont').appendChild(textnode3); 

                    let jobDiaCont = document.createElement('div'); // Diameter
                    jobDiaCont.className = 'jobInfoCont';
                    jobDiaCont.id = aKey + '-Die-Cont';
                    document.getElementById(aKey).appendChild(jobDiaCont);
                    //let textnode4 = document.createTextNode(infoDict[aKey][2]);
                    //let textnode4 = document.createTextNode(workDict[aKey][workIndex]);
                    let textnode4 = document.createTextNode('***');
                    document.getElementById(aKey + '-Die-Cont').appendChild(textnode4); 

                    let jobCustCont = document.createElement('div'); // Customer
                    jobCustCont.className = 'jobInfoCont';
                    jobCustCont.id = aKey + '-Backer-Cont';
                    document.getElementById(aKey).appendChild(jobCustCont);
                    //let textnode5 = document.createTextNode(infoDict[aKey][3]);
                    //let textnode5 = document.createTextNode(workDict[aKey][workIndex]);
                    let textnode5 = document.createTextNode('***');
                    document.getElementById(aKey + '-Backer-Cont').appendChild(textnode5); 

                    let jobBackCont = document.createElement('div'); // Customer
                    jobBackCont.className = 'jobInfoCont';
                    jobBackCont.id = aKey + '-Bol-Cont';
                    document.getElementById(aKey).appendChild(jobBackCont);
                    //let textnode6 = document.createTextNode(infoDict[aKey][3]);
                    let textnode6 = document.createTextNode(workDict[aKey][workIndex]);
                    document.getElementById(aKey + '-Bol-Cont').appendChild(textnode6); 

                    addMultiJobListeners();
                }
                okayToRender = false;
            }  
        }
        else{
            // Columns for all components.
            let new_div = document.createElement('div');
            let newClass ='jobListContainer';
            new_div.className = newClass;
            new_div.id = 'jobListContainer';
            document.getElementById('content-container').appendChild(new_div);

            let amount = getNumberOfJobs();
            let keyArray = [];
            let aKey = '';
            for (let key in infoDict){
                keyArray.push(key);
            }
            let a = 0;
            for(let i = 0; i < amount; i++){
                aKey = keyArray[i];
                if (infoDict[aKey][4] == 'Ongoing'){
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

                    let dieNoCont = document.createElement('div'); // Die no
                    dieNoCont.className = 'jobInfoCont';
                    dieNoCont.id = aKey + '-Lip-Cont';
                    document.getElementById(aKey).appendChild(dieNoCont);
                    //let textnode2 = document.createTextNode(infoDict[aKey][0]);
                    let textnode2 = document.createTextNode(lipDict[aKey][10]);
                    document.getElementById(aKey + '-Lip-Cont').appendChild(textnode2);

                    let jobTypeCont = document.createElement('div'); // Type
                    jobTypeCont.className = 'jobInfoCont';
                    jobTypeCont.id = aKey + '-Mand-Cont';
                    document.getElementById(aKey).appendChild(jobTypeCont);
                    //let textnode3 = document.createTextNode(infoDict[aKey][1]);
                    let textnode3 = document.createTextNode(mandDict[aKey][10]);
                    document.getElementById(aKey + '-Mand-Cont').appendChild(textnode3); 

                    let jobDiaCont = document.createElement('div'); // Diameter
                    jobDiaCont.className = 'jobInfoCont';
                    jobDiaCont.id = aKey + '-Die-Cont';
                    document.getElementById(aKey).appendChild(jobDiaCont);
                    //let textnode4 = document.createTextNode(infoDict[aKey][2]);
                    let textnode4 = document.createTextNode(dieDict[aKey][10]);
                    document.getElementById(aKey + '-Die-Cont').appendChild(textnode4); 

                    let jobCustCont = document.createElement('div'); // Customer
                    jobCustCont.className = 'jobInfoCont';
                    jobCustCont.id = aKey + '-Backer-Cont';
                    document.getElementById(aKey).appendChild(jobCustCont);
                    //let textnode5 = document.createTextNode(infoDict[aKey][3]);
                    let textnode5 = document.createTextNode(backerDict[aKey][10]);
                    document.getElementById(aKey + '-Backer-Cont').appendChild(textnode5); 

                    let jobBackCont = document.createElement('div'); // Customer
                    jobBackCont.className = 'jobInfoCont';
                    jobBackCont.id = aKey + '-Bol-Cont';
                    document.getElementById(aKey).appendChild(jobBackCont);
                    //let textnode6 = document.createTextNode(infoDict[aKey][3]);
                    let textnode6 = document.createTextNode(bolDict[aKey][10]);
                    document.getElementById(aKey + '-Bol-Cont').appendChild(textnode6); 

                    addMultiJobListeners();
                }
            }  
        }
    }
}

function addMultiJobListeners(){
    //let clickedIdLight = document.getElementsByClassName('job-light');
    //for (let i = 0; i < clickedIdLight.length; i++){
    //    clickedIdLight[i].addEventListener('click', getClickedId);
    //}
    //let clickedIdDark = document.getElementsByClassName('job-dark');
    //for (let i = 0; i < clickedIdDark.length; i++){
    //    clickedIdDark[i].addEventListener('click', getClickedId);
    //}
    let clickedIdCont = document.getElementsByClassName('jobInfoCont');
    for (let i = 0; i < clickedIdCont.length; i++){
        clickedIdCont[i].addEventListener('click', getMultiClickedId);
    }

}

function getMultiClickedId(){
    //createJobTable(this.id);
    console.log(this.id);
    addDateStampMulti(this.id)
}

function createMSColHeaders(){
    removeColHeaders();
    let list = document.createElement('ul');
    list.id = 'job-nav-bar';
    list.className = 'job-nav-bar';
    let woHeader = document.createElement('li');
    woHeader.appendChild(document.createTextNode('Work Order'));
    list.appendChild(woHeader);
    let partHeader = document.createElement('li');
    partHeader.appendChild(document.createTextNode('Part'));
    list.appendChild(partHeader);
    let dieHeader = document.createElement('li');
    dieHeader.appendChild(document.createTextNode('Lip'));
    list.appendChild(dieHeader);
    let typeHeader = document.createElement('li');
    typeHeader.appendChild(document.createTextNode('Mandrel'));
    list.appendChild(typeHeader);
    let diaHeader = document.createElement('li');
    diaHeader.appendChild(document.createTextNode('Dieplate'));
    list.appendChild(diaHeader);
    let custHeader = document.createElement('li');
    custHeader.appendChild(document.createTextNode('Backer'));
    list.appendChild(custHeader);
    let bolHeader = document.createElement('li');
    bolHeader.appendChild(document.createTextNode('Bolster'));
    list.appendChild(bolHeader);
    let contDiv = document.createElement('div');
    contDiv.class = 'nav-bar-container';
    contDiv.appendChild(list);
    document.getElementById('col-header-container').appendChild(contDiv);

    function removeElements(){
        const el = document.getElementById('menu-container');
        while(el.firstChild) el.removeChild(el.firstChild);
    }
    let multiexitButton = document.createElement('button');
    multiexitButton.appendChild(document.createTextNode('Save & Exit'));
    multiexitButton.addEventListener('click', function(){saveMultiValues()});   
    document.getElementById('menu-container').appendChild(multiexitButton);
}

function addDateStampMulti(anId){

    macSignOff(anId);

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

    if (document.getElementById(anId).innerText == '-'){
        multiArray =[];
        const el = document.getElementById(anId);
        while(el.firstChild) el.removeChild(el.firstChild);

        let initial = userDict[document.getElementById('foot-container').innerText];
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        let currentDate = new Date();
        let time = currentDate.getHours() + ":" + currentDate.getMinutes();

        today = String(dd + '.' + mm + '-' + time + '-' + initial);
        let newTextNode = document.createTextNode(today);
        document.getElementById(anId).appendChild(newTextNode);

        const subStringArray = anId.split("-");
        let clickedWO = subStringArray[0];
        let clickedComp = subStringArray[1];

        //multiArray.push(signOffType);
        //multiArray.push(clickedWO);
        //multiArray.push(clickedComp);
        //multiArray.push(today);
        //multiDict[multiID] = multiArray;
        //multiID++;

        //let multiArray =[];
        //let multiDict = {};
        //let multiID = 0;
        //let signOffType = '';
        //let machineName = '';
        //let startFin

        //let workDict = {};
        //let workIndex = 0;
        //let tableName = '';
        //let columnName = '';
        //let lastProcess = '';
        //let okayToRender = false;


        if (signOffType == 'Program start'
            || signOffType == 'Program Finish' 
            || signOffType == 'Heat Treat Start' 
            || signOffType == 'Heat Treat Finish'
            || signOffType == 'Finishing Start'
            || signOffType == 'Finishing Finish'
            || signOffType == 'Packaging'){
                if(clickedComp == 'Lip'){
                    tableName = 'lips';
                }
                else if(clickedComp == 'Mand'){
                    tableName = 'mandrels';
                }                
                else if(clickedComp == 'Die'){
                    tableName = 'dieplates';
                }
                else if(clickedComp == 'Backer'){
                    tableName = 'backers';
                }
                else if(clickedComp == 'Bol'){
                    tableName = 'bolsters';
                }

                if(signOffType == 'Program start'){
                    columnName = 'prog_start'
                }
                else if(signOffType == 'Program Finish'){
                    columnName = 'prog_finish'
                }
                else if(signOffType == 'Heat Treat Start'){
                    columnName = 'heat_treat_send'
                }
                else if(signOffType == 'Heat Treat Finish'){
                    columnName = 'heat_treat_back'
                }
                else if(signOffType == 'Finishing Start'){
                    columnName = 'finishing_start'
                }
                else if(signOffType == 'Finishing Finish'){
                    columnName = 'finishing_finish'
                }
                else if(signOffType == 'Packaging'){
                    columnName = 'packing_finish'
                }

                multiArray.push(tableName);
                multiArray.push(columnName);
                multiArray.push(today);
                multiArray.push(clickedWO);
                multiDict[multiID] = multiArray;
                multiID++;
        }else{
            multiArray.push(tableName);
            multiArray.push(columnName);
            multiArray.push(today);
            multiArray.push(clickedWO);
            multiDict[multiID] = multiArray;
            multiID++;
        }

    }else if(document.getElementById(anId).innerText != '-' ){//Add another check to this so that it also checks to see if the corresponding
        //|| document.getElementById(anId).innerText != '***'
        const el = document.getElementById(anId);        //dictionary enrty == '-'. So that you can undo a wrong tick, but can't erase stuff from the   
        while(el.firstChild) el.removeChild(el.firstChild); // database that's already there. 

        let newTextNode = document.createTextNode('-');
        document.getElementById(anId).appendChild(newTextNode);
        const subStringArray = anId.split("-");
        let clickedWO = subStringArray[0];

        //Check if this this ID exists in the dictionary - if it is, remove it. 
    }
}

function saveMultiValues(){
    console.log(multiDict);
}