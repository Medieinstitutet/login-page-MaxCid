// input variables for login page
const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");
const loginBtn = document.getElementById("loginBtn");

// input variables for creating account
const createUsername = document.getElementById("createUsername");
const createPassword = document.getElementById("createPassword");
const confirmPassword = document.getElementById("confirmPassword");
const createAccBtn = document.getElementById("createAccBtn")
const linkLogin = document.getElementById("linkLogin");

//inputs for account page
const logoutBtn = document.getElementById("logoutBtn")

// variables for DOM changes
const loginPage = document.getElementById("loginPage");
const linkCreateAccount = document.getElementById ("linkCreateAccount");
const accountPage = document.getElementById("accountPage");



// special variables

///////////////////////////////////////////
////   functions for the whole page   ////
/////////////////////////////////////////



/// storage space for accounts

let accounts = [
    {id:1, user:'janne', password:"test",},
    {id:2, user:'PirateKing', password: "1.piece",},
    {id:3, user:'dayman', password:"nightman",},
    {id:4, user:'fighterofthe', password:'nightman96',},
    ];

    localStorage.setItem("accounts", JSON.stringify(accounts));
    console.log("localstorage is working", accounts)


// login page (get a verification from the inputs and change page)


 loginBtn.addEventListener("click", () => {
        let username = usernameInput.value;
        let password = passwordInput.value;
        console.log(username, password);
        localStorage.setItem("username", username);
        printUsername()
        

 })


function printUsername () {
    accountPage.innerHtml = localStorage.getItem("username");
    accountName.innertext = "You are:" + accountName;
}

function printUnknown () {

}



// // // Create an account page 

// //  createAccBtn.addEventListener("click", () => {

// //  })



//  // login out

//  logoutBtn.addEventListener("click", () => {

//  })

