//event listeners
document.getElementById('password').addEventListener('keyup', checkPasswordsMatch);
document.getElementById('password-confirm').addEventListener('keyup', checkPasswordsMatch);



function checkPasswordsMatch(e) {
  console.log(e);
  const password = document.getElementById('password')
  const passwordConfirm = document.getElementById('password-confirm')
  if(password.value ==='') {
    return;
  } else {
    if(password.value === passwordConfirm.value) {
      password.classList.remove('error');
      passwordConfirm.classList.remove('error');
      document.querySelector('.message').style.display = 'none';
      } else {
      console.log('No Match');
    }
  }
}
