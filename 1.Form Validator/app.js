const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');


//error function
function showError(input,message){
    const formControl=input.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerText=message;
}

//success function
function showSuccess(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
}

//email validation
function checkEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email).toLowerCase());
    if(re.test(email.value)){
        showSuccess(email);
    }else{
        showError(email,`Email is not valid`);
    }
}

//CHECK INPUT FIELD
function checkInput(inputArr){
    inputArr.forEach(input => {
        if(input.value.trim()===''){
            showError(input,`${getFieldName(input)} is required`);
        }
        else{
            showSuccess(input);
        }
    });
}

//Uppercasing the first letter of input and then returning it
function getFieldName(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}

//check length
function checkLength(input,min,max){
    if(input.value.length<min){
        showError(input,`${getFieldName(input)} is less than ${min} characters`);
    }else if(input.value.length>max){
        showError(input,`${getFieldName(input)} is more than ${max} characters`);
    }else{
        showSuccess(input);
    }
}

//check both passwords length
function checkPasswordMatch(input1,input2){
    if(input1.value!==input2.value){
        showError(input2,'Passwords do not match');
    }
}

//Event listeners
form.addEventListener('submit',function(e){
    e.preventDefault();

    checkInput([username,email,password,password2]);
    checkLength(username,3,15);
    checkLength(password,6,25);
    checkEmail(email);
    checkPasswordMatch(password,password2);
});

























// //Event listeners
// form.addEventListener('submit',function(e){
//     e.preventDefault();


//     if(username.value===''){
//         showError(username,'Username is required');
//     }else{
//         showSuccess(username);
//     }

//     if(email.value===''){
//         showError(email,'Email is required');
//     }else if(!isValidEmail.value){
//         showError(email,'Enter Valid email')
//     }
//     else{
//         showSuccess(email);
//     }


//     if(password.value===''){
//         showError(password,'Password is required');
//     }else{
//         showSuccess(password);
//     }

//     if(password2.value===''){
//         showError(password2,'Password is required');
//     }else{
//         showSuccess(password2);
//     }
    
// });
