// pattern
let namePattern = /^[a-z ]{6,20}$/i;
let userNamePattern = /^[a-zA-z]{4,6}[0-9]{2,4}$/;
let emailPattern = /^[a-zA-z0-9]*@[a-zA-z]*\.[a-zA-z]{2,4}$/;
let passwordPattern = /^[a-zA-Z0-9]{8,12}$/;

// name validation
name.addEventListener('keyup', function(){
    if(name.value ==''){
      name.nextElementSibling.innerHTML =`<small class="text-danger">Field can't be blank</small>`
      name.style.border = borderDanger
    }else if(namePattern.test(name.value) == false){
      name.nextElementSibling.innerHTML =`<small class="text-warning">Name can't be longer than 15 & shorter than 6 character & only character allow</small>`
      name.style.border = borderWarning
    }else if(namePattern.test(name.value) == true){
      name.nextElementSibling.innerHTML =`<small class="text-success">Correct</small>`
      name.style.border = borderSuccess
    }
})
  
  
  // username validation
  userName.addEventListener('keyup', function(){
    if(userName.value ==''){
      userName.nextElementSibling.innerHTML =`<small class="text-danger">Field can't be blank</small>`
      userName.style.border = borderDanger
    }else if(userNamePattern.test(userName.value) == false){
      userName.nextElementSibling.innerHTML =`<small class="text-warning">userName can't be longer than 10 & shorter than 6 character & only character allow</small>`
      userName.style.border = borderWarning
    }else if(userNamePattern.test(userName.value) == true){
      userName.nextElementSibling.innerHTML =`<small class="text-success">Correct</small>`
      userName.style.border = borderSuccess
    }
  })
  
  
  // email validation
  email.addEventListener('keyup', function(){
    if(email.value ==''){
      email.nextElementSibling.innerHTML =`<small class="text-danger">Field can't be blank</small>`
      email.style.border = borderDanger
    }else if(emailPattern.test(email.value) == false){
      email.nextElementSibling.innerHTML =`<small class="text-warning">Not yet correct</small>`
      email.style.border = borderWarning
    }else if(emailPattern.test(email.value) == true){
      email.nextElementSibling.innerHTML =`<small class="text-success">Correct</small>`
      email.style.border = borderSuccess
    }
  })
  
  
  // password validation
  password.addEventListener('keyup', function(){
    if(password.value ==''){
      password.nextElementSibling.innerHTML =`<small class="text-danger">Field can't be blank</small>`
      password.style.border = borderDanger
    }else if(passwordPattern.test(password.value) == false){
      password.nextElementSibling.innerHTML =`<small class="text-warning">password can't be longer than 12 & shorter than 8 character & only character & number allow</small>`
      password.style.border = borderWarning
    }else if(passwordPattern.test(password.value) == true){
      password.nextElementSibling.innerHTML =`<small class="text-success">Correct</small>`
      password.style.border = borderSuccess
    }
  })
  
  // confirm password validation
  confirmPassword.addEventListener('keyup', function(){
    if(confirmPassword.value ==''){
      confirmPassword.nextElementSibling.innerHTML =`<small class="text-danger">Field can't be blank</small>`
      confirmPassword.style.border = borderDanger
    }else if(confirmPassword.value != password.value){
      confirmPassword.nextElementSibling.innerHTML =`<small class="text-warning">Password does not mathed</small>`
      confirmPassword.style.border = borderWarning
    }else if(confirmPassword.value == password.value){
      confirmPassword.nextElementSibling.innerHTML =`<small class="text-success">Correct</small>`
      confirmPassword.style.border = borderSuccess
    }
  })













