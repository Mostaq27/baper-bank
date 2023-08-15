// step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
//   step-2: get the  email address inside the email input field
const emailField = document.getElementById('user-email');
const email = emailField.value;
//  step-3: get password
// 3.a: set id on the html element
// 3.b: get the element
// 3.c: get the value from the element
const passwordField = document.getElementById('user-password');
const password = passwordField.value;
// console.log(email,password);
// DANGER: DO NOT VERIFY email password on the client side
// Step-4: verify email and password and check whwther valid user or not
if(email === 'mostaq99muzahid@gmail.com' && password === 'secret'){
    window.location.href ='bank.html';
}
else{
    alert(' Tui password vile gesos!!! Toke ami teijjo sontan ghosona korlam.');
}
})