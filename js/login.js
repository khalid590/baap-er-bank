document.getElementById("btn-submit").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  console.log(email)
  
  const passField = document.getElementById("user-password");
  const password = passField.value;
  console.log(password)

  if(email === 'khalid@gmail.com' && password === '1250!'){
    window.location = 'bank.html';
  }

  else{
    alert('Invalid User');
  }
  
});
