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
let userid;


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
    console.log("localestorages has been created");

// login page (get a verification from the inputs and change page)

loginBtn.addEventListener("click", () => {
    loggedIn();
})


function loggedIn() {
    let username = usernameInput.value;
    let password = passwordInput.value;
    const loginSession = accounts[userid];
    for (i = 0; i < accounts.length; i++) {
    if(username === accounts[i].user && password === accounts[i].password){
        localStorage.setItem("loginSession", JSON.stringify(loginSession))
        localStorage.setItem("user", accounts[i].user);
         console.log("you are now online", username);
         loginPage.classList.add("formHidden")
        accountPage.classList.remove("formHidden")
        return
         
    }}     
    console.log("Could not find user") 
    inputErrorMsg.innerHTML = "wrong name or password"


}


        //the link that takes you to the create an account page
   
linkCreateAccount.addEventListener("click", () => {
    console.log("link to create acc is working")
    loginPage.classList.add("formHidden")
    createAccountPage.classList.remove("formHidden")
    
  
})

// // // Create an account page  ////

createAccBtn.addEventListener   ("click", () => {
    (console.log("workingzzzz"))
    createAccountPage.classList.add("formHidden")
    loginPage.classList.remove("formHidden")
    register()
})
 
function register(){
    let newAccount = {
        id: accounts.length + 1,
        user: createUsername.value,
        password: createPassword.value,
    };
   
    accounts.push(newAccount)
   localStorage.setItem("accounts", JSON.stringify(accounts));

}


 // knappen som tar dig tillbaka till loginpage ifall du redan har ett konto.
linkLogin.addEventListener("click", () => {
    console.log("workingforreals")
    createAccountPage.classList.add("formHidden")
    loginPage.classList.remove("formHidden")
    
    
})
  



//  // logout
logoutBtn.addEventListener("click", () => {
    console.log("you are now logged out")
    accountPage.classList.add("formHidden")
        loginPage.classList.remove("formHidden")
        

    
})

// Log out function 
log_out.addEventListener('click', () => {
    logoutSession();
});

logoutSession = () => {
    localStorage.removeItem("loginSession"); 
    
}


