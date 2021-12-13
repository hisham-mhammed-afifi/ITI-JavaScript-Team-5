function id(id) {
  return document.getElementById(id);
}

function markInvalid(fieldId) {
  id(fieldId).classList.add("invalid-border");
  id(fieldId + "-feedback").innerText = fieldId + " shouldn't be empty";
  id(fieldId + "-feedback").classList.add("invalid-feedback");
}

function markValid(fieldId) {
  id(fieldId).classList.remove("invalid-border");
  id(fieldId).classList.add("valid-border");
  id(fieldId + "-feedback").innerText = "Looks good you can go ahead";
  id(fieldId + "-feedback").classList.remove("invalid-feedback");
  id(fieldId + "-feedback").classList.add("valid-feedback");
}

function checkPasswordValidation() {
  if (checkValidation("password") && checkValidation("confirm-password")) {
    if (id("password").value !== id("confirm-password").value) {
      id("confirm-password").classList.add("invalid-border");

      id("confirm-password-feedback").classList.add("invalid-feedback");
      id("confirm-password-feedback").innerText =
        "Password and confirm Password must match";
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}

function checkValidation(fieldId) {
  if (id(fieldId) == null || id(fieldId).value === "") {
    markInvalid(fieldId);
    return false;
  } else {
    markValid(fieldId);
    return true;
  }
}

function handleNameValidation(e) {
  checkValidation("first-name");
}

function handleEmailValidation(e) {
  checkValidation("email");
}

function handlePasswordInputBlur(e) {
  checkValidation("password");
}
/////////////////////////
function handleLoginEmailValidation(e) {
  checkValidation("loginEmail");
}

function handleLoginPasswordInputBlur(e) {
  checkValidation("loginPassword");
}
//////////////////////////
function handleConfirmPasswordInputBlur(e) {
  checkPasswordValidation();
}

//////////////////////////////////////////////

id("signupForm").onsubmit = function (e) {
  e.preventDefault();
  if (
    checkValidation("first-name") &&
    checkValidation("email") &&
    checkPasswordValidation()
  ) {
    signup(id("first-name").value, id("email").value, id("password").value);
    id("first-name").value = "";
    id("email").value = "";
    id("password").value = "";
    id("confirm-password").value = "";
    closeSignupModal();
    console.log("form submitted");
  } else {
    e.preventDefault();
    console.log("There is errors");
  }
};
id("loginForm").onsubmit = function (e) {
  if (checkValidation("loginEmail") && checkValidation("loginPassword")) {
    if (login(id("loginEmail").value, id("loginPassword").value)) {
      console.log("tmaaaaam");
    } else {
      e.preventDefault();
      id("wrong").innerText = "Wrong Email or Password";
    }
    console.log("form submitted");
  } else {
    e.preventDefault();
    console.log("There is errors");
  }
};

let userEmail = sessionStorage.getItem("logedIn");

if (userEmail) {
  id("userEmail").innerHTML = `${userEmail}`;
  id("logout").innerHTML = `LOGOUT`;
  id("logout").onclick = function () {
    sessionStorage.removeItem("logedIn");
    location.reload();
  };
}

///////////////////////////  SIGN UP & LOGIN FUNCTIONS ///////////////////////////////

function signup(name, email, password) {
  const newUser = { name, email, password };

  localStorage.setItem(email, JSON.stringify(newUser));
}

function login(email, password) {
  const signedupUser = JSON.parse(localStorage.getItem(email));
  if (email === signedupUser.email && password === signedupUser.password) {
    sessionStorage.setItem("logedIn", email);
    return true;
  } else {
    return false;
  }
}
