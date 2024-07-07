let textBox = document.getElementById("text-box");
let mailBox = document.getElementById("mail-box");
let password = document.getElementById("password");
let subInput = document.getElementById("sub-input");
let confirmPassword = document.getElementById("con-password")
let nameText = document.getElementById("name-text")
let mailText = document.getElementById("mailing")
let passText = document.getElementById("paxword")
let confirmText = document.getElementById("confirm-password")


subInput.addEventListener("click", submitBox);

function submitBox() {
    let nameBox = textBox.value;
    let mailField = mailBox.value;
    let passwordBox = password.value;
    if(nameBox.length < 4) {
        nameText.textContent = `Username must be at least 3 characters`; 
        textBox.style.border = "1px solid #e74c3c";
        setTimeout(function() {
            nameText.textContent = "";
        }, 3000)
    }
    else {
        textBox.style.border = "2px solid #2ecc71";
    }

    
    if (!mailBox.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
      mailText.textContent = `Wrong Input!`;
      mailBox.style.border = "1px solid red";
      setTimeout(function () {
        mailText.textContent = "";
      }, 3000);
    } else {
      mailBox.style.border = "2px solid #2ecc71";
    }

    if (password.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
      passText.textContent = `Please enter your password!`;
      password.style.border = "1px solid red";
      setTimeout(function () {
        passText.textContent = "";
      }, 3000);
    } else {
      password.style.border = "2px solid #2ecc71";
    }

    if (confirmPassword.value === "" || confirmPassword.value !== password.value) {
      confirmText.textContent = `Repeat the same password!`;
      confirmPassword.style.border = "1px solid red";
      setTimeout(function () {
        confirmText.textContent = "";
      }, 3000);
    } else {
      confirmPassword.style.border = "2px solid #2ecc71";
    }

}