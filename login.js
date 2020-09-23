//forms
const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');

//variables
 const regUserName = document.getElementById('regUsrn');
 const regPassword = document.getElementById('regPswd');
 const logUserName = document.getElementById('logUsrn');
 const logPassword = document.getElementById('logPswd');

  const regSubmitBtn = document.getElementById('regSubmitBtn');
  const loginBtn = document.getElementById('loginBtn');

  user_details = [];

  //registration form function
  registerForm.addEventListener('submit', e =>{
    e.preventDefault();
    
   
     var user = {
        "username":regUserName.value,
        "password": regPassword.value
      };

      user_details.push(JSON.stringify(user));

      localStorage.setItem('information' , user_details)
      registerForm.reset();
      window.location.href = "./login.html";
     alert("Registration successful")
    
  })

  loginForm.addEventListener('submit', e =>{
    e.preventDefault();

    let data = JSON.parse(localStorage.getItem('information'));
    

    if(logPassword == data.password && logUserName == data.username){
      window.location.href = "./blogPage.html";

    }else{
      alert("User not in system, please register")
      window.location.href = "./createAccount.html";
    }
    
  })

