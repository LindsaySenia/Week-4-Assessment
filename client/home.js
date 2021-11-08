const userInfo = document.querySelector('#user-info');
const loginForm = document.querySelector('#login-form');
const registerForm = document.querySelector('#register-form');

const baseURL = `http://localhost:4000/api`

const login = body => axios.post(`${baseURL}/login`, body)
    .then(res => {
        createWelcomeBack(res.data)
    }).catch(err => {
        console.log(err)
        alert('Try again n00b.')
    });

const register = body => axios.post(`${baseURL}/register`, body)
    .then(res => {
        createUserWelcome(res.data)
    }).catch(err => {
        console.log(err)
        alert('Oops! Back to square one.')
    })

function loginSubmit(event) {
    event.preventDefault()

    let username = document.querySelector('#login-username');
    let password = document.querySelector('#login-password');
    let bodyObj = {
        username: username.value,
        password: password.value
    }

    login(bodyObj)
    username.value = ''
    password.value = ''
}

function registerSubmit(event) {
    event.preventDefault();

    let username = document.querySelector
    ('#register-username');
    let email = document.querySelector('#register-email');
    let firstName = document.querySelector('#register-firstName');
    let lastName = document.querySelector('#register-lastName');
    let password = document.querySelector('#register-password');
    let passwordConfirm = document.querySelector('#confirm-password');

    if (password.value !== passwordConfirm.value) {
        alert("Oops! Your passwords don't match. Try Again.");
        return
    };

    let bodyObj = {
        username: username.value,
        email: email.value,
        firstName: firstName.value,
        lastName: lastName.value,
        password: password.value
    };

    register(bodyObj)

    username.value = ''
    email.value = ''
    firstName.value = ''
    lastName.value = ''
    password.value = ''
    passwordConfirm.value = ''
}

function createUserWelcome(data) {
    userInfo.innerHTML = ''
    const userWelcome = document.createElement('div')
    userWelcome.classList.add('user-welcome')
    userWelcome.innerHTML = `<p class='first-name'>Welcome ${data.firstName}!</p> 
    <p class='username'>Your username is ${data.username}.</p>
    <p class='email'>We will send you a confirmation email at ${data.email}.</p>`
  
    userInfo.appendChild(userWelcome)
}

function createWelcomeBack(data) {
    userInfo.innerHTML = ''
    const welcomeBack = document.createElement('div')
    welcomeBack.classList.add('welcome-back')

    welcomeBack.innerHTML = `<p class='username'>Welcome back ${data.username}!<br>Please proceed to the next page you want to use.</p>`

    userInfo.appendChild(welcomeBack)
};

loginForm.addEventListener('submit', loginSubmit);
registerForm.addEventListener('submit', registerSubmit)