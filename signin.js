const form=document.getElementById('myForm');
const username=document.getElementById('uname');
const password=document.getElementById('password');
form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();
    checkInputs();
    localStorage.setItem("Username",username.value);
    sessionStorage.setItem("Username",username.value);
    localStorage.setItem("Password",password.value);
    sessionStorage.setItem("Password",password.value);
});
function checkInputs(){
    const nameValue=username.value.trim();
    const passwordValue=password.value.trim();
    if(nameValue===''){
        setErrorFor(username,'Please enter your username');
    }else{
        setSuccessFor(username);
    }

    if(passwordValue===''){
        setErrorFor(password,'Please enter your password');
    }else{
        setSuccessFor(password);
    }
}
function setErrorFor(input,message){
    const formControl=input.parentElement;
    const small=formControl.querySelector('small');
    formControl.className='form-control error';
    small.innerText=message;
}
function setSuccessFor(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
}