let email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate() {
    let mail = document.getElementById('email').value;
    let pass = document.getElementById('password').value;
    let confirm=document.getElementById('confirm_password').value;

    if (!email.test(mail)) {
        alert('Not a valid email');
    } else {
        if (pass.length < 8) {
            alert('Password must be at least 8 characters long');
        } else if (!/\d/.test(pass)) { 
            alert('Password must contain at least one number');
        } else if (!/[a-zA-Z]/.test(pass)) { 
            alert('Password must contain at least one letter');
        }
        else if(confirm!==pass){
         alert ('please reconfirm password');
        }
    }
}

