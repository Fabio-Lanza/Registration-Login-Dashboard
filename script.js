const form = document.querySelector('#form')
const userName = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirmPassword')


form.addEventListener('submit', (e)=> {
    e.preventDefault()
    checkInputs()
})


function checkInputs(){
    const userNameValue = userName.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;

    if(userNameValue === ''){
        setError(userName, 'You must enter an UserName')
    }else{
        setSuccess(userName)
    }

    if(emailValue === ''){
        setError(email, 'You must enter an Email ')
    }else if(!checkEmail(emailValue)){
        setError(email, 'You must enter an valid Email')
    }else{
        setSuccess(email)
    }

    if(passwordValue === ''){
        setError(password, 'You must enter an password')
    }else if(passwordValue.length < 7){
        setError(password, 'Passowrd must contains 7 digits')
    }else{
        setSuccess(password)
    }

    if(confirmPasswordValue === ''){
        setError(confirmPassword, 'You must confirm the password')
    }else if(confirmPasswordValue !== passwordValue){
        setError(confirmPassword, 'Password do not match')
    }else{
        setSuccess(confirmPassword)
    }

    //all fiels are valid? testing...
    const formControl = form.querySelectorAll('.form-control')
    const isFormValid = [...formControl].every((formControl) => {
    return formControl.className === "form-control success"
    })

    if(isFormValid){
        location.href= '../login/index.html'
    }
}


function setError(input, message){
    const formControl = input.parentElement
    const small = formControl.querySelector('small')

    // add error message
    small.innerText = message;

    //add teh error class
    formControl.className = 'form-control error'
}


function setSuccess(input, message){
    const formControl = input.parentElement

    // add success class
    formControl.className = 'form-control success'
}

function checkEmail(email) {
    
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
     email
    );
}