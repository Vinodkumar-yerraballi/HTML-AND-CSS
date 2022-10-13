function Validate(){
    if(document.MyForm.Email.value==""){
        alert("Please provide your email id");
        document.MyForm.Email.focus()
        return false
    }else if(document.MyForm.Password.value==""){
        alert("Please enter your Password");
        document.MyForm.Email.focus()
        return false
    }
    else{
        return true
    }
}