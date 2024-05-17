function ValidateEmail(inputText)
{
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(inputText.value.match(mailformat)){
    alert("Email valido");
    document.form1.text1.focus();
    return true;
  }else{
    alert("Email invalido");
    document.form1.text1.focus();
    return false;
  }
}
