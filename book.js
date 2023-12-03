
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
