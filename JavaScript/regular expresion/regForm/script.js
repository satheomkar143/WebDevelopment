// --------login page---------

const loginButton = document.getElementById("loginBtn");

// let password = userPass;
// let EmailAddress = userId;
// console.log(countEmail);

// ---------------onblur and onfocus for email------------

function onFocusEmail() {
  const emailErr = document.getElementById("email-error");
  const email = loginForm.EmailId.value;
  const countEmail = email.length;

  if (countEmail === 0) {
    emailErr.innerHTML = "Email field is required";
    emailErr.style.color = "red";
    loginForm.EmailId.focus();
  }
}
function onBlurEmail() {
  const emailErr = document.getElementById("email-error");
  const email = loginForm.EmailId.value;

  if (email.length > 0) {
    if (userId === email) {
      emailErr.innerHTML = "correct email";
      return true;
    } else {
      // alert("Email field is required");
      // emailErr.innerHTML="Email field is required";
      loginForm.EmailId.focus();
      loginForm.EmailId.value = "";
      emailErr.innerHTML = "sorry. This email not registered. Please sign up.";
      // return false;
    }
  } else {
    loginForm.EmailId.focus();
  }
}

// --------onblur and onfocus for password-----------

function onFocusPassword() {
  // console.log("focus password");
  const passErr = document.getElementById("password-error");
  const pass = loginForm.password.value;

  if (pass.length === 0) {
    passErr.innerHTML = "Password field is required";
    loginForm.password.focus();
  }
}

function onBlurPassword() {
  // console.log("blur password");
  const passErr = document.getElementById("password-error");
  const pass = loginForm.password.value;

  if (pass.length > 0) {
    if (pass === userPass) {
      passErr.innerHTML = "correct password";
      return true;
    } else {
      loginForm.password.focus();
      passErr.innerHTML = "password incorrect";
      loginForm.password.value = "";
      // return false;
    }
  } else {
    loginForm.password.focus();
  }
}

// -------check user Credential and login to website-------

function submitForm() {
  // alert("hello")
  // const email = loginForm.EmailId.value;
  // console.log(email)
  // const pass = loginForm.password.value;
  // console.log(password)

  // const emailErr = document.getElementById("email-error");
  // const passErr = document.getElementById("password-error");

  if (onBlurEmail()) {
    console.log("email");
    if (onBlurPassword()) {
      console.log("password");
      return true;
    } else {
      console.log("not password");
      loginForm.password.focus();
      return false;
    }
  } else {
    console.log("not email");
    loginForm.EmailId.focus();
    return false;
  }
}
