// rewriting the main.js file 

// all about login.html 
// starting from loginbutton

import {myMap} from './data.js';
console.log("start");
// map to store username and password 
// dynamic addition
// also for easy ittration 

const logIn = document.getElementsByClassName("login-btn");
logIn[0].addEventListener(('click'), ()=>{
    // store username and password
    const username = (document.getElementsByClassName("input")[0]).value;
    const password = (document.getElementsByClassName("input")[1]).value;

    console.log(`${username} ${password}`);

    // itterate over map 
    var flag = 1;
    myMap.forEach((value , key)=>{
        // comapare
        // console.log(key , value);

        if(username == key && password == value ){
            // popup box

            alert(`Welcome ${username} to GIG Genius`);
            alert(`${username.toUpperCase()} click OKAY to proceed`);
            
            flag = 0;
            window.location.href = 'card.html';
        }
    })

    if(flag){
        alert(`username or password is incorrect`);
    }
})

// export {username};

// login.html
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

// create an account 
const createHome = document.getElementsByClassName("btn1")[0];
createHome.addEventListener(('click'), ()=>{
    alert('redirecting to Create page');
    window.location.href = 'login1.html';
})


// login1.html

// exporting the variable from main.js
// to other enviroment
// note it is modular.js


