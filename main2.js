// input variables for login page
const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");
const loginBtn = document.getElementById("loginBtn");

// input variables for creating account
const createUsername = document.getElementById("createUsername");
const createPassword = document.getElementById("createPassword");
const confirmPassword = document.getElementById("confirmPassword");
const createAccBtn = document.getElementById("createAccBtn");
const linkLogin = document.getElementById("linkLogin");

//inputs for account page
const logoutBtn = document.getElementById("logoutBtn");

// variables for DOM changes
const loginPage = document.getElementById("loginPage");
const linkCreateAccount = document.getElementById("linkCreateAccount");
const accountPage = document.getElementById("accountPage");
const createAccountPage = document.getElementById("createAccountPage");

// special variables
let userid;
let accountName;
let loginSessions = JSON.parse(localStorage.getItem("accounts"));

///////////////////////////////////////////
////   functions for the whole page   ////
/////////////////////////////////////////

/// storage space for accounts

// let accounts = [];
// if (!localStorage.getItem("accounts")) {
//   let accounts = [
//     { id: 1, user: "janne", password: "test" },
//     { id: 2, user: "PirateKing", password: "1.piece" },
//     { id: 3, user: "dayman", password: "nightman" },
//     { id: 4, user: "fighterofthe", password: "nightman96" },
//   ];
//   localStorage.setItem("accounts", JSON.stringify(accounts));
//   console.log("localestorages has been created");
// }

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
});

if (localStorage.getItem("loginSession")) {
  console.log("getting shit works");
  let username = JSON.parse(localStorage.getItem("loginSession"));
  let accounts = JSON.parse(localStorage.getItem("accounts"));
  accounts.push(loginsessions);
  localStorage.setItem("accounts", JSON.stringify(accounts));
  loginPage.classList.add("formHidden");
  accountPage.classList.remove("formHidden");
  console.log("USERNAME:", username);
  userOnline.innerHTML = `Hello ${username.user}!`;
}

function loggedIn() {
  let accounts = JSON.parse(localStorage.getItem("accounts"));
  let username = usernameInput.value;
  let password = passwordInput.value;
  let loginSession = accounts[userid];
  for (i = 0; i < accounts.length; i++) {
    if (username === accounts[i].user && password === accounts[i].password) {
      loginSessionUsers = accounts[i];
      localStorage.setItem("loginSession", JSON.stringify(loginSessionUsers));
      loginSession = JSON.parse(localStorage.getItem("loginSession"));
      console.log("logga användare", loginSessions);
      localStorage.setItem("user", accounts[i].user);
      console.log("you are now online", username);
      userOnline.innerHTML = `Hello ${username}!`;
      loginPage.classList.add("formHidden");
      accountPage.classList.remove("formHidden");

      return;
    }
  }
  console.log("Could not find user");
  inputErrorMsg.innerHTML = "wrong name or password";
}

//the link that takes you to the create an account page

linkCreateAccount.addEventListener("click", () => {
  console.log("link to create acc is working");
  loginPage.classList.add("formHidden");
  createAccountPage.classList.remove("formHidden");
});

// // // Create an account page  ////

createAccBtn.addEventListener("click", () => {
  console.log("workingzzzz");
  createAccountPage.classList.add("formHidden");
  loginPage.classList.remove("formHidden");
  register();
});

function register() {
  if (createPassword.value === confirmPassword.value) {
    let newAccount = {
      id: accounts.length + 1,
      user: createUsername.value,
      password: createPassword.value,
    };
    accounts.push(newAccount);
    localStorage.setItem("accounts", JSON.stringify(accounts));
    alert("användare har lagts till");
  } else {
    alert("användare läggs ej till");
  }
}

// knappen som tar dig tillbaka till loginpage ifall du redan har ett konto.
linkLogin.addEventListener("click", () => {
  console.log("workingforreals");
  createAccountPage.classList.add("formHidden");
  loginPage.classList.remove("formHidden");
});

//  // logout
logoutBtn.addEventListener("click", () => {
  console.log("you are now logged out");
  accountPage.classList.add("formHidden");
  loginPage.classList.remove("formHidden");
  logoutSession();
  console.log(loginSessions);
});

logoutSession = () => {
  console.log("you cease to exist");
  localStorage.removeItem("loginSession");
  localStorage.removeItem("user");
  // inputErrorMsg.classlist.add("formHidden")
};
