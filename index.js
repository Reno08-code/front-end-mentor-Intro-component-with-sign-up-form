
const form=document.getElementById("myForm");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorImg=document.getElementsByClassName("errorImg");
const errotText = document.getElementsByClassName("errorText");
const fnameError = document.querySelector('#fnameError');
const lnameError = document.querySelector('#lnameError');
const emailError = document.querySelector('#emailError');
const passwordError = document.querySelector('#passwordError');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (firstName.value === '') {
       errotText[0].style.visibility = "visible";
        firstName.style.border = '1px solid red';
        errorImg[0].style.visibility = 'visible';
      } else {
        
        firstName.style.border = '1px solid #ccc';
        errorImg[0].style.visibility = 'hidden';
        errotText[0].style.visibility = "hidden";
      }
      if(lastName.value ===''){
        errotText[1].style.visibility = "visible";
        lastName.style.border = '1px solid red';
        errorImg[1].style.visibility = 'visible';
      } else {
        
        lastName.style.border = '1px solid #ccc';
        errorImg[1].style.visibility = 'hidden';
        errotText[1].style.visibility = "hidden";
      }
      if(email.value === ''){
        errotText[2].style.visibility = "visible";
        email.style.border = '1px solid red';
        errorImg[2].style.visibility = 'visible';
       
      }else{
        email.style.border = '1px solid #ccc';
        errorImg[2].style.visibility = 'hidden';
        errotText[2].style.visibility = "hidden";
      }
      if (password.value ===''){
        password.style.border = '1px solid red';
        errotText[3].style.visibility = "visible";
        errorImg[3].style.visibility = 'visible';
      }else{
        password.style.border = '1px solid #ccc';
        errorImg[3].style.visibility = 'hidden';
        errotText[3].style.visibility = "hidden";
      }
 })