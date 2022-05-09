//get element form register
var form_register = document.querySelector('.form_register');
//get element form login
var form_login = document.querySelector('.form_login');


// object click
var register = document.querySelector('.register_js');
var login = document.querySelector('.login_js');


//open form register 
function openForm_register() {
    form_register.classList.add('open');
}

register.addEventListener('click', openForm_register);

//open form login 
function openForm_login() {
    form_login.classList.add('open');
}

login.addEventListener('click', openForm_login);
//close form
function close_form_register() {
    form_register.classList.remove('open');
}

form_register.addEventListener('click', close_form_register);

function close_form_login() {
    form_login.classList.remove('open');
}

form_login.addEventListener('click', close_form_login);