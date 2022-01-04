// Alert for new user with condition
if(securityCode != 'a20YVdTDXc'){
    loginCol.classList.add('d-none')
    alert.innerHTML =`<p class = "alert alert-warning">You haven't an account on this application.So, you need to register. Put All information on this form & to go profile page</p>`
  }else{

    loginCol.classList.remove('d-none')
}

// signup form submit function
form.onsubmit = () =>{

  // conditionFor set item & vlidation
  if(name.value == ''||userName.value ==''||email.value==''||image.value==''||password.value==''||confirmPassword.value==''){

    // field color for emty
    alert.innerHTML =`<p class="alert alert-danger">All field requierd!</p>`
    name.style.border            = borderDanger;
    userName.style.border        = borderDanger;
    email.style.border           = borderDanger;
    image.style.border           = borderDanger;
    password.style.border        = borderDanger;
    confirmPassword.style.border = borderDanger;

  }else if(namePattern.test(name.value) == true && userNamePattern.test(userName.value) == true && emailPattern.test(email.value) == true && passwordPattern.test(password.value) == true && confirmPassword.value == password.value){

    // set item on local storage
    localStorage.setItem('Name',name.value)
    localStorage.setItem('UserName',userName.value)
    localStorage.setItem('Email',email.value)
    localStorage.setItem('Image',image.value)
    localStorage.setItem('Password',password.value)
    localStorage.setItem('ConfirmPassword',confirmPassword.value)
    localStorage.setItem('a20YVdTDXc','a20YVdTDXc')
  }

  // to default value after fire event
  name.value = '';
  userName.value = '';
  email.value = '';
  image.value = '';
  password.value = '';
  confirmPassword.value = '';


}

// Alert for old user with consition
if(securityCode == 'a20YVdTDXc'){
  signUpCol.classList.add('d-none')
  logAlert.innerHTML = `<p class = "alert alert-success">You have an account on this application.So, you don't need to register. Put your userName & password to go profile page</p>`
}else{
    signUpCol.classList.remove('d-none')
}
// login form submiit event
login.addEventListener('submit',function(stopLoad){
    // for preventDefault
  stopLoad.preventDefault();

   //login condition
  if(loginUser.value != localStorage.getItem('UserName') || loginPass.value != localStorage.getItem('ConfirmPassword')){
    logAlert.innerHTML = `<p class = "alert alert-danger">Please input correct userName & password</p>`

  }else{
    // remove login and signup form
    joinForm.classList.add('d-none')
    // to show profile page
    profile.classList.remove('d-none')
    // getItem from local storage
    valueGet();
  } 
})

// function for setItem
function valueGet(){
    profileUserName.innerText   = `${localStorage.getItem('UserName')}`;
    profileUserTitle.innerText  = `${localStorage.getItem('Title')?? 'not seted yet'}`;
    profileImage.innerHTML      = `<img class="card-img-top rounded-circle img-fluid w-75 mt-4" src="${localStorage.getItem('Image')}" alt="Card image cap">`
    profileName.innerText       = `Name : ${localStorage.getItem('Name')} `
    profileAge.innerText        = `Age : ${localStorage.getItem('Age')?? 'not seted yet'} `
    profileEmail.innerText      = `Email  : ${localStorage.getItem('Email')} `
    profilePhone.innerText      = `Phone : ${localStorage.getItem('Number')?? 'not seted yet'} `
    profileBio.innerText        = `${localStorage.getItem('Bio')?? 'not seted yet'} `
    profileDivision.innerText   = `Division : ${localStorage.getItem('Division')?? 'not seted yet'} `
    profileDistric.innerText    = `Distric : ${localStorage.getItem('Distric')?? 'not seted yet'} `
    profileThana.innerText      = `Thana : ${localStorage.getItem('Thana')?? 'not seted yet'} `;
    infoUser.innerText          = `${localStorage.getItem('UserName')}`
    infoPass.innerText          = `${localStorage.getItem('ConfirmPassword')}`
    lastVisit.innerText          = `${date.getHours()} : ${date.getMinutes()}`
    address.innerText           = `From ${localStorage.getItem('Thana')}, ${localStorage.getItem('Distric')}, ${localStorage.getItem('Division')}, Bangladesh`
}

// function Invoke
valueGet();


// edit button event
edit.addEventListener('click',function(){
    profile.classList.add('d-none')
    editProfile.classList.remove('d-none')
});

// Update button event
update.addEventListener('click',function(){
  
  UpdateAlert.innerHTML = `<p class="alert alert-success">Successfully updated</p>`

    // update Item
    if(editName.value.length > 8 ){
        localStorage.setItem('Name',editName.value)
    }
    if(emailPattern.test(editEmail.value) == true ){
        localStorage.setItem('Email',editEmail.value)
    }
    if(userNamePattern.test(editUsername.value) == true ){
        localStorage.setItem('UserName',editUsername.value)
    }
    if(passwordPattern.test(editPassword.value) == true ){
        localStorage.setItem('ConfirmPassword',editPassword.value)
    }
    if( bio.value.length > 15 && bio.value.length < 100 ){
      localStorage.setItem('Bio',bio.value) 
    }else{

    }

    
    ediTitile.value.length > 6 ? localStorage.setItem('Title',ediTitile.value) :
    editImage.value.length > 10 ? localStorage.setItem('Image',editImage.value):
    age.value.length == 2 ?  localStorage.setItem('Age',age.value) : 
       
    editDivision.value.length > 4 ? localStorage.setItem('Division',editDivision.value): 
    editDistric.value.length > 4 ? localStorage.setItem('Distric',editDistric.value): 
    number.value.length > 10 ? localStorage.setItem('Number',number.value): 
    editThana.value.length > 4 ? localStorage.setItem('Thana',editThana.value):






    //   for reset input value after edit
    editName.value = '';
    editName.value = '';
    ediTitile.value = '';
    editUsername.value = '';
    editImage.value = '';
    editEmail.value = '';
    editPassword.value = '';
    age.value = '';
    number.value = '';
    bio.value = '';
    editThana.value = '';
    editDistric.value =  editDistric[0].value;
    editDivision.value =  editDivision[0].value;

});



  
// back to profile event
back.addEventListener('click', function backToProfile(){
    // for show profile page
   profile.classList.remove('d-none')
    // for hide profile edit page
    editProfile.classList.add('d-none')
    // function for get item
    valueGet();

})

// logout event
logout.addEventListener('click',function(){
        // remove login and signup form
        joinForm.classList.remove('d-none')
        // to show profile page
        profile.classList.add('d-none')
})

// delete account event
deleteAccount.addEventListener('click',function(){

    accountDeletePermission.classList.remove('d-none')

})
// if agree to delete accoount then fire this event
accountDeletePermission.firstElementChild.addEventListener('click',function(){


    localStorage.removeItem('UserName')
    localStorage.removeItem('Title')
    localStorage.removeItem('Image')
    localStorage.removeItem('Name')
    localStorage.removeItem('Age')
    localStorage.removeItem('Email')
    localStorage.removeItem('Number')
    localStorage.removeItem('Bio')
    localStorage.removeItem('Division')
    localStorage.removeItem('Distric')
    localStorage.removeItem('Thana')
    localStorage.removeItem('a20YVdTDXc')

    // remove login and signup form
    joinForm.classList.remove('d-none')
    // to show profile page
    profile.classList.add('d-none')
})

// if disagree to delete accoount then fire this event
accountDeletePermission.lastElementChild.addEventListener('click',function(){

     // for show profile page
   profile.classList.remove('d-none')
   // for hide profile edit page
   editProfile.classList.add('d-none')
   // function for get item
})





