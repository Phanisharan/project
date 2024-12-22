function displayLoginContainer(){
    var loginContainer = document.getElementById('login_container');
    loginContainer.style.display = "block";
    var clickHere = document.getElementById('button_container');
    clickHere.style.display = 'none';
}

document.getElementById('click_button').addEventListener('click', displayLoginContainer);

function toDisplayPassword(){
    var password = document.getElementById('password')
    password.type = 'text';
    document.getElementById('eye_icon').innerHTML = `<i class="fa-solid fa-eye"></i>`;
}

function toHidePassword(){
    var password = document.getElementById('password')
    password.type = 'password';
    document.getElementById('eye_icon').innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
}


document.getElementById('eye_icon').addEventListener('mousedown', toDisplayPassword);
document.getElementById('eye_icon').addEventListener('mouseup', toHidePassword);


function inputsValidation() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorUsername = document.getElementById('error_message_one');
    var errorPassword = document.getElementById('error_message_two');
    var loginButton = document.getElementById('login_button');

    errorUsername.innerText = '';
    errorPassword.innerText = '';

    let isValid = true;

    if (!username) {
        errorUsername.innerText = 'Required username';
        isValid = false;
    }
    if (!password) {
        errorPassword.innerText = 'Required password';
        isValid = false;
    }

    if (isValid) {
        loginButton.innerHTML = `<a href="https://www.ferrari.com/en-IN" style="color: white; text-decoration: none;">Submit</a>`;
    } else {
        loginButton.innerHTML = 'Submit';
    }
}

document.getElementById('login_button').addEventListener('click', (event) => {
    // event.preventDefault();
    inputsValidation();
});
