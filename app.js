
registrationValidation =()=>{
    var uname=document.myform2.username.value;
    var pass = document.myform2.password.value;
    var cpass = document.myform2.confirmpassword.value;

    if(uname == null || uname ==""){
        alert("name cant be blank");
        return false;
    }else if(pass.length <6){
        alert("Password must be at least 6 character long");
        return false;
    }
    else if(pass != cpass){
        alert(" Enter password correctly");
        return false;
    }
}

