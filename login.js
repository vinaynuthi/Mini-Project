
loginValidation=()=>{
    var uname=document.myform.username.value;
    var pass = document.myform.password.value;
    if(uname == null || uname ==""){
        alert("name cant be blank");
        return false;
    }else if(pass.length <6){
        alert("Password must be at least 6 character long");
        return false;
    }
}

