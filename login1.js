// needed to make new js file due to :-
// reusability of the same class name 
// i dont want to make changes to css file 

import {myMap} from './data.js';

console.log('start');

const createAcc = document.getElementsByClassName('login-btn')[0];
createAcc.addEventListener(('click'),()=>{

    console.log("i was clicked");
    // four variables 
    const userName = document.getElementsByClassName('input')[0].value;
    const userEmail = document.getElementsByClassName('input')[1].value;
    const userPass1 = document.getElementsByClassName('input')[2].value;
    const userPass2 = document.getElementsByClassName('input')[3].value;

    // updating placeholder
    // placeholder
    if(userName == ''){
        document.getElementsByClassName('input')[0].placeholder = `You didn't enter UserName`;
    }
    if(userEmail == ''){
        document.getElementsByClassName('input')[1].placeholder = `You didn't enter Email`;
    }
    if(userPass1 == ''){
        document.getElementsByClassName('input')[2].placeholder = `You didn't enter password`;
    }
    if(userPass2 == ''){
        document.getElementsByClassName('input')[2].placeholder = `You didn't enter Confirm Password`;
    }

    // checking for password
    if((userPass1 != '') && (userPass1 === userPass2)){
        // update the map 
        // myMap
        myMap.set(userName,userPass1);
        alert('Successfully updated the map. Check the console for details.');

        // Log the entire map
        console.log('Current myMap entries:');
        myMap.forEach((value, key) => {
        console.log(`${key}: ${value}`);
});
    }
    else{
        alert(`Password and Confirm Password did not match`);
    }

    console.log(`${userName} ${userEmail} ${userPass1} ${userPass2} `);
    // comparision
})




// back to login page
const logIn = document.getElementsByClassName('btn')[0];
logIn.addEventListener(('click'),()=>{
    alert(`moving back `);
    window.location.href = 'login.html';
})


// 
const needHelp = document.getElementsByClassName("help")[0];

needHelp.addEventListener(('click'),()=>{
    alert(`Services are currently not available`);
    // needHelp.innerHTML = "";
});

// to home page 
const homePage = document.getElementsByClassName("home")[0];
homePage.addEventListener(('click') , ()=>{
    window.location.href = 'info.html';
});