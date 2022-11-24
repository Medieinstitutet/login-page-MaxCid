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
const createAccountPage = document.getElementById("createAccountPage")



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
    console.log("localstorage is working", accounts);


// login page (get a verification from the inputs and change page)


 loginBtn.addEventListener("click", () => {
        let username = usernameInput.value;
        let password = passwordInput.value;
        for (i = 0; i < accounts.length; i++) {
        if(username === accounts[i].user && password === accounts[i].password){
            localStorage.setItem("user", accounts[i].user);
            loginPage.classList.add()
             console.log("you are now online", username);
        }}     
        console.log("hejnej tack") 
        document.getElementById("inputErrorMsg").innerHTML = `its all wrong mr`

 })




// // // Create an account page 

linkCreateAccount.addEventListener("click", () => {
    console.log("working")
    loginPage.classList.add("formHidden")
    createAccountPage.classList.remove("formHidden")
    
  
})

linkLogin.addEventListener("click", () => {
    console.log("workingforreals")
    createAccountPage.classList.add("formHidden")
    loginPage.classList.remove("formHidden")
    
  
})

// //  createAccBtn.addEventListener("click", () => {

// //  })



//  // logout

logoutBtn.addEventListener("click", () => {
    console.log("working")
    accountPage.style.display = "none";
    loginPage.style.display = "block";

    
})

//  })